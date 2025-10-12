import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogPostsData, type BlogPost } from "../blogData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;
  const post = blogPostsData.find((p: BlogPost) => p.id === id);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      ...post.tags,
      "SEO blog",
      "content automation",
      "AI content",
      post.category,
    ],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const post = blogPostsData.find((p: BlogPost) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="border-b p-4">
        <header className="container mx-auto px-4 py-6 max-w-[1400px]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-600 mb-6">
            <Link
              href="/blog"
              className="hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
            <svg
              viewBox="0 0 18 27"
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.397 25.426l13.143-11.5-13.143-11.5"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-gray-900">{post.category}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-4 text-gray-600 mb-6">
                <span>{post.date}</span>
                <span className="flex items-center gap-2">
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
                  {post.readTime}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {post.author.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {post.author.title}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </header>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-8">
          {/* Main Content */}
          <article className="lg:col-span-2 prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="blog-content"
            />

            {/* FAQ Section */}
            {post.faq && post.faq.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
                <div className="space-y-6">
                  {post.faq.map(
                    (
                      item: { question: string; answer: string },
                      index: number
                    ) => (
                      <div key={index} className="border-b pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {item.question}
                        </h3>
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 bg-gray-900 text-white rounded-xl p-6 text-center">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/logo-no-bg.png"
                  alt="Ubenie"
                  width={60}
                  height={60}
                />
                <span className="text-2xl font-bold ml-2">Ubenie</span>
              </div>
              <p className="text-3xl font-light mb-4">
                Setup once and focus on your business, while we build your
                traffic.
              </p>
              <p className="text-4xl font-extrabold mb-4">
                AI-Powered Traffic Builder
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Try for free
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 w-5 h-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-gray-50 py-16 mt-16">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPostsData
              .filter((p: BlogPost) => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost: BlogPost, index: number) => {
                const bgColors = [
                  "bg-emerald-50",
                  "bg-yellow-50",
                  "bg-pink-100",
                  "bg-indigo-50",
                ];
                const bgColor = bgColors[index % bgColors.length];

                return (
                  <article
                    key={relatedPost.id}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <Link href={`/blog/${relatedPost.id}`}>
                      <div
                        className={`relative aspect-[16/9] overflow-hidden p-6 ${bgColor} rounded-xl`}
                      >
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300 p-6 rounded-lg"
                        />
                      </div>
                    </Link>
                    <div className="p-6">
                      <Link href={`/blog/${relatedPost.id}`}>
                        <h4 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h4>
                      </Link>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-4">
                        <span>{relatedPost.date}</span>
                        <span>{relatedPost.readTime}</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-gray-200 rounded-3xl mx-4 my-16 max-w-[1400px] lg:mx-auto">
        <div className="relative p-8 md:p-16 text-center overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Stop missing profit and get more free traffic
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ubenie builds your traffic with SEO optimized blog posts,
              increases your visibility, and grows your profit.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Join the waitlist 🚀
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return blogPostsData.map((post: BlogPost) => ({
    id: post.id,
  }));
}
