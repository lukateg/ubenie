import Image from "next/image";
import {
  CheckCircle2,
  Rocket,
  Shield,
  Star,
  Repeat,
  CheckCheck,
} from "lucide-react";

import WaitlistButton from "./components/WaitlistButton";
import FAQItem from "./components/FAQItem";

import bing from "../../public/logos/bing.svg";
import claude from "../../public/logos/claude-ai-icon.svg";
import deepseek from "../../public/logos/deepseek.svg";
import google from "../../public/logos/google.svg";
import grok from "../../public/logos/grok-light.svg";
import perplexity from "../../public/logos/perplexity.svg";
import hero from "../../public/mind-map6.webp";
import LukaAvatar from "../../public/LukaAvatar.webp";
import blogImage from "../../public/blog-image.png";
// removed image import in favor of autoplay video

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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 ">
      {/* Hero Section */}
      <section className="bg-[#FEF7EC] rounded-[30px] mx-auto w-[96%] mt-4 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="relative mb-6 inline-flex items-center gap-2 bg-secondary/70  text-[#001438] py-1.5 text-sm">
            {/* <div className="inline-flex items-center gap-2 bg-secondary/70 border border-gray-400 backdrop-blur-xl text-[#001438] rounded-full px-4 py-1.5 text-sm"> */}
            <div className="relative flex items-center justify-center">
              <div className="w-4 h-4 bg-emerald-400 rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
            </div>
            <span>4 founders joined today!</span>
            {/* <span>{Math.floor(Math.random() * 5)} founders joined today!</span> */}
            <span className="absolute bottom-0 right-0 w-full h-[2px] bg-[#001438]"></span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#001438] leading-10 md:leading-16">
                {/* The #1 AI-powered Waterfall Enrichment tool */}
                {/* Grow your Traffic on Autopilot */}
                Grow Traffic with AI-Driven Blog Content
              </h1>
              <p className="text-base md:text-lg text-[#64708b] max-w-[400px]">
                Setup quickly, and watch as optimized blog content appears,
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
                <p className="text-[12px] text-[#64708b] pt-2 underline">
                  100+ founders have joined the waitlist
                </p>
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
      <section className="w-full py-12 overflow-hidden max-w-7xl mx-auto">
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
      </section>

      {/* Main Value Prop */}
      <section
        id="benefits"
        className="container mx-auto px-4 max-w-7xl"
      ></section>

      {/* Email & Phone Verification Section */}
      <section className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-12 md:py-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            If we can&apos;t rank you&apos;s website higher, no one else can.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-[900px] mx-auto">
            Zero learning curve: enter your product, review the ready-made
            content, and enjoy consistent traffic growth with no ongoing effort.
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
              Unlock hidden growth with AI-powered keyword research tailored to
              your product or service.
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
      </section>

      {/* Data Points Section */}
      <section className="container mx-auto px-4 py-16 max-w-7xl">
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
      </section>

      {/* AI Feature Section */}
      <section className="container mx-auto px-4 py-16 max-w-7xl">
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
              Take control: approve, tweak, or schedule articles without writing
              a word. Your content workflow becomes as simple as clicking
              approve, making minor edits, or scheduling posts for maximum
              impact.
            </p>

            <WaitlistButton className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors">
              Join the waitlist 🚀
            </WaitlistButton>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="container mx-auto px-4 py-16 max-w-7xl">
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
                  <span className="absolute bottom-[-4px] left-0 w-full h-1 bg-red-400 rounded"></span>
                </h3>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                I&apos;m <span className="font-semibold">Luka</span>, the
                creator of <span className="font-semibold">Ubenie</span>.
                I&apos;ve built{" "}
                <span className="font-semibold underline">
                  multiple startups
                </span>{" "}
                and helped businesses grow their online presence.
              </p>
            </div>
          </div>

          <div className="mt-4 md:mt-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              I learned that{" "}
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
              We&apos;re building Ubenie for{" "}
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
        <div className="mb-12">
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
