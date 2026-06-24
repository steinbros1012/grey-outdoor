import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Eastern NC Billboard Advertising | Grey Outdoor",
  description:
    "Billboard advertising across Eastern NC, Whiteville, Elizabethtown, Southport, Hampstead, Clinton, and Goldsboro. Key highways: US-74, US-701, NC-87, Highway 211.",
};

const faqs = [
  { q: "Which Eastern NC counties does Grey Outdoor serve?", a: "Grey Outdoor's Eastern NC coverage includes Columbus County (Whiteville), Bladen County (Elizabethtown), Sampson County (Clinton), Wayne County (Goldsboro), Duplin/Lenoir (Kinston), Pender County (Hampstead), and Brunswick County coastal areas including Southport. Contact us for availability in your specific market." },
  { q: "How much does billboard advertising cost in Eastern NC?", a: "Eastern NC billboard rates are generally more affordable than metro markets, typically $400 to $1,200 per month for static locations on key corridors. US-74 and US-701 placements in Whiteville and Elizabethtown offer strong rural reach at competitive rates." },
  { q: "What highways have the best billboard exposure in Eastern NC?", a: "US-74 is the primary east-west artery through Columbus and Brunswick counties. US-701 is the key north-south route through Bladen and Sampson counties. Highway 211 connects Southport to the inland markets. Highway 17 at Hampstead is strong for Pender County traffic." },
  { q: "Is Eastern NC worth advertising in for regional businesses?", a: "Yes. Eastern NC markets are often underserved by competing advertisers, which means your brand can achieve strong recall at accessible rates. These communities are tight-knit and brand loyalty runs deep, billboard advertising is particularly effective for businesses establishing a regional presence." },
  { q: "Can I run a coordinated campaign across multiple Eastern NC markets?", a: "Absolutely. Many clients coordinate placements across Whiteville, Elizabethtown, and Goldsboro as part of a regional Eastern NC campaign. We can show you available inventory across all these corridors and help you build a cost-effective multi-market plan." },
];

export default function CoastalNCPage() {
  return (
    <>
      <section className="pt-24 sm:pt-32 pb-16 px-4 relative overflow-hidden" style={{ backgroundColor: "#4B5563" }}>
        <Image
          src="/hero/highway-3.jpg"
          alt="Beach and coastal highway in Eastern NC"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto">
          <Link href="/inventory" className="text-xs text-white/40 hover:text-white/70 mb-4 inline-block">← All Markets</Link>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#0891B2]/20 text-cyan-400 mb-4 uppercase tracking-widest">Eastern NC &amp; Coastal</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4" style={{ letterSpacing: "-0.03em" }}>Eastern NC &amp; Coastal Billboard Advertising</h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Grey Outdoor covers the Eastern NC highway network, Whiteville (Columbus County),
            Elizabethtown (Bladen County), Clinton (Sampson County), Goldsboro (Wayne County),
            Kinston, Southport, and Hampstead (Pender County). Key corridors: US-74, US-701, NC-87, and Highway 211.
          </p>
        </div>
      </section>

      <section className="py-14 px-4" style={{ backgroundColor: "#4B5563" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[{ value: "6+", label: "Eastern NC Counties" }, { value: "US-74", label: "Primary East-West Artery" }, { value: "US-701", label: "Bladen/Columbus Corridor" }, { value: "NC-87/211", label: "Coastal Access Routes" }].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-[#4B5563] mb-1" style={{ letterSpacing: "-0.02em" }}>{s.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-[#1F2937] mb-8" style={{ letterSpacing: "-0.02em" }}>Available Billboard Locations</h2>
            <div className="space-y-4">
              {[
                { loc: "US-74 at NC-130, Whiteville", hw: "US-74", size: "10x36", traffic: "15,000*/day", type: "Static" },
                { loc: "US-701 at NC-87, Elizabethtown", hw: "US-701", size: "10x36", traffic: "12,000*/day", type: "Static" },
                { loc: "NC-211 at Southport (Howe St)", hw: "NC-211", size: "10x36", traffic: "18,000*/day", type: "Static" },
                { loc: "Highway 17 at Hampstead, Pender County", hw: "Highway 17 Northbound", size: "14x48", traffic: "20,000*/day", type: "Static" },
              ].map((loc) => (
                <div key={loc.loc} className="flex items-center justify-between p-5 bg-white rounded-lg" style={{ border: "1px solid #E2E8F0" }}>
                  <div>
                    <div className="font-bold text-[#1F2937]">{loc.loc}</div>
                    <div className="text-xs text-[#4B5563] font-semibold mt-0.5">{loc.hw}</div>
                    <div className="text-xs text-[#475569] mt-1">{loc.size} · {loc.traffic}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600">{loc.type}</span>
                    <Link href="/contact" className="px-4 py-2 rounded-full bg-[#4B5563] text-white text-xs font-bold hover:bg-[#374151] transition-colors">Inquire</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-lg self-start" style={{ backgroundColor: "#4B5563" }}>
            <LeadForm title="Get Coastal NC Availability" subtitle="Request locations and pricing for the Coastal NC market." dark />
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#4B5563" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>Why Advertise in Eastern NC?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Highway Corridor Dominance", body: "Eastern NC's rural highway network, US-74, US-701, NC-87, and Highway 211, funnels regional traffic through a limited number of corridors, giving billboard advertisers unavoidable exposure with minimal competing media." },
              { title: "Underserved Advertising Market", body: "Compared to metro NC, Eastern NC has fewer competing advertisers. Brands can achieve dominant billboard presence at accessible rates while building strong recall among loyal local audiences." },
              { title: "Coastal Gateway Traffic", body: "Highway 211 and the Southport/Hampstead corridors carry significant seasonal and through traffic from inland markets heading to Brunswick and Pender County beaches, adding tourism reach on top of the resident base." },
            ].map((r) => (
              <div key={r.title} className="p-6 rounded-lg" style={{ backgroundColor: "#4B5563", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4" style={{ backgroundColor: "#F1F5F9" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-[#1F2937] mb-6" style={{ letterSpacing: "-0.02em" }}>Industries That Succeed in Eastern NC</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Agriculture & Farm Supply", "Healthcare", "Auto Dealers", "Home Services", "Real Estate", "Restaurants", "Retail", "Insurance"].map(i => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold text-[#1F2937] bg-white border border-[#E2E8F0]">{i}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#1F2937] mb-10" style={{ letterSpacing: "-0.02em" }}>Eastern NC Billboard Advertising FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 bg-white rounded-lg" style={{ border: "1px solid #E2E8F0" }}>
                <h3 className="font-bold text-[#1F2937] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="Ready to Reach Eastern NC?" subheadline="Check availability on Eastern NC's most-traveled highway corridors." buttonLabel="Check Eastern NC Availability →" buttonHref="/contact" />
    </>
  );
}
