# Burgundy palette experiment

Separate color-only commit after the audit baseline. The original audited palette is commit `d84fd0937d1c6e334f37dd7e0ed8b0620e50f0bc` on GitHub. Main and production remain unchanged.

The only page change is loading `assets/css/palette-burgundy.css` after the existing stylesheets. Remove that one link, or revert the palette commit, to restore the audited original. No layout, typography, content, menu information, photographs, scripts or form behavior changed in this experiment.

- Deep Burgundy `#481F2B`: navigation, memorial card, selected section backgrounds, menu headings on cream.
- Warm Cream `#F3E8D8`: text on dark surfaces and the printed-menu background.
- Antique Brass `#C09A61`: accents, rules, buttons and headings on dark surfaces.
- Dark Espresso `#26211F`: page depth, form fields and menu dish text.

Normal-text contrast pairs: cream/burgundy **11.51:1**, cream/espresso **13.14:1**, brass/burgundy **5.33:1**, brass/espresso **6.09:1**. Brass is not used for text on the cream menu, nor cream text on brass buttons. Focus on the cream menu uses burgundy; dark surfaces use cream. Photo overlays are darkened for legibility.

Validation: zero axe WCAG A/AA/2.1 AA/2.2 AA and best-practice violations at 1440, 390 and 320px; open mobile navigation also passed. Measured section, dish, memorial, form-field and heading geometry matches the original at 1440/390px. HTML matches the baseline exactly after removing the stylesheet link. Five-width overflow checks, intercepted form submissions/error-injection check, keyboard/mobile/category/carousel tests and JavaScript-disabled checks passed again. Desktop/mobile screenshots inspected. External fonts/maps and the manual/hosting checks in `AUDIT.md` remain outstanding; automated passes are not full WCAG certification.

Local side-by-side preview: `http://127.0.0.1:8767/` while the local preview server is running. Original and burgundy versions have full-width links. This server is review-only and rejects form submissions; nothing is deployed.
