import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { WaitlistProvider } from "./context/WaitlistContext";
import WaitlistModal from "./components/WaitlistModal";
import { PHProvider } from "./providers/PostHogProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ubenie.com"),
  title: {
    default: "Ubenie - AI-Powered Traffic Builder | Rank Higher on Autopilot",
    template: "%s | Ubenie",
  },
  description:
    "Setup once and focus on your business, while Ubenie builds your traffic with SEO-optimized blog posts. AI-powered content automation that ranks and converts.",
  keywords: [
    "AI content automation",
    "SEO blog writing",
    "automated content marketing",
    "traffic builder",
    "SEO tools",
    "blog automation",
    "content generation",
    "search engine optimization",
  ],
  authors: [{ name: "Ubenie Team" }],
  creator: "Ubenie",
  publisher: "Ubenie",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ubenie.com",
    title: "Ubenie - AI-Powered Traffic Builder",
    description:
      "Setup once and focus on your business, while Ubenie builds your traffic with SEO-optimized blog posts.",
    siteName: "Ubenie",
    images: [
      {
        url: "/ubenie-full-logo.png",
        width: 1200,
        height: 630,
        alt: "Ubenie - AI-Powered Traffic Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubenie - AI-Powered Traffic Builder",
    description:
      "Setup once and focus on your business, while Ubenie builds your traffic.",
    images: ["/ubenie-full-logo.png"],
    creator: "@lukagoesindie",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} antialiased`}
      >
        <PHProvider>
          <WaitlistProvider>
            <Header />
            {children}
            <Footer />
            <WaitlistModal />
          </WaitlistProvider>
        </PHProvider>
      </body>
    </html>
  );
}
