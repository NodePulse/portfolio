import { Octokit } from "octokit";
import { NextResponse } from "next/server";
import { chunkText, embedTextGemini } from "./utility";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const OWNER = process.env.OWNER;

export async function GET() {
    const owner = `${OWNER}`;
    const repo = "student-attendance-dashboard";

    const excludedFileNames = [".gitignore", "package-lock.json"];
    const excludedExtensions = [".jpg", ".jpeg", ".png", ".svg", ".ico", ".webp", ".csv", ".pkl", ".woff"];

    const res = await octokit.request(
        `GET /repos/${owner}/${repo}/git/trees/HEAD?recursive=1`
    );

    const files = res.data.tree.filter((file) => {
        if (file.type !== "blob") return false;

        const lowerPath = file.path.toLowerCase();
        const ext = "." + lowerPath.split(".").pop();

        return (
            !excludedFileNames.includes(lowerPath) &&
            !excludedExtensions.includes(ext)
        );
    });

    const fileContents: { path: string; content: string }[] = [];

    for (const file of files) {
        const content = await octokit.request(
            `GET /repos/${owner}/${repo}/contents/${file.path}`,
            {
                owner,
                repo,
            }
        );

        const decoded = Buffer.from(
            content.data.content,
            "base64"
        ).toString("utf-8");

        if (file.path.endsWith(".ipynb")) {
            try {
                const notebook = JSON.parse(decoded);
                if (Array.isArray(notebook.cells)) {
                    const cellText = notebook.cells
                        .map((cell) => (Array.isArray(cell.source) ? cell.source.join("") : ""))
                        .join("\n\n");
                    fileContents.push({ path: file.path, content: cellText });
                }
            } catch (err) {
                console.error(`Failed to parse .ipynb file: ${file.path}`);
            }
        } else {
            fileContents.push({ path: file.path, content: decoded });
        }
    }

    const vectorData = []
    for (const file of fileContents) {
        const chunks = chunkText(file.content);
        for (const chunk of chunks) {
            const embedding = await embedTextGemini(chunk);
            vectorData.push({ path: file.path, chunk, embedding });
        }
    }
    console.log(vectorData.length)

    return NextResponse.json(vectorData);
}
