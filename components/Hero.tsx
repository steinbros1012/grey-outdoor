"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero/grey-outdoor-hero.jpg"
        alt="Grey Outdoor billboard on NC highway"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Dark overlay, heavier at left so text pops, lighter toward right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(6,8,15,0.92) 0%, rgba(6,8,15,0.75) 50%, rgba(6,8,15,0.55) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 pt-40">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium px-3 py-1 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              NC&apos;s Largest Independent Billboard Network
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-7xl md:text-8xl lg:text-[96px] font-black leading-[0.95] tracking-[-0.04em] text-white mb-0"
          >
            Your Brand.
            <br />
            Every Road in{" "}
            <span className="text-orange-400">NC.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-white/70 max-w-lg leading-relaxed mt-6"
          >
            700+ billboard locations from Wilmington to Raleigh. Grey Outdoor
            puts your business in front of the right people, on the roads they
            drive every day.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start gap-4 mt-10"
          >
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all"
            >
              Request Availability
            </Link>
            <Link
              href="/locations"
              className="border border-white/30 hover:border-white/60 hover:bg-white/10 text-white px-8 py-4 rounded-full transition-all"
            >
              View Locations
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center gap-3 mt-8 text-white/50 text-sm"
          >
            <span>700+ Billboards</span>
            <span aria-hidden="true">·</span>
            <span>25+ Years</span>
            <span aria-hidden="true">·</span>
            <span>NC &amp; SC Markets</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
