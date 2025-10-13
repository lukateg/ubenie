"use client";

import { useEffect } from "react";

export function MetaPixelProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_META_PIXEL_ID) {
      throw new Error("NEXT_PUBLIC_META_PIXEL_ID is not set");
    }

    // Dynamically import react-facebook-pixel only on the client side
    import("react-facebook-pixel").then((module) => {
      const ReactPixel = module.default;

      // Initialize Meta Pixel
      ReactPixel.init(process.env.NEXT_PUBLIC_META_PIXEL_ID!, undefined, {
        autoConfig: true,
        debug: false,
      });

      // Track initial page view
      ReactPixel.pageView();
    });
  }, []);

  return <>{children}</>;
}
