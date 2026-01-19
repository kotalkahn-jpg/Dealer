import { NextResponse } from "next/server";
import emailjs from "@emailjs/browser";
import { contactQueue } from "@/lib/contactQueue";

export async function POST() {
  try {
    while (contactQueue.length > 0) {
      const entry = contactQueue.shift();
      if (!entry) continue;

      await emailjs.send(
        "service_reply",
        "template_autoreply",
        {
          name: entry.name,
          email: entry.email,
          enquiry: entry.enquiry,
        },
        "9vZAxScS35t21eFj7"
      );
    }

    return NextResponse.json({ processed: true });
  } catch (err) {
    console.error("Reply processor error:", err);
    return NextResponse.json(
      { processed: false },
      { status: 500 }
    );
  }
}
