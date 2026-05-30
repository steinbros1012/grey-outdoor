import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Coastal NC Billboard Advertising | Grey Outdoor",
  description:
    "Billboard advertising along North Carolina's coast — Highway 17, US-64, and beach access routes. Reach millions of annual visitors and year-round coastal residents.",
};

const faqs = [
  { q: "What routes are included in Coastal NC billboard advertising?", a: "Our Coastal NC inventory covers Highway 17 (the primary north-south coastal corridor), US-64 (the Outer Banks access route), NC-12 on the Outer Banks, and various beach access roads in Brunswick County, Pender County, and the Crystal Coast area." },
  { q: "Is coastal billboard advertising seasonal or year-round?", a: "We offer both. Seasonal campaigns (typically April–September) capture peak tourist traffic and can be combined with a lower-rate off-season extension to maintain brand presence year-round. Many coastal businesses choose year-round campaigns for consistent awareness among permanent residents." },
  { q: "How many people visit the NC coast annually?", a: "The NC coast attracts more than 8 million visitors annually, with the Outer Banks alone drawing 4+ million. Combined with a growing permanent coastal population, these markets represent significant advertising opportunity." },
  { q: "What's the best time to run a coastal NC billboard campaign?", a: "Memorial Day through Labor Day delivers peak tourist impressions. However, spring (March-May) and fall (September-October) shoulder seasons are increasingly popular as off-peak travelers discover the coast. Year-round campaigns give you the best of both seasonal and resident audiences." },
  { q: "Can you target specific coastal markets like the Outer Banks or Crystal Coast?", a: "Yes. We can target specific corridors and beach communities within the broader coastal NC market. Tell us your ideal geographic focus and we will show you available inventory with traffic data for each location." },
];

export default function CoastalNCPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-4xl mx-auto">
          <Link href="/inventory" className="text-xs text-white/40 hover:text-white/70 mb-4 inline-block">← All Markets</Link>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#0891B2]/20 text-cyan-400 mb-4 uppercase tracking-widest">Coastal NC</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4" style={{ letterSpacing: "-0.03em" }}>Coastal NC Billboard Advertising</h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Reach North Carolina&apos;s 8 million+ annual coastal visitors and growing year-round population.
            From the Outer Banks to the Brunswick Beaches, our coastal corridor network puts your brand
            in front of millions of beach-bound travelers.
          </p>
        </div>
      </section>

      <section className="py-14 px-4" style={{ backgroundColor: "#0D1230" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[{ value: "8M+", label: "Annual Coastal Visitors" }, { value: "300+ mi", label: "NC Coastline" }, { value: "29,000", label: "Hwy 17 Daily Traffic" }, { value: "4M+", label: "Outer Banks Visitors" }].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-[#F97316] mb-1" style={{ letterSpacing: "-0.02em" }}>{s.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-[#0F172A] mb-8" style={{ letterSpacing: "-0.02em" }}>Available Billboard Locations</h2>
            <div className="space-y-4">
              {[
                { loc: "Surf City Approach, Topsail Island", hw: "Highway 17 Southbound", size: "14x48", traffic: "29,000/day", type: "Static" },
                { loc: "Crystal Coast Entry, Morehead City", hw: "US-64 Eastbound", size: "14x48", traffic: "24,000/day", type: "Static" },
                { loc: "Holly Ridge Beach Turn", hw: "Highway 17 Northbound", size: "10x36", traffic: "18,000/day", type: "Static" },
                { loc: "Outer Banks Approach, Manteo", hw: "US-64 East at NC-12", size: "14x48", traffic: "22,000/day", type: "Static" },
              ].map((loc) => (
                <div key={loc.loc} className="flex items-center justify-between p-5 bg-white rounded-lg" style={{ border: "1px solid #E2E8F0" }}>
                  <div>
                    <div className="font-bold text-[#0F172A]">{loc.loc}</div>
                    <div className="text-xs text-[#0047CC] font-semibold mt-0.5">{loc.hw}</div>
                    <div className="text-xs text-[#475569] mt-1">{loc.size} · {loc.traffic}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600">{loc.type}</span>
                    <Link href="/contact" className="px-4 py-2 rounded-full bg-[#F97316] text-white text-xs font-bold hover:bg-[#EA580C] transition-colors">Inquire</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-lg self-start" style={{ backgroundColor: "#0D1230" }}>
            <LeadForm title="Get Coastal NC Availability" subtitle="Request locations and pricing for the Coastal NC market." dark />
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#08091A" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>Why Advertise on the NC Coast?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Massive Seasonal Traffic", body: "NC's coastal roads funnel millions of tourists through a limited number of access routes every summer. Billboard placements on Highway 17 and US-64 are unavoidable for anyone heading to the beach — creating extraordinary reach during peak season." },
              { title: "High-Spending Tourist Audience", body: "Beach visitors are in vacation mode — they're actively spending on dining, activities, accommodations, and shopping. Coastal billboards catch consumers when they're most open to discovering new brands and businesses." },
              { title: "Growing Year-Round Population", body: "NC's coastal communities are seeing permanent population growth as remote workers and retirees relocate. Year-round campaigns now reach a meaningful resident audience in addition to the tourist surge." },
            ].map((r) => (
              <div key={r.title} className="p-6 rounded-lg" style={{ backgroundColor: "#0D1230", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4" style={{ backgroundColor: "#F1F5F9" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-[#0F172A] mb-6" style={{ letterSpacing: "-0.02em" }}>Industries That Succeed on the NC Coast</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Vacation Rentals", "Restaurants", "Hospitality", "Water Sports & Activities", "Real Estate", "Retail & Gifts", "Healthcare", "Home Services"].map(i => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold text-[#0F172A] bg-white border border-[#E2E8F0]">{i}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F172A] mb-10" style={{ letterSpacing: "-0.02em" }}>Coastal NC Billboard Advertising FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 bg-white rounded-lg" style={{ border: "1px solid #E2E8F0" }}>
                <h3 className="font-bold text-[#0F172A] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="Ready to Reach NC's Coastal Audience?" subheadline="Check availability on coastal NC's most-traveled billboard corridors." buttonLabel="Check Coastal NC Availability →" buttonHref="/contact" />
    </>
  );
}
