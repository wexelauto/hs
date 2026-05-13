import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "wexel | AI Automation & Infrastructure",
  description: "Deploy bespoke AI infrastructure to handle mission-critical workflows 24/7.",
  metadataBase: new URL("https://wexel.ai"),
  openGraph: {
    title: "wexel | AI Automation & Infrastructure",
    description: "Deploy bespoke AI infrastructure to handle mission-critical workflows 24/7.",
    siteName: "wexel.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "wexel | AI Automation & Infrastructure",
    description: "Deploy bespoke AI infrastructure to handle mission-critical workflows 24/7.",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className={`${GeistSans.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
