Components Library (Phase 3)

**Purpose:** Provide standalone, reusable HTML component snippets for quick copy-paste into pages.

**All Components Listed:**
- `header.html` — Top info bar + sticky header + navigation + hamburger menu
- `footer.html` — Multi-column footer with links and social icons
- `hero.html` — Hero banner section (configurable text and background)
- `accordion.html` — FAQ/collapsible accordion (works with `initAccordion()` from js/main.js)
- `contact-form.html` — Full contact/inquiry form with validation hooks
- `service-card.html` — Service card with image, title, description, link
- `product-card.html` — Product card with category badges and enquiry CTA
- `testimonial-card.html` — Client testimonial card with rating
- `two-col.html` — Two-column layout: text (left) + image (right)
- `cta-banner.html` — Call-to-action banner section

**Usage:**
1. Copy the HTML snippet content into your page.
2. Update placeholder text (titles, descriptions, images).
3. Update links (change `pages/about.html` to match your file structure).
4. For forms, ensure `js/main.js` is included to enable validation & submission.

**Path Notes:**
- All snippets use relative paths (e.g., `pages/`, `assets/`, `../css/`) for portability.
- For local testing via `file://`, these paths work as-is.
- For HTTP servers, consider using root-absolute paths (`/css/main.css`) if preferred.

**Styling:**
- Components use CSS classes from `css/main.css` (buttons, cards, grid helpers, etc.).
- All colors, spacing, and typography leverage CSS custom properties defined in the design system.
