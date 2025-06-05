// app/api/agent/route.ts
import { NextRequest, NextResponse } from "next/server";
import { promptbuilder } from "@/lib/agent/promptbuilder";
import { askModel } from "@/lib/agent/modelClient";
import { AgentRequest, AgentResponse } from "@/lib/agent/types";

export async function POST(req: NextRequest): Promise<NextResponse<AgentResponse>> {
  try {
    const requestData = await req.json();
    const { field, context } = requestData as AgentRequest;

    if (!field) {
      return NextResponse.json(
        { error: "Field is required" },
        { status: 400 }
      );
    }

    const prompt = promptbuilder(field, context || "");
    const messages = [
      { role: "system" as const, content: "You are a helpful assistant for building resumes." },
      { role: "user" as const, content: prompt },
    ];

    const response = await askModel(messages);
    
    if (!response.choices || response.choices.length === 0) {
      return NextResponse.json(
        { error: "No response from Model." },
        { status: 500 }
      );
    }

    const suggestion = response.choices[0].message.content;
    return NextResponse.json({ suggestion });

  } catch (error: unknown) {
    console.error("Api Error:", error);
    const errorMessage = error instanceof Error 
      ? error.message 
      : "Internal server error.";

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}