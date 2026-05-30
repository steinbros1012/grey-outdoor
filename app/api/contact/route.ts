import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, company, phone, email, market, campaignType, budget, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Grey Outdoor Website <onboarding@resend.dev>",
      to: process.env.LEAD_EMAIL ?? "steinbros1012@gmail.com",
      replyTo: email,
      subject: `New Billboard Inquiry — ${name} (${market || "Market not specified"})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #08091A; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #F97316; margin: 0; font-size: 20px;">New Billboard Inquiry</h1>
            <p style="color: #94a3b8; margin: 4px 0 0;">Grey Outdoor Website Lead</p>
          </div>
          <div style="background: #ffffff; padding: 24px; border: 1px solid #e2e8f0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0f172a; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0f172a;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">${company || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0f172a;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0f172a;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0f172a;">Target Market</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">${market || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0f172a;">Campaign Type</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">${campaignType || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0f172a;">Monthly Budget</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">${budget || "Not specified"}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #0f172a; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #475569; white-space: pre-wrap;">${message}</td>
              </tr>
              ` : ""}
            </table>
          </div>
          <div style="background: #f8fafc; padding: 16px 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="margin: 0; font-size: 12px; color: #94a3b8;">Sent from greyoutdoor.com contact form. Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
