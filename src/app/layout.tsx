import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

export const metadata: Metadata = {
  title: "Austropical Superfoods | Australia's Brightest Snack Choice",
  description: "Antioxidant-rich organic wild-harvested açaí tubs, instant smoothie cubes, and pure superfood packs. 100% real fruit, vegan, gluten-free, with zero added sugar.",
  keywords: ["Acai Superfood", "Organic Acai", "Smoothie Cubes", "Australia Acai Bowl", "Vegan Snacks", "Healthy Breakfast"],
  authors: [{ name: "Austropical Superfoods Team" }],
  openGraph: {
    title: "Austropical Superfoods | Australia's Brightest Snack Choice",
    description: "Premium Amazonian organic açaí and fruit cubes, delivered frozen across Australia.",
    url: "https://austropical-superfoods.com.au",
    siteName: "Austropical Superfoods",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Austropical Superfoods | Australia's Brightest Snack Choice",
    description: "Premium Amazonian organic açaí and fruit cubes, delivered frozen across Australia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-brand-orange selection:text-brand-purple">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
