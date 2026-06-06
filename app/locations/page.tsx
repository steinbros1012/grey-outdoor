import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Billboard Locations | Grey Outdoor NC & SC",
  description:
    "Grey Outdoor operates 700+ billboard faces across Eastern NC, Brunswick County, the SC Pee Dee region, and I-95 corridor. Find billboard locations near you.",
};

const markets = [
  {
    name: "Wilmington & Hampstead",
    href: "/locations/wilmington",
    area: "New Hanover & Pender County",
    highways: ["Hwy 17 Digital", "US-74", "US-421"],
  },
  {
    name: "Brunswick County",
    href: "/locations/leland",
    area: "Leland · Southport · Shallotte",
    highways: ["Hwy 133", "Hwy 74/76", "Hwy 211"],
  },
  {
    name: "Jacksonville & Onslow",
    href: "/locations/jacksonville",
    area: "Camp Lejeune corridor",
    highways: ["Hwy 17", "NC-24", "US-258"],
  },
  {
    name: "Eastern NC",
    href: "/locations/coastal-nc",
    area: "Kinston · Goldsboro · Hope Mills · Rocky Mount",
    highways: ["Hwy 11", "Hwy 301", "Hwy 87"],
  },
  {
    name: "Burlington & I-40/85",
    href: "/locations/raleigh",
    area: "Alamance County",
    highways: ["I-40/85", "Hwy 49 corridor"],
  },
  {
    name: "Florence, SC",
    href: "/locations/florence-sc",
    area: "Pee Dee Region",
    highways: ["I-95", "Hwy 76", "Hwy 52"],
  },
  {
    name: "Florence & Coastal SC",
    href: "/locations/florence-sc",
    area: "Florence · Little River · Murrells Inlet",
    highways: ["I-95", "Hwy 17 SC", "Hwy 501"],
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* Section 1, Dark hero */}
      <section className="pt-24 sm:pt-32 pb-20 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-6xl font-black text-white mb-5"
            style={{ letterSpacing: "-0.03em" }}
          >
            Billboard Locations Across NC &amp; SC
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            700+ billboard faces on major highways, rural corridors, and coastal routes. If your customers
            drive it, we&apos;re probably on it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#map"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#F97316] text-white font-bold text-base hover:bg-[#EA580C] transition-colors"
            >
              View Interactive Map
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/10 text-white font-bold text-base hover:bg-white/20 transition-colors border border-white/20"
            >
              Request Availability
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2, Interactive map */}
      <section id="map" className="py-12 sm:py-20 px-4" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              Find Our Billboards on the Map
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              This map shows Grey Outdoor billboard locations across North Carolina and South Carolina.
              Click any pin for location details.
            </p>
          </div>

          <div
            className="w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg"
            style={{ height: "clamp(280px, 50vw, 600px)" }}
          >
            <iframe
              src="https://www.google.com/maps/d/embed?mid=12nkQK97D7K_ARqLXAaMi8C70XYY&ehbc=2E312F"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Grey Outdoor Billboard Locations Map"
            />
          </div>

          <p className="mt-4 text-xs text-[#94A3B8] text-center">
            Map shows current and recently available billboard locations. Contact us to confirm availability.
          </p>
        </div>
      </section>

      {/* Section 3, Market cards */}
      <section className="py-12 sm:py-20 px-4" style={{ backgroundColor: "#F1F5F9" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              Explore by Market
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {markets.map((market) => (
              <div
                key={market.name}
                className="rounded-xl p-6 flex flex-col"
                style={{ backgroundColor: "#0D1230", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex-1">
                  <h3 className="text-base font-black text-white mb-1 leading-snug">{market.name}</h3>
                  <p className="text-xs text-white/45 mb-4 leading-relaxed">{market.area}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {market.highways.map((hw) => (
                      <span
                        key={hw}
                        className="px-2 py-0.5 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: "#F97316", color: "#fff" }}
                      >
                        {hw}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={market.href}
                  className="text-sm font-bold text-[#F97316] hover:text-[#EA580C] transition-colors"
                >
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4, CTA Banner */}
      <CTABanner
        headline="Ready to Find Your Billboard?"
        subheadline="Tell us your target market and we'll send you availability and pricing within 24 hours."
        buttonLabel="Request Availability →"
        buttonHref="/contact"
      />
    </>
  );
}
