import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

const displayFont = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#047857", // Emerald 750
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "JHT Energy Services | Free Boiler & Insulation Government Grants",
    template: "%s | JHT Energy Services"
  },
  description: "Check eligibility for 100% free boilers, heat pumps, and home insulation grants under government-backed ECO4 and GBIS schemes across the UK.",
  metadataBase: new URL("https://www.jhtenergyservices.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-slate-50 text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
