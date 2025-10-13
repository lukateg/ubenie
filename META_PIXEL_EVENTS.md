# Meta Pixel Events Tracking Summary

## Implemented Events

### 1. **Automatic PageView Tracking**
- **Event**: `PageView`
- **Trigger**: Every page load across the entire site
- **Location**: `/src/app/providers/MetaPixelProvider.tsx`
- **Details**: Automatically tracks all page views when users navigate through the site

---

### 2. **Lead Event - Waitlist Signup** ✅
- **Event**: `Lead` (Standard Facebook Event)
- **Trigger**: When a user successfully joins the waitlist
- **Location**: `/src/app/components/WaitlistModal.tsx` (line 57)
- **Data Tracked**:
  ```javascript
  {
    content_name: "Waitlist Signup",
    content_category: "Newsletter",
    value: 1,
    currency: "USD"
  }
  ```
- **Why**: This is your primary conversion event - tracks when users show interest by joining the waitlist
- **Use Case**: Measure lead generation, create lookalike audiences, optimize ads for conversions

---

### 3. **Custom Event - Modal Opened**
- **Event**: `WaitlistModalOpened` (Custom Event)
- **Trigger**: When a user opens the waitlist modal (shows interest)
- **Location**: `/src/app/components/WaitlistModal.tsx` (line 19)
- **Data Tracked**:
  ```javascript
  {
    event_category: "Engagement",
    event_label: "Waitlist Interest"
  }
  ```
- **Why**: Helps understand the conversion funnel - how many people show interest vs. actually sign up
- **Use Case**: Calculate conversion rate from interest to signup, optimize modal UX

---

## Conversion Funnel

```
Page View (Automatic)
    ↓
Waitlist Button Clicked → WaitlistModalOpened (Custom Event)
    ↓
Form Submitted → Lead (Standard Event) ✅ PRIMARY CONVERSION
```

---

## Meta Pixel ID
- **ID**: `3685062405133306`
- **Environment Variable**: `NEXT_PUBLIC_META_PIXEL_ID`

---

## Testing the Implementation

### Using Meta Pixel Helper (Chrome Extension)
1. Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/)
2. Visit your website
3. Check for:
   - ✅ PageView on every page load
   - ✅ WaitlistModalOpened when clicking waitlist button
   - ✅ Lead when successfully submitting the form

### Using Facebook Events Manager
1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Select your pixel (ID: 3685062405133306)
3. View real-time events as they happen
4. Set up conversions based on the "Lead" event

---

## Next Steps & Recommendations

### For Ad Optimization
1. **Create Custom Audience**: People who triggered "Lead" event
2. **Create Lookalike Audience**: Based on your leads
3. **Set "Lead" as Primary Conversion**: In your ad campaigns

### Additional Events to Consider (Future)
- `ViewContent` - When users view specific blog posts
- `Search` - If you add search functionality
- `Contact` - If you add a contact form
- `CompleteRegistration` - When you launch the full product

### Conversion API (Advanced)
For better tracking reliability (especially with iOS 14+ privacy changes), consider implementing Meta's Conversion API to send events from your server. This can be added later when you have higher traffic.

---

## Files Modified
1. `/src/app/providers/MetaPixelProvider.tsx` - Meta Pixel initialization
2. `/src/app/hooks/useMetaPixel.ts` - Custom hook for tracking
3. `/src/app/components/WaitlistModal.tsx` - Event tracking implementation
4. `/src/app/layout.tsx` - Provider integration
5. `env.example` - Environment variable documentation

---

## Documentation Files
- `META_PIXEL_USAGE.md` - Developer guide for using Meta Pixel
- `META_PIXEL_EVENTS.md` - This file - tracking events summary

