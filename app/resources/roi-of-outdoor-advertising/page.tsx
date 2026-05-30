import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "The ROI of Billboard Advertising: What the Data Shows | Grey Outdoor",
  description:
    "How does outdoor advertising perform compared to other media? Industry research shows strong recall, brand lift, and purchase intent from billboard campaigns.",
};

export default function ROIOutdoorAdvertisingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/resources"
            className="text-sm font-semibold text-orange-400 hover:text-orange-300 mb-6 inline-block transition-colors"
          >
            ← Back to Resources
          </Link>
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4"
            style={{ backgroundColor: "#059669" }}
          >
            Research
          </span>
          <h1
            className="text-3xl sm:text-5xl font-black text-white"
            style={{ letterSpacing: "-0.03em" }}
          >
            The ROI of Billboard Advertising: What the Data Shows
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Outdoor advertising is one of the oldest media channels still in active use, and it continues to outperform many newer formats on key metrics like recall and brand awareness. Before committing ad budget, most businesses want to know if it actually works. Here is what the data says.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Recall Rates
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            According to research from the Outdoor Advertising Association of America (OAAA), <strong className="text-slate-800">71% of people recall seeing a billboard ad</strong> in the 30 days before being surveyed. For comparison, recall rates for online display ads hover around 44%.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            That gap comes down to context. A billboard is a physical object in the environment you are moving through. It is not competing for attention inside a feed with dozens of other pieces of content. When someone drives the same route every day, they see the same billboard repeatedly, which compounds recall over time.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Brand Awareness Lift
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Multiple studies show that more than 80% of adults notice billboard advertising during their regular driving routes. That level of baseline awareness is difficult and expensive to achieve through digital channels alone, where rising CPMs and ad fatigue eat into performance over time.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            For local businesses in particular, billboards build a sense of presence in the community. Customers who see your brand on the side of the road repeatedly start to associate it with the area. That kind of geographic credibility takes time to build through other channels but happens naturally with outdoor advertising.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            The 24/7 Advantage
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Unlike digital advertising, a billboard runs continuously for the duration of your contract. You pay once and it is working around the clock, no daily budget caps, no bid adjustments, no algorithm deciding whether to show your ad.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            There is no click fraud on a billboard. No ad blocker can remove it. No platform update changes its reach overnight. In a media landscape where digital performance can swing dramatically based on platform decisions outside your control, outdoor advertising provides a stable, predictable presence.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            On a cost-per-thousand impressions (CPM) basis, billboards are often the most efficient media buy available in a local market, especially in areas with strong daily commuter traffic.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Who Does It Work Best For?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Outdoor advertising consistently performs well for a specific set of industries and use cases:
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-6 space-y-2">
            <li><strong className="text-slate-800">Local businesses</strong> that serve customers in a defined geographic area, HVAC, plumbing, roofing, landscaping</li>
            <li><strong className="text-slate-800">Healthcare providers</strong> including hospitals, urgent care, specialty practices, and insurance</li>
            <li><strong className="text-slate-800">Legal services</strong>, personal injury, family law, and criminal defense firms are consistent outdoor advertisers</li>
            <li><strong className="text-slate-800">Real estate</strong>, new communities, luxury listings, and developer brands</li>
            <li><strong className="text-slate-800">Restaurants</strong> targeting commuter routes for lunch and dinner traffic</li>
            <li><strong className="text-slate-800">Auto dealers</strong> and large-ticket retailers</li>
            <li><strong className="text-slate-800">Political campaigns</strong> where geographic coverage and high-frequency impressions matter</li>
          </ul>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            How to Measure Results
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Outdoor advertising does not generate a click report, which frustrates marketers used to digital analytics. But there are concrete ways to measure performance:
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-6 space-y-2">
            <li><strong className="text-slate-800">Call tracking numbers:</strong> Use a unique phone number on your billboard and track inbound calls separately from other channels.</li>
            <li><strong className="text-slate-800">Vanity URLs:</strong> A short, memorable URL on the board that you can track in your analytics (e.g., greyoutdoor.com/quote).</li>
            <li><strong className="text-slate-800">Promo codes:</strong> Ask customers to mention the billboard or use a specific code and track redemptions.</li>
            <li><strong className="text-slate-800">Sales correlation:</strong> Compare revenue or lead volume before and after the campaign launched in the same period year-over-year.</li>
            <li><strong className="text-slate-800">Brand awareness surveys:</strong> Simple before-and-after surveys with your customer base can quantify recognition lift.</li>
          </ul>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Realistic Expectations
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Billboards are not a direct-response channel. Someone driving by at 65mph is not going to pull over and call you on the spot. What they will do is remember your name when they need what you offer, or recognize your brand when they see it again through another channel.
          </p>
          <p className="text-slate-600 leading-relaxed">
            The return on outdoor advertising compounds over time. A three-month campaign builds more awareness than three separate one-month campaigns because recognition builds on prior exposure. Businesses that treat billboards as a long-term presence tool rather than a short-term conversion machine tend to get the most out of them. Used alongside digital, direct mail, or TV, the effect is stronger than any channel running alone.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Ready to Run Your First Campaign?"
        subheadline="Talk to our team about available locations in your NC or SC market."
        buttonLabel="Contact Us →"
        buttonHref="/contact"
      />
    </>
  );
}
