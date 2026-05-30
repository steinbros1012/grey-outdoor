import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { Zap, Clock, BarChart3, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Billboards in North Carolina | Grey Outdoor",
  description:
    "Digital billboard advertising across North Carolina. Real-time content updates, dayparting, and multiple advertiser rotations. Explore Grey Outdoor's digital network.",
};

export default function DigitalBillboardsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        style={{ backgroundColor: "#08091A" }}
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,71,204,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#0047CC]/20 text-[#60A5FA] mb-6 tracking-widest uppercase">
            LED Display Technology
          </span>
          <h1
            className="text-4xl sm:text-6xl font-black text-white mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            Digital Billboards in North Carolina
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            The power of outdoor advertising, plus the flexibility of digital.
            Update your message in real time, target by time of day, and share
            the most valuable intersections in NC.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#0047CC] text-white font-bold hover:bg-blue-700 transition-colors"
            >
              Check Digital Availability
            </Link>
            <Link
              href="/inventory"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-colors"
            >
              View Full Inventory
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Why Advertisers Love Digital Billboards
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Real-Time Updates",
                body: "Change your message at any time without printing costs, crew scheduling, or lead time. Launch a sale, respond to news, or update pricing in minutes.",
              },
              {
                icon: Users,
                title: "Multiple Advertisers",
                body: "Share a digital screen with other advertisers in a 6-second rotation — making premium locations affordable for businesses of every size.",
              },
              {
                icon: Clock,
                title: "Dayparting",
                body: "Show your breakfast special at 7am, your lunch deal at 11am, and your evening happy hour at 4pm. Target messages to specific windows when your customers are most receptive.",
              },
              {
                icon: BarChart3,
                title: "Impression Analytics",
                body: "Digital displays come with traffic and impression data so you can measure reach and optimize your campaign placement over time.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="p-6 bg-white rounded-lg"
                style={{ boxShadow: "0 4px 20px rgba(0,71,204,0.07)", borderTop: "3px solid #0047CC" }}
              >
                <b.icon size={26} className="text-[#0047CC] mb-4" aria-hidden="true" />
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{b.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-black text-white mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              How Digital Billboard Advertising Works
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Choose Your Location",
                body: "We walk you through available digital screens in your target market, with traffic counts and demographic data for each location. You pick the right intersection for your audience.",
              },
              {
                step: "02",
                title: "Submit Your Creative",
                body: "Provide your ad files in the required format (we will send you specs). Our team will confirm your artwork meets display standards and upload it to our content management system.",
              },
              {
                step: "03",
                title: "Go Live and Optimize",
                body: "Your ads go live on schedule. You can request content changes at any time during your contract. We provide regular impression reports so you can measure results and adjust as needed.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="flex gap-6 p-6 rounded-lg"
                style={{ backgroundColor: "#0D1230", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="text-4xl font-black text-[#0047CC]/40 flex-shrink-0 leading-none">{s.step}</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F1F5F9" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Digital vs. Static Billboards
            </h2>
            <p className="text-[#475569]">Choose the format that fits your campaign goals.</p>
          </div>
          <div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: "#0F172A" }}>
                  <th className="text-left p-4 text-sm font-bold text-white/60">Feature</th>
                  <th className="p-4 text-sm font-bold text-[#60A5FA] text-center">Digital</th>
                  <th className="p-4 text-sm font-bold text-white/60 text-center">Static</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Exclusive location", "No (shared rotation)", "Yes"],
                  ["Change creative anytime", "Yes", "Extra cost"],
                  ["Daypart scheduling", "Yes", "No"],
                  ["Lower entry cost", "Yes", "No"],
                  ["24/7 brand ownership", "No", "Yes"],
                  ["No print costs", "Yes", "No"],
                  ["Best for short campaigns", "Yes", "Less ideal"],
                  ["Best for brand dominance", "Less ideal", "Yes"],
                ].map(([feature, digital, stat]) => (
                  <tr key={feature} className="border-t border-[#F1F5F9]">
                    <td className="p-4 text-sm text-[#475569]">{feature}</td>
                    <td className="p-4 text-sm text-center font-semibold text-[#0047CC]">{digital}</td>
                    <td className="p-4 text-sm text-center text-[#475569]">{stat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to Go Live on a Digital Billboard?"
        subheadline="Check availability across our NC digital network and get a custom rate quote within 24 hours."
        buttonLabel="Check Digital Availability →"
        buttonHref="/contact"
      />
    </>
  );
}
