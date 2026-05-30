"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Eye, MapPin, Clock } from "lucide-react";
import StatCounter from "@/components/StatCounter";
import LeadForm from "@/components/LeadForm";
import Hero from "@/components/Hero";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const industries = [
  "Healthcare",
  "Real Estate",
  "Restaurants",
  "Retail",
  "Auto Dealers",
  "Legal Services",
  "Political Campaigns",
  "Home Services",
];

const locations = [
  {
    city: "Wilmington, NC",
    highways: "US-17 · US-74 · I-140",
    description: "New Hanover County's coastal market — tourism, healthcare, real estate, and a fast-growing metro.",
    href: "/locations/wilmington",
  },
  {
    city: "Leland & Southport, NC",
    highways: "US-74/76 · Highway 211",
    description: "Brunswick County's fastest-growing area — capturing booming residential and commuter traffic.",
    href: "/locations/leland",
  },
  {
    city: "Jacksonville, NC",
    highways: "NC-24 · US-17",
    description: "Onslow County military corridor — Camp Lejeune and a growing civilian consumer base.",
    href: "/locations/jacksonville",
  },
  {
    city: "Eastern NC",
    highways: "US-74 · US-701 · US-421",
    description: "Whiteville, Elizabethtown, Clinton, Goldsboro, and Kinston — rural highway markets with strong reach.",
    href: "/locations/coastal-nc",
  },
  {
    city: "Burlington / I-40 Corridor",
    highways: "I-40/85 · Hwy 49",
    description: "Alamance County and the I-40/85 corridor — reaching regional travelers and commuters on NC's busiest east-west interstate.",
    href: "/locations/raleigh",
  },
  {
    city: "Florence & Myrtle Beach, SC",
    highways: "I-95 · Hwy 76 · US-501",
    description: "South Carolina markets — I-95 travel corridor and the Grand Strand's high-traffic tourism zone.",
    href: "/locations/florence-sc",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Stats Bar */}
      <section style={{ backgroundColor: "#0D1230" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter value={700} suffix="+" label="Billboard Faces" />
            <StatCounter value={25} suffix="+" label="Years Experience" />
            <StatCounter value={10} suffix="+" label="NC Markets" />
            <StatCounter value={1} suffix="M+" label="Daily Impressions" />
          </div>
        </div>
      </section>

      {/* Why Billboard Advertising Works */}
      <section className="py-24 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                Advertising That Can&apos;t Be Skipped,{" "}
                <br className="hidden sm:block" />
                Blocked, or Ignored
              </h2>
              <p className="text-[#475569] text-lg max-w-2xl mx-auto">
                In a world of ad blockers and skip buttons, billboards remain
                the one medium your audience cannot avoid.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Eye,
                  title: "Unavoidable Reach",
                  body: "Billboards cannot be blocked with an ad blocker or skipped with a button. Every driver on your target highway sees your message, every single day.",
                },
                {
                  icon: MapPin,
                  title: "Hyper-Local Targeting",
                  body: "Put your brand exactly where your customers already drive. Target specific highways, intersections, and neighborhoods across North Carolina.",
                },
                {
                  icon: Clock,
                  title: "24/7 Brand Presence",
                  body: "Unlike digital ads that disappear when your budget runs out, a billboard works around the clock — rain, shine, rush hour, or midnight.",
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  className="group p-8 bg-white rounded-lg hover:-translate-y-1 transition-transform duration-200"
                  style={{
                    borderTop: "3px solid #F97316",
                    boxShadow: "0 4px 24px rgba(0,71,204,0.07)",
                  }}
                >
                  <card.icon size={28} className="text-[#F97316] mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{card.title}</h3>
                  <p className="text-[#475569] leading-relaxed text-sm">{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Billboard Types */}
      <section className="py-24 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                Static &amp; Digital Billboards Across North Carolina
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={fadeUp}
                className="p-8 lg:p-10 rounded-lg"
                style={{ backgroundColor: "#0D1230", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white/60 mb-6 uppercase tracking-widest">
                  Classic Format
                </span>
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
                  Static Billboards
                </h3>
                <p className="text-white/55 mb-6 leading-relaxed">
                  Classic 14x48 bulletin boards delivering continuous brand exposure on major NC highways and corridors.
                </p>
                <ul className="space-y-2 mb-8">
                  {["14x48 Bulletins", "10x36 Posters", "Junior Posters"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/inventory" className="text-sm font-semibold text-[#F97316] hover:text-[#EA580C] transition-colors">
                  View Static Inventory →
                </Link>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="p-8 lg:p-10 rounded-lg"
                style={{
                  background: "linear-gradient(135deg, #0B1A3D 0%, #0D1230 100%)",
                  border: "1px solid rgba(0,71,204,0.3)",
                }}
              >
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#0047CC]/20 text-[#60A5FA] mb-6 uppercase tracking-widest">
                  Dynamic Format
                </span>
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
                  Digital Billboards
                </h3>
                <p className="text-white/55 mb-6 leading-relaxed">
                  Dynamic content, multiple messages, real-time updates. Change your creative any time without printing or installation costs.
                </p>
                <ul className="space-y-2 mb-8">
                  {["6-second rotations", "Dayparting", "Real-time content updates"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0047CC]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/digital-billboards" className="text-sm font-semibold text-[#60A5FA] hover:text-blue-300 transition-colors">
                  Explore Digital →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-24 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                Billboards Where Your Customers Are
              </h2>
              <p className="text-[#475569] text-lg max-w-xl mx-auto">
                Strategic locations across North Carolina&apos;s highest-traffic corridors.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {locations.map((loc) => (
                <motion.div key={loc.city} variants={fadeUp}>
                  <Link
                    href={loc.href}
                    className="group block p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-200 relative overflow-hidden"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    <h3 className="text-xl font-black text-[#0F172A] mb-1">{loc.city}</h3>
                    <p className="text-xs font-semibold text-[#0047CC] mb-2 tracking-wide">{loc.highways}</p>
                    <p className="text-sm text-[#475569] leading-relaxed mb-4">{loc.description}</p>
                    <span className="text-xs font-bold text-[#F97316] group-hover:underline">View Locations →</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Grey Outdoor */}
      <section className="py-24 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6"
                style={{ letterSpacing: "-0.02em" }}
              >
                The Billboard Partner That Knows North Carolina
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Deep knowledge of NC traffic patterns, commuter corridors, and seasonal demographics",
                  "End-to-end service from site selection and contract to creative production and installation",
                  "Dedicated account management for every client — you always know who to call",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/70 text-base leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F97316] flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Learn About Grey Outdoor
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {[
                { value: "25+", label: "Years in NC" },
                { value: "700+", label: "Billboard Faces" },
                { value: "10", label: "Markets Served" },
                { value: "24/7", label: "Client Support" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-lg text-center"
                  style={{ backgroundColor: "#0D1230", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="text-4xl font-black text-[#F97316] mb-1" style={{ letterSpacing: "-0.02em" }}>{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F1F5F9" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              Trusted by Every Industry in North Carolina
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#475569] mb-10">
              From local retailers to regional healthcare systems, billboards get results across every sector.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-[#0F172A] bg-white border border-[#E2E8F0]"
                  style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                >
                  {ind}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lead CTA Section */}
      <section
        className="py-24 px-4"
        style={{ background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            See What Billboard Locations Are Available in Your Market
          </h2>
          <p className="text-white/80 text-lg">
            Get a free availability check and rate quote within 24 hours. No obligation.
          </p>
        </div>
        <div
          className="max-w-2xl mx-auto p-8 rounded-lg"
          style={{ backgroundColor: "#08091A" }}
        >
          <LeadForm title="" subtitle="" dark />
        </div>
      </section>
    </>
  );
}
