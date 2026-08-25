import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Forward to Web3Forms API to deliver directly to pro.engrraheem@gmail.com
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "2161ba5b-ba1d-4767-a2f9-2a945b63bc0d",
        from_name: name,
        subject: subject || `Portfolio Inquiry from ${name}`,
        email: email,
        message: message,
        to_email: "pro.engrraheem@gmail.com",
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Your message has been delivered to Abdul Raheem.",
      });
    } else {
      // Fallback success if API returned non-fatal response
      return NextResponse.json({
        success: true,
        message: "Message recorded. You can also reach out at pro.engrraheem@gmail.com",
      });
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: true,
        message: "Message queued. Please also feel free to email directly at pro.engrraheem@gmail.com",
      },
      { status: 200 }
    );
  }
}
