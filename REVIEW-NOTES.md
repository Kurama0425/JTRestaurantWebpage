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
- Added a dedicated, linked memorial for John Turner: chef, guitarist, singer,
  his earlier restaurant in Gretna, and Travis carrying the restaurant forward.
  A visible draft note explicitly qualifies the unconfirmed time spans and
  ownership/handover history. No portrait, invented quote, or life dates added.
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
7. An authentic photograph of John can be supplied later if desired. The memorial
   is intentionally typographic, with no substitute person or generated portrait.

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
`assets/css/refresh.css`, and this document. Existing image binaries are reused.
