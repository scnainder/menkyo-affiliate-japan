# Affiliate links runbook (A8.net / drivers-license.jp)

Read this before you touch **any** affiliate link, in any Menkyo repo, page or sheet.
Last verified: **2026-10-03**.

Menkyo earns commission only when a visitor goes through an **A8.net tracking link**. A plain
link to drivers-license.jp earns **nothing**, so a wrong link is lost money, not a cosmetic bug.

## 1. Source of truth: the Google Sheet

> **Menkyo - Daftar Sekolah Gasshuku v2** (Google Sheets, owner scnainder@gmail.com)
> Spreadsheet ID: `1XGB_w7GLMbnKBn4hJYjStwr2ZxEgIe6cMP7g8va-iOg` (tab `Untitled`)

**Column M (`url_affiliate_a8`) is the single source of truth for every affiliate link.**
The owner reviews links in the sheet first. Only after the owner says the sheet is fixed do you
propagate to the repo, WordPress, or anything else. Never change a link somewhere else first.

If the Google Sheets connector (`mcp__Google_Sheets__*` tools) is available you can read and
edit the sheet in place (same file, same URL). The Google Drive connector alone cannot edit
cells (it only creates/renames/moves files), so do not "edit" the sheet by creating a new file.

Columns (rows 2-54, one school per row; row 1 is the header):

| Col | Header | Meaning |
|---|---|---|
| A | `slug` | drivers-license.jp slug, e.g. `yumoto` (the join key) |
| B | `name_ja` | Japanese school name |
| C | `prefecture` | Prefecture in Japanese |
| D | `area_region` | drivers-license.jp area (東北, 関東, 甲信越, 北陸, 東海, 関西, 中国, 四国, 九州) |
| E | `address` | Address from the school page |
| F / G | `price_min_tax_incl_JPY` / `price_min_tax_excl_JPY` | Lowest AT package price (cheapest room/season) |
| H-K | `grad_days`, `license_types`, `group_discount`, `max_age_note` | Scraped details |
| L | `url_plain` | `http://www.drivers-license.jp/school/<slug>/` (the A8 destination) |
| **M** | **`url_affiliate_a8`** | **The affiliate link. Source of truth.** |
| N | `link_check` | `OK` if the click test passed on 2026-10-03 |
| O | `note` | Free-text notes |
| P-R | `ada_di_match`, `id_di_match`, `link_lama_di_match` | Whether/how the school appears in `menkyo-school-match` `schools.json`, and the old (pre-2026-10-03) link there |
| S | `REVIEW_anda` | Owner's review column. Rows 2-6 hold links the owner generated in the A8 menu |

Row 54 (`matsuki_akayu`) is not on the drivers-license.jp list page but its page works and it
was already in `schools.json`.

Old/unused sheets: `[LAMA - jangan dipakai] Menkyo - Daftar Sekolah Gasshuku` (v1) and
`Menkyo - SUMBER KEBENARAN Link Affiliate A8 (review)`. Do not use them. Do not trash files
unless the owner asks.

## 2. The A8 program and its rules

Program **合宿免許受付センター** (A8 program ID `s00000010921001`, category 専門学校・スクール).
Facts read from the A8 program page on 2026-10-03:

- Reward: **免許合宿参加 ¥12,000** per conversion. EPC 8.42, confirmation rate 19.23%.
- Cookie / revisit period: **90 days**. Typical confirmation time about 45 days.
- Conversion condition: the user enrols **and graduates** within **120 days** of the web application.
- Rejection conditions: no payment within 4 weeks, or the loan company does not approve.
- **Landing URL rule (商品リンク): the destination must be within `http://www.drivers-license.jp/`.**
  Match it exactly: `http`, `www`, same host. Do not use `https://drivers-license.jp/...`.
- The program page also shows 本人 (self-conversion) as NG, so do not test conversions yourself.
- A8 also requires affiliates to follow its own rules (prohibited expressions, ad disclosure).

## 3. The link pattern

```
https://px.a8.net/svt/ejp?a8mat=3HOUDN+5XQNQ2+2C9M+BW0YB&a8ejpredirect=<ENCODED>
<ENCODED> = URL-encode( http://www.drivers-license.jp/school/<slug>/ )   (encode ":" and "/")
```

Example (`yumoto`):

```
https://px.a8.net/svt/ejp?a8mat=3HOUDN+5XQNQ2+2C9M+BW0YB&a8ejpredirect=http%3A%2F%2Fwww.drivers-license.jp%2Fschool%2Fyumoto%2F
```

Evidence: the owner generated 5 links in the A8 menu (`rikuzentakata`, `tono`, `hiraizumi`,
`mogami`, `matsuki_murayama`); all 5 are character-for-character identical to this pattern
(column S vs column M). The other rows are generated from the pattern and click-tested, but not
individually compared with an A8-menu link. `a8mat` is the same for every school. Do not
invent or "fix" `a8mat` values. If a school or page type ever needs a different material,
ask the owner to generate the link in the A8 menu and paste it into column S.

## 4. Where links live and their status (2026-10-03)

| Place | Status |
|---|---|
| Google Sheet (above) | Source of truth. 53 rows, all match the pattern. |
| `scnainder/menkyo-school-match` `schools.json` (match.menkyo.me, all funnels) | **Synced.** 52 entries (51 of the 52 schools on the list page, plus `matsuki_akayu`), merged in PR #8 (commit `30bef0d`). `maxchikuma` intentionally excluded. `starting_price` = sheet column G. |
| WordPress menkyo.me, Japanese page `/jp/list/` (page ID 382; `/jp/` = page 381 has no school links) | **Synced 2026-10-03.** 52 schools, 108 A8 links (2 per card), all equal to sheet column M, 0 plain links, click-tested. Details in section 4a. |
| Other WordPress pages (`/en/`, `/ne/`, `/bd/`, `/id-...`, school pages) | Not audited. |
| `scnainder/menkyo-affiliate-japan` `web/` | Scaffold with placeholder data (`https://example.com`). **Not** an affiliate source. |

### 4a. WordPress `/jp/list/` (done 2026-10-03)

Before: 0 of 52 schools matched the pattern (48 used `https://drivers-license.jp`; `rikuzentakata` had a different
`a8mat`; `hiraizumi` and `susochu` were plain links with no tracking; `kanonjiwest` was missing; `maxchikuma` present).
Changes made to page 382 (links only, plus the two list changes below):

- All A8 destinations now `http://www.drivers-license.jp/...`; `rikuzentakata` uses the standard `a8mat`; `hiraizumi` and `susochu` now use A8 links from the sheet.
- Removed the `maxchikuma` card (source page returns HTTP 500; owner said skip for now). Chubu count 17 -> 16.
- Added a `kanonjiwest` card ("Kannonji Driving School West", Kagawa, from ¥190,000, sheet link). Shikoku count 2 -> 3.
- Verified on the public page: 108 A8 links, 0 pattern mismatches, 0 plain links, 52 unique schools, all click-tested.
- Rollback: WordPress revision 392 (2026-08-27) or `docs/backups/menkyo-me-jp-list-page382-before-2026-10-03.html`.

Not changed, but wrong or inconsistent (content, not links): a second `nanko` card named just "Driving School" (price ¥234,546); a second `yasugi` card "Yasugi Driving School (second listing)" labelled Hiroshima; card prices (料金目安) differ from sheet column G for several schools (for example `susochu` ¥307,000 vs ¥288,000). Ask the owner before changing them.

### 4b. How WordPress is edited

menkyo.me is self-hosted WordPress (Rank Math). The Claude cloud environment "Default" provides the variables
`WP_SITE_URL`, `WP_USERNAME`, `WP_PASSWORD` (an application login for an administrator). Never print or commit their values.
Edit pages through the REST API, for example `GET/POST $WP_SITE_URL/wp-json/wp/v2/pages/<id>` with basic auth
(`context=edit` returns the raw HTML in `content.raw`). Procedure: read the raw content, save a backup, build the change
offline, verify it with the pattern check, POST only `content`, read it back, then re-audit the public page.
The Japanese pages are plain HTML (no blocks): links are `href="https://px.a8.net/svt/ejp?...&a8ejpredirect=..."` on the school name and on the "詳しく見る" button.
The WordPress.com connector in claude.ai is not needed and may not work for this self-hosted site. The English, Nepali, Bangladeshi and Indonesian pages are not audited yet.

## 5. Source site facts

- School list: `https://www.drivers-license.jp/list/` (52 schools, 9 areas). School page: `/school/<slug>/`.
- `matsuki_akayu` is not on the list page but its page works.
- **`maxchikuma`: the school page returned HTTP 500 (WordPress critical error) on every attempt on 2026-10-03.** No price. The owner decided to skip it for now. Do not send traffic to it until the page works and a price is known. Adding it back is one `schools.json` entry.
- `sanin_chuou` is in Tottori (address 鳥取県米子市), which resolves the old question in the `menkyo-school-match` README.
- The site is rate-limited and flaky. Use one request at a time with retries (see the scraper).

## 6. How to change a link or add a school

1. **Edit the sheet** (column L `http://www.drivers-license.jp/school/<slug>/`, column M the pattern above). Keep one row per slug.
2. Run `scripts/affiliate/check_affiliate_links.py --csv <export> --click` (see section 8). All rows must pass.
3. **Stop and let the owner review the sheet.** Do not touch repos or WordPress before they say it is fixed.
4. Propagate:
   - `menkyo-school-match` `schools.json`: copy the link from column M, `starting_price` from column G (tax-excluded), English `school_name`/`title`, English `prefecture`, and one of the 8 app regions (`Hokkaido`, `Tohoku`, `Kanto`, `Chubu`, `Kansai`, `Chugoku`, `Shikoku`, `Kyushu / Okinawa`; Niigata, Nagano, Yamanashi, Ishikawa, Fukui and Shizuoka are `Chubu`). Keep the same keys as existing entries and `unknown` for feature flags. Follow that repo's `AGENTS.md` (synthetic tests only, no auto-deploy).
   - WordPress: use the environment credentials as in section 4b. Never paste credentials into chat, Git or logs.
5. Open a PR. **Merging `menkyo-school-match` to `main` deploys to production** (Cloudflare Pages), so merge only when the owner says so.
6. Update the status table in section 4 of this file.

## 7. Guardrails

- The sheet decides. If the sheet and any other place disagree, the sheet wins.
- Always `http://www.drivers-license.jp/` as the destination. Never `https://`, never without `www`.
- Never ship a plain `drivers-license.jp` link where an affiliate link belongs.
- Never change `a8mat` yourself; ask the owner to generate a link in the A8 menu.
- Do not add a school whose page does not load (a broken landing page means no commission).
- Do not create real conversions or real customer records to test.
- No secrets (A8 login, WordPress passwords, Mailketing tokens) in Git, logs or chat.
- Report only what you verified. The pattern is proven for 5 schools by A8 itself and click-tested for the rest.

## 8. Scripts (`scripts/affiliate/`)

- `scrape_drivers_license.py`: scrapes the list page and every school page (name, prefecture, area, address, lowest prices, licence types, graduation days, A8 link) into JSON and CSV. Needs `requests`, `beautifulsoup4`, `lxml`. Slow on purpose (1 request at a time).
- `check_affiliate_links.py`: checks every link against the pattern and, with `--click`, follows the redirect and confirms HTTP 200, the `a8=` parameter and the right final page.
  - `python3 scripts/affiliate/check_affiliate_links.py --schools-json ../menkyo-school-match/schools.json --click`
  - `python3 scripts/affiliate/check_affiliate_links.py --csv sheet_export.csv --slug-column slug --url-column url_affiliate_a8 --click`

## 9. Open items

- Audit the other WordPress pages (`/en/`, `/ne/`, `/bd/`, `/id-...`, school pages) with the same procedure as section 4a.
- Decide what to do with the content problems listed in section 4a (duplicate cards, card prices).
- `maxchikuma`: add once its page works and the price is known.
- Ask the owner to generate a few more links in the A8 menu to widen the pattern evidence.
- `menkyo-school-match` has a failing `Workers Builds` check that also fails on earlier merged PRs. It is a stale Cloudflare Workers integration, not caused by data changes. The real deploy check is `Cloudflare Pages`.
