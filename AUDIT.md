# Pre-publication audit — October 10, 2026

Target: WCAG 2.2 Level AA. Scope: the current single-page restaurant refresh, local assets, JavaScript and both PHP form handlers. This is a source and local-browser audit, not a certification or a production penetration test. Main and Bluehost were not changed.

## Verified issues repaired

| Area | Finding and repair |
| --- | --- |
| Contrast | White text on gold submission buttons measured 2.31:1. Dark text now exceeds 4.5:1; gold branding is retained. Repaired gold hover states, readable placeholders, field boundaries and error/success colors. |
| Keyboard navigation | Mobile open/close controls lacked names and state. Added names, expanded/controls attributes, focus entry, containment, Escape dismissal and focus return; inactive page content is inert while the menu is open. Section links move focus to their destination. |
| Focus | Existing template rules suppressed outlines. Added consistent high-contrast focus-visible outlines, including the menu picker, and scroll margins for focused controls. |
| Forms | Added persistent visible labels, unique IDs, autocomplete for personal details, required/optional indications, linked errors, invalid state, first-error focus and live status messages. Corrected the subject error message to match its existing four-character rule. |
| Client-side security | Form responses were inserted with `.html()`. They are now plain text, including transport errors; injected HTML cannot create elements or execute handlers. Removed response logging to the console. |
| Carousel | Removed automatic advancement (no pause control existed). Retained manual buttons and swipe, named the controls, enlarged their click targets without enlarging the visible dots, exposed current state and hid inactive slides from assistive technology. |
| Semantics | One page h1; corrected skipped heading levels while keeping their styles; hero inside main; named phone/hours region. Existing descriptive image alternatives retained. |
| Resilience | Removed the blocking preloader. Content remains visible if animation initialization fails. Added no-JavaScript mobile navigation and private-dining content fallbacks. Reduced-motion preference also governs JavaScript scrolling/animation. |
| SEO | Replaced generic title, removed empty keywords, added Open Graph/Twitter text metadata and factual Restaurant JSON-LD. Marked unused template `inner-page.html` noindex/nofollow. No invented ratings, price range or closing hours. |
| Performance | Reused four existing photographs as optimized WebP assets; kept source JPEGs. Added intrinsic private-dining image dimensions, font preconnections and font-display swap. Removed unused Isotope/Venobox scripts, Venobox CSS and their inactive initialization. |

The approved memorial and the complete menu section are unchanged. PHP handlers, the embedded mail library, email destinations, POST field names, validation rules, actions and methods are unchanged. Client-side form accessibility and safe error rendering are the only form-script changes.

## Checks and results

- axe-core 4.10.3, Chrome/Playwright, WCAG 2 A/AA, 2.1 AA and 2.2 AA plus best-practice rules: **zero detected violations at 1440, 390 and 320 CSS pixels**, after repairs. Baseline detected unnamed buttons, contrast, heading order, landmarks and target-size problems. The open mobile menu also passed the WCAG scan.
- Layout checked at 1440, 1024, 768, 390 and 320 pixels: no horizontal page overflow; 53 menu entries retained. All eight mobile category destinations checked below the sticky controls. WCAG text-spacing override did not introduce horizontal overflow at 390 pixels.
- Keyboard skip link, mobile focus entry/wrap, Escape, focus return and section-link focus passed. Manual carousel selection, active-state attribute and loaded image passed. No page JavaScript exceptions or missing requested local resources in checked flows.
- Both forms: local intercepted POST tests verified unchanged action URLs and exact field payloads, successful `OK` handling and field reset. Invalid forms focus the first error. A simulated HTML-bearing error displayed literally without creating an image or executing its handler. **No email was sent.**
- Both PHP handlers and embedded library compared byte-for-byte against the pre-audit branch. Approved memorial and menu compared exactly against the pre-audit page. Unique HTML IDs, single h1 and JSON-LD parsing checked.
- JavaScript-disabled phone viewport: navigation, private dining and all menu entries remain available; no blocking preloader or horizontal overflow.
- Desktop and mobile screenshots inspected, including the memorial, private dining and labelled reservation form. Google Fonts and Maps were blocked in automated runs, so those checks used fallback fonts.
- JavaScript syntax and CRLF-aware Git whitespace checks passed. There is no application build pipeline and no local PHP runtime; PHP execution/lint and delivery are not claimed.

### Image payload measurements

| Existing image | Original bytes | Served WebP bytes |
| --- | ---: | ---: |
| Dining-room hero | 590,911 | 237,542 |
| Private dining room | 521,596 | 89,610 |
| Bar | 135,474 | 98,582 |
| Storefront | 159,889 | 129,362 |
| Total | **1,407,870** | **555,096** |

Approximately **61% smaller for these four images**. This is an asset-size measurement, not a Lighthouse score or a claim about real-user Core Web Vitals. Below-fold photos retain lazy loading. Large legacy icon fonts remain; replacing them would need a broader icon inventory and is not necessary for this targeted repair.

## Before publication: remaining checks and decisions

1. **Email library / hosting security — high priority:** the bundled PHPMailer identifies itself as 6.2.0, in the version range of an upstream object-injection advisory. This audit did not establish an exploitable path in these handlers. The wrapper also uses PHP's deprecated `FILTER_SANITIZE_STRING`, has an unreliable AJAX-header guard, can return detailed mail errors, and has no active server-side rate limiting/CAPTCHA in the supplied handlers. Review/update the licensed wrapper and embedded library in staging, validate malformed POST handling and abuse controls, and verify the host PHP version before release. Do not treat client-side validation as a security boundary. No incompatible library replacement or mail-path change was attempted locally.
2. **Bluehost staging:** test both real form submissions, recipient delivery/reply-to, failure handling, spam filtering and reservation workflow. Confirm HTTPS redirects, security headers, MIME types (including WebP), caching/compression, PHP error-display settings and public file exposure. These host settings were not inspected or changed. A Content Security Policy must be tested against inline styles/scripts, Google Fonts/Maps and the current libraries before enforcement.
3. **Manual accessibility:** NVDA/Chrome and VoiceOver/Safari reading order, labels, live errors/status announcements and mobile menu; keyboard focus visibility at every scroll position; 200% text zoom and 400% browser zoom; real iPhone/Android touch/orientation; image-background contrast across crops and loaded fonts; Google Maps iframe usability. Axe left manual-review items for image-backed contrast, roles and the external frame. Zero automated violations is not proof of full WCAG conformance.
4. **Canonical website address pending confirmation:** basic share metadata is added, but canonical URL, `og:url`, absolute social image, schema URL/menu and sitemap await the owner's preferred HTTPS hostname. Do not publish guessed or localhost URLs. Once supplied, add these and run Google's Rich Results Test and actual social-card previews. Search appearance is not guaranteed by structured data.
5. **Dependencies:** Bootstrap 4.6.0 is end-of-life; jQuery 3.5.1 and other bundled template plugins are old. No reachable exploit was demonstrated in this static page. Plan a tested dependency maintenance pass; a framework migration would exceed a visual-preservation audit. Unused template files/assets remain in the repository; exclude review notes/tests and unused templates from the eventual deployment package.
6. **Performance on hosting:** run Lighthouse/PageSpeed with live fonts/maps, mobile throttling and a cold cache; measure LCP, CLS, INP and caching on the approved staging build. Local screenshots and byte savings cannot establish production performance.
7. John's real portrait is still awaited from Travis. The approved memorial wording and photo placeholder remain.

## References

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/), including [minimum target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) and [focus not obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum).
- [Google LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business).
- [PHPMailer advisory](https://github.com/PHPMailer/PHPMailer/security/advisories/GHSA-m298-fh5c-jc66), [PHP sanitization-filter documentation](https://www.php.net/manual/en/filter.constants.sanitization.php), [Bootstrap 4 end of life](https://getbootstrap.com/docs/4.6/end-of-life/).
