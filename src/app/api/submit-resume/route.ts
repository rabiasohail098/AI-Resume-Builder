// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const data = await request.json();

//     console.log("Received Resume Data:", data);

//     // Yahan aap database me store karo ya PDF banao
//     // TODO: Save to DB, send email, etc.

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Resume submit error:", error);
//     return NextResponse.json({ success: false }, { status: 500 });
//   }
// }



// app/api/submit-resume/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Received Resume Data:", data);
    // TODO: Save to DB, send email, etc.
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resume submit error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}