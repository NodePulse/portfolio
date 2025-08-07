import { NextResponse } from "next/server";
import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const OWNER = process.env.OWNER!;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const MAX_CONTEXT_CHARS = 10000; // Optional safety limit

async function getShowcasedRepos() {
    const res = await octokit.request("GET /users/{username}/repos", {
        username: OWNER,
        per_page: 100,
    });

    return res.data.filter((repo: any) =>
        repo.topics?.includes("portfolio-projects")
    );
}

async function getRepoFiles(repoName: string, path = ""): Promise<string> {
    const res = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
        owner: OWNER,
        repo: repoName,
        path,
    });

    const contents = Array.isArray(res.data) ? res.data : [res.data];

    let result: string[] = [];

    for (const item of contents) {
        if (item.type === "dir") {
            const subDirContent = await getRepoFiles(repoName, item.path);
            result.push(subDirContent);
        } else if (
            item.type === "file" &&
            ["md", "js", "ts", "tsx", "json", "py", "java", "txt"].some((ext) =>
                item.name.endsWith(ext)
            )
        ) {
            if (!item.download_url) continue; // ✅ Null check fix
            const fileRes = await fetch(item.download_url);
            const text = await fileRes.text();
            result.push(`### ${item.path}\n${text}`);
        }
    }

    return result.join("\n\n");
}



async function askGemini(prompt: string) {
    const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
            }),
        }
    );

    const data = await res.json();
    return (
        data?.candidates?.[0]?.content?.parts?.[0]?.text ??
        "No response from Gemini"
    );
}

export async function POST(req: Request) {
    try {
        const { question } = await req.json();
        if (!question) return NextResponse.json({ error: "Question required." }, { status: 400 });

        const repos = await getShowcasedRepos();

        const contexts = await Promise.all(
            repos.map((repo: any) => getRepoFiles(repo.name))
        );

        const combinedContext = contexts.join("\n---\n").slice(0, MAX_CONTEXT_CHARS);
        console.log(combinedContext)

        const prompt = `You are an assistant who helps users understand this developer's code and projects. Use the following GitHub code and README files to answer the question accurately. ${combinedContext} Question: ${question}`;

        const answer = await askGemini(prompt);

        return NextResponse.json({ contexts });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const question = "Write a short description for this projects as everyone can understand."
        if (!question) return NextResponse.json({ error: "Question required." }, { status: 400 });

        const repos = await getShowcasedRepos();

        const contexts = await Promise.all(
            repos.map((repo: any) => getRepoFiles(repo.name))
        );

        const combinedContext = contexts.join("\n---\n").slice(0, MAX_CONTEXT_CHARS);
        // console.log(combinedContext)

        const prompt = `You are an assistant who helps users understand this developer's code and projects. Use the following GitHub code and README files to answer the question accurately. ${combinedContext} Question: ${question}`;
        // const prompt = `Tell me something about you`;

        const answer = await askGemini(prompt);

        return NextResponse.json({ answer });
        // return NextResponse.json({ combinedContext });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}