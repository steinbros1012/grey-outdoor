import Link from "next/link";

interface SectionHeaderProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  center = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#EB2813]/15 text-[#EB2813] mb-4 tracking-wide">
          {badge}
        </span>
      )}
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4"
        style={{ color: light ? "#272727" : "#F8FAFC", letterSpacing: "-0.02em" }}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className="text-base sm:text-lg max-w-2xl leading-relaxed"
          style={{ color: light ? "#475569" : "rgba(248,250,252,0.65)" }}
        >
          {subheadline}
        </p>
      )}
      {ctaLabel && ctaHref && (
        <div className={`mt-6 ${center ? "flex justify-center" : ""}`}>
          <Link
            href={ctaHref}
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#EB2813] text-white font-semibold hover:bg-[#c8200f] transition-colors"
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </div>
  );
}
