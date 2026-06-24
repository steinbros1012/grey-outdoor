import { NextResponse } from "next/server";
import { Resend } from "resend";

// In-memory rate limit store: IP → { count, windowStart }
// Resets per Vercel function instance (good enough for abuse prevention)
const rateLimit = new Map<string, { count: number; windowStart: number }>();
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5;   // max 5 submissions per IP per minute

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    rateLimit.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) return true;

  entry.count++;
  return false;
}

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  // Strip HTML tags and trim to prevent injection into the email HTML
  return value.replace(/<[^>]*>/g, "").trim().slice(0, 1000);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s\-().+]{7,20}$/;

export async function POST(request: Request) {
  try {
    // Rate limit check
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment and try again." },
        { status: 429 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const TO_EMAIL = process.env.CONTACT_EMAIL ?? "steinbros1012@gmail.com";
    const FROM_EMAIL = process.env.FROM_EMAIL ?? "onboarding@resend.dev";

    const body = await request.json();

    // Sanitize all inputs
    const name     = sanitize(body.name);
    const business = sanitize(body.business ?? body.company);
    const phone    = sanitize(body.phone);
    const email    = sanitize(body.email);
    const market   = sanitize(body.market);
    const message  = sanitize(body.message);

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (!PHONE_RE.test(phone)) {
      return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
    }

    if (name.length < 2) {
      return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
    }

    const subject = `Billboard Availability Request — ${name} (${market || "Market not specified"})`;

    const rows: [string, string][] = [
      ["Name", name],
      ["Business", business || "Not provided"],
      ["Phone", phone],
      ["Email", email],
      ["Market", market || "Not specified"],
      ["Message", message || "—"],
    ];

    const html = `
      <h2 style="font-family:sans-serif;color:#1F2937;">New Billboard Inquiry</h2>
      <table style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:560px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:10px 14px;background:#F8FAFC;border:1px solid #E2E8F0;font-weight:600;color:#64748B;font-size:13px;white-space:nowrap;">${label}</td>
            <td style="padding:10px 14px;border:1px solid #E2E8F0;color:#1F2937;font-size:14px;">${value}</td>
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
      return NextResponse.json({ error: "Failed to send." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }
}
