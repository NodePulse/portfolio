import { NextResponse } from "next/server";
import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});
const OWNER = process.env.OWNER

const queryString = 'q=' + encodeURIComponent(`user:${OWNER} topic:portfolio-projects`);

export const GET = async () => {
    try {
        const res = await octokit.request(`GET /search/repositories?${queryString}`, {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
                'Accept': 'application/vnd.github.mercy-preview+json' // Required for repo topics
            },
        });

        const repos = res.data.items;

        const formattedProjects = repos.map((repo: any, index: number) => {
            const topics = repo.topics || [];
            const category =
                topics.find((topic: string) => topic !== "portfolio-projects") || "others";

            return {
                id: index + 1,
                name: repo.name
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (l: string) => l.toUpperCase()),
                description: repo.description || "No description provided.",
                image: `https://raw.githubusercontent.com/${OWNER}/${repo.name}/main/public/ui-preview.png`,
                link: repo.homepage || repo.html_url,
                category,
                github: repo.html_url,
            };
        });

        return NextResponse.json(formattedProjects);
    } catch (error: any) {
        console.error("GitHub API error:", error.message);
        return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
    }
};
