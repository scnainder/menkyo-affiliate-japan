# Agent instructions — Menkyo affiliate

This repository holds the **shared affiliate knowledge** for all Menkyo projects
(`menkyo-school-match`, the WordPress site menkyo.me, and anything else that sells driving-school
sign-ups through A8.net).

## Before you touch ANY affiliate link, in any repo, page or sheet

Read **`docs/AFFILIATE_LINKS.md`** first. The short version:

1. **The Google Sheet is the source of truth** ("Menkyo - Daftar Sekolah Gasshuku v2", column M
   `url_affiliate_a8`). Change the sheet first, let the owner review it, and only then update
   repos or WordPress. If anything disagrees with the sheet, the sheet wins.
2. Commission is earned **only** through an A8 link:
   `https://px.a8.net/svt/ejp?a8mat=3HOUDN+5XQNQ2+2C9M+BW0YB&a8ejpredirect=` +
   URL-encoded `http://www.drivers-license.jp/school/<slug>/`.
   A plain drivers-license.jp link earns nothing.
3. The A8 program requires the landing URL to be under **`http://www.drivers-license.jp/`**
   (`http`, with `www`). Never `https://drivers-license.jp/...`.
4. Never invent or change `a8mat`. Ask the owner to generate a link in the A8 menu instead.
5. Verify with `scripts/affiliate/check_affiliate_links.py --click` before and after changes.
6. Do not send traffic to a school page that does not load (`maxchikuma` is skipped for now).
7. No secrets in Git, logs or chat. No real conversions or customer records for testing.
8. Merging `menkyo-school-match` to `main` deploys to production. Only merge when the owner says so.

## Current status

See section 4 of `docs/AFFILIATE_LINKS.md` (which places are synced and which are not).
Update it whenever you change a link anywhere.

`web/` in this repo is a scaffold with placeholder data. It is not an affiliate source.
