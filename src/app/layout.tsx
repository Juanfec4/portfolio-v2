import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Juan Cardenas | Portfolio",
  description: "Software Engineer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-stone-950 text-stone-200 dot-background overflow-x-hidden"
    >
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
