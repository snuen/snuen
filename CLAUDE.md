# snuen — CLAUDE.md

Project: personal reading log built with Astro. Entries are authored in MDX under `content/entries/`.

## Tooling

Use Bun for all package management and script execution.

- `bun install` — install dependencies
- `bun run dev` — start dev server
- `bun run build` — production build
- `bunx <pkg>` — run a package binary (instead of npx)

## Design language

Theme: **Warm Letterpress** — warm paper-texture UI inspired by letterpress printing.

All tokens are defined in `src/styles/global.css`.

### Color tokens

```
--accent          oklch(0.67 0.09 62)          Warm caramel — the only true color in the palette
--accent-dim      color-mix(accent 45%, white)
--accent-deep     color-mix(accent 75%, dark)
--accent-wash     color-mix(accent 12%, bg)    Tinted backgrounds, hover states

--bg              oklch(0.968 0.011 100)        Parchment
--surface         oklch(0.952 0.018 96)         Card and panel backgrounds
--border          color-mix(accent 22%, bg)
--border-strong   color-mix(accent 40%, bg)

--text            oklch(0.19 0.03 52)           Body text
--text-muted      oklch(0.48 0.038 58)          Secondary / meta text
--text-faint      oklch(0.68 0.028 65)          Labels, decorative text
```

### Typography

```
--font-serif    Noto Serif JP, YuMincho, …    Body text, lists
--font-display  Zen Old Mincho, …             Headings, titles
--font-mono     Fira Code, Cascadia Code, …   Code
```

Base font size: `clamp(15.5px, 1.1vw + 0.4rem, 17.5px)` / `line-height: 2`

### Spacing

```
--measure    64ch                          Max line length for body text
--gutter     clamp(1.25rem, 4vw, 2rem)
--page-max   740px
```

### Motion

```
--ease-expo   cubic-bezier(0.16, 1, 0.3, 1)   Use for all transitions
```

### CSS conventions

- Always use `oklch()` + `color-mix()` for colors — no hex or rgb values.
- Use CSS nesting (`& .child {}`).
- Breakpoints: `720px` (tablet) / `520px` (small mobile).
- Scope component styles inside Astro `<style>` blocks.
- Maintain `@layer` order: `reset, base, theme, layout, components`.

### Component conventions

- Elements inside `.prose` use `margin-block` for vertical rhythm (~`2.5rem`).
- Box components (diagrams, callouts, etc.): `border: 1px solid var(--border)` + `border-radius: 6px` + `background: var(--surface)`.
- Labels: `font-size: 0.68–0.72rem` / `letter-spacing: 0.14–0.22em` / `text-transform: uppercase` / `color: var(--text-faint)`.
- Use accent color sparingly — numbers, dates, and emphasis borders only.
