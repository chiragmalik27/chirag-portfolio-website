import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, projectType, budget, message, honeypot } = result.data;

    // Honeypot anti-spam check
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ success: true, message: "Message received" }, { status: 200 });
    }

    // In production with RESEND_API_KEY, send email notification
    // Otherwise log cleanly on server
    console.log(`[New Inbound Lead]: ${name} (${email}) - ${projectType} [Budget: ${budget || 'Unspecified'}]`);
    console.log(`[Message]: ${message}`);

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully. I will get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please reach out directly via email or WhatsApp.",
      },
      { status: 500 }
    );
  }
}
