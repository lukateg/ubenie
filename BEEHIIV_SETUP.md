# Beehiiv Waitlist Integration - Setup Guide

This guide will help you set up the Beehiiv API integration for your waitlist modal.

## Overview

All "Join the waitlist" buttons across the application (Header, Footer, and main page sections) now open a unified modal that collects email addresses and submits them to your Beehiiv newsletter/waitlist.

## Features

- ✅ Unified modal for all waitlist buttons
- ✅ Email validation
- ✅ Loading states and error handling
- ✅ Success confirmation
- ✅ Beehiiv API integration
- ✅ UTM tracking (utm_source: website, utm_medium: waitlist_modal)
- ✅ Welcome email support

## Setup Instructions

### 1. Get Your Beehiiv Credentials

1. Log in to your [Beehiiv account](https://app.beehiiv.com)
2. Navigate to **Settings** → **Integrations** → **API**
3. Click **Create API Key** if you don't have one
4. Copy your **API Key**
5. Note your **Publication ID** (found in your publication settings or URL)

### 2. Configure Environment Variables

1. Copy the `.env.local.example` file to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your Beehiiv credentials:
   ```env
   NEXT_PUBLIC_BEEHIIV_API_URL=https://api.beehiiv.com/v2
   NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID=your_actual_publication_id
   NEXT_PUBLIC_BEEHIIV_API_KEY=your_actual_api_key
   ```

3. **Important**: Never commit `.env.local` to version control. It's already in `.gitignore`.

### 3. Restart Your Development Server

After adding the environment variables, restart your Next.js development server:

```bash
npm run dev
```

## How It Works

### Architecture

1. **WaitlistContext** (`src/app/context/WaitlistContext.tsx`)
   - Global state management for modal open/close state
   - Accessible throughout the app via `useWaitlist()` hook

2. **WaitlistModal** (`src/app/components/WaitlistModal.tsx`)
   - Modal component with form handling
   - Beehiiv API integration
   - Loading, success, and error states

3. **Layout Wrapper** (`src/app/layout.tsx`)
   - Wraps entire app with `WaitlistProvider`
   - Renders `WaitlistModal` at root level

4. **Connected Components**
   - `Header.tsx` - Top navigation button
   - `Footer.tsx` - Footer CTA button
   - `page.tsx` - 5 buttons throughout the landing page

### User Flow

1. User clicks any "Join the waitlist" button
2. Modal opens with email input form
3. User enters email and submits
4. API call to Beehiiv creates subscription
5. Success message displays
6. Modal auto-closes after 2 seconds

### API Integration Details

The modal sends the following to Beehiiv:

```javascript
{
  email: "user@example.com",
  reactivate_existing: false,
  send_welcome_email: true,
  utm_source: "website",
  utm_medium: "waitlist_modal"
}
```

## Customization

### Modify UTM Parameters

Edit `src/app/components/WaitlistModal.tsx`:

```typescript
utm_source: "website",        // Change to your source
utm_medium: "waitlist_modal"  // Change to your medium
```

### Disable Welcome Email

Set `send_welcome_email: false` in the API call.

### Change Auto-Close Timing

In `WaitlistModal.tsx`, modify the timeout:

```typescript
setTimeout(() => {
  setIsSuccess(false);
  closeModal();
}, 2000); // Change 2000 to desired milliseconds
```

### Style Customization

The modal uses Tailwind CSS. Edit classes in `WaitlistModal.tsx` to match your design system.

## Testing

### Test the Modal

1. Click any "Join the waitlist" button
2. Verify modal opens
3. Try submitting without email (should show browser validation)
4. Try submitting with invalid email format
5. Submit with valid email
6. Check Beehiiv dashboard for new subscriber

### Test Error Handling

To test error states, temporarily use invalid API credentials in `.env.local`.

## Troubleshooting

### Modal Doesn't Open
- Check browser console for errors
- Verify `WaitlistProvider` wraps your app in `layout.tsx`
- Ensure all buttons have `onClick={openModal}`

### API Errors

**"Beehiiv configuration is missing"**
- Check that all three environment variables are set in `.env.local`
- Restart your dev server after adding env variables

**"Failed to subscribe"**
- Verify your API key is correct
- Check your Publication ID
- Ensure your Beehiiv account is active
- Check Beehiiv API status

**CORS Errors**
- Beehiiv API should handle CORS properly
- If issues persist, consider using a Next.js API route as a proxy

### Email Not Appearing in Beehiiv

- Check the "Subscribers" section in your Beehiiv dashboard
- Verify the Publication ID matches your intended publication
- Check if email was marked as spam/duplicate

## Security Notes

- ✅ Environment variables are prefixed with `NEXT_PUBLIC_` for client-side access
- ⚠️ This means API keys are visible in browser - Beehiiv API keys have limited scope
- 🔒 For production, consider using a Next.js API route to keep keys server-side
- 🛡️ Always use rate limiting in production to prevent abuse

## Production Deployment

### Vercel / Netlify / Other Platforms

Add your environment variables in your platform's dashboard:

- `NEXT_PUBLIC_BEEHIIV_API_URL`
- `NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID`
- `NEXT_PUBLIC_BEEHIIV_API_KEY`

### Recommended: Server-Side API Route (Optional)

For better security, create a Next.js API route:

1. Create `src/app/api/waitlist/route.ts`:
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();
  
  const response = await fetch(
    `${process.env.BEEHIIV_API_URL}/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: 'website',
        utm_medium: 'waitlist_modal',
      }),
    }
  );
  
  return NextResponse.json(await response.json());
}
```

2. Update `WaitlistModal.tsx` to use `/api/waitlist` instead of direct Beehiiv API

3. Remove `NEXT_PUBLIC_` prefix from env variables (they'll be server-side only)

## Support

- [Beehiiv API Documentation](https://developers.beehiiv.com/)
- [Beehiiv Support](https://support.beehiiv.com/)

## Components Created

- ✅ `src/app/context/WaitlistContext.tsx` - Global state management
- ✅ `src/app/components/WaitlistModal.tsx` - Modal UI and API logic
- ✅ Updated `src/app/layout.tsx` - Provider wrapper
- ✅ Updated `src/app/components/Header.tsx` - Connected button
- ✅ Updated `src/app/components/Footer.tsx` - Connected button
- ✅ Updated `src/app/page.tsx` - Connected 5 buttons

All buttons now open the same modal! 🎉

