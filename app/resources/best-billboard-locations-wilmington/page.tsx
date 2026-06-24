import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Best Billboard Locations in Wilmington, NC | Grey Outdoor",
  description:
    "Wilmington's fastest-growing corridors for billboard advertising. Which roads deliver the most eyes for your advertising dollar in the Wilmington market.",
};

export default function BestBillboardLocationsWilmingtonPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 px-4" style={{ backgroundColor: "#0C4C93" }}>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/resources"
            className="text-sm font-semibold text-orange-400 hover:text-orange-300 mb-6 inline-block transition-colors"
          >
            ← Back to Resources
          </Link>
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4"
            style={{ backgroundColor: "#EB2813" }}
          >
            Locations
          </span>
          <h1
            className="text-3xl sm:text-5xl font-black text-white"
            style={{ letterSpacing: "-0.03em" }}
          >
            Best Billboard Locations in Wilmington, NC
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Wilmington is one of the fastest-growing coastal metros in North Carolina. Population has climbed steadily, new development is pushing into Pender and Brunswick counties, and visitor traffic from tourism adds a seasonal layer to an already strong year-round audience. That growth makes Wilmington a competitive outdoor advertising market, and location selection matters more than it would in a smaller, less active city.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            US-17, Market Street and North College Road
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            US-17 through Wilmington is one of the highest-traffic corridors in the region. The Market Street and North College Road segments run through a dense commercial strip anchored by major retailers, car dealers, restaurants, urgent care facilities, and service businesses of every kind.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Traffic counts on this corridor regularly exceed <strong className="text-slate-800">40,000 vehicles per day</strong> (AADT), which puts it among the most valuable billboard locations in the Wilmington market. Boards here tend to carry premium rates and low vacancy, when space opens up, it fills quickly. This corridor works well for healthcare, legal, financial services, and any brand that needs broad reach across a wide demographic.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            US-74 / Oleander Drive
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Oleander Drive is the main east-west artery connecting central Wilmington with the beach and mid-city neighborhoods. The traffic is a strong mix of residential commuters, shoppers, and people heading toward Wrightsville Beach.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            This corridor tends to attract advertisers targeting a more established residential demographic, financial advisors, healthcare practices, home improvement, and premium retail. The mix of traffic makes it a versatile placement for brands that are not purely service-oriented.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            US-421 / Carolina Beach Road
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Carolina Beach Road runs south from central Wilmington down to Carolina Beach and Kure Beach. During the summer months, this corridor carries significant tourist traffic layered on top of its year-round residential base, which drives seasonal spikes in impressions.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Advertisers who do well on this road include seafood restaurants, entertainment venues, boat and watersports rental businesses, home services targeting the growing south Wilmington neighborhoods, and real estate firms. If you run a business with a seasonal component, US-421 is worth serious consideration.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Hampstead and US-17 North, Pender County's Growth Corridor
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Hampstead has been one of the fastest-growing communities in the entire state for the past decade. The US-17 corridor north of Wilmington through Pender County connects a wave of new subdivisions, commercial development, and transplant residents who have relocated from larger metros.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Grey Outdoor has a <strong className="text-slate-800">digital billboard on US-17 in the Hampstead area</strong>, positioned to capture this growing audience. New residents actively need local services, HVAC, pest control, dental care, grocery delivery, childcare, financial planning, and outdoor advertising is one of the most efficient ways to reach them before they have formed strong brand loyalties.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            This is a corridor where early presence pays dividends. Advertisers who get in front of Hampstead's new residents now are establishing recognition with a population that will continue to grow.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            I-140 / Military Cutoff Extension
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            The Military Cutoff Extension and I-140 corridor connects Wilmington with the rapidly developing areas of Leland and Brunswick County to the southwest. This is a newer road that has opened up significant residential and commercial growth on both ends.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Traffic counts are climbing as development fills in around the corridor. Brunswick County is one of the fastest-growing counties in NC, and commuters using this route to access Wilmington for work represent a strong daily audience for workplace services, healthcare, food, and banking. Grey Outdoor has inventory in Brunswick County, which positions us well to cover this growth area.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Who Advertises in Wilmington?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Wilmington's outdoor advertising market is active across a wide range of industries. The most consistent billboard advertisers in this market include:
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-6 space-y-2">
            <li><strong className="text-slate-800">Healthcare systems and practices</strong>, Novant, NHRMC, urgent care chains, specialty practices</li>
            <li><strong className="text-slate-800">Real estate developers and agents</strong>, especially for new communities in Brunswick and Pender counties</li>
            <li><strong className="text-slate-800">Legal firms</strong>, personal injury and family law are particularly active</li>
            <li><strong className="text-slate-800">Restaurants and food chains</strong> targeting commuter and tourist traffic</li>
            <li><strong className="text-slate-800">Car dealerships</strong> on the US-17 corridor</li>
            <li><strong className="text-slate-800">Home services</strong>, HVAC, pest control, roofing, and landscaping serving the growth areas</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            If your business serves the Wilmington metro or surrounding coastal counties, we can show you what inventory is currently available and what the traffic numbers look like at each location.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Check Availability on Wilmington Billboards"
        subheadline="Grey Outdoor has static and digital inventory across the Wilmington and Hampstead corridors."
        buttonLabel="Contact Us →"
        buttonHref="/contact"
      />
    </>
  );
}
