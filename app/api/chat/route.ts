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

async function getRepoFiles(repoName: string) {
    const contents = await octokit.request("GET /repos/{owner}/{repo}/contents", {
        owner: OWNER,
        repo: repoName,
    });

    const files = contents.data.filter(
        (file: any) =>
            file.type === "file" &&
            ["md", "js", "ts", "tsx"].some((ext) => file.name.endsWith(ext))
    );

    const fileContents = await Promise.all(
        files.map(async (file: any) => {
            const res = await fetch(file.download_url);
            const text = await res.text();
            return `### ${file.name}\n${text}`;
        })
    );

    return fileContents.join("\n\n");
}

async function askGemini(prompt: string) {
    const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
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
        console.log(repos)

        const combinedContext = contexts.join("\n---\n").slice(0, MAX_CONTEXT_CHARS);

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
        const question = "Tell me something about projects."
        if (!question) return NextResponse.json({ error: "Question required." }, { status: 400 });

        const repos = await getShowcasedRepos();

        const contexts = await Promise.all(
            repos.map((repo: any) => getRepoFiles(repo.name))
        );
        console.log(repos)

        const combinedContext = contexts.join("\n---\n").slice(0, MAX_CONTEXT_CHARS);

        const prompt = `You are an assistant who helps users understand this developer's code and projects. Use the following GitHub code and README files to answer the question accurately. ${combinedContext} Question: ${question}`;

        const answer = await askGemini(prompt);

        return NextResponse.json({ answer });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}