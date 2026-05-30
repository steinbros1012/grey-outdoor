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
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "#08091A" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-black tracking-tight text-white">
                    GREY
                  </span>
                  <span className="text-xl font-black tracking-tight text-[#F97316]">
                    OUTDOOR
                  </span>
                </div>
                <div className="text-[10px] font-medium text-white/50 tracking-widest uppercase -mt-0.5">
                  Billboard Advertising
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA580C] transition-colors duration-150"
              >
                Request Availability
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-white/80 hover:text-white"
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
        <div className="fixed inset-0 z-[100] bg-[#08091A] flex flex-col">
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
            <Link
              href="/"
              className="flex items-baseline gap-1"
              onClick={() => setMobileOpen(false)}
            >
              <span className="text-xl font-black text-white">GREY</span>
              <span className="text-xl font-black text-[#F97316]">OUTDOOR</span>
            </Link>
            <button
              className="p-2 text-white/70 hover:text-white"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-bold text-white/90 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 mt-auto pb-10">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-6 py-4 rounded-full bg-[#F97316] text-white font-bold text-lg hover:bg-[#EA580C] transition-colors"
            >
              Request Availability
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
