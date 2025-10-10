# WaitlistButton Component - Usage Guide

## Overview

The `WaitlistButton` is a reusable client-side component that opens the waitlist modal. It's designed to keep your main pages as Server Components while providing interactive functionality.

## Basic Usage

```tsx
import WaitlistButton from "./components/WaitlistButton";

export default function MyPage() {
  return (
    <WaitlistButton>
      Join the waitlist
    </WaitlistButton>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | Required | Button content (text, icons, etc.) |
| `className` | `string` | Optional | Custom CSS classes for styling |
| `variant` | `"primary"` \| `"secondary"` \| `"custom"` | `"primary"` | Predefined style variants |

## Variants

### Primary (Default)
Black background with white text:
```tsx
<WaitlistButton variant="primary">
  Join the waitlist
</WaitlistButton>
```

### Secondary
Blue background with white text:
```tsx
<WaitlistButton variant="secondary">
  Join the waitlist
</WaitlistButton>
```

### Custom
No predefined styles - use `className` for full control:
```tsx
<WaitlistButton 
  variant="custom"
  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full"
>
  Join the waitlist
</WaitlistButton>
```

## Examples

### Simple Button
```tsx
<WaitlistButton>
  Join waitlist
</WaitlistButton>
```

### With Custom Styling
```tsx
<WaitlistButton className="bg-black text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-800 transition-colors">
  Join the waitlist 🚀
</WaitlistButton>
```

### With Icons
```tsx
import { Zap } from "lucide-react";

<WaitlistButton className="bg-[#1a1a1a] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
  Join the waitlist
  <Zap className="w-4 h-4" fill="currentColor" />
</WaitlistButton>
```

### Full Width Button
```tsx
<WaitlistButton className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
  Join the waitlist
</WaitlistButton>
```

### Large Hero Button
```tsx
<WaitlistButton className="bg-black text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-800 transition-colors">
  Join the waitlist 🚀
</WaitlistButton>
```

## Why This Approach?

### ✅ Benefits

1. **Server Component Optimization**
   - Main pages remain Server Components
   - Better performance and SEO
   - Smaller client-side JavaScript bundle

2. **Reusability**
   - Single source of truth for waitlist buttons
   - Consistent behavior across the app
   - Easy to update all buttons at once

3. **Flexibility**
   - Accept any styling via `className`
   - Support for any React children (text, icons, etc.)
   - Works with Tailwind CSS or any CSS framework

4. **Type Safety**
   - Full TypeScript support
   - Autocomplete for props
   - Compile-time error checking

### 🔄 Instead of This (Bad):

```tsx
"use client";

import { useWaitlist } from "./context/WaitlistContext";

export default function Page() {
  const { openModal } = useWaitlist();
  
  return (
    <button onClick={openModal}>Join waitlist</button>
  );
}
```

### ✅ Use This (Good):

```tsx
import WaitlistButton from "./components/WaitlistButton";

export default function Page() {
  return (
    <WaitlistButton>Join waitlist</WaitlistButton>
  );
}
```

## Component Code

```tsx
"use client";

import { useWaitlist } from "../context/WaitlistContext";

interface WaitlistButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "custom";
}

export default function WaitlistButton({
  children,
  className,
  variant = "primary",
}: WaitlistButtonProps) {
  const { openModal } = useWaitlist();

  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-blue-600 text-white hover:bg-blue-700",
    custom: "",
  };

  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2";

  const buttonClassName = className
    ? className
    : `${baseStyles} ${variantStyles[variant]}`;

  return (
    <button onClick={openModal} className={buttonClassName}>
      {children}
    </button>
  );
}
```

## Customization

### Add New Variants

Edit `src/app/components/WaitlistButton.tsx`:

```tsx
const variantStyles = {
  primary: "bg-black text-white hover:bg-gray-800",
  secondary: "bg-blue-600 text-white hover:bg-blue-700",
  custom: "",
  // Add your own:
  success: "bg-green-600 text-white hover:bg-green-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
};
```

### Add Loading State

```tsx
interface WaitlistButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "custom";
  isLoading?: boolean;
}

export default function WaitlistButton({
  children,
  className,
  variant = "primary",
  isLoading = false,
}: WaitlistButtonProps) {
  const { openModal } = useWaitlist();

  return (
    <button 
      onClick={openModal} 
      className={buttonClassName}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
```

## Best Practices

1. **Use `className` for custom styles**
   - Provides full control over appearance
   - Works with any CSS/Tailwind classes

2. **Keep children simple**
   - Text, emojis, icons
   - Avoid complex nested components

3. **Consistent styling**
   - Use variants for common button types
   - Create new variants for repeated patterns

4. **Accessibility**
   - Include descriptive text
   - Avoid icon-only buttons without labels

## Migration

If you already have inline buttons, replace them:

**Before:**
```tsx
<button onClick={openModal} className="...">
  Join waitlist
</button>
```

**After:**
```tsx
<WaitlistButton className="...">
  Join waitlist
</WaitlistButton>
```

## Summary

- ✅ Single reusable component for all waitlist buttons
- ✅ Keeps pages as Server Components (Next.js best practice)
- ✅ Fully customizable via `className`
- ✅ TypeScript support
- ✅ Consistent behavior across the app
- ✅ Easy to maintain and update

Use `WaitlistButton` anywhere you need to open the waitlist modal! 🚀

