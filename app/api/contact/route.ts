import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, market, campaignType, budget, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const formData = new FormData();
    formData.append("_subject", `New Billboard Inquiry, ${name} (${market || "Market not specified"})`);
    formData.append("_replyto", email);
    formData.append("_template", "table");
    formData.append("Name", name);
    formData.append("Company", company || "-");
    formData.append("Phone", phone);
    formData.append("Email", email);
    formData.append("Market", market || "Not specified");
    formData.append("Campaign Type", campaignType || "Not specified");
    formData.append("Budget", budget || "Not specified");
    formData.append("Message", message || "-");

    const res = await fetch(
      `https://formsubmit.co/ajax/${process.env.CONTACT_EMAIL ?? "steinbros1012@gmail.com"}`,
      {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      }
    );

    const data = await res.json();
    if (!data.success) throw new Error("Formsubmit failed");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
