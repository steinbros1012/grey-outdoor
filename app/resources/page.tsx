import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Outdoor Advertising Resources | Grey Outdoor",
  description:
    "Guides, research, and articles about billboard advertising in North Carolina. Learn about pricing, strategy, creative, and market selection.",
};

const posts = [
  {
    slug: "billboard-advertising-cost-nc",
    title: "How Much Does Billboard Advertising Cost in NC?",
    category: "Pricing",
    excerpt:
      "Billboard rates in North Carolina vary widely based on market, format, and location. Here's what businesses actually pay — and what drives the price differences.",
  },
  {
    slug: "static-vs-digital-billboards",
    title: "Static vs Digital Billboards: Which Is Right for Your Business?",
    category: "Strategy",
    excerpt:
      "Both formats deliver powerful outdoor exposure, but they serve different campaign goals. Here's how to choose based on your budget, creative, and timeline.",
  },
  {
    slug: "roi-of-outdoor-advertising",
    title: "The ROI of Outdoor Advertising: What the Data Shows",
    category: "Research",
    excerpt:
      "Recent OAAA studies show outdoor advertising delivers strong recall and purchase intent. We break down the numbers and what they mean for NC businesses.",
  },
  {
    slug: "best-billboard-locations-wilmington",
    title: "Best Billboard Locations in Wilmington, NC",
    category: "Locations",
    excerpt:
      "Wilmington's growth has created a competitive outdoor advertising market. These corridors consistently deliver the highest-reach placements for advertisers.",
  },
  {
    slug: "how-to-design-billboard-ad",
    title: "How to Design an Effective Billboard Ad",
    category: "Creative",
    excerpt:
      "Drivers have roughly 3 seconds to read your billboard. Here are the design principles that make the difference between a message that sticks and one that disappears.",
  },
  {
    slug: "billboard-advertising-local-businesses",
    title: "Billboard Advertising for Local Businesses: A Complete Guide",
    category: "Guide",
    excerpt:
      "You don't need a national budget to run an effective billboard campaign. This guide covers everything a local NC business needs to know to get started.",
  },
];

const categoryColors: Record<string, string> = {
  Pricing: "#0047CC",
  Strategy: "#7C3AED",
  Research: "#059669",
  Locations: "#F97316",
  Creative: "#DC2626",
  Guide: "#B45309",
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-6xl font-black text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Outdoor Advertising Resources
          </h1>
          <p className="text-lg text-white/60">
            Guides, research, and insights to help NC businesses get more out of billboard advertising.
          </p>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg overflow-hidden flex flex-col"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #E2E8F0" }}
              >
                {/* Placeholder image area */}
                <div
                  className="h-36 flex items-end p-4"
                  style={{
                    background: `linear-gradient(135deg, #08091A 0%, #0D1230 100%)`,
                  }}
                >
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: categoryColors[post.category] ?? "#475569" }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-lg font-bold text-[#0F172A] mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#475569] leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href="/contact"
                    className="text-sm font-bold text-[#0047CC] hover:text-[#F97316] transition-colors"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Have a Question About Billboard Advertising?"
        subheadline="Our team is happy to answer any questions — no obligation required."
        buttonLabel="Contact Us →"
        buttonHref="/contact"
      />
    </>
  );
}
