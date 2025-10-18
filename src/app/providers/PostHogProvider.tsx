"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect, Suspense, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "/ubenie-analytics",
    ui_host: "https://eu.posthog.com",
    person_profiles: "identified_only",
    capture_pageview: false, // Disable automatic pageview capture, we'll manually track it
    capture_pageleave: false,
    autocapture: true,
  });
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname;
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      posthog.capture("$pageview", {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

function PostHogScrollDepth() {
  const pathname = usePathname();
  const maxPercentage = useRef(0);
  const maxPixels = useRef(0);

  // Reset scroll tracking when pathname changes
  useEffect(() => {
    maxPercentage.current = 0;
    maxPixels.current = 0;
  }, [pathname]);

  useEffect(() => {
    function handleScroll() {
      const lastPercentage = Math.min(
        1,
        (window.innerHeight + window.pageYOffset) / document.body.offsetHeight
      );
      const lastPixels = window.innerHeight + window.pageYOffset;

      if (lastPercentage > maxPercentage.current) {
        maxPercentage.current = lastPercentage;
      }

      if (lastPixels > maxPixels.current) {
        maxPixels.current = lastPixels;
      }
    }

    const handlePageleave = () => {
      posthog.capture("$pageleave", {
        "max scroll percentage": maxPercentage.current,
        "max scroll pixels": maxPixels.current,
        "last scroll percentage": Math.min(
          1,
          (window.innerHeight + window.pageYOffset) / document.body.offsetHeight
        ),
        "last scroll pixels": window.innerHeight + window.pageYOffset,
        scrolled: maxPixels.current > 0,
        page: pathname, // Add pathname for page-specific analysis
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("beforeunload", handlePageleave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handlePageleave);
    };
  }, [pathname]);

  return null;
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
        <PostHogScrollDepth />
      </Suspense>
      {children}
    </PostHogProvider>
  );
}
