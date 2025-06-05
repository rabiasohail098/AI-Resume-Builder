// lib/agent/modelClient.ts
import { ChatMessage, ModelResponse } from './types';

export async function askModel(messages: ChatMessage[]): Promise<ModelResponse> {
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
        });
        
        const data: ModelResponse = await response.json();
        
        if (!response.ok) {
            throw new Error(data?.error || "Failed to fetch response from model");
        }
        
        return data;
    } catch (error: unknown) {
        console.error("Model Client Error:", error);
        let errorMessage = "An error occurred while communicating with the model";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        throw new Error(errorMessage);
    }
}