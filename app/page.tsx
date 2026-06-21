"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Eye, MapPin, Clock, ArrowRight, ChevronRight } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import Hero from "@/components/Hero";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
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
    title: "Site Selection Expertise",
    body: "We know where NC drivers go. Our team identifies the exact locations that put your brand in front of the right audience.",
  },
  {
    title: "End-to-End Service",
    body: "From contract to creative production to installation, we handle everything. One point of contact.",
  },
  {
    title: "Creative Production",
    body: "In-house design team builds billboard-ready artwork optimized for legibility at 65 mph. No extra agency needed.",
  },
  {
    title: "Dedicated Account Management",
    body: "Every client gets a dedicated rep who knows your market and your campaign goals.",
  },
];

const stats = [
  { value: "700+", label: "Billboard Faces" },
  { value: "25+", label: "Years in NC" },
  { value: "10+", label: "Active Markets" },
  { value: "1M+", label: "Daily Impressions" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Stats bar */}
      <section className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-slate-100">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-8 text-center">
                <div
                  className="text-3xl sm:text-4xl font-black text-[#F97316] mb-1"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Billboard Works */}
      <section className="py-24 sm:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="max-w-xl mb-16">
              <span className="inline-block text-xs font-bold text-[#F97316] uppercase tracking-[0.2em] mb-5">
                Why Outdoor Advertising
              </span>
              <h2
                className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-[1.05]"
                style={{ letterSpacing: "-0.03em" }}
              >
                Can&apos;t be skipped.
                <br />
                Can&apos;t be blocked.
                <br />
                <span className="text-[#F97316]">Can&apos;t be ignored.</span>
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
                  body: "Put your brand exactly where your customers already drive. Target specific highways, intersections, and neighborhoods across NC.",
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
                  className="p-8 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-[0_8px_32px_rgba(249,115,22,0.08)] transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                    <card.icon size={20} className="text-[#F97316]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{card.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Billboard Types — orange accent section */}
      <section className="py-24 sm:py-32 px-4" style={{ backgroundColor: "#FFF7ED" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="inline-block text-xs font-bold text-[#F97316] uppercase tracking-[0.2em] mb-5">
                Format Options
              </span>
              <h2
                className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-[1.05]"
                style={{ letterSpacing: "-0.03em" }}
              >
                Static &amp; Digital Billboards
              </h2>
              <p className="text-slate-500 text-lg mt-4 max-w-lg mx-auto">
                Two powerful formats. One network. Across every major NC corridor.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Static */}
              <motion.div
                variants={fadeUp}
                className="p-10 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_32px_rgba(0,0,0,0.06)]"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-xs font-bold text-[#F97316] uppercase tracking-widest mb-6">
                  Static
                </span>
                <h3
                  className="text-2xl lg:text-3xl font-black text-[#0F172A] mb-3"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  Static Billboards
                </h3>
                <p className="text-slate-500 mb-7 leading-relaxed">
                  Classic bulletin boards delivering continuous brand exposure. Maximum impressions, zero downtime.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "14×48 Bulletins — highest-impact format",
                    "10×36 Posters — mid-market reach",
                    "Junior Posters — neighborhood precision",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/inventory"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#F97316] hover:gap-3 transition-all"
                >
                  View Static Inventory <ChevronRight size={14} />
                </Link>
              </motion.div>

              {/* Digital */}
              <motion.div
                variants={fadeUp}
                className="p-10 bg-[#08091A] rounded-2xl shadow-[0_4px_32px_rgba(0,0,0,0.18)] relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500" />
                    </span>
                    Digital
                  </span>
                  <h3
                    className="text-2xl lg:text-3xl font-black text-white mb-3"
                    style={{ letterSpacing: "-0.025em" }}
                  >
                    Digital Billboards
                  </h3>
                  <p className="text-white/55 mb-7 leading-relaxed">
                    Dynamic content, multiple messages, real-time updates. Change your creative any time — no printing, no installation.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "6-second rotations across multiple advertisers",
                      "Dayparting — show different ads at different times",
                      "Real-time content updates, no downtime",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-white/55">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/digital-billboards"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-400 hover:text-blue-300 hover:gap-3 transition-all"
                  >
                    Explore Digital <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Coverage — white */}
      <section className="py-24 sm:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
              <div>
                <span className="inline-block text-xs font-bold text-[#F97316] uppercase tracking-[0.2em] mb-5">
                  Market Coverage
                </span>
                <h2
                  className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-[1.05]"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  Billboards where
                  <br />
                  your customers are.
                </h2>
              </div>
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#F97316] text-[#F97316] text-sm font-bold hover:bg-[#F97316] hover:text-white transition-all shrink-0"
              >
                All Markets <ArrowRight size={14} />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {locations.map((loc) => (
                <motion.div key={loc.city} variants={fadeUp}>
                  <Link
                    href={loc.href}
                    className="group flex flex-col p-6 bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-[0_8px_40px_rgba(249,115,22,0.10)] transition-all duration-300"
                  >
                    <p className="text-[10px] font-bold text-[#F97316] uppercase tracking-[0.18em] mb-2">
                      {loc.highways}
                    </p>
                    <h3 className="text-lg font-black text-[#0F172A] mb-2">{loc.city}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">{loc.description}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#F97316] group-hover:gap-2 transition-all">
                      View Locations <ChevronRight size={11} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Grey Outdoor — dark contrast section */}
      <section className="py-24 sm:py-32 px-4 bg-[#08091A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="inline-block text-xs font-bold text-[#F97316] uppercase tracking-[0.2em] mb-5">
                The Grey Outdoor Difference
              </span>
              <h2
                className="text-4xl sm:text-5xl font-black text-white leading-[1.05] max-w-xl mx-auto"
                style={{ letterSpacing: "-0.03em" }}
              >
                25+ years knowing
                <br />
                North Carolina.
              </h2>
              <p className="text-white/45 text-lg mt-5 max-w-md mx-auto leading-relaxed">
                Not a national operator with a regional outpost — headquartered in Wilmington, built around NC and SC.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
              {advantages.map((adv) => (
                <motion.div
                  key={adv.title}
                  variants={fadeUp}
                  className="p-7 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.06] transition-colors"
                >
                  <h3 className="text-base font-bold text-white mb-2">{adv.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{adv.body}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/70 text-sm font-semibold hover:bg-white/6 hover:text-white transition-all"
              >
                About Grey Outdoor <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries — light gray */}
      <section className="py-20 px-4 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs font-bold text-[#F97316] uppercase tracking-[0.2em] mb-5"
            >
              Industries Served
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-3"
              style={{ letterSpacing: "-0.025em" }}
            >
              Trusted across every industry in NC
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 mb-10 max-w-md mx-auto text-sm">
              From local retailers to regional healthcare systems, billboard advertising drives results across every sector.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2.5">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="px-4 py-2 rounded-full text-sm font-semibold text-slate-700 bg-white border border-slate-200 shadow-sm hover:border-orange-200 hover:text-[#F97316] transition-colors cursor-default"
                >
                  {ind}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lead CTA — bold orange like caasie's brand-color CTA sections */}
      <section className="py-24 sm:py-32 px-4 bg-[#F97316] relative overflow-hidden">
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.0] mb-5"
            style={{ letterSpacing: "-0.03em" }}
          >
            See what&apos;s available
            <br />
            in your market.
          </h2>
          <p className="text-white/75 text-lg leading-relaxed">
            Free availability check and rate quote within 24 hours. No obligation.
          </p>
        </div>
        <div
          className="relative max-w-xl mx-auto p-8 sm:p-10 rounded-2xl bg-white shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
        >
          <LeadForm
            title="Request Free Availability Check"
            subtitle="Tell us your market and campaign goals."
            dark={false}
          />
        </div>
      </section>
    </>
  );
}
