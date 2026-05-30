import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.greyoutdoor.com";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/inventory`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/digital-billboards`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/locations/wilmington`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/locations/raleigh`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/locations/apex`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/locations/leland`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/locations/jacksonville`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/locations/coastal-nc`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];
}
