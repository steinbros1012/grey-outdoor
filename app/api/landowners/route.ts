import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, propertyLocation, state, propertyType, details } = body;

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `Landowner Inquiry — ${name} (${state || "State not specified"})`,
        from_name: name,
        email,
        name,
        phone,
        property_location: propertyLocation || "—",
        state: state || "Not specified",
        property_type: propertyType || "Not specified",
        details: details || "—",
        botcheck: "",
      }),
    });

    const data = await res.json();
    if (!data.success) throw new Error(data.message ?? "Submission failed");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Landowners form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
