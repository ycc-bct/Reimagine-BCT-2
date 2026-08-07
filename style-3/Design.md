# BCT Design System

Extracted from **`BCT-V4.html`** (`https://ycc-bct.github.io/Reimagine-BCT-Combined-/BCT-V4.html`),
which is the most disciplined version of the system — it is the first file where the type scale is
fully tokenised rather than written per-section.

This document is the source of truth. `stories/tokens.css` in the Storybook is a verbatim copy of
the token block; import that file rather than re-typing values.

> Supersedes the previous `Design.md`, which documented the long-abandoned `Style-2.html`
> (Mona Sans, a different palette). Nothing in that version still applies.

---

## 1. Color

### Surfaces (dark — the default mode)

| Token | Value | Use |
|---|---|---|
| `--bg-base` | `#060810` | Page background, the default section background |
| `--bg-surface` | `#0C0F1A` | A section that needs to separate from the page |
| `--bg-card` | `#111522` | Card and tile fill |
| `--bg-hover` | `#161B2C` | Card fill on hover |

### Brand blue

| Token | Value | Use |
|---|---|---|
| `--blue-500` | `#0092D7` | The accent. CTAs, eyebrows, accent rules, icon highlights |
| `--blue-300` | `#5FBEEA` | Hover state of anything already blue |
| `--blue-700` | `#0A6395` | Blue on a **light** background (see rule 2) |
| `--blue-900` | `#06344F` | Deep decorative fills |
| `--blue-950` | `#072338` | Deepest decorative fills |

### Text

| Token | Value | Use |
|---|---|---|
| `--text-hi` | `#F5F8FC` | Primary text, card titles |
| `--text-display` | `#D7DFE9` | Large display headings — a deliberate silver, not pure white |
| `--text-mid` | `rgba(242,246,250,.68)` | Body copy |
| `--text-low` | `rgba(242,246,250,.44)` | Meta, captions, indices |

### Lines and glows

| Token | Value | Use |
|---|---|---|
| `--border` | `rgba(255,255,255,.13)` | Every hairline — card edges, section rules |
| `--border-blue` | `rgba(0,146,215,.4)` | Card edge on hover |
| `--glow` | `rgba(0,146,215,.18)` | `box-shadow` bloom on hover |

### Light band

For a section that deliberately inverts (the Insights band in V4).

| Token | Value |
|---|---|
| `--light-bg` | `#EDF3F7` |
| `--light-card` | `#FFFFFF` |
| `--light-text` | `#0A1620` |
| `--light-mid` | `rgba(10,22,32,.62)` |
| `--light-low` | `rgba(10,22,32,.42)` |
| `--light-border` | `rgba(10,22,32,.12)` |

### Rules

1. **Blue is a spotlight, not a wash.** Saturated blue fills are for CTAs and small accent marks
   only. Everything else stays navy / white / gray.
2. **Never use `--blue-500` for text on a light surface.** `#0092D7` on white is ~3.1:1, which
   fails WCAG AA for body text. Use `--blue-700` (~5.6:1) on the light band.
3. **Never use pure `#000` or `#FFF` as a surface.** The base is `#060810`; the lightest text is
   `#F5F8FC`.
4. Reversed text on a blue fill is `#04121C`, not black.

---

## 2. Typography

One typeface: **Poppins**, weights 400–900. `--font-display` and `--font-body` both resolve to it.
Do not introduce a second family.

### Scale

| Token | Value | Use |
|---|---|---|
| `--fs-h2` | `clamp(32px, 4vw, 52px)` | Every section title |
| `--fs-h3` | `clamp(19px, 1.5vw, 22px)` | Card titles and sub-headings |

Hero display headlines sit above the scale at `clamp(42px, 6.2vw, 94px)`.

### Body copy — three roles, one value each

The rule that keeps the system from drifting: **every paragraph resolves to one of these three.**
A section never invents its own size.

| Token | Size | Line-height | Use |
|---|---|---|---|
| `--fs-lede` / `--lh-lede` | `15.5px` | `1.70` | The paragraph directly under a section title |
| `--fs-body` / `--lh-body` | `14.5px` | `1.70` | Copy inside a card or column |
| `--fs-small` / `--lh-small` | `13.5px` | `1.60` | Captions, meta, dense descriptions |

### Component type

| Element | Spec |
|---|---|
| `.eyebrow` | 16px / 600 / `letter-spacing:.06em` / `--blue-500` / not uppercase |
| `.section-title` | `--fs-h2` / 600 / `line-height:1.05` / `letter-spacing:-.02em` / `--text-display` |
| `.hero-h1` | `clamp(42px,6.2vw,94px)` / 700 / `line-height:1.0` / `letter-spacing:-.03em` |
| `.link-arrow` | 14px / 600 / `--text-hi`, with a 28×28 `--blue-500` arrow tile |
| `.nav-links a` | 13.5px / 500 / `--text-mid` |
| `.stat-num` | `clamp(34px,4.2vw,60px)` / 600 / `line-height:1` / `letter-spacing:-.03em` |
| `.stat-label` | 11px / 500 / `letter-spacing:.18em` / uppercase |

### Rules

1. **Letter-spacing tightens as size grows.** Display `-.03em`, section titles `-.02em`, card
   titles `-.01em`, body `normal`. Small uppercase labels go the other way: `+.06em` to `+.18em`.
2. **Line-height loosens as size shrinks.** Display `1.0`, section titles `1.05`, card titles
   `1.25`, body `1.60`–`1.70`.
3. Never set long body copy in uppercase. Uppercase is for labels under ~20 characters.

---

## 3. Line-break rules

The headline discipline — the rules most often broken by editing copy.

### Titles must never exceed two lines

Applies to `.hero-h1`, `.section-title`, and every card title.

**Design-authored titles vs. content-driven titles.** A section title is written by the designer,
so it can be rewritten to fit. An article headline arrives from content and cannot be. For those,
clamp instead:

```css
display:-webkit-box; -webkit-box-orient:vertical;
-webkit-line-clamp:2; overflow:hidden;
```

For design-authored titles, enforce in this order of preference:

1. **Size the line to its container**, so the break point cannot move with the viewport:
   ```css
   .hero-h1 { container-type: inline-size; }
   .hero-h1 .l1,
   .hero-h1 .l2 { font-size: min(94px, 9.4cqw); text-wrap: balance; }
   ```
   Each line is set in `cqw` — a share of the headline column, not the viewport — so both lines
   hold at every width.

2. **Rewrite the copy.** If a title wraps to three lines, shorten the words. Do not shrink the
   font to fix it; that breaks the scale for every other title on the page.

3. **A hard `<br>` only as a last resort**, and only where the copy is fixed and the column width
   is known.

### Verify by measurement, never by eye

Poppins wraps unpredictably around hyphenated compounds. Check the real line count:

```js
const el = document.querySelector('.section-title');
const lines = el.getBoundingClientRect().height /
              parseFloat(getComputedStyle(el).lineHeight);
// lines must be <= 2
```

Re-check at **1920 / 1440 / 1280 / 1024 / 768 / 390**. A title that holds at 1440 routinely breaks
at 1280.

**The rule binds at ≥768px.** Below that, a long title cannot reach two lines without pushing the
font under the scale floor, and unreadable type is the worse failure. Narrow viewports let titles
wrap freely. If a title still needs three lines at 1024px, that is a real violation — fix it.

### Paragraph wrapping

| Rule | Implementation |
|---|---|
| Body copy never wider than ~65–75 characters | `max-width` in `ch` — `34ch` inside cards, `46ch`–`64ch` for ledes |
| Short centred paragraphs get even line lengths | `text-wrap: balance` |
| Long paragraphs avoid orphans | `text-wrap: pretty` — applied globally to `p` |

`balance` is for headings and short centred copy only; browsers ignore it past a line-count
threshold, so long paragraphs use `pretty`.

---

## 4. Padding & margin

### Horizontal rhythm

One token controls every page gutter:

```css
--pad-x: clamp(24px, 5vw, 72px);
```

Every full-width section uses `padding-inline: var(--pad-x)`. Nothing else sets a page gutter.
Content columns cap at `max-width: 1360px` (or `1200px` for tighter frames) and centre.

### Vertical rhythm

| Context | Value |
|---|---|
| Standard section | `padding: 90px var(--pad-x)` |
| Section that should hug the band above it | `padding-top: 52px` |
| Compact section | `padding: 80px var(--pad-x)` |
| Below 720px | `padding-block: 80px` |
| Fixed nav height | `72px` (with `scroll-padding-top: 72px`) |

### The stacking interval

Inside a block, spacing steps through a small set of values. Do not invent intermediate ones.

| Gap | Between |
|---|---|
| `8–10px` | A title and the line directly under it |
| `14px` | Eyebrow → section title (`.section-title { margin-top: 14px }`) |
| `18–20px` | Section title → lede paragraph |
| `26–28px` | A block and its CTA |
| `32px` | Columns in a `.section-head` |
| `56px` | `.section-head` → the content it introduces |

### Grid gaps

| Context | Value |
|---|---|
| Card grid | `14px` – `clamp(16px, 2vw, 26px)` |
| Wide multi-column layout | `clamp(40px, 6vw, 90px)` |
| Stat band | `clamp(48px, 9vw, 140px)` |

### Rules

1. **Vary spacing to build hierarchy.** A heading with more space above it reads as more
   important. Uniform padding everywhere reads as unconsidered.
2. **Use `gap`, not margins,** for spacing between siblings.
3. The accent rule above a figure or below an eyebrow is always **44×4px `--blue-500`**.

---

## 5. Motion

| Purpose | Duration | Easing |
|---|---|---|
| Hover feedback | `.15s`–`.25s` | default |
| Card lift / border | `.3s` | `cubic-bezier(.2,.6,.2,1)` |
| Scroll reveal | `.7s` | `cubic-bezier(.2,.6,.2,1)` |
| Entrance / settle | `.5s`–`.9s` | `cubic-bezier(.16,1,.3,1)` |

Scroll reveal is one shared class:

```css
.rv    { opacity: 0; transform: translateY(28px);
         transition: opacity .7s cubic-bezier(.2,.6,.2,1),
                     transform .7s cubic-bezier(.2,.6,.2,1); }
.rv.in { opacity: 1; transform: none; }
```

Staggered groups add `transition-delay` in `.06s`–`.16s` steps, never more than ~`.4s` total.

### Rules

1. Animate `transform` and `opacity` only. Never `width`, `height`, `top`, or `left`.
2. No bounce or elastic easing.
3. Every animation needs a `prefers-reduced-motion: reduce` escape.

---

## 6. Components

| Component | Anatomy |
|---|---|
| Section head | `.eyebrow` + `.section-title` + lede, always in that order. The eyebrow names the section, the title carries the idea, the lede is one sentence at `--fs-lede`. |
| `.link-arrow` | Text + a 28×28 `--blue-500` tile with `→`. The tile slides 4px right on hover. |
| `.btn-solid` | `--blue-500` fill, `#04121C` text, 700 weight, ~`14px 26px` padding. Hover: `--blue-300` + `--glow` shadow + `translateY(-2px)`. |
| Card | `--bg-card` fill, 1px `--border`. Hover: `--border-blue` + `0 0 34px var(--glow)`. **Square corners — the system has no card radius.** |
| Accent rule | 44×4px `--blue-500`. |
| Line-art icon | Hairline strokes on a large viewBox: `#FFFFFF` primary, `#A5A5A5` secondary, exactly **one** `#1294D7` filled accent per icon. Dashed connectors stream on hover. |

---

## 7. Applying this to a new page

1. Copy the `:root` block from `stories/tokens.css` verbatim.
2. Every paragraph gets `--fs-lede`, `--fs-body`, or `--fs-small`. If a paragraph seems to need a
   fourth size, the layout is wrong, not the scale.
3. Every section title is `--fs-h2` via `.section-title`; every card title is `--fs-h3`.
4. Page gutters are `var(--pad-x)`. Never a bare pixel value.
5. Measure every title's line count at six widths before calling it done.

---

## 8. Mobile & responsive

Verified against `BCT-V4-Mobile.html`, which rebuilds the V4 page on Tailwind. Every number below
was measured, not estimated.

### Body copy gets a floor on narrow screens

The desktop scale is too small for light-on-dark copy held at arm's length. The three roles do not
change — only their values do.

| Role | ≥768px | <768px |
|---|---|---|
| `--fs-lede` | 15.5 / 1.70 | **16 / 1.72** |
| `--fs-body` | 14.5 / 1.70 | **15 / 1.70** |
| `--fs-small` | 13.5 / 1.60 | **14 / 1.60** |

### Breakpoint map

| | <640 | 640 | 768 | 1024 | 1280+ |
|---|---|---|---|---|---|
| Navigation | drawer | drawer | drawer | inline | inline |
| Capability cards | 1 | 2 | 2 | 3 | 3 |
| Product cards | 1 | 2 | 2 | 3 | 4 |
| Stats | 1 | 3 | 3 | 3 | 3 |
| Footer | 1 | 2 | 2 | 3 | 3 |
| Why BCT | swipe rail | swipe rail | swipe rail | grid | grid |

The navigation stays a drawer through 768 on purpose: five items plus the locale do not fit
comfortably inline at tablet portrait.

### Touch targets

**Every interactive element is at least 44px tall on touch widths.** This is the rule the original
V4 page broke most often — it had 28 targets under 44px, mostly 28px-tall arrow links. Use
`min-h-11` on links whose text alone is shorter than that.

### Adapt the layout, do not shrink it

A row of cards that would become unreadably narrow becomes a **horizontal snap rail** instead: the
row bleeds to the screen edge so a cut-off card signals the swipe, with a visible affordance
underneath. It reverts to a grid once the columns can hold their width.

### Pitfalls that cost real time

1. **`ch` resolves against the element's own font-size.** A `max-w-[46ch]` on a 16px wrapper is
   ~368px, not the ~1200px you meant for the 52px heading inside it. Put character caps on the
   text element itself.
2. **A viewport-sized headline overflows its own column.** `10.5vw` is fine against the page and
   far too big against a 40%-wide column. Size headlines in `cqw` against a
   `container-type: inline-size` parent.
3. **The densest grid tier belongs at `xl`, not `lg`.** Four product columns at 1024 leaves ~230px
   each, which pushes every card title to three lines.
