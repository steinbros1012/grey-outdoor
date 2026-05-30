"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    market: "",
    campaignType: "",
    budget: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://formsubmit.co/ajax/steinbros1012@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Billboard Inquiry — ${form.name} (${form.market || "Market not specified"})`,
          _template: "table",
          _captcha: "false",
          Name: form.name,
          Company: form.company || "—",
          Phone: form.phone,
          Email: form.email,
          Market: form.market || "Not specified",
          "Campaign Type": form.campaignType || "Not specified",
          Budget: form.budget || "Not specified",
          Message: form.message || "—",
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us directly at 910-620-3567.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow text-sm";
  const inputStyle = {
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
  };
  const labelClass = "block text-xs font-semibold text-white/50 uppercase tracking-wide mb-1.5";

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-6xl font-black text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Get in Touch
          </h1>
          <p className="text-lg text-white/60">
            Ready to get your brand on North Carolina&apos;s roads? We&apos;ll respond within one business day.
          </p>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#0D1230" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-3xl font-black text-white mb-3">Message Received!</h3>
                <p className="text-white/60 text-lg">
                  Our team will follow up within one business day with availability, rates, and next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2
                  className="text-2xl font-black text-white mb-6"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Tell Us About Your Campaign
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>Full Name *</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                      placeholder="Your name" className={inputClass} style={inputStyle} autoComplete="name" />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>Company *</label>
                    <input id="company" name="company" type="text" required value={form.company} onChange={handleChange}
                      placeholder="Your company" className={inputClass} style={inputStyle} autoComplete="organization" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone *</label>
                    <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange}
                      placeholder="(910) 555-0000" className={inputClass} style={inputStyle} autoComplete="tel" />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="you@company.com" className={inputClass} style={inputStyle} autoComplete="email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="market" className={labelClass}>Target Market *</label>
                    <select id="market" name="market" required value={form.market} onChange={handleChange}
                      className={inputClass} style={{ ...inputStyle, color: form.market ? "#F8FAFC" : "rgba(248,250,252,0.3)" }}>
                      <option value="" disabled style={{ color: "#0F172A" }}>Select market</option>
                      {["Wilmington / Hampstead", "Leland / Brunswick County", "Jacksonville", "Eastern NC", "Burlington / I-40 Corridor", "Florence, SC", "Myrtle Beach / Coastal SC", "Other"].map(m => (
                        <option key={m} value={m} style={{ color: "#0F172A", backgroundColor: "#fff" }}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="campaignType" className={labelClass}>Campaign Type</label>
                    <select id="campaignType" name="campaignType" value={form.campaignType} onChange={handleChange}
                      className={inputClass} style={{ ...inputStyle, color: form.campaignType ? "#F8FAFC" : "rgba(248,250,252,0.3)" }}>
                      <option value="" disabled style={{ color: "#0F172A" }}>Select type</option>
                      {["Static Bulletin", "Digital Billboard", "Both — Need Advice", "Not Sure"].map(t => (
                        <option key={t} value={t} style={{ color: "#0F172A", backgroundColor: "#fff" }}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="budget" className={labelClass}>Estimated Monthly Budget</label>
                  <select id="budget" name="budget" value={form.budget} onChange={handleChange}
                    className={inputClass} style={{ ...inputStyle, color: form.budget ? "#F8FAFC" : "rgba(248,250,252,0.3)" }}>
                    <option value="" disabled style={{ color: "#0F172A" }}>Select budget range</option>
                    {["Under $1,000/mo", "$1,000 – $3,000/mo", "$3,000 – $7,500/mo", "$7,500 – $15,000/mo", "$15,000+/mo", "Not Sure"].map(b => (
                      <option key={b} value={b} style={{ color: "#0F172A", backgroundColor: "#fff" }}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>Message</label>
                  <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange}
                    placeholder="Tell us about your goals, campaign timeline, or any questions you have..."
                    className={inputClass} style={inputStyle} />
                </div>
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}
                <button type="submit" disabled={loading}
                  className="w-full py-4 rounded-full font-bold text-white text-base hover:bg-[#EA580C] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#F97316" }}>
                  {loading ? "Sending..." : "Send My Request →"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white" style={{ letterSpacing: "-0.02em" }}>
              Contact Information
            </h2>
            {[
              { icon: MapPin, label: "Office", lines: ["Grey Outdoor, LLC", "P.O. Box 1591", "Wrightsville Beach, NC 28480"] },
              { icon: Phone, label: "Phone", lines: ["910-620-3567"] },
              { icon: Mail, label: "Email", lines: ["grey@greyoutdoor.com"] },
              { icon: Clock, label: "Office Hours", lines: ["Monday to Friday: 8am to 5pm", "Saturday: By appointment", "Sunday: Closed"] },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-lg flex gap-4"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <item.icon size={20} className="text-[#F97316] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-1">{item.label}</div>
                  {item.lines.map((line) => (
                    <div key={line} className="text-sm text-white/70">{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
