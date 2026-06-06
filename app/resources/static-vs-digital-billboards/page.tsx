import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Static vs Digital Billboards: Which Is Right for Your Business? | Grey Outdoor",
  description:
    "Choosing between static and digital billboards? Here's how to decide based on your campaign goals, budget, and timeline.",
};

export default function StaticVsDigitalPage() {
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
            style={{ backgroundColor: "#7C3AED" }}
          >
            Strategy
          </span>
          <h1
            className="text-3xl sm:text-5xl font-black text-white"
            style={{ letterSpacing: "-0.03em" }}
          >
            Static vs Digital Billboards: Which Is Right for Your Business?
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Both static and digital billboards work. They are not competing formats so much as different tools for different jobs. The wrong question is "which is better?" The right question is "which fits what I am trying to accomplish?" Here is a clear breakdown to help you decide.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            How Static Billboards Work
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            A static billboard is a single advertiser's message printed on vinyl and mounted on the face of the structure. Once it goes up, it runs 24 hours a day, seven days a week, for the full duration of your contract.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Contracts are typically sold in 4-week increments, with many advertisers renewing month to month or committing to quarterly or annual agreements. There are no rotation schedules, your ad is always up, always visible, and always working.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            The main trade-off is that changing your message requires printing a new vinyl, which adds cost and lead time. If you need to update a phone number, swap a seasonal offer, or refresh creative, you are looking at $200 to $600 in print costs and a few days of production time.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            How Digital Billboards Work
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Digital billboards display multiple advertisers in a rotating loop. Each advertiser gets a 6 to 8 second slot, and the rotation cycles continuously throughout the day. Your ad appears several times per minute, but it does not occupy the sign 100% of the time.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            The key advantage is flexibility. Your creative is delivered as a digital file, so you can update it remotely with no print costs and minimal lead time. You can also schedule your message by time of day, which opens up targeting options that static boards simply cannot offer.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Digital boards are also typically located in higher-traffic areas because operators choose premium corridors for their most valuable assets. That means more eyes per day, but it also means higher rates.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            When Static Is the Better Choice
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Static boards are well-suited for advertisers who have a consistent message and want to own a location fully. A few situations where static wins:
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-6 space-y-2">
            <li><strong className="text-slate-800">Long-running brand campaigns:</strong> If your goal is to build name recognition over months, static is always-on at a lower cost per day.</li>
            <li><strong className="text-slate-800">Tighter budgets:</strong> Static boards at comparable locations cost significantly less than digital. Your dollar goes further if 100% of-face time is your priority.</li>
            <li><strong className="text-slate-800">Simple, stable messages:</strong> Phone number, logo, tagline, and nothing that changes. No reason to pay for flexibility you will not use.</li>
            <li><strong className="text-slate-800">Less competitive locations:</strong> Rural markets and secondary corridors often have strong static inventory at very low rates. Digital boards may not even exist in those areas.</li>
          </ul>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            When Digital Makes More Sense
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Digital boards earn their premium when you actually need the features they offer. Consider digital when:
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-relaxed mb-6 space-y-2">
            <li><strong className="text-slate-800">Promotions with end dates:</strong> Sale ending Sunday? New location opening? You can pull the ad the moment it expires without wasting vinyl costs.</li>
            <li><strong className="text-slate-800">Multiple messages:</strong> Run your lunch special from 10am to 2pm, then switch to dinner from 4pm to 9pm. This is a natural fit for restaurants.</li>
            <li><strong className="text-slate-800">Time-sensitive campaigns:</strong> Political campaigns, event advertising, and real estate "now selling" launches all benefit from the ability to start and stop quickly.</li>
            <li><strong className="text-slate-800">Testing creative:</strong> Rotate two versions of your message and change based on performance without any print costs.</li>
            <li><strong className="text-slate-800">Short campaign windows:</strong> If you only need 2 to 4 weeks of visibility, digital is often a better fit since many static operators prefer longer commitments.</li>
          </ul>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Price Difference
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Digital boards typically cost two to four times more per period than a static board in a comparable location. Part of what you are paying for is the premium real estate (digital boards are placed on high-traffic corridors), and part is the flexibility and production savings.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            When you factor in vinyl printing costs for static boards that change frequently, the gap narrows. For a campaign that updates creative every month, digital can actually come out cheaper in total spend when you account for repeated print costs.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Can You Run Both?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Yes, and many advertisers do. A common strategy is to use a static board for year-round brand presence at lower cost, then add a digital board during peak seasons or promotions. The static board anchors your brand in the market continuously, while digital adds a flexible layer when you need to move quickly.
          </p>
          <p className="text-slate-600 leading-relaxed">
            For businesses in Eastern NC and the Wilmington area, Grey Outdoor carries both formats. We can show you the options in your market and help you decide what mix makes sense for your goals and budget.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Not Sure Which Format Is Right for You?"
        subheadline="Talk to our team and we'll match you with the right format for your goals."
        buttonLabel="Contact Us →"
        buttonHref="/contact"
      />
    </>
  );
}
