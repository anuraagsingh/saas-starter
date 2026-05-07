# Interactive Design System

## Purpose

This design system defines the visual and interaction foundation for Interactive digital products, including the private cloud solutioning app. It translates the Interactive brand guidelines into practical UI tokens, component rules, and product design principles.

The system should support high-density technical workflows while remaining unmistakably Interactive: trusted, precise, human, and commercially professional.

---

## Brand Strategy

### Brand positioning

**Securing Your Success**

Interactive's brand is centred on being a trusted technology partner dedicated to securing customer success. The product experience should therefore feel reliable, clear, secure, and outcome-focused.

### Brand pillars

The UI and content experience should express the three Interactive brand pillars:

1. **Honed Expertise** — make expert guidance visible through clear recommendations, transparent assumptions, and well-structured technical outputs.
2. **Disciplined Action** — support fast, accurate decisions through consistent flows, concise language, and operational clarity.
3. **Enduring Relationships** — make the experience personable, supportive, and easy to trust.

### Brand personality

The product should express the following traits:

- **Intelligent** — clear, informed, technically credible.
- **Loyal** — dependable, consistent, and safe.
- **Conscientious** — careful with detail, assumptions, risk, and governance.
- **Personable** — human, helpful, and approachable without becoming informal or playful.

---

## Visual Identity Principles

### Brand-first interface

Interactive Blue is the primary recognition asset and should be the dominant brand colour across core surfaces, navigation, covers, hero states, and major calls to action. Turquoise is a highlight colour only and should be used sparingly for small accents, navigation highlights, buttons, links, and status emphasis.

### Human-driven technology

The brand concept is built around **human driven technology** and **unified knowledge**. In the product UI, this should be reflected through:

- human-readable explanations beside technical outputs;
- clear decision rationale;
- guided next steps;
- consistent visual grouping of people, services, infrastructure, and outcomes;
- restrained use of automation language that keeps the user in control.

### Graphic device

The Interactive faceted graphic device is the primary visual identity asset. In digital product contexts, it should be used as a subtle brand layer rather than decorative noise.

Recommended UI usage:

- login, welcome, and launch screens;
- report covers and exported artefacts;
- empty states and success summaries;
- low-opacity background facets in hero panels;
- linear graphic-device overlays for section dividers or dashboard headers.

Rules:

- Do not stretch, distort, recolour, or over-crop the graphic device.
- Use the correct brand colours only.
- When text sits over the graphic device, use white or turquoise for legibility.
- Prefer subtle application in operational screens to preserve readability.

---

## Colour Tokens

### Principal palette

```yaml
colors:
  brand:
    blue: '#1200BF'        # Interactive Brand Blue / PMS 293
    turquoise: '#0AE3DB'   # Highlight accent / PMS 319
    white: '#FFFFFF'
    darkGrey: '#36405E'
    lightGrey: '#F1F1F1'
```

### Secondary palette

Use the secondary palette sparingly for charts, diagrams, service maps, and detailed data visualisation. Tonal blues and greys should be grouped consistently and should not be mixed randomly in the same chart shape.

```yaml
colors:
  secondaryBlue:
    blue1: '#0B277D'
    blue2: '#1229AF'
    blue3: '#0200FF'
    blue4: '#3178F4'
    blue5: '#63A9FC'
  secondaryGrey:
    grey1: '#36405E'
    grey2: '#5E667E'
    grey3: '#9BA0AF'
    grey4: '#D7D9DF'
    grey5: '#F2F2F2'
```

### Product UI palette

The product UI extends the official brand palette into practical digital tokens while preserving the required colour hierarchy.

```yaml
colors:
  background: '#FFFFFF'
  surface: '#F1F1F1'
  surfaceRaised: '#FFFFFF'
  surfaceSubtle: '#F2F2F2'
  surfaceDark: '#36405E'

  text:
    primary: '#36405E'
    secondary: '#5E667E'
    muted: '#9BA0AF'
    inverse: '#FFFFFF'
    brand: '#1200BF'

  border:
    default: '#D7D9DF'
    strong: '#9BA0AF'
    brand: '#1200BF'
    focus: '#0AE3DB'

  action:
    primary: '#1200BF'
    primaryHover: '#0B277D'
    primaryText: '#FFFFFF'
    secondary: '#FFFFFF'
    secondaryText: '#1200BF'
    accent: '#0AE3DB'
    accentText: '#36405E'

  status:
    success: '#0A7A5A'
    warning: '#B26A00'
    critical: '#B00020'
    info: '#3178F4'
```

### Colour usage ratio

For branded product surfaces and exported artefacts, aim for the following visual weighting:

- **60% Interactive Blue** for brand-heavy surfaces, covers, opening screens, and key brand moments.
- **25% White** for clarity and breathing space.
- **5% Turquoise** for highlights only.
- **5% Light Grey** for backgrounds, cards, and infographic areas.
- **5% Dark Grey** for text, icons, and supporting UI elements.

For dense operational screens, white and light grey may carry more of the working surface, but Interactive Blue should remain clearly present in navigation, headers, primary actions, and export/report treatments.

### Accessibility

Use colour combinations that preserve strong contrast. Principle colour combinations should target high accessibility performance, especially for normal body text. Do not rely on turquoise alone for critical information; pair colour with text, iconography, or state labels.

---

## Typography

### Brand typefaces

```yaml
typography:
  brandHeading:
    fontFamily: 'Maison Neue Extended Demi'
    usage: 'Headings, hero statements, key report titles, major section labels'
  brandIntro:
    fontFamily: 'Maison Neue Extended Light'
    usage: 'Introductory copy where brand expression is required'
  body:
    fontFamily: 'DM Sans'
    usage: 'Body copy, subheadings, labels, tables, forms, dashboards'
  systemFallback:
    fontFamily: 'Segoe UI'
    usage: 'Internal applications where brand fonts are unavailable'
```

No additional fonts should be used on branded collateral. For internal applications where the brand fonts are unavailable, use **Segoe UI** as the system fallback.

### Product type scale

```yaml
typography:
  display-lg:
    fontFamily: 'Maison Neue Extended Demi, Segoe UI, sans-serif'
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    color: '#1200BF'
  headline-md:
    fontFamily: 'Maison Neue Extended Demi, Segoe UI, sans-serif'
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
    color: '#1200BF'
  section-caps:
    fontFamily: 'Maison Neue Extended Demi, Segoe UI, sans-serif'
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: '0.04em'
    textTransform: 'uppercase'
    color: '#1200BF'
  body-base:
    fontFamily: 'DM Sans, Segoe UI, sans-serif'
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    color: '#36405E'
  body-sm:
    fontFamily: 'DM Sans, Segoe UI, sans-serif'
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    color: '#36405E'
  label:
    fontFamily: 'DM Sans, Segoe UI, sans-serif'
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    color: '#36405E'
  data-label:
    fontFamily: 'DM Sans, Segoe UI, sans-serif'
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: '0.03em'
    color: '#5E667E'
```

### Type usage rules

- Use Maison Neue Extended Demi for strong brand moments, major headings, exported reports, and section titles.
- Use DM Sans for product UI, forms, body copy, table data, labels, and dashboard information.
- Use initial caps and lowercase for infographic labels; abbreviations may be shown in all caps.
- Avoid underlined headings.
- Use bold headings and generous line spacing in document-style outputs.
- Keep text concise, technically accurate, and confidence-building.

---

## Logo and Brandmark Usage

### Primary brandmark

The horizontal Interactive brandmark is the primary lock-up and should be used wherever space allows. Use the stacked brandmark only where the horizontal version cannot fit and only with appropriate brand approval.

### Backgrounds

The brandmark should primarily appear on:

- Interactive Blue;
- white;
- light grey;
- dark grey;
- black or white only where production limitations require mono usage.

Avoid placing the brandmark on arbitrary colours or busy imagery.

### Clear space and minimum size

- Maintain clear space equal to the height of the **I** in the Interactive wordmark.
- The minimum brandmark width, including clear space, is **30mm**.
- For page layouts, the logo is generally left aligned, with top-left as the preferred position.

### Positioning

- Top-left is the preferred placement.
- Bottom-left is acceptable when required by layout or imagery.
- The logo should be equally spaced from the top and side of its background field or page.
- Do not allow the symbol to float without visual alignment.

### Imagery usage

When placing the brandmark over imagery:

- use only images with a clear, low-detail area;
- place the brandmark top-left or bottom-left;
- preserve clear space;
- ensure strong contrast;
- do not use imagery where the logo cannot be clearly read.

---

## Layout and Spacing

### Grid

Use a clean grid system inspired by the brand layout principles.

```yaml
layout:
  grid:
    document: '6-column grid'
    dashboard: 'responsive 12-column grid'
    canvas: 'fixed sidebar + flexible workspace'
  spacing:
    base: 8px
    xs: 4px
    sm: 8px
    md: 16px
    lg: 24px
    xl: 32px
    canvasGutter: 20px
    panelWidth: 320px
```

### Product layout principles

- Keep the primary navigation visually anchored with Interactive Blue.
- Use white and light grey working surfaces for dense technical content.
- Use 6-column logic for exported documents and presentation-like screens.
- Use responsive grid behaviour for dashboards and solution summaries.
- Keep high-value technical outputs left aligned and easy to scan.
- Use generous whitespace around report titles and executive summaries.

---

## Shape, Borders, and Elevation

```yaml
shape:
  radius:
    sm: 2px
    default: 4px
    md: 6px
    lg: 8px
    full: 9999px
```

### Rules

- Use subtle rounding to keep the interface professional and efficient.
- Prefer tonal separation, borders, and brand colour accents over heavy shadows.
- Use 1px borders for cards, panels, tables, and form controls.
- Use turquoise or Interactive Blue for focus states.
- Avoid decorative elevation that conflicts with the clean brand system.

---

## Components

### Buttons

#### Primary button

- Background: Interactive Blue `#1200BF`
- Text: White `#FFFFFF`
- Hover: Secondary Blue 1 `#0B277D`
- Use for primary progression, generation, export, save, and submit actions.

#### Secondary button

- Background: White
- Text: Interactive Blue
- Border: Interactive Blue or Grey 4
- Use for alternative actions.

#### Accent button / CTA

- Background: Turquoise `#0AE3DB`
- Text: Dark Grey `#36405E`
- Use sparingly for calls to action, highlights, and guided next steps.

### Cards and panels

- Use white cards on light grey surfaces.
- Use Interactive Blue headers for brand-heavy summary cards.
- Use dark grey text for readability.
- Use turquoise only for small accents or active indicators.

### Forms

- Labels: DM Sans bold, dark grey.
- Inputs: white background, grey border, 4px radius.
- Focus: turquoise outline or border.
- Helper text: DM Sans regular, secondary grey.
- Error states must include both colour and explanatory text.

### Data tables

- Use DM Sans for all table content.
- Table headers should be bold and concise.
- Avoid excessive colour in dense data tables.
- Use light grey background for headers and subtle row dividers.
- Use tabular alignment for numbers where supported.
- Status should be represented with text plus a small coloured marker.

### Infrastructure nodes and architecture canvas

For the private cloud solutioning app, infrastructure nodes should use a practical brand-led style:

- Node background: white or light grey.
- Node border: grey by default, Interactive Blue when selected.
- Header strip: Interactive Blue for primary building blocks; dark grey for supporting components.
- Accent: turquoise for active connection points, recommended selections, or guided highlights.
- Icons: approved service or line icons where available.
- Connection lines: use Interactive Blue, dark grey, or turquoise depending on state and importance.

Avoid heavy neon/glass effects unless they are deliberately toned down and do not conflict with the official brand system.

### Icons

Service icons should only be used for the relevant Interactive service lines:

- Cloud Services
- Digital Workplace
- Data Centre
- Cyber Security
- Hardware Maintenance
- Serviced Office
- Business Continuity
- Network Services

Rules:

- Service icons should only appear in dark grey, Interactive Blue, or white when reversed on blue.
- Do not use turquoise for service icons.
- Additional icons may use approved brand colour combinations and should support content or navigation.
- Avoid creating new icons without marketing guidance.

### Infographics and charts

- Use simple solid shapes.
- Use the secondary palette sparingly.
- Use tonal blue or tonal grey groupings consistently.
- Do not mix unrelated tones in the same shape family.
- Use DM Sans for labels.
- Use approved icons where possible.
- Keep chart labels legible at small sizes.

---

## Imagery

### Photography principles

Use photography that feels natural, candid, people-focused, and connected to technology in real environments.

Preferred imagery attributes:

- natural daylight;
- vibrant but controlled colour;
- blues and greens visible where possible;
- backgrounds with short depth of field;
- people in authentic workplace moments;
- a mix of staff, industry, and service-line imagery.

Avoid imagery dominated by non-brand colours or backgrounds that are too busy for brandmark placement.

### Product UI imagery

Within the solutioning app, imagery should be limited to:

- onboarding and launch screens;
- report covers;
- empty states;
- customer-facing export templates;
- guided workflow cards where a human service context is helpful.

Operational screens should prioritise clarity over photography.

---

## Content and Tone

### Voice principles

The product language should sound:

- expert, not academic;
- confident, not exaggerated;
- concise, not abrupt;
- human, not casual;
- commercially aware, not sales-heavy.

### Preferred language patterns

Use language that reinforces security, success, reliability, and partnership:

- “Recommended configuration”
- “Assumption to validate”
- “Risk to review”
- “Customer outcome”
- “Operational dependency”
- “Secure by design”
- “Ready for architecture review”

Avoid language that over-promises or removes human accountability:

- “Guaranteed best design”
- “No risk”
- “Fully automated decision”
- “Perfect architecture”

---

## Exported Artefacts

Generated documents, reports, and presentation outputs should follow the Interactive brand style:

- Interactive logo top-left where appropriate.
- Interactive Blue used for covers, section dividers, and key headings.
- Maison Neue Extended Demi for headings when available.
- DM Sans for body copy and tables.
- Six-column layout principles for report-style documents.
- Turquoise used only for navigation highlights, CTAs, and small graphic emphasis.
- Dark grey for body text and infographic content.
- Light grey for supporting backgrounds.

---

## Implementation Notes

### CSS custom properties

```css
:root {
  --interactive-blue: #1200BF;
  --interactive-turquoise: #0AE3DB;
  --interactive-white: #FFFFFF;
  --interactive-dark-grey: #36405E;
  --interactive-light-grey: #F1F1F1;

  --interactive-blue-1: #0B277D;
  --interactive-blue-2: #1229AF;
  --interactive-blue-3: #0200FF;
  --interactive-blue-4: #3178F4;
  --interactive-blue-5: #63A9FC;

  --interactive-grey-1: #36405E;
  --interactive-grey-2: #5E667E;
  --interactive-grey-3: #9BA0AF;
  --interactive-grey-4: #D7D9DF;
  --interactive-grey-5: #F2F2F2;

  --font-heading: 'Maison Neue Extended Demi', 'Segoe UI', sans-serif;
  --font-body: 'DM Sans', 'Segoe UI', sans-serif;

  --radius-default: 4px;
  --spacing-base: 8px;
}
```

### Design governance checklist

Before release, verify that:

- Interactive Blue is clearly present in the experience.
- Turquoise is used only as a highlight.
- Typography follows Maison Neue / DM Sans / Segoe UI fallback rules.
- Logo placement preserves clear space and left alignment.
- Icons use approved colours and service meanings.
- Infographics use simple shapes and secondary colours sparingly.
- Accessibility has been checked for text and critical states.
- Exported artefacts look like Interactive branded collateral, not generic SaaS output.
