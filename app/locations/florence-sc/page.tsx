import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Florence SC Billboard Advertising | Grey Outdoor",
  description:
    "Billboard advertising in Florence, SC. Prime locations on I-95, US-76, US-52, and US-301 capturing 70,000+ daily drivers on one of the Southeast's most-traveled interstate corridors.",
};

const faqs = [
  {
    q: "How much does a billboard cost in Florence, SC?",
    a: "Florence SC billboard rates typically range from $800 to $3,000 per month for static bulletins, depending on location, traffic volume, and format. I-95 interchange positions command premium rates due to the highway's exceptionally high AADT. Contact Grey Outdoor for a custom quote with current availability.",
  },
  {
    q: "What businesses advertise on I-95 in Florence?",
    a: "Florence's I-95 corridor is a natural fit for gas stations, hotels, restaurants, truck stops, and tourism businesses targeting interstate travelers. Local businesses, healthcare providers, auto dealers, retailers, and home services, also use I-95 placements to build broad regional awareness across the Florence metro.",
  },
  {
    q: "Why is Florence, SC a strong billboard market?",
    a: "Florence sits at the junction of I-95 and US-76/52/301, making it one of the Southeast's most important travel intersections. I-95 carries 70,000+ vehicles per day through Florence, including significant tourist traffic to/from Florida and freight/trucking traffic. This creates exceptional reach for both travel-oriented and local advertisers.",
  },
  {
    q: "Which Florence corridors are best for billboard advertising?",
    a: "The I-95 interchange at Hwy 76 is the highest-traffic position in the market. US-76 (David McLeod Blvd) and US-52 are strong secondary corridors for reaching local Florence residents and commuters. US-301 captures additional north-south traffic. We will show you available options with verified traffic data.",
  },
  {
    q: "Does Grey Outdoor serve other South Carolina markets?",
    a: "Yes. In addition to Florence, Grey Outdoor serves Marlboro County (Bennettsville) and the Myrtle Beach/Horry County area (US-501 corridor). Contact us to discuss multi-market SC campaigns or coordinated NC/SC advertising packages.",
  },
];

export default function FlorenceSCPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 relative overflow-hidden" style={{ backgroundColor: "#08091A" }}>
        <Image
          src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1920&q=80"
          alt="Interstate highway in Florence, SC"
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
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#059669]/20 text-emerald-400 mb-4 uppercase tracking-widest">
            Florence, SC
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
            Florence, SC Billboard Advertising
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Florence sits at the crossroads of I-95, US-76, US-52, and US-301, one of the Southeast&apos;s
            most important travel intersections. Capture tourism, trucking, and local business traffic on
            an interstate corridor carrying 70,000+ vehicles daily.
          </p>
        </div>
      </section>

      <section className="py-14 px-4" style={{ backgroundColor: "#0D1230" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "70,000+", label: "I-95 Daily Traffic*" },
            { value: "~145,000", label: "Florence County Pop." },
            { value: "I-95/76", label: "Primary Interchange" },
            { value: "4", label: "Key US Corridors" },
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
            <h2 className="text-3xl font-black text-[#0F172A] mb-8" style={{ letterSpacing: "-0.02em" }}>
              Available Billboard Locations
            </h2>
            <div className="space-y-4">
              {[
                { loc: "I-95 at Hwy 76 interchange", hw: "I-95 (both directions)", size: "14x48", traffic: "65,000*/day", type: "Static" },
                { loc: "US-76 / David McLeod Blvd corridor", hw: "US-76 Eastbound", size: "14x48", traffic: "35,000*/day", type: "Static" },
                { loc: "US-52 at Irby St", hw: "US-52 Northbound", size: "10x36", traffic: "28,000*/day", type: "Static" },
                { loc: "US-301 at N. Cashua Dr", hw: "US-301 Southbound", size: "10x36", traffic: "22,000*/day", type: "Static" },
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
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600">{loc.type}</span>
                    <Link href="/contact" className="px-4 py-2 rounded-full bg-[#F97316] text-white text-xs font-bold hover:bg-[#EA580C] transition-colors">
                      Inquire
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#94A3B8]">
              *Traffic estimates based on SCDOT AADT data. Contact Grey Outdoor for verified counts.
            </p>
          </div>
          <div className="p-6 rounded-lg self-start" style={{ backgroundColor: "#0D1230" }}>
            <LeadForm
              title="Get Florence SC Availability"
              subtitle="Request specific locations and pricing for the Florence, SC market."
              dark
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>
            Why Advertise in Florence, SC?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "I-95 Corridor Dominance",
                body: "Florence is a mandatory stop on I-95, the primary North-South artery of the Eastern Seaboard. Billboard placements at the I-95/Hwy 76 interchange capture an unavoidable audience of tourists, truckers, and regional commuters around the clock.",
              },
              {
                title: "Multi-Highway Intersection",
                body: "Unlike single-road markets, Florence sits at the junction of four major US corridors: I-95, US-76, US-52, and US-301. This gives advertisers the flexibility to reach both the interstate travel audience and the local Florence consumer market with a single coordinated campaign.",
              },
              {
                title: "Regional Hub for Eastern SC",
                body: "Florence serves as the retail, healthcare, and employment hub for a wide swath of eastern South Carolina. Billboard advertising here reaches not just Florence County residents, but consumers driving in from Darlington, Marion, Dillon, and surrounding counties.",
              },
            ].map((r) => (
              <div
                key={r.title}
                className="p-6 rounded-lg"
                style={{ backgroundColor: "#0D1230", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4" style={{ backgroundColor: "#F1F5F9" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-[#0F172A] mb-6" style={{ letterSpacing: "-0.02em" }}>
            Industries That Succeed in Florence, SC
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Hotels & Hospitality", "Restaurants", "Gas Stations & Travel Centers", "Healthcare", "Auto Dealers", "Retail", "Legal Services", "Home Services"].map((i) => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold text-[#0F172A] bg-white border border-[#E2E8F0]">{i}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F172A] mb-10" style={{ letterSpacing: "-0.02em" }}>
            Florence, SC Billboard Advertising FAQ
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
        headline="Ready to Advertise in Florence, SC?"
        subheadline="Get a free availability check for I-95 and Florence SC billboard locations within 24 hours."
        buttonLabel="Check Florence SC Availability →"
        buttonHref="/contact"
      />
    </>
  );
}
