"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundColor: "#06080F",
        background:
          "radial-gradient(ellipse 60% 60% at 0% 20%, rgba(0,71,204,0.08) 0%, transparent 60%), #06080F",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 pt-36">
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left: content */}
          <div className="flex flex-col">
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
              className="text-lg text-slate-400 max-w-md leading-relaxed mt-6"
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
                href="/inventory"
                className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full transition-all"
              >
                View Locations
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-3 mt-8 text-slate-500 text-sm"
            >
              <span>700+ Billboards</span>
              <span aria-hidden="true">·</span>
              <span>25+ Years</span>
              <span aria-hidden="true">·</span>
              <span>NC &amp; SC Markets</span>
            </motion.div>
          </div>

          {/* Right: stacked billboard cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex relative h-[500px] w-full items-center justify-center"
          >
            {/* Back card - rotated right */}
            <div className="absolute w-72 h-48 rounded-xl overflow-hidden shadow-2xl rotate-6 translate-x-16 -translate-y-8 opacity-60">
              <Image
                src="/hero/highway-1.jpg"
                fill
                className="object-cover"
                alt="NC highway corridor"
                sizes="288px"
              />
            </div>
            {/* Middle card - slight left rotation */}
            <div className="absolute w-80 h-52 rounded-xl overflow-hidden shadow-2xl -rotate-3 -translate-x-8 translate-y-4 opacity-80">
              <Image
                src="/hero/highway-3.jpg"
                fill
                className="object-cover"
                alt="Highway billboard location"
                sizes="320px"
              />
            </div>
            {/* Front card - centered, no rotation */}
            <div className="absolute w-96 h-60 rounded-2xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.6)] ring-1 ring-white/10 translate-x-8">
              <Image
                src="/hero/highway-2.jpg"
                fill
                className="object-cover"
                alt="North Carolina highway"
                sizes="384px"
              />
              {/* Orange glow edge at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-orange-500" />
            </div>
            {/* Floating stat badge */}
            <div className="absolute bottom-16 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white text-sm z-10">
              <div className="font-bold text-2xl text-orange-400">700+</div>
              <div className="text-xs text-slate-300">Billboard Faces</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
