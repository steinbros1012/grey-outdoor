"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Locations", href: "/locations" },
  { label: "Digital Billboards", href: "/digital-billboards" },
  { label: "Inventory", href: "/inventory" },
  { label: "For Landowners", href: "/for-landowners" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? {
                backgroundColor: "#ffffff",
                borderBottom: "1px solid #F1F5F9",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              }
            : {
                backgroundColor: "transparent",
                borderBottom: "none",
              }
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[68px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-0.5 group">
              <span
                className="text-xl font-black tracking-tight transition-colors"
                style={{ color: scrolled ? "#0F172A" : "#ffffff" }}
              >
                GREY
              </span>
              <span className="text-xl font-black tracking-tight text-[#F97316]">
                OUTDOOR
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 whitespace-nowrap"
                  style={{ color: scrolled ? "#475569" : "rgba(255,255,255,0.75)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#F97316] text-white text-sm font-bold hover:bg-[#EA580C] transition-colors duration-150 whitespace-nowrap shadow-[0_2px_12px_rgba(249,115,22,0.35)]"
              >
                Request Availability
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: scrolled ? "#0F172A" : "#ffffff" }}
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
            <Link
              href="/"
              className="flex items-center gap-0.5"
              onClick={() => setMobileOpen(false)}
            >
              <span className="text-xl font-black text-[#0F172A]">GREY</span>
              <span className="text-xl font-black text-[#F97316]">OUTDOOR</span>
            </Link>
            <button
              className="p-2 text-slate-500 hover:text-slate-900 rounded-lg"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xl font-semibold text-slate-700 hover:text-[#0F172A] py-3 border-b border-slate-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 mt-auto pb-10">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-6 py-4 rounded-full bg-[#F97316] text-white font-bold text-base hover:bg-[#EA580C] transition-colors shadow-[0_4px_20px_rgba(249,115,22,0.35)]"
            >
              Request Availability
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
