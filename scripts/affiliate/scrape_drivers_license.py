#!/usr/bin/env python3
"""Scrape every school on https://www.drivers-license.jp/list/ for the affiliate dataset.

See docs/AFFILIATE_LINKS.md. Output (in --out, default "."): schools_scraped.json and .csv with
slug, Japanese name, prefecture, area, address, lowest AT prices (tax included / excluded),
licence types, graduation days, max-age note, page title, the plain URL and the A8 link.

Requires: requests, beautifulsoup4, lxml.

The source site is rate-limited and sometimes returns HTTP 500 (e.g. `maxchikuma` on
2026-10-03). Requests are sequential with retries. Schools whose page keeps failing come out
with empty address/price columns: check them by hand, do not guess.
Prices: the lowest "税込" / tax-excluded amount >= 100,000 yen found in the AT price table
(smaller amounts are discounts and surcharges). The sheet, not this output, is the source of truth.
"""
import argparse
import csv
import html
import json
import os
import re
import time
from urllib.parse import quote

import requests
from bs4 import BeautifulSoup

BASE = "https://www.drivers-license.jp"
HEADERS = {"User-Agent": "Mozilla/5.0"}
A8_BASE = "https://px.a8.net/svt/ejp?a8mat=3HOUDN+5XQNQ2+2C9M+BW0YB&a8ejpredirect="
AREAS = {
    "tohoku": "東北", "kanto": "関東", "koshinetsu": "甲信越", "hokuriku": "北陸", "toukai": "東海",
    "kansai": "関西", "chugoku": "中国", "shikoku": "四国", "kyusyu": "九州",
}


def get(url: str) -> str:
    is_school = "/school/" in url
    for _ in range(5):
        try:
            r = requests.get(url, headers=HEADERS, timeout=30)
            r.encoding = "utf-8"
            # a real school page contains an address line ("住所")
            if r.status_code == 200 and (not is_school or "住所" in r.text):
                return r.text
        except requests.RequestException:
            pass
        time.sleep(3)
    return ""


def parse_list():
    soup = BeautifulSoup(get(BASE + "/list/"), "lxml")
    rows, area, pref = [], "", ""
    for el in soup.find_all(["h2", "h3", "h4", "div", "table", "tr"], recursive=True):
        if el.get("id") in AREAS:
            area = AREAS[el.get("id")]
        if el.name != "tr":
            continue
        link = el.find("a", href=re.compile("/school/"))
        if not link:
            continue
        th = el.find("th")
        if th:
            pref = th.get_text(strip=True)
        alts = [i.get("alt", "") for i in el.find_all("img")]
        rows.append({
            "slug": re.search(r"/school/([^/]+)/", link["href"]).group(1),
            "name_ja": link.get_text(strip=True),
            "prefecture": pref,
            "area_region": area,
            "license_types": "|".join(a for a in alts if a and a != "グループ割"),
            "group_discount": "yes" if "グループ割" in alts else "no",
            "grad_days": el.find_all("td")[-1].get_text(" ", strip=True),
        })
    seen, out = set(), []
    for r in rows:
        if r["slug"] not in seen:
            seen.add(r["slug"])
            out.append(r)
    return out


def add_details(r):
    page = get(f"{BASE}/school/{r['slug']}/")
    text = re.sub(r"<(script|style)[^>]*>.*?</\1>", "", page, flags=re.S)
    text = re.sub(r"</(td|th)>", "|", text)
    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"\s+", " ", html.unescape(text))
    start = text.find("料金表")
    end = text.find("入校日カレンダー", start)
    seg = text[start:end] if start >= 0 and end > start else ""
    seg = seg[max(seg.find("宿泊プラン"), 0):]
    incl = [int(x.replace(",", "")) for x in re.findall(r"税込\s*([\d,]+)\s*円", seg)]
    excl = [int(x.replace(",", "")) for x in re.findall(r"(?<!税込)(?<![\d,])(\d{3},\d{3})\s*円", seg)]
    incl = [v for v in incl if v >= 100000]
    excl = [v for v in excl if v >= 100000]
    addr = re.search(r"住所[:：]\s*(〒[\d\-]+\s*\S+)", text)
    age = re.search(r"(\d+)歳以上の方はご入校いただけません", text)
    title = re.search(r"<title>(.*?)</title>", page, re.S)
    plain = f"http://www.drivers-license.jp/school/{r['slug']}/"
    r.update(
        address=addr.group(1) if addr else "",
        price_min_tax_incl=min(incl) if incl else "",
        price_min_tax_excl=min(excl) if excl else "",
        max_age_note=age.group(0) if age else "",
        page_title=html.unescape(title.group(1).strip()) if title else "",
        url_plain=plain,
        url_affiliate_a8=A8_BASE + quote(plain, safe=""),
    )
    return r


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--out", default=".")
    args = ap.parse_args()

    schools = [add_details(r) for r in parse_list()]
    os.makedirs(args.out, exist_ok=True)
    with open(os.path.join(args.out, "schools_scraped.json"), "w", encoding="utf-8") as fh:
        json.dump(schools, fh, ensure_ascii=False, indent=1)
    with open(os.path.join(args.out, "schools_scraped.csv"), "w", newline="", encoding="utf-8-sig") as fh:
        w = csv.DictWriter(fh, list(schools[0].keys()))
        w.writeheader()
        w.writerows(schools)
    missing = [s["slug"] for s in schools if not s["address"] or s["price_min_tax_incl"] == ""]
    print(f"schools: {len(schools)} | incomplete (check by hand): {missing or 'none'}")


if __name__ == "__main__":
    main()
