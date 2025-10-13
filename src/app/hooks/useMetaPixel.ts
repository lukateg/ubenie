"use client";

export function useMetaPixel() {
  const trackEvent = async (
    eventName: string,
    data?: Record<string, unknown>
  ) => {
    if (typeof window === "undefined") return;

    const { default: ReactPixel } = await import("react-facebook-pixel");
    ReactPixel.track(eventName, data);
  };

  const trackCustomEvent = async (
    eventName: string,
    data?: Record<string, unknown>
  ) => {
    if (typeof window === "undefined") return;

    const { default: ReactPixel } = await import("react-facebook-pixel");
    ReactPixel.trackCustom(eventName, data);
  };

  const trackPageView = async () => {
    if (typeof window === "undefined") return;

    const { default: ReactPixel } = await import("react-facebook-pixel");
    ReactPixel.pageView();
  };

  return {
    trackEvent,
    trackCustomEvent,
    trackPageView,
  };
}
