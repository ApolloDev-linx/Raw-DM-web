import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, vehicle, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    console.log("New detailing inquiry:", {
      name,
      email,
      vehicle,
      message,
    });

    return NextResponse.json({ success: true, message: "Inquiry received." });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
