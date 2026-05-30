import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Grey Outdoor | NC Billboard Advertising Company",
  description:
    "Learn about Grey Outdoor — North Carolina's premier billboard advertising company with 25+ years of experience placing brands across NC's most-traveled corridors.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 px-4"
        style={{ backgroundColor: "#08091A" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#F97316]/15 text-[#F97316] mb-6 tracking-widest uppercase">
            Est. 1999
          </span>
          <h1
            className="text-4xl sm:text-6xl font-black text-white mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            About Grey Outdoor
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Building NC&apos;s Most Recognizable Billboard Network Since 1999
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-black text-[#0F172A] mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Our Story
          </h2>
          <div className="space-y-4 text-[#475569] text-lg leading-relaxed">
            <p>
              Grey Outdoor was founded in 1999 by a team of North Carolina
              advertising professionals who believed that outdoor advertising
              deserved the same strategic attention as any other media channel.
              What started as a small portfolio of billboards along the Wilmington
              corridor has grown into one of the most extensive outdoor advertising
              networks in the state.
            </p>
            <p>
              Over the past 25 years, we&apos;ve built relationships with property
              owners, local governments, and businesses from the mountains to the
              coast. We understand North Carolina&apos;s unique geography — how
              seasonal beach traffic transforms Highway 17 every summer, how
              the Research Triangle&apos;s explosive growth has created new high-value
              corridors, and how military communities like Jacksonville have their
              own distinct advertising dynamics.
            </p>
            <p>
              Today, Grey Outdoor manages 700+ billboard faces across 10+ NC
              markets. We operate both static bulletins and state-of-the-art
              digital displays. Every campaign we run is backed by real traffic
              data, demographic insights, and 25 years of on-the-ground
              knowledge of North Carolina.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-black text-white mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Local Expertise",
                body: "We are a North Carolina company through and through. We know these roads, these communities, and these markets better than any national outdoor company. That local knowledge translates directly into better site selection and campaign performance for our clients.",
              },
              {
                title: "Strategic Placement",
                body: "Location is everything in outdoor advertising. We do not just sell billboard faces — we help you identify the specific intersections, highways, and corridors that deliver your target audience at the right moment in their journey.",
              },
              {
                title: "Full-Service Partnership",
                body: "From the first availability check to final installation and campaign reporting, we handle every detail. Your dedicated account manager is your single point of contact — available to answer questions, adjust strategy, and ensure your campaign is performing.",
              },
            ].map((val) => (
              <div
                key={val.title}
                className="p-8 rounded-lg"
                style={{ backgroundColor: "#0D1230", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                <p className="text-white/55 leading-relaxed text-sm">{val.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F1F5F9" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Why Clients Choose Grey Outdoor
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "25+ Years NC Experience",
                body: "A proven track record in every major NC market, with deep relationships and an unmatched inventory of premium locations.",
              },
              {
                title: "No Long-Term Lock-Ins",
                body: "Flexible contract terms that match your campaign timeline — whether you need a 4-week seasonal push or a year-round presence.",
              },
              {
                title: "Creative Support",
                body: "Our in-house design team can create billboard-optimized artwork if you need it, or work with your existing brand assets.",
              },
              {
                title: "Transparent Reporting",
                body: "Regular campaign reports with traffic counts, impressions data, and photos of your live billboards — so you always know what you're getting.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 bg-white rounded-lg"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to Get Your Brand on NC's Roads?"
        subheadline="Request a free availability check and we'll show you exactly what's available in your target market."
        buttonLabel="Request Availability →"
        buttonHref="/contact"
      />
    </>
  );
}
