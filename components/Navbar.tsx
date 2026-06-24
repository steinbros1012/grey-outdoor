"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const inventoryLinks = [
  { label: "All Inventory", desc: "Browse all 700+ billboard faces", href: "/inventory" },
  { label: "Static Billboards", desc: "Bulletins, posters, and junior posters", href: "/inventory?type=Static" },
  { label: "Digital Billboards", desc: "Flexible, real-time content updates", href: "/digital-billboards" },
];

const marketLinks = [
  { label: "Wilmington / Coast", href: "/locations/wilmington" },
  { label: "Leland & Southport", href: "/locations/leland" },
  { label: "Jacksonville", href: "/locations/jacksonville" },
  { label: "Eastern NC", href: "/locations/coastal-nc" },
  { label: "Burlington / I-40", href: "/locations/raleigh" },
  { label: "Florence & Myrtle Beach, SC", href: "/locations/florence-sc" },
];

const flatLinks = [
  { label: "For Landowners", href: "/for-landowners" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);
  const inventoryRef = useRef<HTMLDivElement>(null);
  const marketsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (inventoryRef.current && !inventoryRef.current.contains(e.target as Node)) {
        setInventoryOpen(false);
      }
      if (marketsRef.current && !marketsRef.current.contains(e.target as Node)) {
        setMarketsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const headerBg = scrolled
    ? "border-b border-[#093d77] shadow-[0_2px_16px_rgba(0,0,0,0.18)]"
    : "bg-transparent border-b border-transparent";

  const headerStyle = scrolled ? { backgroundColor: "#0C4C93" } : {};
  const textColor = "text-white/85";
  const logoColor = "text-white";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`} style={headerStyle}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 h-16 md:h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex items-baseline gap-0.5 shrink-0 mr-2">
              <span className={`text-lg font-black tracking-tight transition-colors duration-300 ${logoColor}`}>GREY</span>
              <span className="text-lg font-black tracking-tight text-[#EB2813]">OUTDOOR</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1">

              {/* Browse Inventory dropdown */}
              <div ref={inventoryRef} className="relative">
                <button
                  onClick={() => { setInventoryOpen((v) => !v); setMarketsOpen(false); }}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 whitespace-nowrap ${textColor} hover:text-[${scrolled ? "#272727" : "white"}] hover:bg-white/8`}
                >
                  Browse Inventory
                  <ChevronDown size={14} className={`transition-transform duration-200 ${inventoryOpen ? "rotate-180" : ""}`} />
                </button>

                {inventoryOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.14)] border border-slate-100 overflow-hidden">
                    <div className="p-2">
                      {inventoryLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setInventoryOpen(false)}
                          className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-sm font-semibold text-slate-900 group-hover:text-[#EB2813] transition-colors">{item.label}</span>
                          <span className="text-xs text-slate-400">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-slate-100 p-4">
                      <Link
                        href="/inventory"
                        onClick={() => setInventoryOpen(false)}
                        className="flex items-center justify-between text-xs font-bold text-[#EB2813] hover:gap-3 transition-all"
                      >
                        See all available inventory <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Markets dropdown */}
              <div ref={marketsRef} className="relative">
                <button
                  onClick={() => { setMarketsOpen((v) => !v); setInventoryOpen(false); }}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 whitespace-nowrap ${textColor} hover:bg-white/8`}
                >
                  Markets
                  <ChevronDown size={14} className={`transition-transform duration-200 ${marketsOpen ? "rotate-180" : ""}`} />
                </button>

                {marketsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.14)] border border-slate-100 overflow-hidden">
                    <div className="p-2">
                      {marketLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMarketsOpen(false)}
                          className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-slate-100 p-4">
                      <Link
                        href="/locations"
                        onClick={() => setMarketsOpen(false)}
                        className="flex items-center justify-between text-xs font-bold text-[#EB2813] hover:gap-3 transition-all"
                      >
                        View all markets <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {flatLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 whitespace-nowrap ${textColor} hover:bg-white/8`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3 ml-auto shrink-0">
              <Link
                href="/contact"
                className="text-sm font-medium transition-colors duration-150 whitespace-nowrap"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EB2813] text-white text-sm font-bold hover:bg-[#c8200f] transition-colors duration-150 whitespace-nowrap shadow-[0_2px_12px_rgba(235,40,19,0.15)]"
              >
                Request a Quote <ArrowRight size={13} />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden ml-auto p-2 rounded-lg transition-colors text-white"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col">
          <div className="flex items-center justify-between px-4 py-4 border-b border-slate-100">
            <Link href="/" className="flex items-baseline gap-0.5" onClick={() => setMobileOpen(false)}>
              <span className="text-lg font-black text-slate-900">GREY</span>
              <span className="text-lg font-black text-[#EB2813]">OUTDOOR</span>
            </Link>
            <button className="p-2 text-slate-400 hover:text-slate-900 rounded-lg" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={22} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            <div className="px-4 py-6 space-y-1">
              <p className="px-4 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inventory</p>
              {inventoryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4">
                <p className="px-4 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Markets</p>
                {marketLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-4">
                {flatLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>

          <div className="px-4 pb-8 pt-4 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-[#EB2813] text-white font-bold text-base hover:bg-[#c8200f] transition-colors shadow-[0_4px_20px_rgba(235,40,19,0.15)]"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
