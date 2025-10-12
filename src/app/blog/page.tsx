import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { blogPostsData } from "./blogData";

export const metadata: Metadata = {
  title: "Blog - SEO & Content Automation Insights",
  description:
    "Discover expert insights on AI-powered content automation, SEO strategies, keyword research, and automated blog writing. Learn how to scale your content and rank higher in search engines.",
  keywords: [
    "SEO blog",
    "content automation",
    "AI content writing",
    "keyword research",
    "blog automation",
    "SEO strategies",
    "content marketing",
    "automated blogging",
  ],
  openGraph: {
    title: "Blog - SEO & Content Automation Insights | Ubenie",
    description:
      "Expert insights on AI-powered content automation and SEO strategies to help you rank higher and grow your traffic.",
    type: "website",
    images: [
      {
        url: "/ubenie-full-logo.png",
        width: 1200,
        height: 630,
        alt: "Ubenie Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - SEO & Content Automation Insights",
    description:
      "Expert insights on AI-powered content automation and SEO strategies.",
    images: ["/ubenie-full-logo.png"],
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-16 max-w-[1400px]">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Insights, updates, and guides on AI-powered search, machine
              learning, and building the future of information discovery.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-16 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post, index) => {
            const bgColors = [
              "bg-emerald-50",
              "bg-yellow-50",
              "bg-pink-100",
              "bg-indigo-50",
            ];
            const bgColor = bgColors[index % bgColors.length];

            return (
              <article
                key={post.id}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/blog/${post.id}`}>
                  <div
                    className={`relative aspect-[16/9] overflow-hidden p-6 ${bgColor} rounded-xl`}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 p-6 rounded-lg"
                    />
                  </div>
                </Link>

                <div className="p-6">
                  {/* Reading time */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Reading time {post.readTime}</span>
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${post.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <Link href={`/blog/${post.id}`}>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </Link>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500">{post.date}</div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {post.author.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {post.author.title}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pagination */}
        {/* <div className="flex justify-center items-center gap-2 mt-16">
          <button
            disabled
            className="px-4 py-2 text-gray-400 cursor-not-allowed"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">
            1
          </button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors">
            2
          </button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors">
            3
          </button>
          <span className="px-2 text-gray-400">…</span>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors">
            15
          </button>

          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div> */}
      </div>

      {/* CTA Section */}
      <div className="bg-[#FEF7EC] border border-gray-200 rounded-3xl mx-4 mb-16 max-w-[1400px] lg:mx-auto">
        <div className="relative p-8 md:p-16 text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-8 left-8 opacity-50">
            <svg
              width="58"
              height="55"
              viewBox="0 0 58 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.2914 41.6933C24.0917 42.4966 22.3064 42.0723 21.2296 40.2486C18.944 36.3615 17.098 35.8381 12.2526 37.6902C8.54874 39.1081 7.13353 39.1977 5.42472 38.0744C3.09367 36.5548 3.95915 40.4092 6.55463 41.4462C8.45188 42.2035 9.70721 42.0756 12.7237 40.7987C17.3736 38.838 18.7139 39.0411 20.3258 41.9187C22.2481 45.3873 24.9378 46.2413 28.8562 44.6624C30.8765 43.8705 30.3526 40.9343 27.2914 41.6933Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Ready to revolutionize your search experience?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our waitlist and be among the first to experience AI-powered
              search that actually understands what you&apos;re looking for.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Join the waitlist 🚀
            </Link>
          </div>

          {/* Decorative element on the right */}
          <div className="absolute bottom-8 right-8 opacity-50 hidden md:block">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M58.8271 14.5027C58.5102 11.8919 58.4552 9.90144 55.9365 8.54096C58.1364 7.94583 59.6516 5.1395 60.0097 3C60.4033 5.04149 60.7246 7.42573 62.3502 8.89634C60.2896 9.73674 59.0725 12.1182 58.8274 14.232"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
