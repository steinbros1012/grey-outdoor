"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Eye, MapPin, Clock, ChevronRight, ArrowRight } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import Hero from "@/components/Hero";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
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
  "Financial Services",
  "Education",
];

const locations = [
  {
    city: "Wilmington, NC",
    highways: "US-17 · US-74 · I-140",
    description:
      "New Hanover County's coastal metro — tourism, healthcare, real estate, and a fast-growing professional base.",
    href: "/locations/wilmington",
  },
  {
    city: "Leland & Southport, NC",
    highways: "US-74/76 · Highway 211",
    description:
      "Brunswick County's fastest-growing area, capturing booming residential and commuter traffic.",
    href: "/locations/leland",
  },
  {
    city: "Jacksonville, NC",
    highways: "NC-24 · US-17",
    description:
      "Onslow County military corridor — Camp Lejeune and a growing civilian consumer base.",
    href: "/locations/jacksonville",
  },
  {
    city: "Eastern NC",
    highways: "US-74 · US-701 · US-421",
    description:
      "Whiteville, Elizabethtown, Clinton, Goldsboro, and Kinston — rural highway markets with strong reach.",
    href: "/locations/coastal-nc",
  },
  {
    city: "Burlington / I-40 Corridor",
    highways: "I-40/85 · Hwy 49",
    description:
      "Alamance County and the I-40/85 corridor, reaching regional travelers on NC's busiest east-west interstate.",
    href: "/locations/raleigh",
  },
  {
    city: "Florence & Myrtle Beach, SC",
    highways: "I-95 · Hwy 76 · US-501",
    description:
      "I-95 travel corridor and the Grand Strand's high-traffic tourism zone.",
    href: "/locations/florence-sc",
  },
];

const advantages = [
  {
    number: "01",
    title: "Site Selection Expertise",
    body: "We know where NC drivers go. Our team identifies the exact locations that put your brand in front of the right audience — not just the highest-traffic roads.",
  },
  {
    number: "02",
    title: "End-to-End Service",
    body: "From contract to creative production to installation, we handle everything. One point of contact. No vendors to coordinate.",
  },
  {
    number: "03",
    title: "Creative Production",
    body: "Our in-house design team builds billboard-ready artwork optimized for legibility at 65 mph. No extra agency needed.",
  },
  {
    number: "04",
    title: "Dedicated Account Management",
    body: "You always know who to call. Every client gets a dedicated rep who knows your market and your campaign goals.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Why Billboard Works — value prop above the fold */}
      <section className="py-20 sm:py-28 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="max-w-2xl mb-14">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-[0.18em] mb-4">
                Why Outdoor Advertising
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] leading-[1.08]"
                style={{ letterSpacing: "-0.025em" }}
              >
                Advertising That Can&apos;t Be Skipped, Blocked, or Ignored
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: Eye,
                  title: "Unavoidable Reach",
                  body: "Billboards cannot be blocked or skipped. Every driver on your target highway sees your message — every single day, around the clock.",
                },
                {
                  icon: MapPin,
                  title: "Hyper-Local Targeting",
                  body: "Put your brand exactly where your customers already drive. Target specific highways, intersections, and neighborhoods across North Carolina.",
                },
                {
                  icon: Clock,
                  title: "24/7 Brand Presence",
                  body: "Unlike digital ads that vanish when budgets run out, a billboard works continuously — rain, shine, rush hour, or midnight.",
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  className="group p-8 bg-white rounded-xl hover:-translate-y-1 transition-transform duration-200"
                  style={{
                    borderTop: "3px solid #F97316",
                    boxShadow: "0 2px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  <card.icon size={26} className="text-[#F97316] mb-5" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{card.title}</h3>
                  <p className="text-[#475569] leading-relaxed text-sm">{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Billboard Types — dark section */}
      <section className="py-20 sm:py-28 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-14">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-[0.18em] mb-4">
                Format Options
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.08]"
                style={{ letterSpacing: "-0.025em" }}
              >
                Static &amp; Digital Billboards
                <br className="hidden sm:block" />
                Across North Carolina
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Static */}
              <motion.div
                variants={fadeUp}
                className="p-8 lg:p-10 rounded-xl relative overflow-hidden"
                style={{ backgroundColor: "#0D1230", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: "linear-gradient(90deg, transparent, #F97316, transparent)" }}
                />
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/8 text-xs font-semibold text-white/50 uppercase tracking-widest mb-6">
                  Static
                </div>
                <h3
                  className="text-2xl lg:text-3xl font-black text-white mb-3"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Static Billboards
                </h3>
                <p className="text-white/50 mb-6 leading-relaxed text-sm">
                  Classic bulletin boards delivering continuous brand exposure on major NC highways and corridors. Maximum impressions, zero printing-cycle downtime.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    "14×48 Bulletins — highest-impact format",
                    "10×36 Posters — mid-market reach",
                    "Junior Posters — neighborhood precision",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/55">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F97316] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/inventory"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:text-orange-300 transition-colors"
                >
                  View Static Inventory
                  <ChevronRight size={14} />
                </Link>
              </motion.div>

              {/* Digital */}
              <motion.div
                variants={fadeUp}
                className="p-8 lg:p-10 rounded-xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #0B1A3D 0%, #0D1230 100%)",
                  border: "1px solid rgba(0,71,204,0.25)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: "linear-gradient(90deg, transparent, #3B82F6, transparent)" }}
                />
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-6">
                  Digital
                </div>
                <h3
                  className="text-2xl lg:text-3xl font-black text-white mb-3"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Digital Billboards
                </h3>
                <p className="text-white/50 mb-6 leading-relaxed text-sm">
                  Dynamic content, multiple messages, real-time updates. Change your creative any time — no printing, no installation costs, no downtime.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    "6-second rotations across multiple advertisers",
                    "Dayparting — show different ads at different hours",
                    "Real-time content updates from your dashboard",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/55">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3B82F6] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/digital-billboards"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Explore Digital Billboards
                  <ChevronRight size={14} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Coverage */}
      <section className="py-20 sm:py-28 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="max-w-2xl mb-14">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-[0.18em] mb-4">
                Market Coverage
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] leading-[1.08]"
                style={{ letterSpacing: "-0.025em" }}
              >
                Billboards Where Your Customers Are
              </h2>
              <p className="text-[#475569] text-lg mt-4 leading-relaxed">
                700+ faces across North Carolina&apos;s highest-traffic corridors and key South Carolina markets.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {locations.map((loc) => (
                <motion.div key={loc.city} variants={fadeUp}>
                  <Link
                    href={loc.href}
                    className="group flex flex-col p-6 bg-white rounded-xl hover:shadow-md transition-all duration-200 relative overflow-hidden border border-[#E8EDF5] hover:border-[#F97316]/30"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl" />
                    <p className="text-[11px] font-bold text-[#0047CC] uppercase tracking-[0.14em] mb-1.5">
                      {loc.highways}
                    </p>
                    <h3 className="text-lg font-black text-[#0F172A] mb-2">{loc.city}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed flex-1 mb-4">{loc.description}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#F97316] group-hover:gap-2 transition-all">
                      View Locations <ChevronRight size={12} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Grey Outdoor — differentiation */}
      <section className="py-20 sm:py-28 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-[0.18em] mb-4">
                The Grey Outdoor Difference
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.08] max-w-2xl mx-auto"
                style={{ letterSpacing: "-0.025em" }}
              >
                25+ Years of Knowing North Carolina
              </h2>
              <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto leading-relaxed">
                We&apos;re not a national operator with a regional outpost. Grey Outdoor is headquartered in Wilmington and built exclusively around NC and SC markets.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((adv) => (
                <motion.div
                  key={adv.number}
                  variants={fadeUp}
                  className="flex gap-6 p-7 rounded-xl"
                  style={{ backgroundColor: "#0D1230", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span
                    className="text-4xl font-black flex-shrink-0 leading-none mt-0.5"
                    style={{ color: "rgba(249,115,22,0.18)", letterSpacing: "-0.04em" }}
                  >
                    {adv.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{adv.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{adv.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-10 text-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white/80 text-sm font-semibold hover:bg-white/6 hover:text-white transition-all"
              >
                Learn About Grey Outdoor
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F1F5F9" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold text-[#F97316] uppercase tracking-[0.18em] mb-4"
            >
              Industries Served
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-3"
              style={{ letterSpacing: "-0.025em" }}
            >
              Trusted Across Every Industry in NC
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#475569] mb-10 max-w-lg mx-auto">
              From local retailers to regional healthcare systems, billboard advertising drives results across every sector.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2.5">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-[#0F172A] bg-white border border-[#E2E8F0]"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
                >
                  {ind}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lead CTA */}
      <section
        className="py-20 sm:py-28 px-4 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D1230 0%, #08091A 100%)" }}
      >
        {/* Subtle orange glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(249,115,22,0.12), transparent)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-[0.18em] mb-4">
            Get Started
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.08] mb-4"
            style={{ letterSpacing: "-0.025em" }}
          >
            See What&apos;s Available in Your Market
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            Get a free availability check and rate quote within 24 hours. No obligation, no pressure.
          </p>
        </div>
        <div
          className="relative max-w-2xl mx-auto p-8 sm:p-10 rounded-2xl"
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            backdropFilter: "blur(12px)",
          }}
        >
          <LeadForm title="" subtitle="" dark />
        </div>
      </section>
    </>
  );
}
