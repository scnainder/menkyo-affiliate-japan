#!/usr/bin/env python3
"""Check Menkyo A8 affiliate links against the canonical pattern.

See docs/AFFILIATE_LINKS.md. Pattern:

    https://px.a8.net/svt/ejp?a8mat=3HOUDN+5XQNQ2+2C9M+BW0YB&a8ejpredirect=
    + URL-encode("http://www.drivers-license.jp/school/<slug>/")

Inputs (use one):
  --schools-json FILE   menkyo-school-match schools.json (affiliate_url field)
  --csv FILE            CSV with a slug column and a URL column (e.g. an export of the sheet)

With --click every URL is requested and must end on
http://www.drivers-license.jp/school/<slug>/ with HTTP 200 and an `a8=` query parameter.
Exit code is 1 if anything fails.
"""
import argparse
import csv
import json
import re
import sys
import time
from urllib.parse import quote

import requests

A8_BASE = "https://px.a8.net/svt/ejp?a8mat=3HOUDN+5XQNQ2+2C9M+BW0YB&a8ejpredirect="
DEST = "http://www.drivers-license.jp/school/{slug}/"


def expected_url(slug: str) -> str:
    return A8_BASE + quote(DEST.format(slug=slug), safe="")


def slug_from_url(url: str):
    m = re.search(r"school%2F([^%&]+)%2F", url)
    return m.group(1) if m else None


def click_ok(url: str, slug: str, retries: int = 4) -> bool:
    for _ in range(retries):
        try:
            r = requests.get(url, timeout=30, headers={"User-Agent": "Mozilla/5.0"})
            if (
                r.status_code == 200
                and "a8=" in r.url
                and r.url.startswith(DEST.format(slug=slug))
            ):
                return True
        except requests.RequestException:
            pass
        time.sleep(3)  # the source site is flaky; retry slowly
    return False


def load_rows(args):
    if args.schools_json:
        data = json.load(open(args.schools_json, encoding="utf-8"))
        for r in data:
            url = r["affiliate_url"]
            yield (slug_from_url(url) or r.get("id", "?")), url
    else:
        with open(args.csv, newline="", encoding="utf-8-sig") as fh:
            for r in csv.DictReader(fh):
                yield r[args.slug_column].strip(), r[args.url_column].strip()


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    g = ap.add_mutually_exclusive_group(required=True)
    g.add_argument("--schools-json")
    g.add_argument("--csv")
    ap.add_argument("--slug-column", default="slug")
    ap.add_argument("--url-column", default="url_affiliate_a8")
    ap.add_argument("--click", action="store_true", help="also request each link (slow, sequential)")
    args = ap.parse_args()

    bad_pattern, bad_click, total = [], [], 0
    for slug, url in load_rows(args):
        total += 1
        if not slug or url != expected_url(slug):
            bad_pattern.append(slug)
            continue
        if args.click and not click_ok(url, slug):
            bad_click.append(slug)
            time.sleep(0.5)

    print(f"checked: {total} | pattern mismatch: {bad_pattern or 'none'}", end="")
    print(f" | click failed: {bad_click or 'none'}" if args.click else " | click test: skipped")
    sys.exit(1 if bad_pattern or bad_click else 0)


if __name__ == "__main__":
    main()
