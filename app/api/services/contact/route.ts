import { NextResponse } from "next/server";
import emailjs from "@emailjs/browser";
import { contactQueue } from "@/lib/contactQueue";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      enquiry,
      message,
      organization,
    } = body;

    // 1️⃣ Send ADMIN email (this is the part you know works)
    await emailjs.send(
      "service_ibx7dmw",
      "template_67q22ja",
      {
        name,
        email,
        phone,
        enquiry,
        message,
        organization,
      },
      "9vZAxScS35t21eFj7"
    );

    // 2️⃣ Store minimal data for reply processing
    contactQueue.push({
      name,
      email,
      phone,
      enquiry,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API /contact ERROR:", err);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
