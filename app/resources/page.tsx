import type { Metadata } from "next";
import Image from "next/image";
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
    image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=600&q=80",
    imageAlt: "Aerial view of highway interchange",
  },
  {
    slug: "static-vs-digital-billboards",
    title: "Static vs Digital Billboards: Which Is Right for Your Business?",
    category: "Strategy",
    excerpt:
      "Both formats deliver powerful outdoor exposure, but they serve different campaign goals. Here's how to choose based on your budget, creative, and timeline.",
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=600&q=80",
    imageAlt: "Static billboard on a highway",
  },
  {
    slug: "roi-of-outdoor-advertising",
    title: "The ROI of Outdoor Advertising: What the Data Shows",
    category: "Research",
    excerpt:
      "Recent OAAA studies show outdoor advertising delivers strong recall and purchase intent. We break down the numbers and what they mean for NC businesses.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    imageAlt: "Data analytics dashboard",
  },
  {
    slug: "best-billboard-locations-wilmington",
    title: "Best Billboard Locations in Wilmington, NC",
    category: "Locations",
    excerpt:
      "Wilmington's growth has created a competitive outdoor advertising market. These corridors consistently deliver the highest-reach placements for advertisers.",
    image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=600&q=80",
    imageAlt: "Digital billboard at night",
  },
  {
    slug: "how-to-design-billboard-ad",
    title: "How to Design an Effective Billboard Ad",
    category: "Creative",
    excerpt:
      "Drivers have roughly 3 seconds to read your billboard. Here are the design principles that make the difference between a message that sticks and one that disappears.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    imageAlt: "Coastal road with billboard visibility",
  },
  {
    slug: "billboard-advertising-local-businesses",
    title: "Billboard Advertising for Local Businesses: A Complete Guide",
    category: "Guide",
    excerpt:
      "You don't need a national budget to run an effective billboard campaign. This guide covers everything a local NC business needs to know to get started.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    imageAlt: "Beach and coastal highway at sunrise",
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
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: categoryColors[post.category] ?? "#475569" }}
                    >
                      {post.category}
                    </span>
                  </div>
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
