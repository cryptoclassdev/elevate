# Elevate & Prosper Landing Page Design

## Overview

A minimal, professional one-page website for "Elevate & Prosper" - a company helping tech startups level up.

## Requirements

- Company name: Elevate & Prosper
- Slogan: "Take your tech start-up to the next level!"
- Logo placeholder, company name, slogan, contact section
- Minimal and professional aesthetic

## Page Structure

### Header/Hero (above the fold)
- Logo placeholder on the left (rounded square with "E&P" initials)
- Company name "Elevate & Prosper" as main headline
- Slogan as subtext
- White background with green accent elements

### Spacer
- Generous whitespace between hero and contact

### Contact Section (footer area)
- "Contact Us" heading
- Email only: `hello@elevateandprosper.link`

## Visual Design

### Typography
- Headline: Large, bold sans-serif (`font-bold text-4xl md:text-5xl`)
- Slogan: Medium weight, muted (`text-gray-600`)
- Contact heading: Medium bold
- Email: Regular weight with hover state

### Colors (Tailwind)
- Background: `white` / `gray-50`
- Primary text: `gray-900`
- Secondary text: `gray-600`
- Accent: `emerald-600` (hover: `emerald-500`)
- Logo placeholder: `emerald-600` background, white text

### Spacing
- Hero: Vertically centered (`min-h-screen` with flexbox)
- Contact: `py-16` padding
- Max-width container for readability

### Logo Placeholder
- Rounded square (`rounded-xl`)
- Emerald background with "E&P" in white
- Size: ~64-80px

## Technical Implementation

### Stack
- Next.js 14+ with App Router
- Tailwind CSS
- No additional dependencies

### File Structure
```
app/
  layout.tsx    (HTML shell, font setup)
  page.tsx      (landing page)
  globals.css   (Tailwind imports)
tailwind.config.ts
package.json
```

### Responsive
- Mobile-first
- Text scales: `text-3xl md:text-5xl`
- Content stacks naturally on mobile

### Constraints
- No navigation
- No animations/JS interactions
- No external fonts (system stack)
- No images (CSS-based logo)
