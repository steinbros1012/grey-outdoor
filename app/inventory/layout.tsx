import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billboard Inventory | Grey Outdoor, NC Outdoor Advertising",
  description:
    "Browse Grey Outdoor's 700+ billboard inventory across North Carolina. Static and digital options in Wilmington, Raleigh, Apex, Leland, Jacksonville, and Coastal NC.",
};

export default function InventoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
