# Carousel Cropper Design System

> Visual design system for the Carousel Cropper application, inspired by the clean, modern fintech aesthetic of https://joincobalt.com.

## Design Principles

- **Clean and modern**: generous whitespace, clear hierarchy, and uncluttered layouts.
- **Conversion-focused**: a prominent hero section, clear primary call-to-action, and straightforward tool flow.
- **Friendly and approachable**: rounded surfaces, soft shadows, and a confident blue accent.
- **Consistent**: every visible element uses the same color, type, spacing, and component patterns.
- **Responsive**: layouts adapt gracefully from desktop to mobile viewports.

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--cc-primary` | `#0f62fe` | Primary buttons, links, accents, interactive highlights |
| `--cc-primary-hover` | `#0353e9` | Primary button hover state |
| `--cc-background` | `#ffffff` | Page background |
| `--cc-surface` | `#f8fafc` | Subtle section backgrounds, cards |
| `--cc-card` | `#ffffff` | Elevated card surfaces |
| `--cc-text-primary` | `#0f172a` | Headlines and primary text |
| `--cc-text-secondary` | `#64748b` | Body text, descriptions, placeholders |
| `--cc-text-muted` | `#94a3b8` | Fine print, footer text |
| `--cc-border` | `#e2e8f0` | Borders, dividers, crop frame outline |
| `--cc-border-strong` | `#cbd5e1` | Hover/active borders |
| `--cc-error` | `#ef4444` | Validation errors |
| `--cc-success` | `#10b981` | Success states |
| `--cc-shadow` | `rgba(15, 23, 42, 0.08)` | Card and elevated shadows |

## Typography

- **Font family**: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`
- **Hero headline**: `3.5rem`, weight `800`, line-height `1.1`, letter-spacing `-0.02em`
- **Section headline**: `2rem`, weight `700`, line-height `1.2`
- **Subheadline**: `1.25rem`, weight `400`, line-height `1.6`, color `--cc-text-secondary`
- **Body**: `1rem`, weight `400`, line-height `1.6`
- **Label/eyebrow**: `0.875rem`, weight `600`, uppercase, letter-spacing `0.05em`, color `--cc-primary`
- **Button text**: `1rem`, weight `600`

## Spacing

- **Page container max-width**: `1200px`
- **Section vertical padding**: `5rem` desktop, `3rem` mobile
- **Container horizontal padding**: `1.5rem` mobile, `2rem` tablet, `3rem` desktop
- **Card padding**: `2rem`
- **Component gap (small)**: `1rem`
- **Component gap (medium)**: `1.5rem`
- **Component gap (large)**: `2.5rem`

## Border Radius

- **Cards**: `1rem` (`16px`)
- **Buttons**: `9999px` (pill shape)
- **Crop frame**: `1rem`
- **Inputs / file drop zones**: `0.75rem`
- **Feature icons**: `0.75rem`

## Shadows

- **Card shadow**: `0 4px 24px rgba(15, 23, 42, 0.08)`
- **Elevated shadow**: `0 12px 40px rgba(15, 23, 42, 0.12)`

## Components

### Primary Button

- Background: `--cc-primary`
- Text: `#ffffff`
- Padding: `0.875rem 2rem`
- Border-radius: `9999px`
- Font-weight: `600`
- Hover: background `--cc-primary-hover`, translate `translateY(-1px)`

### File Input / Upload Zone

- Border: `2px dashed --cc-border`
- Background: `--cc-surface`
- Border-radius: `0.75rem`
- Padding: `2rem`
- Hover: border color `--cc-primary`, background tint
- Active/selected: solid border `--cc-primary`

### Crop Frame

- Aspect-ratio: `1080 / 1350`
- Max-width: `540px`
- Border: `2px solid --cc-border`
- Border-radius: `1rem`
- Background: `--cc-surface`
- Overflow: hidden
- Cursor: grab / grabbing

### Feature Card

- Background: `--cc-card`
- Border-radius: `1rem`
- Padding: `2rem`
- Box-shadow: `--cc-shadow`
- Optional top border accent: `4px solid --cc-primary`

## Responsive Breakpoints

- **Mobile**: `< 640px` — single column, reduced section padding, smaller hero text
- **Tablet**: `640px - 1023px` — two-column feature grid
- **Desktop**: `>= 1024px` — full layout, three-column feature grid

## Accessibility Notes

- Maintain color contrast ratios of at least 4.5:1 for body text.
- Focus states should use visible outlines (`2px solid --cc-primary`) with adequate offset.
- Interactive elements must remain reachable and usable on touch devices.
