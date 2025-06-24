import { NextResponse } from "next/server";
import { Octokit } from "octokit";
import type { components } from "@octokit/openapi-types";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const OWNER = process.env.OWNER;

export const GET = async () => {
    try {
        const res = await octokit.request(
            "GET /search/repositories",
            {
                q: `user:${OWNER} topic:portfolio-projects`,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28',
                    'Accept': 'application/vnd.github.mercy-preview+json',
                },
            }
        );

        const repos = res.data.items;

        const formattedProjects = repos.map((repo, index) => {
            const topics = Array.isArray(repo.topics) ? repo.topics : [];
            const category =
                topics.find((topic) => topic !== "portfolio-projects") || "others";

            return {
                id: index + 1,
                name: repo.name
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase()),
                description: repo.description ?? "No description provided.",
                image: `https://raw.githubusercontent.com/${OWNER}/${repo.name}/main/public/ui-preview.png`,
                link: repo.homepage || repo.html_url,
                category,
                github: repo.html_url,
            };
        });

        return NextResponse.json(formattedProjects);
    } catch (error: unknown) {
        const err = error as Error;
        console.error("GitHub API error:", err.message);
        return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
    }
};
