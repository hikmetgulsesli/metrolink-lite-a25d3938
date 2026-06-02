---
name: Transit Modern System
colors:
  surface: '#f8f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f6'
  surface-container: '#edeef0'
  surface-container-high: '#e7e8ea'
  surface-container-highest: '#e1e2e4'
  on-surface: '#191c1e'
  on-surface-variant: '#44474a'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f3'
  outline: '#75777a'
  outline-variant: '#c5c6ca'
  surface-tint: '#5d5e61'
  primary: '#000101'
  on-primary: '#ffffff'
  primary-container: '#1a1c1e'
  on-primary-container: '#838486'
  inverse-primary: '#c6c6c9'
  secondary: '#005fae'
  on-secondary: '#ffffff'
  secondary-container: '#51a0ff'
  on-secondary-container: '#003666'
  tertiary: '#040000'
  on-tertiary: '#ffffff'
  tertiary-container: '#420000'
  on-tertiary-container: '#fb3426'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e5'
  primary-fixed-dim: '#c6c6c9'
  on-primary-fixed: '#1a1c1e'
  on-primary-fixed-variant: '#454749'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a5c8ff'
  on-secondary-fixed: '#001c3a'
  on-secondary-fixed-variant: '#004785'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4a9'
  on-tertiary-fixed: '#410000'
  on-tertiary-fixed-variant: '#930002'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e1e2e4'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  tile-gap: 4px
  container-margin: 24px
  hud-padding: 16px
---

## Brand & Style

The design system is built on the "Transit Modern" aesthetic, drawing inspiration from the iconic, systematic precision of global metropolitan wayfinding. It evokes a sense of efficiency, clarity, and logical flow. The brand personality is organized and dependable, yet maintains the vibrant energy of an active transit hub.

The visual style is **Corporate Modern** with a **Minimalist** foundation. It prioritizes high-contrast legibility and a clean, structured interface that allows the colorful puzzle logic to remain the primary focus. The UI should feel like a premium digital map—utilitarian, crisp, and undeniably sleek.

## Colors

The palette is rooted in a "Map & Slate" philosophy. The background is a very light, cool gray to reduce eye strain during extended play, while the primary UI elements are rendered in a deep charcoal to anchor the experience.

- **Primary (Charcoal):** Used for navigation, headers, and primary interaction boundaries.
- **Secondary (Transit Blue):** The primary action color and the first connection line.
- **Tertiary (Express Red):** Used for critical alerts and the second connection line.
- **Commuter Green & Rapid Yellow:** Reserved for additional puzzle paths, ensuring high visual distinction between competing routes.
- **Surface:** Use pure white (#FFFFFF) for interactive tiles to make them "pop" against the light gray background.

## Typography

Typography follows the logic of terminal signage. **Montserrat** provides geometric authority for headings and scores, while **Inter** ensures that dense HUD information remains legible at small sizes.

- Use **Uppercase Labels** for HUD categories (e.g., "NEXT STATION", "SCORE", "TIME") to mimic wayfinding banners.
- Maintain tight letter-spacing on display headings to emphasize the "Modern" feel.
- Body text should always prioritize the charcoal primary color for maximum WCAG compliance.

## Elevation & Depth

This design system uses **Tonal Layers** combined with **Ambient Shadows** to create a tactile, physical feel for the puzzle pieces without appearing dated.

- **Level 0 (Background):** The neutral light gray base.
- **Level 1 (Playfield):** Subtle inner shadow to suggest a recessed "tray" where tiles sit.
- **Level 2 (Tiles/Buttons):** A crisp, 2px bottom shadow (tinted with charcoal) to make pieces appear slightly raised.
- **Level 3 (Active/Hover):** When a tile is selected or rotated, the shadow expands and softens, simulating the piece being "lifted" toward the user.
- **Level 4 (Modals):** Heavy, diffused backdrop blur (Glassmorphism) to focus attention on game-over or pause screens.

## Shapes

The shape language is "Friendly Industrial." We avoid sharp 90-degree corners to keep the game approachable, but avoid pill-shapes for tiles to maintain a sense of structural alignment.

- **Tiles:** Use `rounded-lg` (16px) for the main play pieces to give them a premium, handheld feel.
- **HUD Containers:** Use `rounded-md` (8px) for smaller informational pods.
- **Active Connections:** Line paths should use a corner radius that matches the tile's internal path (approx 12px) to create smooth, flowing transit lines.

## Components

### Tiles
The core component. Tiles are white containers with high-contrast line paths. When a connection is successful, the line path should glow or animate with a "pulse" of its respective line color.

### Buttons
Primary buttons should be Charcoal with White text. Secondary "Transit" buttons use the Line colors. All buttons use a 2px "press" effect where the shadow disappears and the element shifts 2px down on the Y-axis.

### HUD Labels
HUD labels consist of a `label-caps` header in a medium gray, followed by the value in `headline-sm` Charcoal. This hierarchy ensures the user can scan stats mid-game.

### Progress Bars (Connection Meters)
Use thick, 8px lines with rounded caps. The track should be a faint version of the line color, with the progress filled in the vibrant solid color.

### Input Fields
Used for player names or seed codes. Minimalist design: a 2px bottom border in Charcoal, becoming a solid 2px outline when focused.