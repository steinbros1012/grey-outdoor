import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grey Outdoor | Billboard Advertising in North Carolina",
  description:
    "North Carolina billboard advertising. 700+ locations in Wilmington, Raleigh, Apex, Leland and across NC.",
  keywords: [
    "billboard advertising",
    "outdoor advertising",
    "North Carolina billboards",
    "Wilmington billboard",
    "Raleigh billboard",
    "NC outdoor advertising",
  ],
  openGraph: {
    title: "Grey Outdoor | Billboard Advertising in North Carolina",
    description:
      "North Carolina billboard advertising. 700+ locations across NC.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[#1F2937] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
