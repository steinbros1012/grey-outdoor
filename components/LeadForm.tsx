"use client";

import { useState } from "react";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

type FormData = {
  name: string;
  business: string;
  phone: string;
  email: string;
  market: string;
  message: string;
};

const markets = [
  "Wilmington / Hampstead",
  "Leland / Brunswick County",
  "Jacksonville",
  "Eastern NC",
  "Burlington / I-40 Corridor",
  "Florence, SC",
  "Myrtle Beach / Coastal SC",
  "Other",
];

export default function LeadForm({
  title = "Request Free Availability Check",
  subtitle = "Get a free availability check and rate quote within 24 hours. No obligation.",
  dark = true,
}: LeadFormProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    business: "",
    phone: "",
    email: "",
    market: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us at 910-620-3567.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = dark
    ? "w-full px-4 py-3 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#E8630A] transition-shadow text-sm"
    : "w-full px-4 py-3 rounded-lg text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0047CC] transition-shadow text-sm border border-[#E2E8F0]";

  const inputStyle = dark
    ? { backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }
    : { backgroundColor: "#F8FAFC" };

  const labelClass = dark
    ? "block text-xs font-semibold text-white/50 uppercase tracking-wide mb-1.5"
    : "block text-xs font-semibold text-[#475569] uppercase tracking-wide mb-1.5";

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: dark ? "#F8FAFC" : "#0F172A" }}>Request Received!</h3>
        <p style={{ color: dark ? "rgba(248,250,252,0.6)" : "#475569" }}>
          We&apos;ll reach out within 24 hours with availability and rates for your
          selected market.
        </p>
      </div>
    );
  }

  return (
    <div>
      {title && (
        <h3
          className="text-2xl font-black mb-2"
          style={{
            color: dark ? "#F8FAFC" : "#0F172A",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-sm mb-6" style={{ color: dark ? "rgba(248,250,252,0.55)" : "#475569" }}>
          {subtitle}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className={labelClass}>
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={inputClass}
              style={inputStyle}
              aria-label="Your full name"
            />
          </div>
          <div>
            <label htmlFor="business" className={labelClass}>
              Business Name *
            </label>
            <input
              id="business"
              name="business"
              type="text"
              required
              autoComplete="organization"
              value={form.business}
              onChange={handleChange}
              placeholder="Your business"
              className={inputClass}
              style={inputStyle}
              aria-label="Business name"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="(910) 555-0000"
              className={inputClass}
              style={inputStyle}
              aria-label="Phone number"
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className={inputClass}
              style={inputStyle}
              aria-label="Email address"
            />
          </div>
        </div>
        <div>
          <label htmlFor="market" className={labelClass}>
            City / Market *
          </label>
          <select
            id="market"
            name="market"
            required
            value={form.market}
            onChange={handleChange}
            className={inputClass}
            style={{
              ...inputStyle,
              color: dark ? (form.market ? "#F8FAFC" : "rgba(248,250,252,0.3)") : "#0F172A",
            }}
            aria-label="Select your target market"
          >
            <option value="" disabled>
              Select a market
            </option>
            {markets.map((m) => (
              <option key={m} value={m} style={{ color: "#0F172A", backgroundColor: "#fff" }}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your campaign goals, budget, or timeline..."
            className={inputClass}
            style={inputStyle}
            aria-label="Additional message"
          />
        </div>
        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-full font-bold text-white text-base hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ backgroundColor: dark ? "#E8630A" : "#0047CC" }}
        >
          {loading ? "Sending..." : "Request Free Availability Check →"}
        </button>
      </form>
    </div>
  );
}
