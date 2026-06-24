"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Static Billboards", href: "/inventory" },
  { label: "Digital Billboards", href: "/digital-billboards" },
  { label: "Design Services", href: "/contact" },
  { label: "Campaign Planning", href: "/contact" },
];

const locations = [
  { label: "Wilmington", href: "/locations/wilmington" },
  { label: "Leland / Brunswick County", href: "/locations/leland" },
  { label: "Jacksonville", href: "/locations/jacksonville" },
  { label: "Eastern NC", href: "/locations/coastal-nc" },
  { label: "Burlington / I-40", href: "/locations/raleigh" },
  { label: "Florence, SC", href: "/locations/florence-sc" },
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
    <footer style={{ backgroundColor: "#4B5563", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand col */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-4 rounded-lg overflow-hidden bg-white px-3 py-2">
              <Image
                src="/grey-outdoor-logo.webp"
                alt="Grey Outdoor LLC"
                width={160}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/50 mb-6 max-w-xs leading-relaxed">
              North Carolina&apos;s Billboard Advertising Leaders. 700+ faces across
              NC markets, delivering brand exposure that can&apos;t be skipped,
              blocked, or ignored.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/greyoutdoor/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
              >
                {/* Facebook icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/grey_billboards/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
              >
                {/* Instagram icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
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
                href="tel:+19106203567"
                className="block text-sm text-white/60 hover:text-white transition-colors"
              >
                910-620-3567
              </a>
              <a
                href="mailto:grey@greyoutdoor.com"
                className="block text-sm text-white/60 hover:text-white transition-colors"
              >
                grey@greyoutdoor.com
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
