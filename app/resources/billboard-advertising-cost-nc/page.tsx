import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "How Much Does Billboard Advertising Cost in NC? | Grey Outdoor",
  description:
    "Billboard advertising costs in North Carolina vary by market, size, and format. Here's what NC businesses actually pay and what drives the price.",
};

export default function BillboardCostNCPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/resources"
            className="text-sm font-semibold text-orange-400 hover:text-orange-300 mb-6 inline-block transition-colors"
          >
            ← Back to Resources
          </Link>
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4"
            style={{ backgroundColor: "#0047CC" }}
          >
            Pricing
          </span>
          <h1
            className="text-3xl sm:text-5xl font-black text-white"
            style={{ letterSpacing: "-0.03em" }}
          >
            How Much Does Billboard Advertising Cost in NC?
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Billboard advertising in North Carolina does not have a single price. What you pay depends on where the board is, what format it uses, how much traffic passes it, and what market you are in. A static board on a rural highway in Duplin County costs a fraction of a digital display on a high-traffic Wilmington corridor. Here is a realistic breakdown of what businesses in NC and SC actually pay.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Static Billboard Rates in NC
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Static billboards are the standard vinyl-faced boards you see on highways and state roads throughout the state. Pricing is typically quoted per four-week period (28 days), not per month.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            In rural highway markets, rates generally run from <strong className="text-slate-800">$300 to $600 per period</strong>. These boards have lower traffic counts but serve tight geographic areas well, which makes them effective for businesses with a local customer base.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Mid-size markets and secondary corridors in towns like Jacksonville, Goldsboro, or New Bern typically fall in the <strong className="text-slate-800">$500 to $1,200 per period</strong> range. Traffic counts are higher and competition for locations is stronger.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Major corridors in growing markets like Wilmington, the Brunswick County area, and the Grand Strand in SC can run <strong className="text-slate-800">$1,500 to $3,500 per period</strong> or more for premium placements. Grey Outdoor operates primarily in Eastern NC, Brunswick County, and the SC coastal markets, so those are the rate ranges most relevant to our inventory.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Digital Billboard Rates
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Digital billboards run multiple advertisers on a rotating schedule, typically 6 to 8 seconds per spot. Because you are sharing the sign with other advertisers, your ad does not show 100% of the time, but you gain the ability to change your creative without reprinting vinyl and schedule messages by time of day.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Digital rates typically run <strong className="text-slate-800">two to four times the price of a comparable static board</strong>. In our Eastern NC and Brunswick County markets, that puts digital advertising in the <strong className="text-slate-800">$1,000 to $5,000+ per period</strong> range depending on location and demand.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            High-demand digital locations in growing corridors like US-17 in Hampstead or the Brunswick County growth area command premium rates because of strong AADT numbers and limited supply.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            What Affects the Price?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Several factors drive billboard pricing beyond just the market:
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-6 space-y-2">
            <li><strong className="text-slate-800">Annual Average Daily Traffic (AADT):</strong> The higher the traffic count, the more valuable the location. NCDOT publishes traffic count data and operators use it to set rates.</li>
            <li><strong className="text-slate-800">Visibility and position:</strong> A board that can be seen from 1,000 feet away is worth more than one that appears around a curve. Read distance, angle, and any obstructions all factor in.</li>
            <li><strong className="text-slate-800">Market size:</strong> Larger metros mean more competition and higher rates. Rural markets are cheaper but still highly effective for local advertisers.</li>
            <li><strong className="text-slate-800">Lease term:</strong> Operators often discount longer-term contracts. A 12-month commitment typically costs less per period than a rolling 4-week deal.</li>
            <li><strong className="text-slate-800">Demand for that specific location:</strong> A board that sits empty rarely commands top dollar. A board with a waiting list does.</li>
          </ul>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Production Costs
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            The space cost is one part of the total. You also need to factor in creative production.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            For static billboards, printing a vinyl face typically costs <strong className="text-slate-800">$200 to $600</strong> depending on board size (14x48 bulletins cost more than 10x22 posters). Most operators can handle printing, or you can supply your own print-ready file.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            For digital billboards, content is delivered as a file upload, so there is no printing cost. Design work for a simple static digital creative can cost <strong className="text-slate-800">$0 if you have in-house design capability</strong>, or $100 to $200 for a professional graphic. Animated or video content takes more time and will cost proportionally more.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            How to Get a Real Number for Your Market
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            The most reliable way to get accurate pricing is to call the operator directly and ask about specific locations. General rate ranges are useful for budgeting, but actual availability and pricing depend on what boards are open in your target area right now.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            When you contact Grey Outdoor, we will walk you through what is available in your market, what traffic counts look like at each location, what the all-in cost would be including production, and what a realistic campaign looks like for your budget. There is no obligation to that conversation.
          </p>
          <p className="text-slate-600 leading-relaxed">
            If you are targeting Eastern NC, the Wilmington market, Brunswick County, or coastal SC, we have direct inventory knowledge and can give you a real number fast.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Get a Real Quote for Your Market"
        subheadline="We'll tell you exactly what billboard advertising costs in your specific NC or SC market."
        buttonLabel="Contact Us →"
        buttonHref="/contact"
      />
    </>
  );
}
