"use client";

interface EventOptions {
  eventID?: string; // For event deduplication with Conversion API
}

export function useMetaPixel() {
  const trackEvent = async (
    eventName: string,
    data?: Record<string, unknown>,
    options?: EventOptions
  ) => {
    if (typeof window === "undefined") return;

    const { default: ReactPixel } = await import("react-facebook-pixel");

    // Merge eventID into data if provided
    const trackingData = options?.eventID
      ? { ...data, eventID: options.eventID }
      : data;

    ReactPixel.track(eventName, trackingData);
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
