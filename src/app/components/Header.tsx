import Image from "next/image";
import { Zap } from "lucide-react";

import logo from "../../../public/logo-no-bg.png";
import WaitlistButton from "./WaitlistButton";

export default function Header() {
  return (
    <header className="w-full  bg-white">
      <div className="container mx-auto px-4 py-4 max-w-[1400px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <Image src={logo} alt="ubenie" width={50} height={50} />
            </div>
            <span className="text-xl font-bold text-gray-900">ubenie</span>
            <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">
              AI
            </span>
          </div>

          {/* Navigation */}
          {/* <nav className="hidden md:flex items-center gap-8">
            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
              Getting started
              <ChevronDown className="w-4 h-4" />
            </button>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </a>
          </nav> */}

          {/* CTA Button */}
          <WaitlistButton className="bg-[#1a1a1a] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
            Join the waitlist
            <Zap className="w-4 h-4" fill="currentColor" />
          </WaitlistButton>
        </div>
      </div>
    </header>
  );
}
