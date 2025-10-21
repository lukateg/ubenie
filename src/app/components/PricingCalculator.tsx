"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import WaitlistButton from "./WaitlistButton";

export default function PricingCalculator() {
  const [articles, setArticles] = useState(30);
  const [articleType, setArticleType] = useState<"standard" | "longform">(
    "standard"
  );
  const [projects, setProjects] = useState(1);

  // Calculate credits needed
  const calculateCredits = () => {
    const keywordResearch = projects * 50; // Initial setup
    const articleCredits = articleType === "standard" ? 25 : 40;
    const totalArticleCredits = articles * articleCredits;
    const keywordRefresh = projects * 30;

    return {
      keywordResearch,
      articles: totalArticleCredits,
      keywordRefresh,
      total: keywordResearch + totalArticleCredits + keywordRefresh,
    };
  };

  const credits = calculateCredits();
  const recommendedPackage = credits.total <= 1000 ? 1000 : 2500;
  const recommendedPrice = recommendedPackage === 1000 ? 89 : 199;
  const monthsCovered = (recommendedPackage / credits.total).toFixed(1);
  const avgMonthlyCost = Math.round(
    recommendedPrice / parseFloat(monthsCovered)
  );

  return (
    <div className="flex items-center md:flex-row flex-col justify-center gap-8">
      <div className="bg-gray-50 rounded-2xl p-8 flex flex-col gap-8 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          How Credits Work
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 mb-3">
              Keyword Research
            </h4>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-sm md:text-base">
                Initial Project Setup (50-200 keywords)
              </span>
              <span className="font-semibold text-gray-900 text-sm md:text-base">
                50 credits
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-sm md:text-base">
                Refresh Keywords
              </span>
              <span className="font-semibold text-gray-900 text-sm md:text-base">
                30 credits
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-sm md:text-base">
                Add Keywords Manually
              </span>
              <span className="font-semibold text-emerald-600 text-sm md:text-base">
                Free
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 mb-3">
              Article Generation
            </h4>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-sm md:text-base">
                Standard Article (1,200-1,800 words)
              </span>
              <span className="font-semibold text-gray-900 text-sm md:text-base">
                25 credits
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-sm md:text-base">
                Long-Form Article (2,000-3,000 words)
              </span>
              <span className="font-semibold text-gray-900 text-sm md:text-base">
                40 credits
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-sm md:text-base">
                Edit/Rewrite Existing Article
              </span>
              <span className="font-semibold text-emerald-600 text-sm md:text-base">
                Free
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-300">
          <p className="text-sm text-gray-600 text-center">
            <span className="font-semibold">
              Everything else is{" "}
              <span className="text-emerald-600 font-bold">FREE</span>:
            </span>{" "}
            AI Images, YouTube Embeds, Publishing, Scheduling, Team Members,
            Analytics & More
          </p>
        </div>
        <div className="bg-pink-50 rounded-lg p-6 space-y-3">
          <div className="flex justify-between items-start">
            <span className="text-gray-700 font-medium text-sm md:text-base">
              Recommended Package:
            </span>
            <span className="font-bold text-gray-900 text-right text-sm md:text-xl">
              {recommendedPackage.toLocaleString()} credits ($
              {recommendedPrice})
            </span>
          </div>
          <div className="flex justify-between items-start">
            <span className="text-gray-700 font-medium text-sm md:text-base">
              This covers you for:
            </span>
            <span className="font-semibold text-gray-900 text-right text-sm md:text-base">
              {monthsCovered} month
              {parseFloat(monthsCovered) !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex justify-between items-start">
            <span className="text-gray-700 font-medium text-sm md:text-base">
              Average monthly cost:
            </span>
            <span className="font-semibold text-gray-900 text-right text-sm md:text-base ">
              ${avgMonthlyCost}
            </span>
          </div>
        </div>
      </div>
      <div className="bg-pink-50 p-4 rounded-2xl md:p-8 max-w-4xl mx-auto">
        <h3 className="text-2xl pt-6 pb-2 md:text-3xl font-bold text-gray-900  text-center">
          Credit Calculator
        </h3>
        <p className="text-gray-600 text-center mb-8">
          Calculate exactly how many credits you need
        </p>

        <div className="space-y-8 bg-white rounded-xl p-6 md:p-8 shadow-sm">
          {/* Articles Slider */}
          <div>
            <div className="flex justify-between gap-4 flex-col md:flex-row items-center mb-3">
              <label className="text-base font-semibold text-gray-900">
                How many articles do you need per month?
              </label>
              <span className="text-2xl font-bold text-indigo-600">
                {articles}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="60"
              value={articles}
              onChange={(e) => setArticles(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0</span>
              <span>30</span>
              <span>60</span>
            </div>
          </div>

          {/* Article Length Radio */}
          <div>
            <label className="text-base font-semibold text-gray-900 mb-3 block">
              Article length?
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="articleType"
                  value="standard"
                  checked={articleType === "standard"}
                  onChange={(e) =>
                    setArticleType(e.target.value as "standard" | "longform")
                  }
                  className="w-5 h-5 text-indigo-600 cursor-pointer"
                />
                <span className="text-gray-700 group-hover:text-gray-900">
                  Standard (1,200-1,800 words) -{" "}
                  <span className="font-semibold">25 credits</span>
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="articleType"
                  value="longform"
                  checked={articleType === "longform"}
                  onChange={(e) =>
                    setArticleType(e.target.value as "standard" | "longform")
                  }
                  className="w-5 h-5 text-indigo-600 cursor-pointer"
                />
                <span className="text-gray-700 group-hover:text-gray-900">
                  Long-form (2,000-3,000 words) -{" "}
                  <span className="font-semibold">40 credits</span>
                </span>
              </label>
            </div>
          </div>

          {/* Projects Slider */}
          {/* <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-base font-semibold text-gray-900">
                How many projects?
              </label>
              <span className="text-2xl font-bold text-indigo-600">
                {projects}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={projects}
              onChange={(e) => setProjects(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span>5</span>
              <span>10</span>
            </div>
          </div> */}

          <div className="border-t-2 border-gray-200 pt-6">
            <h4 className="font-semibold text-gray-900 mb-4">
              Monthly Credit Usage:
            </h4>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span className="text-gray-700 text-sm md:text-base">
                    Initial keyword research
                    {projects > 1 && ` (${projects} projects)`}
                  </span>
                </div>
                <span className="font-semibold text-gray-900 text-sm md:text-base">
                  {credits.keywordResearch} credits
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span className="text-gray-700 text-sm md:text-base">
                    Articles ({articles} ×{" "}
                    {articleType === "standard" ? 25 : 40})
                  </span>
                </div>
                <span className="font-semibold text-gray-900 text-sm md:text-base">
                  {credits.articles} credits
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span className="text-gray-700 text-sm md:text-base">
                    Keyword refresh{projects > 1 && ` (${projects} projects)`}
                  </span>
                </div>
                <span className="font-semibold text-gray-900 text-sm md:text-base">
                  {credits.keywordRefresh} credits
                </span>
              </div>
            </div>

            <div className="border-t-2 border-gray-900 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900 text-sm md:text-lg">
                  Total:
                </span>
                <span className="font-bold text-indigo-600 text-sm md:text-2xl">
                  {credits.total} credits/month
                </span>
              </div>
            </div>

            {/* <div className="bg-teal-50 rounded-lg p-6 space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-gray-700 font-medium text-sm md:text-base">
                  Recommended Package:
                </span>
                <span className="font-bold text-gray-900 text-right text-sm md:text-xl">
                  {recommendedPackage.toLocaleString()} credits ($
                  {recommendedPrice})
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-gray-700 font-medium text-sm md:text-base">
                  This covers you for:
                </span>
                <span className="font-semibold text-gray-900 text-right text-sm md:text-base">
                  {monthsCovered} month
                  {parseFloat(monthsCovered) !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-gray-700 font-medium text-sm md:text-base">
                  Average monthly cost:
                </span>
                <span className="font-semibold text-gray-900 text-right text-sm md:text-base ">
                  ${avgMonthlyCost}
                </span>
              </div>
            </div> */}

            <WaitlistButton className="w-full text-sm md:text-lg bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors mt-6">
              Buy {recommendedPackage.toLocaleString()} Credits - $
              {recommendedPrice}
            </WaitlistButton>
          </div>
        </div>
      </div>
    </div>
  );
}
