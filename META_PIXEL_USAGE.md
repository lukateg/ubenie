# Meta Pixel Implementation Guide

## Overview
Meta Pixel has been implemented using the `react-facebook-pixel` package following React best practices.

## Setup

### Environment Variable
Add your Meta Pixel ID to your `.env` file:

```
NEXT_PUBLIC_META_PIXEL_ID=3685062405133306
```

The app will throw an error if this environment variable is not set.

## How It Works

### Automatic Tracking
The Meta Pixel automatically tracks:
- **PageView** events on every page load
- Page navigation in your Next.js app

### Custom Event Tracking

Use the `useMetaPixel` hook to track custom events in your components:

```typescript
import { useMetaPixel } from "@/app/hooks/useMetaPixel";

export function YourComponent() {
  const { trackEvent, trackCustomEvent } = useMetaPixel();

  const handleWaitlistJoin = async () => {
    // Track standard Meta events
    await trackEvent("Lead", {
      content_name: "Waitlist Signup",
      currency: "USD",
    });
  };

  const handleCustomAction = async () => {
    // Track custom events
    await trackCustomEvent("CustomEventName", {
      customData: "value",
    });
  };

  return (
    <button onClick={handleWaitlistJoin}>
      Join Waitlist
    </button>
  );
}
```

## Standard Facebook Events

You can track these standard events using `trackEvent()`:

- `Lead` - When someone expresses interest
- `CompleteRegistration` - When someone signs up
- `Contact` - When someone contacts you
- `ViewContent` - When specific content is viewed
- `AddToCart` - For e-commerce
- `Purchase` - For completed purchases
- `Subscribe` - For subscriptions

## Custom Events

Use `trackCustomEvent()` for any custom events specific to your business needs.

## Example Integration with Waitlist

```typescript
// In WaitlistModal.tsx or WaitlistButton.tsx
import { useMetaPixel } from "@/app/hooks/useMetaPixel";

const { trackEvent } = useMetaPixel();

const handleSubmit = async (email: string) => {
  // Your existing logic
  await saveToWaitlist(email);
  
  // Track the conversion
  await trackEvent("Lead", {
    content_name: "Waitlist Signup",
    content_category: "Newsletter",
  });
};
```

## Configuration

The pixel is configured in `/src/app/providers/MetaPixelProvider.tsx` with:
- `autoConfig: true` - Automatically handles configuration
- `debug: false` - Set to `true` for development debugging

## Testing

To verify the pixel is working:
1. Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/) Chrome extension
2. Visit your website
3. The extension will show active pixels and events being tracked

