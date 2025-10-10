import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { WaitlistProvider } from "./context/WaitlistContext";
import WaitlistModal from "./components/WaitlistModal";

import ubenie from "../../public/ubenie-fav.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ubenie - Rank Higher on Autopilot",
  description: "Grow your website traffic with Ubenie",
  icons: {
    icon: "../../public/ubenie-fav.png",
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
        <WaitlistProvider>
          <Header />
          {children}
          <Footer />
          <WaitlistModal />
        </WaitlistProvider>
      </body>
    </html>
  );
}
