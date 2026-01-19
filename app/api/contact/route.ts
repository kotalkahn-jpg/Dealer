import { NextResponse } from "next/server";

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

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_ibx7dmw",
          template_id: "template_67q22ja",
          user_id: "9vZAxScS35t21eFj7",
          template_params: {
            name,
            email,
            phone,
            enquiry,
            message,
            organization,
          },
        }),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("EmailJS REST error:", text);
      return NextResponse.json(
        { success: false },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API /contact ERROR:", err);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
