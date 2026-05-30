import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, propertyLocation, state, propertyType, details } = body;

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const formData = new FormData();
    formData.append("_subject", `Landowner Inquiry, ${name} (${state || "State not specified"})`);
    formData.append("_replyto", email);
    formData.append("_template", "table");
    formData.append("Name", name);
    formData.append("Phone", phone);
    formData.append("Email", email);
    formData.append("Property Location", propertyLocation || "-");
    formData.append("State", state || "Not specified");
    formData.append("Property Type", propertyType || "Not specified");
    formData.append("Details", details || "-");

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
    console.error("Landowners form error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
