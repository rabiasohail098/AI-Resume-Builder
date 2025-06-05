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

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.error?.message || "Failed to fetch response from model");
    }

    return await response.json() as ModelResponse;
  } catch (error) {
    console.error("Model Client Error:", error);
    throw new Error(
      error instanceof Error 
        ? error.message 
        : "An error occurred while communicating with the model"
    );
  }
}