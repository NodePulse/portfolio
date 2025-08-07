import { Octokit } from "@octokit/rest";
import { writeFileSync } from "fs";
import { NextResponse } from "next/server";
import path from "path";

const octokit = new Octokit();

const OWNER = "NodePulse";
const REPO = "google-docs-clone";

async function fetchFilesAndWrite() {
    const { data: repo } = await octokit.repos.get({
        owner: OWNER,
        repo: REPO,
    });

    const { data: tree } = await octokit.git.getTree({
        owner: OWNER,
        repo: REPO,
        tree_sha: repo.default_branch,
        recursive: "true",
    });

    const codeFiles = tree.tree.filter(
        (file) =>
            file.type === "blob" &&
            file.path &&
            file.path.match(/\.(ts|tsx|js|py|html|css|json|md)$/)
    );

    for (const file of codeFiles) {
        const blob = await octokit.git.getBlob({
            owner: OWNER,
            repo: REPO,
            file_sha: file.sha!,
        });

        const content = Buffer.from(blob.data.content, "base64").toString("utf8");
        const filePath = path.join("code_projects", file.path!);
        writeFileSync(filePath, content, { encoding: "utf8", flag: "w" });
        console.log("✅ Saved:", file.path);
    }

    console.log("✅ All code files downloaded from GitHub repo.");
}

export async function GET() {
    const { data: repo } = await octokit.repos.get({
        owner: OWNER,
        repo: REPO,
    });

    const { data: tree } = await octokit.git.getTree({
        owner: OWNER,
        repo: REPO,
        tree_sha: repo.default_branch,
        recursive: "true",
    });

    const codeFiles = tree.tree.filter(
        (file) =>
            file.type === "blob" &&
            file.path &&
            file.path.match(/\.(ts|tsx|js|py|html|css|json|md)$/)
    );

    // const result: { path: string; content: string }[] = [];

    // for (const file of codeFiles) {
    //     const blob = await octokit.git.getBlob({
    //         owner: OWNER,
    //         repo: REPO,
    //         file_sha: file.sha!,
    //     });

    //     const content = Buffer.from(blob.data.content, "base64").toString("utf8");

    //     result.push({
    //         path: file.path!,
    //         content,
    //     });
    // }

    // console.log(result.length)
    return NextResponse.json({ codeFiles })
}