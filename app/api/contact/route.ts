import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, market, campaignType, budget, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `New Billboard Inquiry — ${name} (${market || "Market not specified"})`,
        from_name: name,
        email,
        name,
        company: company || "—",
        phone,
        market: market || "Not specified",
        campaign_type: campaignType || "Not specified",
        budget: budget || "Not specified",
        message: message || "—",
        // Formats the email nicely in the Web3Forms inbox
        botcheck: "",
      }),
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message ?? "Web3Forms submission failed");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
