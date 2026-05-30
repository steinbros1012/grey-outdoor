import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lease Your Land for a Billboard | Grey Outdoor",
  description:
    "Own property along a major NC or SC highway? Grey Outdoor pays landowners to place billboards on their property. Find out what your land could earn.",
};

export default function ForLandownersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
