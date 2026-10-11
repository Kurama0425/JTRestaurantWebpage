# Website refresh — review draft

Prepared on `feature/restaurant-refresh-review` from main commit
`d212280a777e4be1f5c050413541d685d02950f1`. This is a proposal for review;
it has not been merged or deployed. No Bluehost or production work is included.

## What changed

- Rewrote the homepage introduction and About story around the August 2020
  Chatham opening and the John + Travis meaning of J+T's. Kept the brand name.
- Removed the online-ordering promise and COVID-era party limit. Private dining
  now invites guests to discuss capacity, notice, and deposits with the team
  instead of publishing unconfirmed booking policies.
- Added a dedicated, linked memorial using the project owner's full supplied
  tribute, including the title, subtitle, six paragraphs, and closing dedication.
  Travis has approved the memorial, as confirmed by the project owner. The
  visible draft note has been removed; the approved tribute is unchanged.
- Flanked the tribute with a generated symbolic empty-chair-and-guitar still life
  and a reserved frame for Travis's forthcoming photograph of John. The desktop
  layout has three columns; smaller screens rearrange and stack for readability.
  No generated person, invented quote, or life dates were added.
- Replaced the menu using the two supplied menu photos, including all items,
  descriptions, prices, sides, add-ons, beverages, and printed dining charges.
  The project owner confirmed all five obscured scallop prices are MP. The old
  pending-photo notice is replaced by an explanation of MP (Market Price).
  See `MENU-REVIEW.md` for the complete transcription and interpretation notes.
- Kept the black-and-gold palette, existing fonts, and existing restaurant imagery.
  Improved text spacing, contrast, mobile buttons, menu wrapping, and narrow-screen
  navigation spacing. Added a skip link, focus outlines, descriptive image text,
  and a reduced-motion CSS override.
- Made image paths relative for previews in subdirectories. Removed references
  to two favicon files absent from the repository. Fixed an unclosed About list,
  a heading closing tag, invalid margin declarations, and missing footer wrappers.

## Approval and remaining review

The project owner has confirmed Travis's approval of the memorial. Its wording
is approved and no longer carries a draft note. The remaining supplied asset is
John's photograph. The project owner still needs to review the complete website
refresh; the pull request remains a draft, with no merge or deployment authorized.

Replace `.portrait-placeholder` inside `.memorial-portrait` in `index.html`
with Travis's photograph when supplied. Preserve the person and use descriptive
alt text. The reserved frame is not a public upload control.

Menu photos and the five blacked-out MP prices are resolved. Private dining
invites guests to contact the restaurant for arrangements. Existing contact
details, hours, and the 24-hour reservation lead time remain carried forward.

## Preservation and checks

- Both complete form blocks match main, including actions, methods, field names,
  validation attributes, and success/error messages. No PHP handler, form library,
  validation script, or `assets/js/main.js` changes.
- All 53 menu entries match the photo transcription in `MENU-REVIEW.md`, including
  eight MP entries (three printed Market Price entries and five owner-confirmed
  blacked-out entries). Superseded menu prices and descriptions were replaced.
- Local Chromium checks at 1440, 1024, 768, 390, and 320 pixels: no horizontal
  page overflow; restaurant/menu images load; all eight menu category filters work;
  mobile navigation opens and reaches the memorial, then closes.
- No JavaScript exceptions or missing local resources during those checks.
  Desktop and mobile screenshots were inspected. External Google Fonts and Maps
  were blocked during local checks, so screenshots use fallback fonts and the
  external map was not verified. Those integrations remain in the page.
- No submissions were sent. PHP mail delivery was not exercised: a PHP runtime
  is unavailable locally, and the preview server deliberately rejects POST/PHP.
  An end-to-end mail check belongs in a separately authorized staging environment.
- Diff whitespace check passed with CRLF-aware settings. The HTML retains its
  original CRLF line endings; other files retain their existing conventions.

## Review locally

Serve this directory with a local static server and open `index.html`. This is
enough to inspect styling, navigation, menu filtering, and draft copy. A static
server cannot execute the PHP forms; do not interpret that as a production form
failure. Review the complete diff against main before considering any release.

Changes are limited to `index.html`, `assets/css/style.css`, the additive
`assets/css/refresh.css`, the new memorial image, `MENU-REVIEW.md`, and this
document. Existing restaurant image binaries are unchanged.

## Memorial image provenance

Created using the built-in image-generation tool. This is symbolic artwork, not
a photograph of John's actual chair, guitar, or restaurant. The website asset is
`assets/img/memorial-chair-guitar.jpg` (800 x 1200, approximately 137 KiB).

Generation prompt:

> Create a refined photorealistic symbolic memorial still-life for a restaurant website honoring a chef and musician. Portrait composition, approximately 2:3 aspect ratio. An empty classic dark walnut wooden chair with a simple dark seat, and a beautiful natural-wood acoustic guitar resting securely beside it with its neck gently leaning against the chair. Both entire chair and entire guitar visible with comfortable margins. Quiet intimate interior, softly textured charcoal background, subtle wooden floor, warm soft side light catching the wood grain and guitar strings, restrained antique gold and deep brown tones matching a black-and-gold restaurant website. Tasteful, dignified, peaceful, understated editorial photography, realistic proportions. No people, no faces, no text, no lettering, no logos, no candles, no flowers, no other props. This is a symbolic scene, not a depiction of a specific actual person's belongings or restaurant.

## Follow-up review of the complete refresh

- Rechecked the available `JT Restaurant Work` chat context and the entire diff
  against original main, not just the memorial update. Travis has since approved the
  supplied memorial; August 2020 remains in the homepage/About.
- Repeated the five-width browser checks, including the memorial's desktop
  left/text/right placement and mobile stacking. All passed. Reviewed desktop
  and phone memorial screenshots; the whole chair and guitar remain visible.
- Rechecked complete form blocks, PHP and validation files, and main JavaScript
  against main: unchanged. No live submissions sent. Prices were unchanged at
  the memorial stage and subsequently replaced from the supplied menu photos.
- Other refresh copy and styling are retained. Follow-ups add the supplied
  memorial, its layout and symbolic image, and the photo-based menu update.
- External font/map rendering and PHP mail delivery remain unverified locally.
  Main, Bluehost, and live production remain untouched.
