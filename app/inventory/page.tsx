"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

type BillboardType = "Static" | "Digital";
type Market =
  | "Wilmington"
  | "Leland/Brunswick"
  | "Jacksonville"
  | "Eastern NC"
  | "Piedmont NC"
  | "Florence SC"
  | "Myrtle Beach SC";

interface Billboard {
  id: string;
  market: Market;
  type: BillboardType;
  location: string;
  highway: string;
  dimensions: string;
  dailyTraffic: string;
}

const STATIC_IMG = "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&q=80";
const DIGITAL_IMG = "https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=800&q=80";

const billboards: Billboard[] = [
  { id: "WIL-001", market: "Wilmington", type: "Static", location: "US-17 North, New Hanover County", highway: "US-17 Northbound", dimensions: "14x48", dailyTraffic: "45,000*" },
  { id: "WIL-002", market: "Wilmington", type: "Static", location: "US-74 Business / Market St", highway: "US-74 Business", dimensions: "14x48", dailyTraffic: "38,000*" },
  { id: "LEL-001", market: "Leland/Brunswick", type: "Static", location: "US-74/76 Brunswick Town Center corridor", highway: "US-74/76 Eastbound", dimensions: "14x48", dailyTraffic: "32,000*" },
  { id: "LEL-002", market: "Leland/Brunswick", type: "Static", location: "NC-211 at Howe St, Southport", highway: "NC-211", dimensions: "10x36", dailyTraffic: "18,000*" },
  { id: "JAX-001", market: "Jacksonville", type: "Static", location: "NC-24 Western Blvd corridor", highway: "NC-24 Westbound", dimensions: "14x48", dailyTraffic: "28,000*" },
  { id: "JAX-002", market: "Jacksonville", type: "Static", location: "US-17 at Henderson Dr", highway: "US-17 Northbound", dimensions: "14x48", dailyTraffic: "22,000*" },
  { id: "ENC-001", market: "Eastern NC", type: "Static", location: "US-74 at NC-130, Whiteville", highway: "US-74", dimensions: "10x36", dailyTraffic: "15,000*" },
  { id: "ENC-002", market: "Eastern NC", type: "Static", location: "US-701 at NC-87, Elizabethtown", highway: "US-701", dimensions: "10x36", dailyTraffic: "12,000*" },
  { id: "PIE-001", market: "Piedmont NC", type: "Static", location: "I-40/85 at exit 145, Burlington", highway: "I-40/85", dimensions: "14x48", dailyTraffic: "55,000*" },
  { id: "PIE-002", market: "Piedmont NC", type: "Static", location: "US-70 at NC-581, Goldsboro", highway: "US-70", dimensions: "10x36", dailyTraffic: "20,000*" },
  { id: "FLO-001", market: "Florence SC", type: "Static", location: "I-95 at Hwy 76 interchange, Florence", highway: "I-95", dimensions: "14x48", dailyTraffic: "65,000*" },
  { id: "MYR-001", market: "Myrtle Beach SC", type: "Digital", location: "US-501 at Hwy 544, Myrtle Beach area", highway: "US-501", dimensions: "14x48", dailyTraffic: "40,000*" },
];

const marketColors: Record<Market, string> = {
  Wilmington: "#0047CC",
  "Leland/Brunswick": "#B45309",
  Jacksonville: "#DC2626",
  "Eastern NC": "#0891B2",
  "Piedmont NC": "#7C3AED",
  "Florence SC": "#059669",
  "Myrtle Beach SC": "#EA580C",
};

type FilterType = "All" | Market | "Static" | "Digital";

export default function InventoryPage() {
  const [active, setActive] = useState<FilterType>("All");

  const filters: FilterType[] = [
    "All",
    "Wilmington",
    "Leland/Brunswick",
    "Jacksonville",
    "Eastern NC",
    "Piedmont NC",
    "Florence SC",
    "Myrtle Beach SC",
    "Static",
    "Digital",
  ];

  const filtered = billboards.filter((b) => {
    if (active === "All") return true;
    if (active === "Static" || active === "Digital") return b.type === active;
    return b.market === active;
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-6xl font-black text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Billboard Inventory
          </h1>
          <p className="text-lg text-white/60">
            700+ faces across North Carolina — static and digital formats available now
          </p>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-6 flex-col lg:flex-row">
            {/* Main content */}
            <div className="flex-1">
              {/* Filter pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150"
                    style={{
                      backgroundColor: active === f ? "#0047CC" : "#fff",
                      color: active === f ? "#fff" : "#475569",
                      border: active === f ? "1px solid #0047CC" : "1px solid #E2E8F0",
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map((bb) => (
                  <div
                    key={bb.id}
                    className="bg-white rounded-lg overflow-hidden"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #E2E8F0" }}
                  >
                    <div className="relative h-32 w-full">
                      <Image
                        src={bb.type === "Digital" ? DIGITAL_IMG : STATIC_IMG}
                        alt={`${bb.type} billboard — ${bb.location}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-bold text-white"
                          style={{ backgroundColor: marketColors[bb.market] }}
                        >
                          {bb.market}
                        </span>
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-bold"
                          style={{
                            backgroundColor: bb.type === "Digital" ? "#FEF3C7" : "#F1F5F9",
                            color: bb.type === "Digital" ? "#92400E" : "#475569",
                          }}
                        >
                          {bb.type}
                        </span>
                      </div>
                      <h3 className="font-bold text-[#0F172A] mb-0.5">{bb.location}</h3>
                      <p className="text-xs text-[#0047CC] font-semibold mb-3">{bb.highway}</p>
                      <div className="flex items-center justify-between text-xs text-[#475569] mb-4">
                        <span>Size: <strong className="text-[#0F172A]">{bb.dimensions}</strong></span>
                        <span>Traffic: <strong className="text-[#0F172A]">{bb.dailyTraffic}/day</strong></span>
                      </div>
                      <Link
                        href="/contact"
                        className="block w-full text-center py-2.5 rounded-lg text-sm font-bold text-white hover:bg-[#EA580C] transition-colors"
                        style={{ backgroundColor: "#F97316" }}
                      >
                        Request Availability
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-[#94A3B8] leading-relaxed">
                *Traffic estimates based on NCDOT/SCDOT AADT data for highway corridors. Actual counts vary by specific billboard placement. Contact Grey Outdoor for verified traffic counts.
              </p>
            </div>

            {/* Sidebar form */}
            <div
              className="lg:w-80 flex-shrink-0 p-6 rounded-lg self-start sticky top-24"
              style={{ backgroundColor: "#0D1230" }}
            >
              <LeadForm
                title="Get a Rate Quote"
                subtitle="Tell us your market and we will send availability and pricing within 24 hours."
                dark
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
