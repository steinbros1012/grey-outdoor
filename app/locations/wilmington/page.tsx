import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Wilmington Billboard Advertising | Grey Outdoor",
  description:
    "Billboard advertising in Wilmington, NC. Prime locations on US-17, US-74, I-140, and US-421 reaching 38,000–45,000+ daily drivers. Get availability and rates from Grey Outdoor.",
};

const faqs = [
  {
    q: "How much does billboard advertising cost in Wilmington?",
    a: "Wilmington billboard rates typically range from $800 to $3,500 per month for static bulletins, depending on location, size, and traffic volume. High-traffic corridors like US-17 and I-40 command premium rates. Digital displays are available at lower entry costs through shared rotation. Contact us for a custom quote.",
  },
  {
    q: "What billboard sizes are available in Wilmington?",
    a: "We offer 14x48 bulletins (the large format most commonly seen on highways), 10x36 posters (medium format for arterial roads), and junior posters for smaller corridors. Each size has different visibility profiles and pricing.",
  },
  {
    q: "Which Wilmington highways get the most traffic?",
    a: "US-17 (Market Street / N. College Rd) and US-74 (Oleander Dr / S. College Rd) are the highest-traffic corridors. I-140 provides strong exposure connecting Wilmington to Brunswick County, and US-421 (Carolina Beach Rd) captures southbound beach traffic. Contact us for NCDOT-verified traffic counts by corridor.",
  },
  {
    q: "How long does a billboard campaign in Wilmington run?",
    a: "Most Wilmington advertisers contract in 4-week increments, with many choosing 3, 6, or 12-month campaigns for sustained brand presence. Shorter campaigns are available for seasonal promotions.",
  },
  {
    q: "Do you handle billboard design for Wilmington advertisers?",
    a: "Yes. Our creative team can produce billboard-optimized artwork for an additional fee, or we can work with your existing brand assets. We also provide free design consultation to help ensure your creative will be effective at highway speeds.",
  },
];

export default function WilmingtonPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 relative overflow-hidden" style={{ backgroundColor: "#08091A" }}>
        <Image
          src="/hero/coastal-road.jpg"
          alt="Coastal road near Wilmington, NC"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto">
          <Link href="/inventory" className="text-xs text-white/40 hover:text-white/70 mb-4 inline-block">
            ← All Markets
          </Link>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#0047CC]/20 text-[#60A5FA] mb-4 uppercase tracking-widest">
            Wilmington, NC
          </span>
          <h1
            className="text-4xl sm:text-6xl font-black text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Wilmington Billboard Advertising
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Reach Wilmington&apos;s ~125,000 residents and coastal NC&apos;s 280,000+ metro area with
            strategic billboard placements on US-17 (Market St/N. College Rd), US-74 (Oleander/S. College),
            I-140, and US-421 (Carolina Beach Rd).
          </p>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-14 px-4" style={{ backgroundColor: "#0D1230" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "~125,000", label: "City Population" },
            { value: "280,000+", label: "Metro Area" },
            { value: "45,000*", label: "US-17 Daily Traffic" },
            { value: "38,000*", label: "US-74 Daily Traffic" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-[#F97316] mb-1" style={{ letterSpacing: "-0.02em" }}>{s.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Available Locations */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-[#0F172A] mb-8" style={{ letterSpacing: "-0.02em" }}>
              Available Billboard Locations
            </h2>
            <div className="space-y-4">
              {[
                { loc: "US-17 North (N. College Rd)", hw: "US-17 Northbound", size: "14x48", traffic: "45,000*/day", type: "Static" },
                { loc: "US-74 Business / Market St", hw: "US-74 Business", size: "14x48", traffic: "38,000*/day", type: "Static" },
                { loc: "Carolina Beach Rd (US-421)", hw: "US-421 Southbound", size: "14x48", traffic: "30,000*/day", type: "Static" },
                { loc: "Oleander Dr / S. College Rd", hw: "US-74 Westbound", size: "10x36", traffic: "28,000*/day", type: "Static" },
              ].map((loc) => (
                <div
                  key={loc.loc}
                  className="flex items-center justify-between p-5 bg-white rounded-lg"
                  style={{ border: "1px solid #E2E8F0" }}
                >
                  <div>
                    <div className="font-bold text-[#0F172A]">{loc.loc}</div>
                    <div className="text-xs text-[#0047CC] font-semibold mt-0.5">{loc.hw}</div>
                    <div className="text-xs text-[#475569] mt-1">{loc.size} · {loc.traffic}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${loc.type === "Digital" ? "bg-yellow-100 text-yellow-800" : "bg-slate-100 text-slate-600"}`}>
                      {loc.type}
                    </span>
                    <Link href="/contact" className="px-4 py-2 rounded-full bg-[#F97316] text-white text-xs font-bold hover:bg-[#EA580C] transition-colors">
                      Inquire
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-lg self-start" style={{ backgroundColor: "#0D1230" }}>
            <LeadForm
              title="Get Wilmington Availability"
              subtitle="Request specific locations and pricing for the Wilmington market."
              dark
            />
          </div>
        </div>
      </section>

      {/* Why Advertise in Wilmington */}
      <section className="py-20 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>
            Why Advertise in Wilmington?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Year-Round Tourism",
                body: "Wilmington attracts millions of visitors heading to Wrightsville, Carolina, and Kure beaches. Billboard placements on key routes capture tourist traffic every season.",
              },
              {
                title: "A Growing Economy",
                body: "Wilmington is one of NC's fastest-growing cities, with a booming health sciences sector, film industry, and expanding port. The consumer base is young, educated, and spending.",
              },
              {
                title: "Strategic Gateway Position",
                body: "As the hub of coastal NC, Wilmington captures traffic from Brunswick County, Onslow County, and the entire southeastern NC region, not just city residents.",
              },
            ].map((r) => (
              <div key={r.title} className="p-6 rounded-lg" style={{ backgroundColor: "#0D1230", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-14 px-4" style={{ backgroundColor: "#F1F5F9" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-[#0F172A] mb-6" style={{ letterSpacing: "-0.02em" }}>Industries That Succeed in Wilmington</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Tourism & Hospitality", "Healthcare (Novant/NHRMC)", "Real Estate", "Restaurants", "Retail", "Legal Services", "Home Services", "Auto Dealers"].map(i => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold text-[#0F172A] bg-white border border-[#E2E8F0]">{i}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F172A] mb-10" style={{ letterSpacing: "-0.02em" }}>
            Wilmington Billboard Advertising FAQ
          </h2>
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
        headline="Ready to Advertise in Wilmington?"
        subheadline="Get a free availability check for Wilmington billboard locations within 24 hours."
        buttonLabel="Check Wilmington Availability →"
        buttonHref="/contact"
      />
    </>
  );
}
