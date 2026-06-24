"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Car, ChevronRight, SlidersHorizontal, X } from "lucide-react";

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
  { id: "WIL-001", market: "Wilmington/Coast", type: "Digital", location: "Hwy 17 Hampstead", highway: "Hwy 17 Northbound, Pender County NC", dimensions: "14x48", dailyTraffic: "28,000", image: "/billboards/sneads-ferry.jpg" },
  { id: "WIL-002", market: "Wilmington/Coast", type: "Static", location: "US-74 Wilmington", highway: "US-74 New Hanover County NC", dimensions: "14x48", dailyTraffic: "42,000", image: "/billboards/rh-construction.jpg" },
  { id: "BRU-001", market: "Brunswick County", type: "Static", location: "Hwy 133 Southport Corridor", highway: "Hwy 133, Brunswick County NC", dimensions: "14x48", dailyTraffic: "15,000", image: "/billboards/bayview-fence.jpg" },
  { id: "BRU-002", market: "Brunswick County", type: "Static", location: "Hwy 74/76 Bolton Area", highway: "Hwy 74/76, Columbus/Brunswick County NC", dimensions: "10x36", dailyTraffic: "12,000", image: "/billboards/bay-tree-lakes.jpg" },
  { id: "BRU-003", market: "Brunswick County", type: "Static", location: "Hwy 130 Ash/Brunswick County", highway: "Hwy 130, Brunswick County NC", dimensions: "10x36", dailyTraffic: "9,000", image: "/billboards/bethel-zion.jpg" },
  { id: "JAX-001", market: "Jacksonville", type: "Static", location: "NC-24 Jacksonville", highway: "NC-24, Onslow County NC", dimensions: "14x48", dailyTraffic: "25,000", image: "/billboards/jacksonville-digital.jpg" },
  { id: "ENC-001", market: "Eastern NC", type: "Static", location: "Hwy 11 Kinston Corridor", highway: "Hwy 11, Lenoir County NC", dimensions: "10x36", dailyTraffic: "14,000", image: "/billboards/greenville-1.jpg" },
  { id: "ENC-002", market: "Eastern NC", type: "Static", location: "Hwy 301 Rocky Mount Area", highway: "Hwy 301, Nash County NC", dimensions: "14x48", dailyTraffic: "18,000", image: "/billboards/whiteville.jpg" },
  { id: "BUR-001", market: "Burlington", type: "Static", location: "I-40/85 Burlington", highway: "I-40/85, Alamance County NC", dimensions: "14x48", dailyTraffic: "58,000", image: "/billboards/customers-can-see-you.jpg" },
  { id: "FLO-001", market: "Florence SC", type: "Static", location: "I-95 at Alligator Rd (MM 156)", highway: "I-95, Dillon County SC", dimensions: "14x48", dailyTraffic: "32,000", image: "/billboards/holly-ridge-2.jpg" },
  { id: "FLO-002", market: "Florence SC", type: "Static", location: "Hwy 76 @ Strawberry Patch", highway: "Hwy 76, Florence County SC", dimensions: "14x48", dailyTraffic: "22,000", image: "/billboards/lh-eastbound.jpg" },
  { id: "SC17-001", market: "Highway 17 SC", type: "Static", location: "Hwy 17 Little River", highway: "Hwy 17 Coastal Route, Horry County SC", dimensions: "14x48", dailyTraffic: "28,000", image: "/billboards/surf-city.png" },
];

const allMarkets: Market[] = [
  "Wilmington/Coast",
  "Brunswick County",
  "Jacksonville",
  "Eastern NC",
  "Burlington",
  "Florence SC",
  "Highway 17 SC",
];

export default function InventoryPage() {
  const [selectedMarkets, setSelectedMarkets] = useState<Market[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<BillboardType[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  function toggleMarket(m: Market) {
    setSelectedMarkets((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  }

  function toggleType(t: BillboardType) {
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  }

  function clearFilters() {
    setSelectedMarkets([]);
    setSelectedTypes([]);
  }

  const filtered = billboards.filter((b) => {
    const marketMatch = selectedMarkets.length === 0 || selectedMarkets.includes(b.market);
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(b.type);
    return marketMatch && typeMatch;
  });

  const hasActiveFilters = selectedMarkets.length > 0 || selectedTypes.length > 0;

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.18em]">Format</h3>
        </div>
        <div className="space-y-2">
          {(["Static", "Digital"] as BillboardType[]).map((t) => (
            <label key={t} className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => toggleType(t)}
                className={`w-4 h-4 rounded flex items-center justify-center border-2 transition-colors flex-shrink-0 ${
                  selectedTypes.includes(t)
                    ? "bg-[#2464B4] border-[#2464B4]"
                    : "border-slate-300 group-hover:border-slate-400"
                }`}
              >
                {selectedTypes.includes(t) && (
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{t} Billboard</span>
              <span className="ml-auto text-xs text-slate-400">
                {billboards.filter((b) => b.type === t).length}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100 pt-8">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.18em] mb-4">Market</h3>
        <div className="space-y-2">
          {allMarkets.map((m) => (
            <label key={m} className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => toggleMarket(m)}
                className={`w-4 h-4 rounded flex items-center justify-center border-2 transition-colors flex-shrink-0 ${
                  selectedMarkets.includes(m)
                    ? "bg-[#2464B4] border-[#2464B4]"
                    : "border-slate-300 group-hover:border-slate-400"
                }`}
              >
                {selectedMarkets.includes(m) && (
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{m}</span>
              <span className="ml-auto text-xs text-slate-400">
                {billboards.filter((b) => b.market === m).length}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100 pt-8">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.14em] mb-2">700+ Total Faces</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            This is a sample of available locations. Contact us for the full availability list in your market.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold text-[#2464B4] hover:gap-3 transition-all"
          >
            Get complete list <ChevronRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 px-4 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold text-[#2464B4] uppercase tracking-[0.2em] mb-4">
              Billboard Inventory
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-[1.06] tracking-[-0.03em] mb-4">
              Find the right billboard
              <br />for your market.
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              700+ faces across NC and SC. Static and digital formats, every major corridor.
            </p>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <section className="bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex gap-8">

            {/* Sidebar — desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-sm font-bold text-slate-900">Filter</h2>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-xs font-semibold text-[#2464B4] hover:text-[#1a4f94] transition-colors"
                    >
                      Clear all
                    </button>
                  )}
                </div>
                <FilterPanel />
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">

              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold text-slate-900">
                    {filtered.length} location{filtered.length !== 1 ? "s" : ""}
                    {hasActiveFilters && <span className="font-normal text-slate-400 ml-1">shown</span>}
                  </p>
                  {hasActiveFilters && (
                    <div className="flex flex-wrap gap-1.5">
                      {selectedTypes.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#2464B4]"
                        >
                          {t}
                          <button onClick={() => toggleType(t)} className="hover:text-orange-800">
                            <X size={11} />
                          </button>
                        </span>
                      ))}
                      {selectedMarkets.map((m) => (
                        <span
                          key={m}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#2464B4]"
                        >
                          {m}
                          <button onClick={() => toggleMarket(m)} className="hover:text-orange-800">
                            <X size={11} />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile filter button */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:border-slate-300 transition-colors"
                >
                  <SlidersHorizontal size={14} />
                  Filters {hasActiveFilters && `(${selectedMarkets.length + selectedTypes.length})`}
                </button>
              </div>

              {/* Grid */}
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-slate-400 text-sm font-medium mb-4">No locations match your current filters.</p>
                  <button onClick={clearFilters} className="text-sm font-bold text-[#2464B4] hover:underline">
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filtered.map((bb) => (
                    <div
                      key={bb.id}
                      className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 group"
                    >
                      {/* Billboard image — taller, proper billboard aspect ratio */}
                      <div className="relative w-full overflow-hidden bg-slate-100" style={{ height: "210px" }}>
                        <Image
                          src={bb.image}
                          alt={`${bb.type} billboard on ${bb.highway}`}
                          fill
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />
                        {/* Type badge overlay */}
                        <div className="absolute top-3 left-3">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${
                              bb.type === "Digital"
                                ? "bg-blue-600 text-white shadow-[0_2px_8px_rgba(37,99,235,0.35)]"
                                : "bg-[#1F2937]/80 text-white backdrop-blur-sm"
                            }`}
                          >
                            {bb.type === "Digital" && (
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                              </span>
                            )}
                            {bb.type}
                          </span>
                        </div>
                        {/* ID badge */}
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[10px] font-mono font-bold text-slate-500">
                            {bb.id}
                          </span>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="p-5">
                        {/* Market tag */}
                        <div className="flex items-center gap-1.5 mb-3">
                          <MapPin size={11} className="text-[#2464B4]" />
                          <span className="text-[11px] font-bold text-[#2464B4] uppercase tracking-[0.12em]">
                            {bb.market}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">
                          {bb.location}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed mb-4">
                          {bb.highway}
                        </p>

                        {/* Specs row */}
                        <div className="grid grid-cols-2 gap-3 mb-5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.14em] mb-0.5">Size</p>
                            <p className="text-sm font-bold text-slate-800">{bb.dimensions} ft</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-1 mb-0.5">
                              <Car size={9} className="text-slate-400" />
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.14em]">Daily Traffic</p>
                            </div>
                            <p className="text-sm font-bold text-slate-800">{bb.dailyTraffic}+</p>
                          </div>
                        </div>

                        <Link
                          href={`/contact?billboard=${bb.id}`}
                          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold text-white bg-[#2464B4] hover:bg-[#1a4f94] transition-colors duration-150"
                        >
                          Check Availability <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <p className="mt-8 text-xs text-slate-400 leading-relaxed">
                * Traffic estimates based on NCDOT/SCDOT AADT data for highway corridors. Actual counts vary by specific billboard placement. Contact Grey Outdoor for verified traffic counts and a full inventory list for your target market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto">
            <div className="sticky top-0 bg-white flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <h2 className="text-base font-bold text-slate-900">Filters</h2>
              <div className="flex items-center gap-4">
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="text-sm font-semibold text-[#2464B4]">
                    Clear all
                  </button>
                )}
                <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-slate-400">
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="p-5">
              <FilterPanel />
            </div>
            <div className="sticky bottom-0 bg-white border-t border-slate-100 p-4">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full py-3.5 rounded-full bg-[#2464B4] text-white font-bold text-sm"
              >
                Show {filtered.length} location{filtered.length !== 1 ? "s" : ""}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
