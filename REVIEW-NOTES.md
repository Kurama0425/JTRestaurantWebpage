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
  A visible draft note retains the confirmation requirement for the time spans
  and founding/ownership/handover history without rewriting the supplied tribute.
- Flanked the tribute with a generated symbolic empty-chair-and-guitar still life
  and a reserved frame for Travis's forthcoming photograph of John. The desktop
  layout has three columns; smaller screens rearrange and stack for readability.
  No generated person, invented quote, or life dates were added.
- Kept every existing menu price and blank price unchanged. Added a visible
  notice that prices are pending confirmation from the forthcoming menu photos.
- Kept the black-and-gold palette, existing fonts, and existing restaurant imagery.
  Improved text spacing, contrast, mobile buttons, menu wrapping, and narrow-screen
  navigation spacing. Added a skip link, focus outlines, descriptive image text,
  and a reduced-motion CSS override.
- Made image paths relative for previews in subdirectories. Removed references
  to two favicon files absent from the repository. Fixed an unclosed About list,
  a heading closing tag, invalid margin declarations, and missing footer wrappers.

## Travis's confirmation before publication

1. Approve the memorial's tone and the wording about the restaurant passing into
   Travis's care. Confirm the precise ownership and handover chronology; no dates
   or legal succession details have been inferred.
2. Confirm the recollection of **40+ years as a chef** and **over a decade at
   JT's at the Lavalette**. The old page said the Gretna restaurant began in 2011,
   which does not align with over a decade before an August 2020 move. The draft
   deliberately omits 2011 and keeps these durations qualified in the review note.
   Confirm the preferred spelling/styling of the former restaurant's name too.
3. The August 2020 opening, John + Travis name, and guitar/singing details follow
   the project owner's supplied information. Have Travis approve the final history.
4. Supply the front/back menu photos, reconcile all prices and missing prices,
   and confirm menu availability. No new price has been estimated.
5. Confirm private-room capacity, booking lead time, and deposit policy. The
   previous two-week rule has been replaced with a request to contact the team.
6. Confirm the existing phone, email, address, hours, and 24-hour website
   reservation lead time remain correct; they were carried forward, not verified
   with the restaurant. Remove the visible memorial draft note after approval.
7. Supply Travis's approved photograph of John to replace `.portrait-placeholder`
   inside `.memorial-portrait` in `index.html`. Keep the actual person and crop
   intact; use descriptive alt text and the existing frame. The placeholder is
   intentionally text, not a broken image or a public upload control.

## Preservation and checks

- Both complete form blocks match main, including actions, methods, field names,
  validation attributes, and success/error messages. No PHP handler, form library,
  validation script, or `assets/js/main.js` changes.
- All dollar-price strings match main in sequence, including existing dessert
  prices. Menu item descriptions and blank price fields are retained.
- Local Chromium checks at 1440, 1024, 768, 390, and 320 pixels: no horizontal
  page overflow; restaurant/menu images load; menu category filtering works;
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
`assets/css/refresh.css`, the new memorial image, and this document. Existing
restaurant image binaries are unchanged.

## Memorial image provenance

Created using the built-in image-generation tool. This is symbolic artwork, not
a photograph of John's actual chair, guitar, or restaurant. The website asset is
`assets/img/memorial-chair-guitar.jpg` (800 x 1200, approximately 137 KiB).

Generation prompt:

> Create a refined photorealistic symbolic memorial still-life for a restaurant website honoring a chef and musician. Portrait composition, approximately 2:3 aspect ratio. An empty classic dark walnut wooden chair with a simple dark seat, and a beautiful natural-wood acoustic guitar resting securely beside it with its neck gently leaning against the chair. Both entire chair and entire guitar visible with comfortable margins. Quiet intimate interior, softly textured charcoal background, subtle wooden floor, warm soft side light catching the wood grain and guitar strings, restrained antique gold and deep brown tones matching a black-and-gold restaurant website. Tasteful, dignified, peaceful, understated editorial photography, realistic proportions. No people, no faces, no text, no lettering, no logos, no candles, no flowers, no other props. This is a symbolic scene, not a depiction of a specific actual person's belongings or restaurant.

## Follow-up review of the complete refresh

- Rechecked the available `JT Restaurant Work` chat context and the entire diff
  against original main, not just the memorial update. The historical chronology
  remains unresolved and flagged; August 2020 remains in the homepage/About.
- Repeated the five-width browser checks, including the memorial's desktop
  left/text/right placement and mobile stacking. All passed. Reviewed desktop
  and phone memorial screenshots; the whole chair and guitar remain visible.
- Rechecked complete form blocks, PHP and validation files, main JavaScript,
  and all existing prices against main: unchanged. No live submissions sent.
- Other refresh copy and styling are retained. The only follow-up website changes
  are the supplied memorial, its layout, and the requested new symbolic image.
- External font/map rendering and PHP mail delivery remain unverified locally.
  Main, Bluehost, and live production remain untouched.
