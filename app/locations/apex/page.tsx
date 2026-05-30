import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Apex, NC Billboard Advertising | Grey Outdoor",
  description:
    "Billboard advertising in Apex, NC — one of the country's fastest-growing suburbs. Reach high-income households on US-1, NC-55, and I-540 with Grey Outdoor.",
};

const faqs = [
  { q: "How much does billboard advertising cost in Apex?", a: "Apex billboard rates typically run $700 to $2,800 per month for static locations, with pricing driven by highway exposure and traffic counts. Apex is a growth market, and new inventory continues to open as development expands along the US-1 and I-540 corridors." },
  { q: "Why advertise in Apex specifically rather than just Raleigh?", a: "Apex's demographics are distinct — it's one of the wealthiest ZIP codes in NC, with a high concentration of technology professionals and dual-income households. For businesses targeting this affluent suburban audience, Apex placements often outperform broader Raleigh buys." },
  { q: "What highways run through Apex?", a: "US-1 (which becomes the Apex Peakway), NC-55, and I-540 (the Triangle Expressway) are the primary corridors. I-540 extension has dramatically increased highway access to Apex and created premium new billboard opportunities." },
  { q: "Is Apex growing fast enough to justify billboard investment?", a: "Absolutely. Apex has ranked among the fastest-growing towns in America multiple times and continues to attract new residents, businesses, and retail development. Getting in early on this market gives your brand early-mover advantage." },
  { q: "How do I get started with a billboard campaign in Apex?", a: "Contact our team for a free availability check. We will show you current open inventory in Apex, share traffic data for each location, and send a rate quote within 24 hours." },
];

export default function ApexPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-4xl mx-auto">
          <Link href="/inventory" className="text-xs text-white/40 hover:text-white/70 mb-4 inline-block">← All Markets</Link>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#059669]/20 text-emerald-400 mb-4 uppercase tracking-widest">Apex, NC</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4" style={{ letterSpacing: "-0.03em" }}>Apex Billboard Advertising</h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Reach one of NC&apos;s fastest-growing and most affluent suburban markets. Apex&apos;s high-income households,
            booming retail corridors, and explosive growth make it one of the most sought-after billboard markets in the Triangle.
          </p>
        </div>
      </section>

      <section className="py-14 px-4" style={{ backgroundColor: "#0D1230" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[{ value: "70,000+", label: "Town Population" }, { value: "#1", label: "Ranked Best Place to Live" }, { value: "55,000", label: "US-1 Daily Traffic" }, { value: "$120K+", label: "Median Household Income" }].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-[#F97316] mb-1" style={{ letterSpacing: "-0.02em" }}>{s.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-[#0F172A] mb-8" style={{ letterSpacing: "-0.02em" }}>Available Billboard Locations</h2>
            <div className="space-y-4">
              {[
                { loc: "Apex Peakway & Center St", hw: "US-1 Northbound", size: "10x36", traffic: "55,000/day", type: "Static" },
                { loc: "NC-55 & Salem Street", hw: "NC-55 Eastbound", size: "14x48", traffic: "41,000/day", type: "Digital" },
                { loc: "I-540 / Triangle Expressway", hw: "I-540 Westbound", size: "14x48", traffic: "38,000/day", type: "Static" },
              ].map((loc) => (
                <div key={loc.loc} className="flex items-center justify-between p-5 bg-white rounded-lg" style={{ border: "1px solid #E2E8F0" }}>
                  <div>
                    <div className="font-bold text-[#0F172A]">{loc.loc}</div>
                    <div className="text-xs text-[#0047CC] font-semibold mt-0.5">{loc.hw}</div>
                    <div className="text-xs text-[#475569] mt-1">{loc.size} · {loc.traffic}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${loc.type === "Digital" ? "bg-yellow-100 text-yellow-800" : "bg-slate-100 text-slate-600"}`}>{loc.type}</span>
                    <Link href="/contact" className="px-4 py-2 rounded-full bg-[#F97316] text-white text-xs font-bold hover:bg-[#EA580C] transition-colors">Inquire</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-lg self-start" style={{ backgroundColor: "#0D1230" }}>
            <LeadForm title="Get Apex Availability" subtitle="Request locations and pricing for the Apex market." dark />
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>Why Advertise in Apex?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Affluent, High-Intent Consumers", body: "Apex has one of the highest median household incomes in NC. Residents are actively spending on homes, renovations, vehicles, healthcare, and dining — making them high-value targets for many advertising categories." },
              { title: "Consistent Population Growth", body: "Apex has added thousands of new residents every year for over a decade. New residents are actively discovering local businesses, making billboard advertising especially effective for awareness and trial." },
              { title: "Strategic Triangle Location", body: "Apex sits at a crossroads of multiple Triangle commuting routes. Billboards here capture not just Apex residents but commuters flowing between Cary, Morrisville, Holly Springs, and the I-540 corridor." },
            ].map((r) => (
              <div key={r.title} className="p-6 rounded-lg" style={{ backgroundColor: "#0D1230", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4" style={{ backgroundColor: "#F1F5F9" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-[#0F172A] mb-6" style={{ letterSpacing: "-0.02em" }}>Industries That Succeed in Apex</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Real Estate", "Home Services", "Healthcare", "Fitness & Wellness", "Restaurants", "Financial Services", "Auto Dealers", "Childcare"].map(i => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold text-[#0F172A] bg-white border border-[#E2E8F0]">{i}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F172A] mb-10" style={{ letterSpacing: "-0.02em" }}>Apex Billboard Advertising FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 bg-white rounded-lg" style={{ border: "1px solid #E2E8F0" }}>
                <h3 className="font-bold text-[#0F172A] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="Ready to Advertise in Apex?" subheadline="Get a free availability check for Apex billboard locations." buttonLabel="Check Apex Availability →" buttonHref="/contact" />
    </>
  );
}
