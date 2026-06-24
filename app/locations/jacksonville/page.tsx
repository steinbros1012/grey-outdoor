import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Jacksonville, NC Billboard Advertising | Grey Outdoor",
  description:
    "Billboard advertising in Jacksonville, NC. Reach the military community, Camp Lejeune personnel, and the growing civilian population on NC-24 and US-17.",
};

const faqs = [
  { q: "How much does billboard advertising cost in Jacksonville?", a: "Jacksonville billboard rates range from $500 to $1,800 per month for static locations. The market is competitively priced compared to larger NC metros, while still delivering strong traffic counts from both military and civilian drivers." },
  { q: "What makes Jacksonville a unique advertising market?", a: "Jacksonville is home to Marine Corps Base Camp Lejeune and Marine Corps Air Station New River, creating a large, stable military population. This community, plus the growing civilian population, creates a distinct consumer market that responds well to local advertising." },
  { q: "Which Jacksonville highways have the most traffic?", a: "NC-24 (Western Boulevard) and US-17 (Marine Boulevard) are the primary commercial corridors and carry the heaviest traffic. Both offer excellent billboard visibility and access to the full Jacksonville market." },
  { q: "Do you have digital billboard options in Jacksonville?", a: "We currently offer a digital display on Marine Boulevard (US-17). Digital availability in Jacksonville is limited, so we recommend reaching out early if you are interested in a digital placement." },
  { q: "What industries advertise most in Jacksonville?", a: "Auto dealers, restaurants, healthcare providers, insurance companies, and retail businesses are among the most active advertisers in the Jacksonville market. The military demographic is particularly responsive to auto, financial services, and retail advertising." },
];

export default function JacksonvillePage() {
  return (
    <>
      <section className="pt-24 sm:pt-32 pb-16 px-4 relative overflow-hidden" style={{ backgroundColor: "#0C4C93" }}>
        <Image
          src="/hero/highway-1.jpg"
          alt="Highway corridor in Onslow County, NC"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto">
          <Link href="/inventory" className="text-xs text-white/40 hover:text-white/70 mb-4 inline-block">← All Markets</Link>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#DC2626]/20 text-red-400 mb-4 uppercase tracking-widest">Jacksonville, NC, Onslow County</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4" style={{ letterSpacing: "-0.03em" }}>Jacksonville Billboard Advertising</h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Home to Marine Corps Base Camp Lejeune, the largest USMC base on the East Coast.
            Key commercial corridors: NC-24 (Western Blvd, the main retail strip), US-17, and US-258.
            Reach a heavily military/veteran demographic alongside a growing civilian retail market.
          </p>
        </div>
      </section>

      <section className="py-14 px-4" style={{ backgroundColor: "#0C4C93" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[{ value: "75,000+", label: "City Population" }, { value: "200,000+", label: "Onslow County" }, { value: "43,000", label: "NC-24 Daily Traffic" }, { value: "36,000", label: "US-17 Daily Traffic" }].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-[#EB2813] mb-1" style={{ letterSpacing: "-0.02em" }}>{s.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-[#272727] mb-8" style={{ letterSpacing: "-0.02em" }}>Available Billboard Locations</h2>
            <div className="space-y-4">
              {[
                { loc: "NC-24 Western Blvd corridor", hw: "NC-24 Westbound", size: "14x48", traffic: "28,000*/day", type: "Static" },
                { loc: "US-17 at Henderson Dr", hw: "US-17 Northbound", size: "14x48", traffic: "22,000*/day", type: "Static" },
                { loc: "US-258 at Bell Fork Rd", hw: "US-258 Southbound", size: "10x36", traffic: "18,000*/day", type: "Static" },
              ].map((loc) => (
                <div key={loc.loc} className="flex items-center justify-between p-5 bg-white rounded-lg" style={{ border: "1px solid #E2E8F0" }}>
                  <div>
                    <div className="font-bold text-[#272727]">{loc.loc}</div>
                    <div className="text-xs text-[#0C4C93] font-semibold mt-0.5">{loc.hw}</div>
                    <div className="text-xs text-[#475569] mt-1">{loc.size} · {loc.traffic}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${loc.type === "Digital" ? "bg-yellow-100 text-yellow-800" : "bg-slate-100 text-slate-600"}`}>{loc.type}</span>
                    <Link href="/contact" className="px-4 py-2 rounded-full bg-[#EB2813] text-white text-xs font-bold hover:bg-[#c8200f] transition-colors">Inquire</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-lg self-start" style={{ backgroundColor: "#0C4C93" }}>
            <LeadForm title="Get Jacksonville Availability" subtitle="Request locations and pricing for the Jacksonville market." dark />
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#0C4C93" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>Why Advertise in Jacksonville?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Stable Military Demographic", body: "Camp Lejeune and MCAS New River anchor a large, economically stable military population with consistent purchasing power. Military households are known for strong brand loyalty, getting in front of them with a billboard builds long-term customer relationships." },
              { title: "Growing Civilian Economy", body: "Jacksonville's civilian population has grown steadily as the local economy diversifies. Healthcare, retail, and service industries are expanding to serve both military and civilian residents, creating demand for local advertising." },
              { title: "Undercompetitive Market", body: "Compared to larger NC metros, Jacksonville has fewer competing advertisers, which means your brand can achieve dominant billboard presence at a fraction of the cost of Raleigh or Wilmington placements." },
            ].map((r) => (
              <div key={r.title} className="p-6 rounded-lg" style={{ backgroundColor: "#0C4C93", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4" style={{ backgroundColor: "#F1F5F9" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-[#272727] mb-6" style={{ letterSpacing: "-0.02em" }}>Industries That Succeed in Jacksonville</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Auto Dealers", "Restaurants", "Healthcare", "Insurance", "Retail", "Financial Services", "Real Estate", "Home Services"].map(i => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold text-[#272727] bg-white border border-[#E2E8F0]">{i}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#272727] mb-10" style={{ letterSpacing: "-0.02em" }}>Jacksonville Billboard Advertising FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 bg-white rounded-lg" style={{ border: "1px solid #E2E8F0" }}>
                <h3 className="font-bold text-[#272727] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="Ready to Advertise in Jacksonville?" subheadline="Get a free availability check for Jacksonville billboard locations." buttonLabel="Check Jacksonville Availability →" buttonHref="/contact" />
    </>
  );
}
