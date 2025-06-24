import { Octokit } from "@octokit/core";
import { NextResponse } from "next/server";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const OWNER = process.env.OWNER

type GitHubItem = {
  type: "file" | "dir";
  path: string;
};

// ✅ Define special casing map
const specialNameMap: Record<string, string> = {
  aws: "AWS",
  css: "CSS",
  html: "HTML",
  api: "API",
  graphql: "GraphQL",
  rest: "REST",
  vscode: "VSCode",
  nextjs: "Next.js",
  jupyternotebook: "Jupyter Notebook",
  scikitlearn: "Scikit-learn",
  postgresql: "PostgreSQL",
  tailwindcss: "Tailwind CSS",
  typescript: "TypeScript",
  pytorch: "PyTorch",
  firebase: "Firebase",
  numpy: "NumPy",
  pandas: "Pandas",
  seaborn: "Seaborn",
  tensorflow: "TensorFlow",
  mysql: "MySQL",
  matplotlib: "Matplotlib",
  powerbi: "Power BI",
};

function formatName(fileName: string): string {
  const base = fileName.toLowerCase().replace(".svg", "").replace(/[^a-z0-9]/gi, "");
  if (specialNameMap[base]) return specialNameMap[base];

  // fallback: title-case and format spacing
  return fileName
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function GET() {
  try {
    const folderRes = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
      owner: `${OWNER}`,
      repo: `${OWNER}`,
      path: "images",
      ref: "main",
    });

    const folders = (folderRes.data as GitHubItem[])
      .filter((item) => item.type === "dir")
      .map((item) => item.path); // e.g., "images/development"

    const result: {
      id: number;
      name: string;
      icon: string;
      category: string;
    }[] = [];

    let globalId = 1;

    for (const folderPath of folders) {
      const res = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
        owner: `${OWNER}`,
        repo: `${OWNER}`,
        path: folderPath,
        ref: "main",
      });

      const files = (res.data as GitHubItem[])
        .filter((item) => item.type === "file")
        .map((item) => item.path);

      const category = folderPath.split("/")[1]; // "development", "data science", etc.

      for (const filePath of files) {
        const fileName = filePath.split("/").pop()?.replace(".svg", "") || "unknown";

        result.push({
          id: globalId++,
          name: formatName(fileName),
          icon: `https://raw.githubusercontent.com/${OWNER}/${OWNER}/main/${filePath}`,
          category,
        });
      }
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("GitHub fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch files" }, { status: 500 });
  }
}
