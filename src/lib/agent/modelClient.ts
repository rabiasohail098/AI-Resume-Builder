export async function askModel(messages: any[]) {
    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
                messages,
            })
        })
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data?.error || "Failed to fetch response from model");
        }
        return data;
    } catch (error: any) {
        console.error("Model Client Error:", error);
        throw new Error(error.message || "An error occurred while communicating with the model");
    }
}