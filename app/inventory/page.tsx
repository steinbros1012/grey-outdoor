"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

type BillboardType = "Static" | "Digital";
type Market =
  | "Wilmington/Coast"
  | "Brunswick County"
  | "Jacksonville"
  | "Eastern NC"
  | "Burlington"
  | "Florence SC"
  | "Highway 17 SC";

interface Billboard {
  id: string;
  market: Market;
  type: BillboardType;
  location: string;
  highway: string;
  dimensions: string;
  dailyTraffic: string;
  image: string;
}

const billboards: Billboard[] = [
  { id: "WIL-001", market: "Wilmington/Coast", type: "Digital", location: "Hwy 17 Hampstead", highway: "Hwy 17 Northbound, Pender County NC", dimensions: "14x48", dailyTraffic: "28,000*", image: "/billboards/sneads-ferry.jpg" },
  { id: "WIL-002", market: "Wilmington/Coast", type: "Static", location: "US-74 Wilmington", highway: "US-74 New Hanover County NC", dimensions: "14x48", dailyTraffic: "42,000*", image: "/billboards/rh-construction.jpg" },
  { id: "BRU-001", market: "Brunswick County", type: "Static", location: "Hwy 133 Southport Corridor", highway: "Hwy 133, Brunswick County NC", dimensions: "14x48", dailyTraffic: "15,000*", image: "/billboards/bayview-fence.jpg" },
  { id: "BRU-002", market: "Brunswick County", type: "Static", location: "Hwy 74/76 Bolton Area", highway: "Hwy 74/76, Columbus/Brunswick County NC", dimensions: "10x36", dailyTraffic: "12,000*", image: "/billboards/bay-tree-lakes.jpg" },
  { id: "BRU-003", market: "Brunswick County", type: "Static", location: "Hwy 130 Ash/Brunswick County", highway: "Hwy 130, Brunswick County NC", dimensions: "10x36", dailyTraffic: "9,000*", image: "/billboards/bethel-zion.jpg" },
  { id: "JAX-001", market: "Jacksonville", type: "Static", location: "NC-24 Jacksonville", highway: "NC-24, Onslow County NC", dimensions: "14x48", dailyTraffic: "25,000*", image: "/billboards/jacksonville-digital.jpg" },
  { id: "ENC-001", market: "Eastern NC", type: "Static", location: "Hwy 11 Kinston Corridor", highway: "Hwy 11, Lenoir County NC", dimensions: "10x36", dailyTraffic: "14,000*", image: "/billboards/greenville-1.jpg" },
  { id: "ENC-002", market: "Eastern NC", type: "Static", location: "Hwy 301 Rocky Mount Area", highway: "Hwy 301, Nash County NC", dimensions: "14x48", dailyTraffic: "18,000*", image: "/billboards/whiteville.jpg" },
  { id: "BUR-001", market: "Burlington", type: "Static", location: "I-40/85 Burlington", highway: "I-40/85, Alamance County NC", dimensions: "14x48", dailyTraffic: "58,000*", image: "/billboards/customers-can-see-you.jpg" },
  { id: "FLO-001", market: "Florence SC", type: "Static", location: "I-95 at Alligator Rd (MM 156)", highway: "I-95, Dillon County SC", dimensions: "14x48", dailyTraffic: "32,000*", image: "/billboards/holly-ridge-2.jpg" },
  { id: "FLO-002", market: "Florence SC", type: "Static", location: "Hwy 76 @ Strawberry Patch", highway: "Hwy 76, Florence County SC", dimensions: "14x48", dailyTraffic: "22,000*", image: "/billboards/lh-eastbound.jpg" },
  { id: "SC17-001", market: "Highway 17 SC", type: "Static", location: "Hwy 17 Little River", highway: "Hwy 17 Coastal Route, Horry County SC", dimensions: "14x48", dailyTraffic: "28,000*", image: "/billboards/surf-city.png" },
];

const marketColors: Record<Market, string> = {
  "Wilmington/Coast": "#0047CC",
  "Brunswick County": "#B45309",
  Jacksonville: "#DC2626",
  "Eastern NC": "#0891B2",
  Burlington: "#7C3AED",
  "Florence SC": "#059669",
  "Highway 17 SC": "#EA580C",
};

type FilterType = "All" | Market | "Static" | "Digital";

export default function InventoryPage() {
  const [active, setActive] = useState<FilterType>("All");

  const filters: FilterType[] = [
    "All",
    "Wilmington/Coast",
    "Brunswick County",
    "Jacksonville",
    "Eastern NC",
    "Burlington",
    "Florence SC",
    "Highway 17 SC",
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
            700+ faces across North Carolina and South Carolina, static and digital formats available now
          </p>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-6 flex-col lg:flex-row">
            {/* Main content */}
            <div className="flex-1">
              {/* Sample note */}
              <div className="mb-6 p-4 rounded-lg bg-[#0D1230] border border-white/10">
                <p className="text-sm text-white/70">
                  <strong className="text-white">Showing a sample of available locations.</strong>{" "}
                  Grey Outdoor operates 700+ billboard faces, contact us for a complete availability list for your target market.
                </p>
              </div>

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
                        src={bb.image}
                        alt={`${bb.type} billboard, ${bb.location}`}
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
