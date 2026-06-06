import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Burlington & I-40/85 Billboard Advertising | Grey Outdoor",
  description:
    "Billboard advertising along the I-40/85 corridor in Alamance County, NC. High-traffic locations on I-40/85 and the US-70 Burlington corridor. Request availability from Grey Outdoor.",
};

const faqs = [
  {
    q: "How much does billboard advertising cost along the I-40/85 corridor?",
    a: "Burlington and I-40/85 billboard costs range from $1,000 to $4,500+ per month depending on location, traffic volume, and format. Premium interchange locations near I-40/85 in Alamance County command the highest rates given the high volume of through-traffic on this major east-west corridor.",
  },
  {
    q: "Which I-40/85 corridors have the highest traffic?",
    a: "The I-40/85 interchange through Alamance County is consistently our highest-traffic placement in this market, with combined east-west traffic from both interstates. The US-70/Burlington Sporting Goods area and the Hwy 49 corridor are also strong performers for reaching local and regional consumers.",
  },
  {
    q: "Why is the I-40/85 Burlington corridor valuable for advertisers?",
    a: "I-40/85 is one of the most important east-west freight and commuter routes in North Carolina, connecting Charlotte to the Research Triangle and the Triad. Advertisers gain exposure to regional travelers, logistics workers, and the strong local Alamance County consumer base simultaneously.",
  },
  {
    q: "What types of businesses advertise on I-40/85 Burlington billboards?",
    a: "The Alamance County corridor attracts regional retailers, auto dealerships, healthcare systems, restaurants, home services, and companies targeting the broader NC Triad and Triangle regions with consistent highway presence.",
  },
  {
    q: "How much lead time do I need to launch a Burlington/I-40 billboard campaign?",
    a: "For static billboards, plan for 2 to 3 weeks from contract signing to go-live (including artwork production and installation). Digital campaigns can often launch within a week once creative is approved.",
  },
];

export default function BurlingtonPage() {
  return (
    <>
      <section className="pt-24 sm:pt-32 pb-16 px-4 relative overflow-hidden" style={{ backgroundColor: "#08091A" }}>
        <Image
          src="/hero/grey-outdoor-hero-2.jpg"
          alt="Interstate highway corridor at dusk"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto">
          <Link href="/locations" className="text-xs text-white/40 hover:text-white/70 mb-4 inline-block">← All Markets</Link>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#7C3AED]/20 text-purple-400 mb-4 uppercase tracking-widest">
            Alamance County, NC, I-40/85 Corridor
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
            Burlington &amp; I-40/85 Corridor Billboard Advertising
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Grey Outdoor operates billboard inventory along the I-40/85 corridor through Alamance County.
            Reach regional travelers, commuters, and local consumers on one of NC&apos;s most-traveled
            east-west interstates, connecting the Triad to the Triangle and beyond.
          </p>
        </div>
      </section>

      <section className="py-14 px-4" style={{ backgroundColor: "#0D1230" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "58,000+", label: "I-40/85 Daily Traffic" },
            { value: "170K+", label: "Alamance County Pop." },
            { value: "2", label: "Interstates Converge" },
            { value: "14x48", label: "Premium Format" },
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
                { loc: "I-40/85 Burlington (Exit Area)", hw: "I-40/85 Westbound", size: "14x48", traffic: "58,000/day", type: "Static" },
                { loc: "Burlington Sporting Goods Area", hw: "US-70 / I-40 Corridor", size: "14x48", traffic: "45,000/day", type: "Static" },
                { loc: "Hwy 49 Corridor, Alamance Co.", hw: "Hwy 49 Northbound", size: "10x36", traffic: "22,000/day", type: "Static" },
                { loc: "I-40/85 East Alamance", hw: "I-40/85 Eastbound", size: "14x48", traffic: "55,000/day", type: "Static" },
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
            <LeadForm title="Get Burlington / I-40 Availability" subtitle="Request locations and pricing for the I-40/85 Alamance County corridor." dark />
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>Why Advertise on the I-40/85 Corridor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Major East-West Regional Corridor", body: "I-40/85 through Alamance County is one of NC's busiest and most strategically important stretches of highway, carrying freight, commuters, and travelers between Charlotte, the Triad, the Triangle, and points east. A single placement reaches audiences from multiple major metros." },
              { title: "Strong Local Alamance County Base", body: "Beyond through-traffic, Alamance County has a growing local consumer market centered on Burlington. Retail, home services, healthcare, and auto dealerships all benefit from consistent local brand presence alongside the regional highway audience." },
              { title: "Underserved Advertising Market", body: "Compared to Raleigh or Charlotte, the Burlington/I-40 corridor offers regional brand awareness at a competitive price point. Grey Outdoor's inventory here provides outsized reach relative to cost for businesses targeting the full NC I-40 corridor." },
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
          <h2 className="text-2xl font-black text-[#0F172A] mb-6" style={{ letterSpacing: "-0.02em" }}>Industries That Succeed on I-40/85</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Retail", "Auto Dealers", "Home Services", "Healthcare", "Restaurants", "Financial Services", "Real Estate", "Regional Brands"].map(i => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold text-[#0F172A] bg-white border border-[#E2E8F0]">{i}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F172A] mb-10" style={{ letterSpacing: "-0.02em" }}>Burlington &amp; I-40/85 Billboard Advertising FAQ</h2>
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
        headline="Ready to Advertise on the I-40/85 Corridor?"
        subheadline="Check availability on Alamance County's most-trafficked billboard locations."
        buttonLabel="Check Burlington / I-40 Availability →"
        buttonHref="/contact"
      />
    </>
  );
}
