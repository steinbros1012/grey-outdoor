import Link from "next/link";

interface CTABannerProps {
  headline: string;
  subheadline?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function CTABanner({
  headline,
  subheadline,
  buttonLabel = "Get Started",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section
      className="py-20 px-4"
      style={{ background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
          style={{ letterSpacing: "-0.02em" }}
        >
          {headline}
        </h2>
        {subheadline && (
          <p className="text-white/85 text-lg mb-8 leading-relaxed">{subheadline}</p>
        )}
        <Link
          href={buttonHref}
          className="inline-flex items-center px-8 py-4 rounded-full bg-[#0F172A] text-white font-bold text-lg hover:bg-[#08091A] transition-colors"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
