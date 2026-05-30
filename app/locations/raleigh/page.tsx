import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Raleigh Billboard Advertising | Grey Outdoor",
  description:
    "Billboard advertising in Raleigh, NC. High-traffic locations on I-440, I-40, and US-1 in NC's capital and tech hub. Request availability from Grey Outdoor.",
};

const faqs = [
  {
    q: "How much does billboard advertising cost in Raleigh?",
    a: "Raleigh billboard costs range from $1,200 to $6,000+ per month depending on location, traffic volume, and format. Premium locations near the I-440 Beltline or I-40 near RDU Airport command the highest rates. Digital displays are available at lower entry points through shared rotation schedules.",
  },
  {
    q: "Which Raleigh corridors have the highest traffic?",
    a: "The I-440 Beltline, I-40 (particularly the western leg toward RTP), and US-1/Capital Boulevard are consistently our highest-traffic placements. US-64 and the Wade Avenue interchange are also strong performers for reaching Research Triangle commuters.",
  },
  {
    q: "Are there digital billboards available in Raleigh?",
    a: "Yes. We operate several digital displays in the Raleigh metro area, with rotations that give you flexible entry pricing and the ability to change creative in real time. Digital availability is limited, so we recommend reaching out early for premium positions.",
  },
  {
    q: "What types of businesses advertise on Raleigh billboards?",
    a: "Raleigh's tech-heavy economy attracts a wide range of advertisers — technology companies, healthcare systems, law firms, real estate developers, restaurants, and auto dealerships are among our most active clients in the market.",
  },
  {
    q: "How much lead time do I need to launch a Raleigh billboard campaign?",
    a: "For static billboards, plan for 2 to 3 weeks from contract signing to go-live (including artwork production and installation). Digital campaigns can often launch within a week once creative is approved.",
  },
];

export default function RaleighPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 relative overflow-hidden" style={{ backgroundColor: "#08091A" }}>
        <Image
          src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=1920&q=80"
          alt="City highway interchange at dusk"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto">
          <Link href="/inventory" className="text-xs text-white/40 hover:text-white/70 mb-4 inline-block">← All Markets</Link>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#7C3AED]/20 text-purple-400 mb-4 uppercase tracking-widest">
            Piedmont NC — Burlington · Greensboro · Raleigh
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
            Raleigh Billboard Advertising
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Grey Outdoor serves the full I-85/40 Piedmont corridor — Burlington, Greensboro, and Raleigh.
            Reach NC&apos;s capital and the broader Research Triangle market with billboard placements on the
            region&apos;s busiest interstates.
          </p>
        </div>
      </section>

      <section className="py-14 px-4" style={{ backgroundColor: "#0D1230" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "500,000+", label: "City Population" },
            { value: "1.4M+", label: "Metro Area" },
            { value: "95,000", label: "I-440 Daily Traffic" },
            { value: "72,000", label: "US-1 Daily Traffic" },
          ].map((s) => (
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
                { loc: "Wade Ave Interchange", hw: "I-440 Eastbound", size: "14x48", traffic: "95,000/day", type: "Digital" },
                { loc: "Capital Blvd & I-540", hw: "US-1 Northbound", size: "14x48", traffic: "72,000/day", type: "Static" },
                { loc: "Western Blvd near NCSU", hw: "I-40 Westbound", size: "10x36", traffic: "68,000/day", type: "Static" },
                { loc: "Falls of Neuse Rd", hw: "US-1 Alt Northbound", size: "14x48", traffic: "44,000/day", type: "Static" },
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
            <LeadForm title="Get Raleigh Availability" subtitle="Request locations and pricing for the Raleigh market." dark />
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>Why Advertise in Raleigh?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Full Piedmont Corridor Coverage", body: "Grey Outdoor's I-85/40 corridor inventory connects Burlington, Greensboro, and Raleigh in a single campaign. Advertisers with a regional footprint can achieve consistent brand exposure across all three markets simultaneously." },
              { title: "High-Income Tech Workforce", body: "The Research Triangle's concentration of technology, pharmaceutical, and biotech employers has created one of the highest median household incomes of any major NC market." },
              { title: "Major Interstate Exposure", body: "The I-85/40 corridor is one of NC's busiest freight and commuter routes. Combined with US-70 in the Goldsboro/Alamance corridor, Grey Outdoor's Piedmont inventory delivers unmatched highway coverage across central NC." },
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
          <h2 className="text-2xl font-black text-[#0F172A] mb-6" style={{ letterSpacing: "-0.02em" }}>Industries That Succeed in Raleigh</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Technology", "Healthcare", "Real Estate", "Legal Services", "Financial Services", "Restaurants", "Auto Dealers", "Universities"].map(i => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold text-[#0F172A] bg-white border border-[#E2E8F0]">{i}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F172A] mb-10" style={{ letterSpacing: "-0.02em" }}>Raleigh Billboard Advertising FAQ</h2>
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

      <CTABanner
        headline="Ready to Advertise in Raleigh?"
        subheadline="Check availability on Raleigh's most-trafficked billboard locations."
        buttonLabel="Check Raleigh Availability →"
        buttonHref="/contact"
      />
    </>
  );
}
