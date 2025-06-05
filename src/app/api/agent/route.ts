// import { NextRequest, NextResponse } from "next/server";
// import { promptbuilder } from "@/lib/agent/promptbuilder";
// import { askModel } from "@/lib/agent/modelClient";

// export async function POST(req: NextRequest) {
//     try {
//         const { field, context } = await req.json();
//         if (!field) {
//             return NextResponse.json(
//                 { error: "Field is required" },
//                 { status: 400 }
//             );
//         }
//         const prompt = promptbuilder(field, context || "");
//         const messages = [
//             { role: "system", content: "You are a helpful assistant for building resumes." },
//             { role: "user", content: prompt },
//         ];
//         const response = await askModel(messages);
        
//         if (!response.choices || response.choices.length === 0) {
//             return NextResponse.json(
//                 { error: "No response from Model." },
//                 { status: 500 }
//             );
//         }
//         const suggestion = response.choices[0].message.content;
//         return NextResponse.json(
//             { suggestion }
//         )
//     } catch (error: any) {
//             console.error("Api Error:", error);
//             return NextResponse.json(
//                 { error: "Internal server error." },
//                 { status: 500 }
//             );
//         }
//     }







// app/api/agent/route.ts
import { NextRequest, NextResponse } from "next/server";
import { promptbuilder } from "@/lib/agent/promptbuilder";
import { askModel } from "@/lib/agent/modelClient";

export async function POST(req: NextRequest) {
    try {
        const { field, context } = await req.json();
        if (!field) {
            return NextResponse.json(
                { error: "Field is required" },
                { status: 400 }
            );
        }
        const prompt = promptbuilder(field, context || "");
        const messages = [
            { role: "system", content: "You are a helpful assistant for building resumes." },
            { role: "user", content: prompt },
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
    } catch (error: any) {
        console.error("Api Error:", error);
        return NextResponse.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}