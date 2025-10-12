import logo from "../../../public/logo-no-bg.png";

import Image from "next/image";
import Link from "next/link";
import WaitlistButton from "./WaitlistButton";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-16">
      <div className="container mx-auto px-4 max-w-[1400px]">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Top section with logo */}
          <div className="mb-12">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <Image src={logo} alt="ubenie" width={40} height={40} />
              </div>
              <span className="text-xl font-bold text-gray-900">Ubenie</span>
            </div>
          </div>
          {/* Product */}
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#faq"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {/* <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Pricing
                  </a>
                </li> */}
              {/* <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Help center
                  </a>
                </li> */}
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          {/* <div>
            <h3 className="font-bold text-gray-900 text-lg mb-6">Ressources</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Youtube Chanel
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Affiliate program
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Best Skylead Alternative
                </a>
              </li>
            </ul>
          </div> */}

          {/* CTA Section */}
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-6">
              Ready to get started?
            </h3>
            <div className="space-y-3">
              <WaitlistButton className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Join the waitlist
              </WaitlistButton>
              {/* <button className="w-full bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
                Talk to sales
              </button> */}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-1">
            {/* Built with <Heart className="w-4 h-4 text-red-500 fill-current" />{" "}
            in{" "} */}
            <a href="#" className="text-gray-900 hover:underline font-medium">
              Belgrade, Serbia
            </a>
            . © 2025 Ubenie. All rights reserved. .
          </p>

          {/* <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
              aria-label="Chat"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
