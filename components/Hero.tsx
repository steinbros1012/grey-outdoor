"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

const markets = [
  { label: "Wilmington", href: "/locations/wilmington" },
  { label: "Leland", href: "/locations/leland" },
  { label: "Jacksonville", href: "/locations/jacksonville" },
  { label: "Eastern NC", href: "/locations/coastal-nc" },
  { label: "Burlington / I-40", href: "/locations/raleigh" },
  { label: "Florence, SC", href: "/locations/florence-sc" },
];

const stats = [
  { value: "700+", label: "Billboard Faces" },
  { value: "25+", label: "Years in NC" },
  { value: "10+", label: "Active Markets" },
  { value: "1M+", label: "Daily Impressions" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <Image
        src="/hero/grey-outdoor-hero.jpg"
        alt="Grey Outdoor billboard on NC highway"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Cinematic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(170deg, rgba(6,8,15,0.92) 0%, rgba(6,8,15,0.78) 45%, rgba(6,8,15,0.88) 100%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orange top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-white to-transparent opacity-70" />

      {/* Main content — centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 pt-36 sm:pt-44 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2.5 border border-white/25 bg-white/10 text-white/80 text-xs font-semibold px-4 py-2 rounded-full tracking-[0.12em] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              NC&apos;s Largest Independent Billboard Network
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(52px, 9vw, 108px)" }}
          >
            Your Brand.
            <br />
            Every Road in{" "}
            <span className="text-[#EB2813]">NC.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            700+ billboard locations from Wilmington to Burlington. Static and digital formats on every major NC corridor. Get availability and pricing within 24 hours.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#EB2813] hover:bg-[#c8200f] text-white font-bold px-8 py-4 rounded-full transition-all text-base shadow-[0_0_48px_rgba(235,40,19,0.15)] hover:shadow-[0_0_60px_rgba(235,40,19,0.15)] w-full sm:w-auto justify-center"
            >
              Request Availability
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/inventory"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/45 hover:bg-white/8 text-white font-semibold px-8 py-4 rounded-full transition-all text-base w-full sm:w-auto justify-center"
            >
              Browse Inventory
            </Link>
          </motion.div>

          {/* Market chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            <span className="inline-flex items-center gap-1.5 text-[11px] text-white/30 uppercase tracking-widest font-medium">
              <MapPin size={10} />
              Markets:
            </span>
            {markets.map((m) => (
              <Link
                key={m.label}
                href={m.href}
                className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-white/45 border border-white/10 hover:border-white/28 hover:text-white/70 transition-all"
              >
                {m.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 border-t border-white/8"
        style={{
          backgroundColor: "rgba(8,9,26,0.82)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/8">
            {stats.map((s) => (
              <div key={s.label} className="px-4 sm:px-8 py-5 text-center">
                <div
                  className="text-2xl sm:text-3xl font-black text-white"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {s.value}
                </div>
                <div className="text-[10px] text-white/30 uppercase tracking-[0.16em] font-medium mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
