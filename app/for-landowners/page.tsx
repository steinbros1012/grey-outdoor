"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "How much does Grey Outdoor pay for billboard leases?",
    a: "Lease rates depend on location, traffic volume, and the type of billboard. Properties on major interstates typically earn more than rural roads. Reach out and we'll give you a real number based on your specific property.",
  },
  {
    q: "Do I need to do anything after signing a lease?",
    a: "No. We take care of all permits, construction, utilities, and maintenance. You receive your monthly payment and we handle the rest.",
  },
  {
    q: "How long are the lease agreements?",
    a: "Lease terms vary, but most are multi-year agreements with renewal options. We're not looking for short-term arrangements.",
  },
  {
    q: "What if there's already a structure on my property?",
    a: "Existing structures don't disqualify you. Reach out and we'll assess what's there and whether a billboard makes sense for your parcel.",
  },
  {
    q: "What states does Grey Outdoor operate in?",
    a: "We currently have billboards across North Carolina, South Carolina, and Virginia. If your property is in one of those states along a well-traveled road, we want to hear from you.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b"
      style={{ borderColor: "rgba(0,0,0,0.1)" }}
    >
      <button
        className="w-full text-left py-5 flex items-center justify-between gap-4 font-semibold text-[#0F172A] text-base hover:text-[#F97316] transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span
          className="flex-shrink-0 text-xl leading-none transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && (
        <p className="pb-5 text-[#475569] leading-relaxed text-sm">{a}</p>
      )}
    </div>
  );
}

export default function ForLandownersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    propertyLocation: "",
    state: "",
    propertyType: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/landowners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Send failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us at 910-620-3567.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 px-4"
        style={{ backgroundColor: "#08091A" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#F97316]/15 text-[#F97316] mb-6 tracking-widest uppercase">
            For Property Owners
          </span>
          <h1
            className="text-4xl sm:text-6xl font-black text-white mb-6"
            style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            Your Land Could Be Earning Money Every Month
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            Grey Outdoor leases land from property owners along major NC and SC
            highways to place billboards. It&apos;s passive income with no effort
            on your end.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#F97316] text-white font-bold text-base hover:bg-[#EA580C] transition-colors"
          >
            Find Out What Your Property Is Worth
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-14 text-center"
            style={{ letterSpacing: "-0.02em" }}
          >
            How the Landowner Program Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "You reach out",
                body: "Fill out our form below with your property details. We'll review your location and get back to you within a few days.",
              },
              {
                step: "2",
                title: "We assess your property",
                body: "Our team looks at traffic counts, visibility, setbacks, and zoning to see if your property works for a billboard.",
              },
              {
                step: "3",
                title: "You get paid",
                body: "If it's a fit, we handle all permitting, construction, and maintenance. You receive a monthly lease payment with no work required.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg mx-auto mb-5"
                  style={{ backgroundColor: "#F97316" }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F1F5F9" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-14 text-center"
            style={{ letterSpacing: "-0.02em" }}
          >
            What Makes a Good Billboard Property
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🛣️",
                title: "Highway or high-traffic road frontage",
                body: "Properties on or near major roads, highways, and interstates get the most attention from advertisers.",
              },
              {
                icon: "👁️",
                title: "Good visibility",
                body: "The location needs a clear line of sight for drivers with enough time to read a sign at road speed.",
              },
              {
                icon: "📐",
                title: "Adequate setbacks",
                body: "We handle zoning research, but properties that meet local setback requirements move faster.",
              },
              {
                icon: "🌾",
                title: "Any size property",
                body: "You don't need a large parcel. Many of our billboards sit on small strips of commercial or rural land along roadways.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-7 bg-white rounded-lg flex gap-5"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Landowners Earn */}
      <section className="py-20 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-black text-white mb-12 text-center"
            style={{ letterSpacing: "-0.02em" }}
          >
            Steady Monthly Income, Zero Hassle
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <p className="text-white/60 text-lg leading-relaxed">
              Lease payments vary based on location, traffic, and billboard type.
              Properties on busy interstates or in commercial corridors earn
              more. We handle everything — permitting, construction, power if
              needed, and ongoing maintenance. Your only job is to cash the
              check.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "Monthly Payments",
                  body: "Consistent income on a set schedule",
                },
                {
                  title: "Long-Term Leases",
                  body: "Stability you can count on",
                },
                {
                  title: "We Handle Everything",
                  body: "Permits, construction, and maintenance are all on us",
                },
              ].map((box) => (
                <div
                  key={box.title}
                  className="p-6 rounded-lg text-center"
                  style={{
                    backgroundColor: "#0D1230",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="text-sm font-bold text-[#F97316] mb-2">
                    {box.title}
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {box.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-12 text-center"
            style={{ letterSpacing: "-0.02em" }}
          >
            Landowner Questions
          </h2>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact-form"
        className="py-20 px-4"
        style={{ backgroundColor: "#F97316" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-black text-white mb-3 text-center"
            style={{ letterSpacing: "-0.02em" }}
          >
            Tell Us About Your Property
          </h2>
          <p className="text-white/80 text-center mb-10">
            Fill out the form and we&apos;ll be in touch within a few business days.
          </p>
          {submitted ? (
            <div className="bg-[#08091A] rounded-xl p-12 text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-black text-white mb-2">Got it — thanks!</h3>
              <p className="text-white/60">We&apos;ll review your property details and be in touch within a few business days.</p>
            </div>
          ) : (
          <form
            className="bg-[#08091A] rounded-xl p-8 space-y-5"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="lo-name" className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-1.5">Full Name *</label>
                <input id="lo-name" name="name" type="text" required value={form.name} onChange={handleChange}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#F97316] transition-colors" />
              </div>
              <div>
                <label htmlFor="lo-phone" className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-1.5">Phone *</label>
                <input id="lo-phone" name="phone" type="tel" required value={form.phone} onChange={handleChange}
                  placeholder="(910) 555-0100"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#F97316] transition-colors" />
              </div>
            </div>
            <div>
              <label htmlFor="lo-email" className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-1.5">Email *</label>
              <input id="lo-email" name="email" type="email" required value={form.email} onChange={handleChange}
                placeholder="jane@example.com"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#F97316] transition-colors" />
            </div>
            <div>
              <label htmlFor="lo-location" className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-1.5">Property Address / General Location</label>
              <input id="lo-location" name="propertyLocation" type="text" value={form.propertyLocation} onChange={handleChange}
                placeholder="e.g. Near I-40 and exit 132, Burlington NC"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#F97316] transition-colors" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="lo-state" className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-1.5">State</label>
                <select id="lo-state" name="state" value={form.state} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#F97316] transition-colors appearance-none">
                  <option value="" style={{ color: "#0F172A" }}>Select state</option>
                  <option value="NC" style={{ color: "#0F172A" }}>NC</option>
                  <option value="SC" style={{ color: "#0F172A" }}>SC</option>
                  <option value="VA" style={{ color: "#0F172A" }}>VA</option>
                  <option value="Other" style={{ color: "#0F172A" }}>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="lo-type" className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-1.5">Property Type</label>
                <select id="lo-type" name="propertyType" value={form.propertyType} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#F97316] transition-colors appearance-none">
                  <option value="" style={{ color: "#0F172A" }}>Select type</option>
                  <option value="highway" style={{ color: "#0F172A" }}>Highway frontage</option>
                  <option value="commercial" style={{ color: "#0F172A" }}>Commercial property</option>
                  <option value="rural" style={{ color: "#0F172A" }}>Rural/Agricultural</option>
                  <option value="other" style={{ color: "#0F172A" }}>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="lo-details" className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-1.5">Additional Details</label>
              <textarea id="lo-details" name="details" rows={4} value={form.details} onChange={handleChange}
                placeholder="Any other details about the property, existing structures, road frontage, etc."
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#F97316] transition-colors resize-none" />
            </div>
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <button type="submit" disabled={loading}
              className="w-full py-4 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-base transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? "Sending..." : "Send My Property Details"}
            </button>
          </form>
          )}
        </div>
      </section>
    </>
  );
}
