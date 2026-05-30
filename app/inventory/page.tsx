"use client";

import { useState } from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

type BillboardType = "Static" | "Digital";
type Market = "Wilmington" | "Raleigh" | "Apex" | "Leland" | "Jacksonville" | "Coastal NC";

interface Billboard {
  id: string;
  market: Market;
  type: BillboardType;
  location: string;
  highway: string;
  dimensions: string;
  dailyTraffic: string;
}

const billboards: Billboard[] = [
  { id: "WIL-001", market: "Wilmington", type: "Static", location: "North College Rd", highway: "I-40 W", dimensions: "14x48", dailyTraffic: "48,000" },
  { id: "WIL-002", market: "Wilmington", type: "Digital", location: "Market St & 17th", highway: "US-17", dimensions: "10x36", dailyTraffic: "62,000" },
  { id: "WIL-003", market: "Wilmington", type: "Static", location: "Carolina Beach Rd", highway: "US-421", dimensions: "14x48", dailyTraffic: "35,000" },
  { id: "RAL-001", market: "Raleigh", type: "Digital", location: "Wade Ave Interchange", highway: "I-440", dimensions: "14x48", dailyTraffic: "95,000" },
  { id: "RAL-002", market: "Raleigh", type: "Static", location: "Capital Blvd North", highway: "US-1", dimensions: "14x48", dailyTraffic: "72,000" },
  { id: "APX-001", market: "Apex", type: "Static", location: "Apex Peakway at US-1", highway: "US-1", dimensions: "10x36", dailyTraffic: "55,000" },
  { id: "APX-002", market: "Apex", type: "Digital", location: "NC-55 Corridor", highway: "NC-55", dimensions: "14x48", dailyTraffic: "41,000" },
  { id: "LEL-001", market: "Leland", type: "Static", location: "Leland Town Center", highway: "US-74/76", dimensions: "14x48", dailyTraffic: "38,000" },
  { id: "JAX-001", market: "Jacksonville", type: "Static", location: "Western Blvd", highway: "NC-24", dimensions: "14x48", dailyTraffic: "43,000" },
  { id: "JAX-002", market: "Jacksonville", type: "Digital", location: "Marine Blvd", highway: "US-17", dimensions: "10x36", dailyTraffic: "36,000" },
  { id: "CST-001", market: "Coastal NC", type: "Static", location: "Surf City Approach", highway: "Highway 17", dimensions: "14x48", dailyTraffic: "29,000" },
  { id: "CST-002", market: "Coastal NC", type: "Static", location: "Crystal Coast Entry", highway: "US-64", dimensions: "14x48", dailyTraffic: "24,000" },
];

const marketColors: Record<Market, string> = {
  Wilmington: "#0047CC",
  Raleigh: "#7C3AED",
  Apex: "#059669",
  Leland: "#B45309",
  Jacksonville: "#DC2626",
  "Coastal NC": "#0891B2",
};

type FilterType = "All" | Market | "Static" | "Digital";

export default function InventoryPage() {
  const [active, setActive] = useState<FilterType>("All");

  const filters: FilterType[] = ["All", "Wilmington", "Raleigh", "Apex", "Leland", "Jacksonville", "Coastal NC", "Static", "Digital"];

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
                    className="bg-white rounded-lg p-5"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #E2E8F0" }}
                  >
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
                ))}
              </div>
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
