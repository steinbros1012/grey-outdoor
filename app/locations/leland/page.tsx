import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Leland & Brunswick County Billboard Advertising | Grey Outdoor",
  description:
    "Billboard advertising in Leland, Southport, and Brunswick County, NC. Strategic placements on US-74/76, Highway 17 South, and NC-133 reaching commuters and one of NC's fastest-growing counties.",
};

const faqs = [
  { q: "How much does billboard advertising cost in Leland?", a: "Leland billboard rates are generally $600 to $2,200 per month, making it one of the more affordable markets in southeastern NC while still delivering strong commuter reach. The US-74/76 corridor is the premium location, connecting Leland to downtown Wilmington." },
  { q: "Who sees Leland billboards?", a: "Leland billboards primarily reach Brunswick County residents commuting to Wilmington, shoppers visiting Leland Town Center and Waterford, and through-traffic on US-74/76 heading to and from the Wilmington metro area." },
  { q: "Is Leland growing fast enough to advertise there?", a: "Leland is one of the fastest-growing towns in NC. Brunswick County has seen explosive population growth driven by retirees, remote workers, and families priced out of Wilmington. The Leland market will only become more valuable as growth continues." },
  { q: "What are the best billboard locations in Leland?", a: "The US-74/76 corridor between Leland and the Cape Fear Memorial Bridge is the highest-traffic position. Leland Town Center area on Village Road is also strong for retail-oriented advertisers. We'll show you all available options with traffic data." },
  { q: "Can I advertise in both Leland and Wilmington together?", a: "Absolutely. Many of our clients run coordinated campaigns across both markets. A Leland billboard captures the Brunswick County audience while Wilmington placements reach the core metro, together they cover the full southeastern NC market." },
];

export default function LelandPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 relative overflow-hidden" style={{ backgroundColor: "#08091A" }}>
        <Image
          src="/hero/coastal-road.jpg"
          alt="Coastal highway in Brunswick County, NC"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto">
          <Link href="/inventory" className="text-xs text-white/40 hover:text-white/70 mb-4 inline-block">← All Markets</Link>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#B45309]/20 text-amber-400 mb-4 uppercase tracking-widest">Leland &amp; Brunswick County, NC</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4" style={{ letterSpacing: "-0.03em" }}>Leland &amp; Southport Billboard Advertising</h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Brunswick County is one of NC&apos;s fastest-growing counties, driven by retirees, remote workers,
            and families relocating from Wilmington. Key corridors: US-74/76 (main artery), Highway 17 South,
            and NC-133. Reach new residents, home services buyers, healthcare seekers, and retail shoppers.
          </p>
        </div>
      </section>

      <section className="py-14 px-4" style={{ backgroundColor: "#0D1230" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[{ value: "30,000+", label: "Town Population" }, { value: "150,000+", label: "Brunswick County" }, { value: "38,000", label: "US-74/76 Daily Traffic" }, { value: "#3", label: "Fastest Growing NC Town" }].map((s) => (
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
                { loc: "US-74/76 Brunswick Town Center corridor", hw: "US-74/76 Eastbound", size: "14x48", traffic: "32,000*/day", type: "Static" },
                { loc: "NC-211 at Howe St, Southport", hw: "NC-211", size: "10x36", traffic: "18,000*/day", type: "Static" },
                { loc: "Highway 17 South at Village Road", hw: "Highway 17 South", size: "10x36", traffic: "22,000*/day", type: "Static" },
              ].map((loc) => (
                <div key={loc.loc} className="flex items-center justify-between p-5 bg-white rounded-lg" style={{ border: "1px solid #E2E8F0" }}>
                  <div>
                    <div className="font-bold text-[#0F172A]">{loc.loc}</div>
                    <div className="text-xs text-[#0047CC] font-semibold mt-0.5">{loc.hw}</div>
                    <div className="text-xs text-[#475569] mt-1">{loc.size} · {loc.traffic}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600">{loc.type}</span>
                    <Link href="/contact" className="px-4 py-2 rounded-full bg-[#F97316] text-white text-xs font-bold hover:bg-[#EA580C] transition-colors">Inquire</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-lg self-start" style={{ backgroundColor: "#0D1230" }}>
            <LeadForm title="Get Leland Availability" subtitle="Request locations and pricing for the Leland/Brunswick County market." dark />
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>Why Advertise in Leland?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "New Residents = New Customers", body: "Leland is adding thousands of new households every year. New residents are actively searching for local services, restaurants, healthcare providers, and retailers, making billboard advertising especially effective in this growth market." },
              { title: "Captive Commuter Audience", body: "Tens of thousands of Leland and Brunswick County residents commute to Wilmington daily via US-74/76. Billboard placements on this corridor reach the same commuters twice per day, five days a week, for the duration of your campaign." },
              { title: "Underserved Advertising Market", body: "Compared to Wilmington, Leland offers fewer competing advertisers and lower rates, giving brands the opportunity to own key locations and build strong recall among a growing, loyal local audience." },
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
          <h2 className="text-2xl font-black text-[#0F172A] mb-6" style={{ letterSpacing: "-0.02em" }}>Industries That Succeed in Leland</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Real Estate", "Home Builders", "Home Services", "Healthcare", "Restaurants", "Retail", "Insurance", "Childcare & Schools"].map(i => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold text-[#0F172A] bg-white border border-[#E2E8F0]">{i}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F172A] mb-10" style={{ letterSpacing: "-0.02em" }}>Leland Billboard Advertising FAQ</h2>
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

      <CTABanner headline="Ready to Advertise in Leland?" subheadline="Get a free availability check for Leland and Brunswick County billboard locations." buttonLabel="Check Leland Availability →" buttonHref="/contact" />
    </>
  );
}
