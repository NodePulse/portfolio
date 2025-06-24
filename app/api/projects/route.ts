import { NextResponse } from "next/server";
import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

const OWNER = process.env.OWNER;

export const GET = async () => {
    try {
        const res = await octokit.request("GET /search/repositories", {
            q: `user:${OWNER} topic:portfolio-projects`,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
                'Accept': 'application/vnd.github.mercy-preview+json',
            },
        });

        const repos = res.data.items;

        const formattedProjects = (repos as unknown[]).map((repo, index) => {
            if (
                typeof repo === "object" &&
                repo !== null &&
                "name" in repo &&
                "description" in repo &&
                "homepage" in repo &&
                "html_url" in repo
            ) {
                const name = String((repo as any).name);
                const description = (repo as any).description ?? "No description provided.";
                const homepage = (repo as any).homepage;
                const html_url = String((repo as any).html_url);
                const topics = Array.isArray((repo as any).topics)
                    ? (repo as any).topics
                    : [];

                const category =
                    topics.find((topic: string) => topic !== "portfolio-projects") || "others";

                return {
                    id: index + 1,
                    name: name
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (l: string) => l.toUpperCase()),
                    description,
                    image: `https://raw.githubusercontent.com/${OWNER}/${name}/main/public/ui-preview.png`,
                    link: homepage || html_url,
                    category,
                    github: html_url,
                };
            }
        });

        return NextResponse.json(formattedProjects);
    } catch (error: unknown) {
        const err = error as Error;
        console.error("GitHub API error:", err.message);
        return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
    }
};
