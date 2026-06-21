import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const TO_EMAIL = process.env.CONTACT_EMAIL ?? "steinbros1012@gmail.com";
    const FROM_EMAIL = process.env.FROM_EMAIL ?? "onboarding@resend.dev";

    const body = await request.json();
    const { name, business, company, phone, email, market, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const businessName = business || company || "Not provided";
    const subject = `Billboard Availability Request — ${name} (${market || "Market not specified"})`;

    const rows: [string, string][] = [
      ["Name", name],
      ["Business", businessName],
      ["Phone", phone],
      ["Email", email],
      ["Market", market || "Not specified"],
      ["Message", message || "—"],
    ];

    const html = `
      <h2 style="font-family:sans-serif;color:#0F172A;">New Billboard Inquiry</h2>
      <table style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:560px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:10px 14px;background:#F8FAFC;border:1px solid #E2E8F0;font-weight:600;color:#64748B;font-size:13px;white-space:nowrap;">${label}</td>
            <td style="padding:10px 14px;border:1px solid #E2E8F0;color:#0F172A;font-size:14px;">${value}</td>
          </tr>`
          )
          .join("")}
      </table>
      <p style="font-family:sans-serif;color:#94A3B8;font-size:12px;margin-top:24px;">Sent from greyoutdoor.com</p>
    `;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
