import Image from "next/image";
import {
  CheckCircle2,
  Rocket,
  Shield,
  Star,
  Repeat,
  CheckCheck,
  FileSearch,
  Image as ImageIcon,
  Megaphone,
  Youtube,
} from "lucide-react";

import WaitlistButton from "./components/WaitlistButton";
import FAQItem from "./components/FAQItem";
import PricingCalculator from "./components/PricingCalculator";

import bing from "../../public/logos/bing.svg";
import claude from "../../public/logos/claude-ai-icon.svg";
import deepseek from "../../public/logos/deepseek.svg";
import google from "../../public/logos/google.svg";
import grok from "../../public/logos/grok-light.svg";
import perplexity from "../../public/logos/perplexity.svg";
import hero from "../../public/mind-map6.webp";
import LukaAvatar from "../../public/LukaAvatar.webp";
import blogImage from "../../public/blog-image.png";

import webflow from "../../public/logos/webflow.svg";
import framer from "../../public/logos/framer.svg";
import wordpress from "../../public/logos/wordpress.svg";
import wix from "../../public/logos/wix.png";
import shopify from "../../public/logos/shopify.svg";
import webhook from "../../public/logos/webhook.png";

const avatars = [
  { src: webflow, alt: "Webflow" },
  { src: framer, alt: "Framer" },
  { src: wordpress, alt: "WordPress" },
  { src: wix, alt: "Wix" },
  { src: shopify, alt: "Shopify" },
  { src: webhook, alt: "Webhook" },
];

const faqData = [
  {
    question: "How can automated blog posts improve my website's SEO rankings?",
    answer:
      "Automated blog posts keep your website fresh with new, relevant content, targeting keywords that matter. This signals to Google that your site is active and authoritative, resulting in better search rankings and more organic traffic.",
  },
  {
    question: "Do I need any SEO or writing experience to use this app?",
    answer:
      "Not at all. The app handles keyword research, topic planning, content creation, and even SEO optimization for you. Anyone can use it for high-impact results, regardless of technical background.",
  },
  {
    question: "How does the AI find low-competition, high-potential keywords?",
    answer:
      "The system uses advanced data analysis, tracking trends and search volumes to find keywords that are easy to rank for but drive real business results.",
  },
  {
    question: "Can I review or edit the articles before they go live?",
    answer:
      "Absolutely. You can review, make changes, or approve every article before scheduling or publishing. You're always in control of your content.",
  },
  {
    question:
      "How much time does this tool save compared to manual content creation?",
    answer:
      "Users save hours every week. No research, writing, or manual SEO required — just review and approve in minutes.",
  },
  {
    question: "Will my site's content actually rank on Google?",
    answer:
      "Yes. Content is specifically created to follow SEO best practices, targeting keywords with ranking potential and optimizing for user intent and Google's algorithms.",
  },
  {
    question: "Is it safe to automate blog creation for my brand?",
    answer:
      "Yes, you retain full control over publishing. Edit, approve, or reject any content to ensure it matches your brand voice and standards.",
  },
  {
    question:
      "Does it work for new or small websites with no domain authority?",
    answer:
      "Absolutely. The app specializes in finding easy-win keywords for new or underdog websites and quickly building up search presence.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-[#FEF7EC] rounded-[30px] mx-auto mt-4 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="relative mb-6 inline-flex items-center gap-2 bg-secondary/70  text-[#001438] py-1.5 text-sm">
            <div className="relative flex items-center justify-center">
              <div className="w-4 h-4 bg-emerald-400 rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
            </div>
            <span>
              {new Date().getDate() % 2 !== 0 ? "2" : "1"} founder
              {new Date().getDate() % 2 !== 0 ? "s" : ""} joined today!
            </span>
            <span className="absolute bottom-0 right-0 w-full h-[2px] bg-[#001438]"></span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#001438] leading-10 md:leading-16">
                {/* The #1 AI-powered Waterfall Enrichment tool */}
                {/* Grow your Traffic on Autopilot */}
                Grow Traffic with AI-Driven Blog Content
                {/* Let Us Grow Your SEO Traffic Organically */}
              </h1>
              <p className="text-base md:text-lg text-[#64708b] max-w-[400px]">
                Setup once, and watch as optimized blog content appears,
                publishes, and climbs Google — all while you focus on your
                business.
                {/* Grow your traffic in days, not months. Get optimized blog posts
                that target low-competition, high-potential keywords — created,
                optimized, and published for you with a click. */}
              </p>
              <div>
                <WaitlistButton className="bg-[#2563eb] text-white md:px-8 md:py-4 px-4 py-2 font-semibold text-lg hover:bg-gray-800 transition-colors">
                  Join the waitlist 🚀
                </WaitlistButton>
                <div className="flex items-center justify-center py-2 w-fit">
                  {/* <div className="flex -space-x-3">
                    {avatars.map((avatar, index) => (
                      <div
                        key={index}
                        className="relative w-6 h-6 rounded-full bg-white border-2 border-white overflow-hidden"
                      >
                        <Image
                          src={avatar.src}
                          alt={avatar.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div> */}
                  <span className="text-[12px] text-[#64708b] underline">
                    {/* 100+ founders have secured their spot */}
                    Secure your spot - no payment required
                  </span>
                </div>
              </div>

              <div className="flex flex-row gap-4 pt-4">
                <div className="flex items-center text-[#64708b] text-sm md:text-base">
                  <div className="bg-emerald-400 flex items-center justify-center rounded-full p-[4px] mr-2 border-2 border-white">
                    <Repeat className="w-4 h-4 text-white" />
                  </div>
                  <span>Fully automated</span>
                </div>
                <div className="flex items-center text-[#64708b] text-sm md:text-base">
                  <div className="bg-emerald-400 flex items-center justify-center rounded-full p-[4px] mr-2 border-2 border-white">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center text-[#64708b] text-sm md:text-base">
                  <div className="bg-emerald-400 flex items-center justify-center rounded-full p-[4px] mr-2 border-2 border-white">
                    <CheckCheck className="w-4 h-4 text-white" />
                  </div>
                  <span>AI-powered</span>
                </div>
              </div>
            </div>

            <div className="relative h-full w-full ">
              <Image
                src={hero}
                className="h-full w-full object-contain"
                alt="mind-map"
                width={1000}
                height={1000}
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Logo Carousel */}
      <div className="w-full py-12 overflow-hidden max-w-7xl mx-auto">
        <p className="text-xl text-gray-600 max-w-[900px] mx-auto mb-10 text-center">
          Make your website seen in:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-y-16">
          {/* <div className="flex animate-scroll-seamless"> */}
          {[
            { src: bing, alt: "Bing" },
            { src: claude, alt: "Claude AI" },
            { src: deepseek, alt: "DeepSeek" },
            { src: google, alt: "Google" },
            { src: grok, alt: "Grok" },
            { src: perplexity, alt: "Perplexity" },
          ].map((logo) => (
            <div
              key={logo.alt}
              className="w-full md:w-48 flex items-center justify-center shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Email & Phone Verification Section */}
      <section className="space-y-10 md:space-y-20 py-10 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center pb-10 md:pb-26">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              If we can&apos;t rank you&apos;s website higher, no one else can.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-[900px] mx-auto">
              Zero learning curve: enter your product, review the ready-made
              content, and enjoy consistent traffic growth with no ongoing
              effort.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 bg-emerald-50 rounded-3xl">
              {/* <div className="bg-white rounded-2xl p-8 shadow-md"> */}
              <video
                src="/table-record.mp4"
                className="w-full h-auto rounded-2xl"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                {/* Enrich your list with{" "}
              <span className="italic text-emerald-400">verified</span> emails
              &amp; phones */}
                Instantly find{" "}
                <span className="italic text-emerald-400">High-Ranking</span>{" "}
                Keyword Opportunities
              </h3>
              <p className="text-lg text-gray-600">
                Unlock hidden growth with AI-powered keyword research tailored
                to your product or service.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3" />
                  <span className="text-base md:text-lg">
                    No guesswork, just proven keyword ideas
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3" />
                  <span className="text-base md:text-lg">
                    Focus on low-competition, high-potential terms
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3" />
                  <span className="text-base md:text-lg">
                    Target what your real customers are actually searching
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3" />
                  <span className="text-base md:text-lg">
                    All suggestions mapped to your unique business
                  </span>
                </div>
              </div>

              <WaitlistButton className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors">
                Join the waitlist 🚀
              </WaitlistButton>
            </div>
          </div>
        </div>

        {/* Data Points Section */}
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
                Get Blog Posts Designed to Outperform Your Competitors
              </h3>
              <p className="text-base md:text-lg text-gray-600">
                {/* Turn those keywords into Google-optimized blog posts crafted for
              maximum impact. */}
                Turn those keywords into Google-optimized blog posts crafted for
                maximum impact. Each article is strategically designed to climb
                search rankings and drive qualified traffic to your business.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "SEO best practices",
                  "Engaging, human-like content",
                  "Targets user intent",
                  "Structured for ranking",
                  "Internal linking suggestions",
                  "Competitive analysis insights",
                  "Optimized headlines and meta descriptions",
                ].map((feature, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 rounded-md text-sm text-gray-700 flex items-center"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                    {feature}
                  </span>
                ))}
              </div>

              <WaitlistButton className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors">
                Join the waitlist 🚀
              </WaitlistButton>
            </div>

            <div className="p-8 bg-yellow-50 rounded-3xl">
              <div className="bg-white rounded-2xl p-6 border-2 border-black shadow-lg">
                <Image src={blogImage} alt="article" />
              </div>
            </div>
          </div>
        </div>

        {/* AI Feature Section */}
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 bg-pink-100 rounded-3xl">
              {/* <Image src={calendarImage} alt="calendar" /> */}
              <video
                src="/calendar-record.mp4"
                className="w-full h-auto rounded-2xl"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Review, Edit, & Schedule with Ease
              </h3>
              <p className="text-base md:text-lg text-gray-600">
                Take control: approve, tweak, or schedule articles without
                writing a word. Your content workflow becomes as simple as
                clicking approve, making minor edits, or scheduling posts for
                maximum impact.
              </p>

              <WaitlistButton className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors">
                Join the waitlist 🚀
              </WaitlistButton>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="container mx-auto px-4 py-20 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold text-[#001438] text-center mb-16">
          {/* Trusted by 15,000+ users worldwide */}
          Effortless Onboarding, 0 to 100% in No Time
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              name: "You describe your business",
              benefits: [
                "Short description of your business",
                "No technical detail needed",
              ],
            },
            {
              name: "We Generate Content",
              benefits: [
                "AI-generated content",
                "Optimized for SEO",
                "Targeted to your audience",
              ],
            },
            {
              name: "You Rank Higher",
              benefits: [
                "Higher search rankings",
                "More traffic to your website",
                "More leads and sales",
              ],
            },
          ].map((platform) => (
            <div
              key={platform.name}
              className="bg-white border-2 border-black p-6 rounded-lg relative"
            >
              <div className="h-12 md:mb-4 flex items-start justify-start text-[#001438]">
                <div className="text-xl md:text-2xl font-bold">
                  {platform.name}
                </div>
              </div>

              {platform.benefits.map((benefit, i) => (
                <div className="flex items-center text-gray-700" key={i}>
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="benefits" className="px-4 py-20 bg-pink-50/30">
        {/* <section id="benefits" className="px-4 py-20 bg-[#FEF7EC]/50"> */}
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Get Traffic on Autopilot
            </h2>
            <p className="text-lg text-gray-600 max-w-[900px] mx-auto">
              Ubenie includes all the tools and features you need to create,
              optimize, and publish content that ranks and gets you traffic on
              autopilot.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Auto Keywords
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  After onboarding, Ubenie analyzes your niche and competitors
                  to build a personalized keyword list filled with opportunities
                  to get traffic from.
                </p>
              </div>
              <div className="space-y-2 bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⚡</span>
                    <span className="text-gray-700">AI blog generator</span>
                  </div>
                  <span className="text-gray-900 font-medium">1.2K</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">○</span>
                    <span className="text-gray-700">content automation</span>
                  </div>
                  <span className="text-gray-900 font-medium">890</span>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⚡</span>
                    <span className="text-gray-700">GEO writing tool</span>
                  </div>
                  <span className="text-gray-900 font-medium">650</span>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Auto Research
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Before writing, Ubenie analyzes top-ranking articles for your
                  keyword and gets data on how to create a better article to
                  outrank them.
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-2">
                  <FileSearch className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-700 font-medium">
                    Competitor Analysis
                  </span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-2">
                  <FileSearch className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-700 font-medium">
                    Top Rankings
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Auto Linking
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ubenie automatically adds internal, external links to every
                  post - helping your content rank higher and look more
                  trustworthy to search engines.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 bg-gray-200 rounded flex-1"></div>
                  <div className="h-2 w-16 bg-blue-500 rounded"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 bg-gray-200 rounded flex-1"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-24 bg-blue-500 rounded"></div>
                  <div className="h-2 bg-gray-200 rounded flex-1"></div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Auto Images
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Have good looking articles without extra time. With Auto
                  Images on, Ubenie creates and inserts visuals that match your
                  topic and brand.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-500">SEO Optimized Image</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Auto Promotion
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our AI strategically places your business mentions throughout
                  each article. Turn every blog post into a converting sales
                  page without being promotional.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="border-2 border-dashed border-gray-300 rounded p-3 text-center">
                  <Megaphone className="w-8 h-8 text-gray-400 mx-auto mb-1" />
                  <p className="text-sm text-gray-600 font-medium">
                    Your Business
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Auto YouTube
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Relevant videos are discovered and embedded automatically. Our
                  AI finds and adds engaging YouTube content to boost time on
                  page.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center relative">
                <div className="w-full h-24 bg-gray-200 rounded flex items-center justify-center">
                  <div className="bg-red-600 rounded-full p-3">
                    <Youtube className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  YouTube
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Backlink Exchange
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Gain ranking power by exchanging backlinks with users in our
                  network. Grow together through strategic link partnerships
                  that boost everyone&apos;s domain authority.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white rounded-lg p-2 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-full flex items-center justify-center">
                        <span className="text-black text-xs font-bold">A</span>
                      </div>
                      <span className="text-xs text-gray-600">Your Site</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-pink-100 rounded-full"></div>
                      <div className="h-px w-4 bg-pink-100"></div>
                      <div className="w-0 h-0 border-l-4 border-l-pink-100 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-600">Partner</span>
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-black text-xs font-bold">B</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-2 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-black text-xs font-bold">B</span>
                      </div>
                      <span className="text-xs text-gray-600">Partner</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-amber-100 rounded-full"></div>
                      <div className="h-px w-4 bg-amber-100"></div>
                      <div className="w-0 h-0 border-l-4 border-l-amber-100 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-600">Your Site</span>
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                        <span className="text-black text-xs font-bold">A</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center pt-2">
                    <p className="text-xs text-emerald-600 font-semibold flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Mutual Growth Activated
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Integrations
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Connect your site via Webflow, Framer, and other integrations
                  - then forget about it. Ubenie will publish content to your
                  site everyday on autopilot.
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    Integrations
                  </p>
                  <p className="text-xs text-gray-600 mb-3">
                    Connect with popular platforms and publish automatically
                  </p>
                  <div className="flex gap-4 mb-3">
                    <div className="w-8 h-8 bg-white border-1 border-gray-200 rounded-full flex items-center justify-center">
                      <Image
                        src={webflow}
                        alt="Webflow"
                        className="w-4 h-4 text-white"
                      />
                    </div>
                    <div className="w-8 h-8 bg-white border-1 border-gray-200 rounded-full flex items-center justify-center">
                      <Image
                        src={framer}
                        alt="Framer"
                        className="w-4 h-4 text-white"
                      />
                    </div>
                    <div className="w-8 h-8 bg-white border-1 border-gray-200  rounded-full flex items-center justify-center">
                      <Image
                        src={wordpress}
                        alt="WordPress"
                        className="w-4 h-4 text-white"
                      />
                    </div>
                    <div className="w-8 h-8 bg-white border-1 border-gray-200 rounded-full flex items-center justify-center">
                      <Image
                        src={wix}
                        alt="Wix"
                        className="w-4 h-4 text-white"
                      />
                    </div>
                    <div className="w-8 h-8 bg-white border-1 border-gray-200 rounded-full flex items-center justify-center">
                      <Image
                        src={shopify}
                        alt="Shopify"
                        className="w-4 h-4 text-white"
                      />
                    </div>
                    <div className="w-8 h-8 bg-white border-1 border-gray-200  rounded-full flex items-center justify-center">
                      <Image
                        src={webhook}
                        alt="Webhook"
                        className="w-4 h-4 text-white"
                      />
                    </div>
                  </div>
                  <button className="w-full bg-black text-white text-sm py-2 rounded-md font-medium">
                    Enable Integration
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  SEO/GEO Score
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our AI perfectly optimizes each article with real-time SEO/GEO
                  scores and even suggests fixes if needed to boost your search
                  visibility.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="relative inline-flex items-center justify-center w-32 h-32 mb-3">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#10b981"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="351.86"
                      strokeDashoffset="0"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      100
                    </span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-900">
                  Article Score
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Your article is well-optimized!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* pricing section */}
      <section className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            No Subscriptions. Pay for What You Use.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Buy credits once, use them whenever you need. No monthly
            commitments, no automatic renewals. Credits never expire.
          </p>

          <div className="flex items-center justify-center bg-pink-50 w-fit mx-auto rounded-lg p-4 mt-4">
            <p className="text-gray-900">
              🎁 We care about our{" "}
              <span className="font-semibold ">early adopters</span>, so
              we&apos;ve prepared{" "}
              <span className="font-semibold underline">50% discount</span> for
              the early birds.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Free Trial */}
          <div className="bg-[#FEF7EC] rounded-2xl p-8 flex flex-col ">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Free Trial
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-gray-900">100</span>
                <span className="text-2xl text-gray-600">credits</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                No credit card required
              </p>
            </div>

            <div className="space-y-3 flex-grow mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">Complete keyword research</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  Generate{" "}
                  <span className="font-semibold">2 sample articles</span>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">Test all features</span>
              </div>
              <div className="pt-4 border-t border-gray-300"></div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">Unlimited Projects</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">All 6 Integrations</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">Priority Support</span>
              </div>
            </div>

            <WaitlistButton className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Start Free Trial
            </WaitlistButton>
          </div>

          {/* Main Plan - Most Popular */}
          <div className="bg-[#E6F7F5] rounded-2xl p-8 flex flex-col border-2 border-black relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-black border-2 border-black bg-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Standard
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-400 relative">
                  $178
                  <div className="absolute bottom-[50%] left-0 w-full h-[2px] bg-gray-400 translate-y-1/2"></div>
                </span>
                <span className="text-5xl font-bold text-gray-900">$89</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                1,000 credits - one-time payment
              </p>
            </div>

            <div className="space-y-3 flex-grow mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  <span className="font-semibold">~30-40 articles</span> per
                  month
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  AI-Generated{" "}
                  <span className="font-semibold">1,200-3,000 word</span>{" "}
                  articles
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  Automatic keyword research
                </span>
              </div>
              <div className="pt-4 border-t border-gray-300"></div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">Unlimited Projects</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">Unlimited Team Members</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  All 6 Platform Integrations
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  SEO Optimization & Scoring
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  AI Images & YouTube Embeds
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">Unlimited Article Edits</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900 flex items-center gap-2">
                  Credits Never Expire
                  <span className="bg-black text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
                    New 🔥
                  </span>
                </span>
              </div>
            </div>

            <WaitlistButton className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Get Started
            </WaitlistButton>
            <p className="text-xs text-gray-500 text-center mt-3">
              Optional: Enable auto-refill (disabled by default)
            </p>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#FFFBEB] rounded-2xl p-8 flex flex-col ">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Premium
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-400 relative">
                  $398
                  <div className="absolute bottom-[50%] left-0 w-full h-[2px] bg-gray-400 translate-y-1/2"></div>
                </span>
                <span className="text-5xl font-bold text-gray-900">$199</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                2,500 credits - one-time payment
              </p>
              <div className="mt-2 inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">
                Save $24
              </div>
            </div>

            <div className="space-y-3 flex-grow mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  <span className="font-semibold">~75-100 articles</span> per
                  month
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  AI-Generated{" "}
                  <span className="font-semibold">1,200-3,000 word</span>{" "}
                  articles
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  Automatic keyword research
                </span>
              </div>
              <div className="pt-4 border-t border-gray-300"></div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">Unlimited Projects</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">Unlimited Team Members</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  All 6 Platform Integrations
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  SEO Optimization & Scoring
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">
                  AI Images & YouTube Embeds
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">Unlimited Article Edits</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">Credits Never Expire</span>
              </div>
            </div>

            <WaitlistButton className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Get Started
            </WaitlistButton>
            <p className="text-xs text-gray-500 text-center mt-3">
              Optional: Enable auto-refill (disabled by default)
            </p>
          </div>
        </div>

        {/* Pricing Calculator Widget */}
        {/* <PricingCalculator /> */}
      </section>

      {/* about section */}
      <section id="about" className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="bg-indigo-50 rounded-3xl p-8 md:p-12">
          {/* Left side - Badge */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
            <div className="bg-[#FEF7EC] rounded-3xl p-8 flex flex-col items-center text-center">
              {/* Avatar with laurels */}
              <div className="rounded-full h-[130px] w-[130px] overflow-hidden border-2 border-indigo-200 flex items-center justify-center">
                <Image
                  src={LukaAvatar}
                  className="object-cover h-[200px] w-[200px]"
                  alt="Luka"
                  width={150}
                  height={150}
                />
              </div>
            </div>

            {/* Right side - Text content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 relative inline-block">
                  Hey, Entrepreneur 👋
                  <span className="absolute bottom-[-4px] left-0 w-full h-1 bg-indigo-300 rounded"></span>
                </h3>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                I&apos;m <span className="font-semibold">Luka</span>, the
                creator of <span className="font-semibold">Ubenie</span>. I used
                to <span className="font-semibold underline">hate SEO</span> .
                Finding keywords, writing content, and optimizing for SEO was a
                pain.
              </p>
            </div>
          </div>

          <div className="mt-4 md:mt-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              Right
              <span className="font-semibold">
                content is a goldmine of opportunities
              </span>
              . But most businesses struggle with consistency and SEO
              optimization.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed italic">
              Traffic, rankings, domain authority... but do any of these
              actually tell you where your growth is coming from?
            </p>
            <div className="pt-4">
              <p className="text-xl text-gray-700 font-semibold mb-4">
                So I built Ubenie for 3 reasons:
              </p>
              <ol className="space-y-3 text-gray-700 text-lg">
                <li>
                  <span className="font-semibold">1.</span> Find{" "}
                  <span className="font-semibold">
                    content strategies that drive real traffic
                  </span>
                  , not just pageviews.
                </li>
                <li>
                  <span className="font-semibold">2.</span> Discover{" "}
                  <span className="font-semibold">
                    what makes readers convert
                  </span>{" "}
                  and turn more visits into customers.
                </li>
                <li>
                  <span className="font-semibold">3.</span> Make{" "}
                  <span className="font-semibold">growth-driven decisions</span>{" "}
                  and work on the right content.
                </li>
              </ol>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed pt-4">
              I&apos;m building Ubenie for{" "}
              <span className="font-semibold underline">
                hundreds of people
              </span>{" "}
              so they can skip the struggle and proceed with their business.
              Let&apos;s rank together! 🚀
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-16 max-w-[1200px]">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#001438] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-[700px]">
            Explore our comprehensive FAQ to find quick answers to common
            inquiries. If you need further assistance, don&apos;t hesitate to
            contact us for personalized help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-0">
            {faqData
              .slice(0, Math.ceil(faqData.length / 2))
              .map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
          </div>

          {/* Right Column */}
          <div className="space-y-0">
            {faqData.slice(Math.ceil(faqData.length / 2)).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-16 max-w-[1200px] mb-16">
        <div className="bg-[#FEF7EC] rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Stop missing profit and get more free traffic
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-[700px] mx-auto mb-8">
              Ubenie builds your traffic with SEO optimized blog posts,
              increases your visibility, and grows your profit.
            </p>

            <WaitlistButton className="bg-black text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-800 transition-colors">
              Join the waitlist 🚀
            </WaitlistButton>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-16 h-16 opacity-20">
            <Star className="w-full h-full text-yellow-400" />
          </div>
          <div className="absolute bottom-4 right-4 w-20 h-20 opacity-20">
            <Rocket className="w-full h-full text-blue-400" />
          </div>
        </div>
      </section>
    </div>
  );
}
