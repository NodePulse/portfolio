export function chunkText(text: string, maxLen = 500): string[] {
    const lines = text.split("\n");
    const chunks = [];
    let current = "";

    for (const line of lines) {
        if ((current + line).length > maxLen) {
            chunks.push(current.trim());
            current = "";
        }
        current += line + "\n";
    }

    if (current.trim()) chunks.push(current.trim());
    return chunks;
}

export async function embedTextGemini(text: string): Promise<number[]> {
    const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/embedding-001:embedText?key=${process.env.GEMINI_API_KEY}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: text }),
        }
    );

    const data = await res.json();
    return data.embedding?.values || [];
}