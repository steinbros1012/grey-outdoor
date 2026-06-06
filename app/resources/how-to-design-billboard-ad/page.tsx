import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "How to Design an Effective Billboard Ad | Grey Outdoor",
  description:
    "Drivers have 3 seconds to read your billboard. Here are the design rules that make the difference between a campaign that works and one that gets ignored.",
};

export default function HowToDesignBillboardAdPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/resources"
            className="text-sm font-semibold text-orange-400 hover:text-orange-300 mb-6 inline-block transition-colors"
          >
            ← Back to Resources
          </Link>
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4"
            style={{ backgroundColor: "#DC2626" }}
          >
            Creative
          </span>
          <h1
            className="text-3xl sm:text-5xl font-black text-white"
            style={{ letterSpacing: "-0.03em" }}
          >
            How to Design an Effective Billboard Ad
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            The average driver passing a billboard at highway speed has roughly 3 to 5 seconds to see it, read it, and process the message before it disappears in the rearview mirror. Most billboards fail not because they are in the wrong location, but because the creative was designed with no awareness of that constraint. Here are the principles that separate effective billboard design from billboard wallpaper.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            The 3-Second Rule
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Before you finalize any billboard creative, test it with a 3-second rule: print it out, hold it at arm's length, look at it for three seconds, then look away. What do you remember?
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            If you remember the brand name and one clear idea, the design is working. If you are trying to re-read it to figure out what it said, it will not work at 65mph. This test catches most problems before you spend money on production.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Keep It to 7 Words or Fewer
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Seven words is not a guideline, it is a ceiling, and shorter is usually better. The most memorable billboards often have three to five words plus a brand name. Every additional word competes for attention and reduces the chance that the core message lands.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            The hardest part of billboard design is not writing the copy, it is cutting it. Most first drafts have too many words because advertisers want to communicate everything. Force yourself to remove words until you get to the single most important idea. If you cannot decide what that idea is, the problem is a strategy problem, not a design problem.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Good examples: "Roof leak? Call Grey." "We Buy Houses." "Injury? Call Smith Law." Each says exactly one thing and leaves no ambiguity about what action to take.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Font Size and Readability
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            A general rule of thumb for billboard lettering: you need at least 1 foot of letter height for every 50 feet of viewing distance. For a board that needs to be legible at 300 feet, your main headline text should be at least 6 feet tall on the actual board.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Stick to bold, clean sans-serif typefaces. Fonts like Impact, Gotham Bold, Helvetica Neue Black, or Futura Heavy work well at scale. Avoid script fonts, thin weights, all-lowercase text, or decorative typefaces, they lose legibility fast at viewing distance and in changing light conditions.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Kerning matters at large scale. Letters that look fine on a screen can feel cramped or too spread out on a printed 14x48 board. If possible, review your artwork at actual scale or ask your operator to flag any legibility issues before printing.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Color Contrast Matters More Than You Think
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            High contrast between text and background is what makes billboard copy pop from a distance. These combinations work well: white text on dark navy or black, black text on yellow or white, orange text on dark backgrounds, and dark text on light blue.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Avoid low-contrast combinations that look fine on a computer screen but fall apart outdoors: red on dark green, purple on blue, gray on white, or any color combination that relies on subtle shade differentiation. Outdoor lighting, direct sun, overcast, night, shifts how colors read, and low-contrast designs become illegible under the wrong conditions.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Your brand colors may not be ideal for billboard use. It is worth adjusting saturation and contrast specifically for the outdoor format rather than forcing your standard brand palette onto a large-format display.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            One Message, One Action
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            The most common mistake in billboard design is trying to communicate too much. Advertisers stack their phone number, website URL, physical address, tagline, product list, and promotional offer onto a single board, then wonder why no one remembers it.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Pick one action and build the board around it. If the goal is calls, put the phone number prominently and remove the website. If the goal is website traffic, use a short URL and remove the phone number. If the goal is brand awareness, lead with the name and a single memorable line. Every element on the board should support that one call to action, anything else competes against it.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Phone Numbers vs. Websites
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Both can work, but both require the same discipline: keep them short and make them memorable. A 10-digit phone number is hard to retain from a billboard, a vanity number like 1-800-GET-ROOF is far more effective. If you use a numeric number, make it as short as possible and ensure it has a natural rhythm when read aloud.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            For websites, avoid long URLs with subpages. A short, clean domain is ideal. If you want to track traffic from the billboard specifically, set up a redirect at a short vanity URL (like yoursite.com/billboard) rather than putting a long tracking URL on the board. The URL on the board should be easy to type from memory 10 minutes after driving past.
          </p>

          <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4" style={{ letterSpacing: "-0.02em" }}>
            Grey Outdoor's Design Services
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            If you do not have in-house design capability, Grey Outdoor can help. Our team has produced artwork for hundreds of billboard campaigns across Eastern NC, Wilmington, Brunswick County, and coastal SC. We know what works at scale, what gets lost in production, and how to make your message land in 3 seconds.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Whether you need a starting point or a full creative, we can get your artwork ready for any board size and format, static vinyl or digital display. Just let us know when you reach out.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Need Help Designing Your Billboard?"
        subheadline="Grey Outdoor offers artwork services to get your creative ready for any size or format."
        buttonLabel="Contact Us →"
        buttonHref="/contact"
      />
    </>
  );
}
