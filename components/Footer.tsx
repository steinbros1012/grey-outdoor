"use client";

import Link from "next/link";
import { Globe, Send, Rss, Share } from "lucide-react";

const services = [
  { label: "Static Billboards", href: "/inventory" },
  { label: "Digital Billboards", href: "/digital-billboards" },
  { label: "Design Services", href: "/contact" },
  { label: "Campaign Planning", href: "/contact" },
];

const locations = [
  { label: "Wilmington", href: "/locations/wilmington" },
  { label: "Burlington / I-40 Corridor", href: "/locations/raleigh" },
  { label: "Florence, SC", href: "/locations/florence-sc" },
  { label: "Eastern NC", href: "/locations/coastal-nc" },
  { label: "Leland", href: "/locations/leland" },
  { label: "Jacksonville", href: "/locations/jacksonville" },
  { label: "Coastal NC", href: "/locations/coastal-nc" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "For Landowners", href: "/for-landowners" },
  { label: "Careers", href: "/about" },
  { label: "Blog", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#08091A", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-baseline gap-1 mb-3">
              <span className="text-xl font-black text-white">GREY</span>
              <span className="text-xl font-black text-[#F97316]">OUTDOOR</span>
            </Link>
            <p className="text-sm text-white/50 mb-6 max-w-xs leading-relaxed">
              North Carolina&apos;s Billboard Advertising Leaders. 700+ faces across
              NC markets — delivering brand exposure that can&apos;t be skipped,
              blocked, or ignored.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
              >
                <Send size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
              >
                <Globe size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
              >
                <Share size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
              >
                <Rss size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Locations
            </h3>
            <ul className="space-y-2.5">
              {locations.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Contact */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 mb-8">
              {company.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
              Contact
            </h3>
            <address className="not-italic space-y-1.5">
              <p className="text-sm text-white/60">Wilmington, NC 28403</p>
              <a
                href="tel:+19101234567"
                className="block text-sm text-white/60 hover:text-white transition-colors"
              >
                (910) 123-4567
              </a>
              <a
                href="mailto:info@greyoutdoor.com"
                className="block text-sm text-white/60 hover:text-white transition-colors"
              >
                info@greyoutdoor.com
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Grey Outdoor Advertising. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
