"""Publish reviewed replacement images listed as old/new public URLs in a TSV file."""

import json
import re
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
report_name = sys.argv[2] if len(sys.argv) > 2 else "batch-2026-10-10.json"
if Path(report_name).name != report_name or not report_name.endswith(".json"):
    raise ValueError("Report name must be a JSON filename")


def read_json(path: Path):
    return json.loads(path.read_text())


def write_json(path: Path, value):
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n")


def image_size(path: Path):
    output = subprocess.check_output(
        ["sips", "-g", "pixelWidth", "-g", "pixelHeight", str(path)], text=True
    )
    width = re.search(r"pixelWidth: (\d+)", output)
    height = re.search(r"pixelHeight: (\d+)", output)
    if not width or not height:
        raise ValueError(f"Cannot read image dimensions: {path}")
    return [int(width[1]), int(height[1])]


mapping = dict(line.rstrip("\n").split("\t") for line in Path(sys.argv[1]).read_text().splitlines())
media_path = ROOT / "content/cleaned-media.json"
dimensions_path = ROOT / "content/image-dimensions.json"
remaining_path = ROOT / "reports/brand-cleanup/remaining-work.json"
asset_report_path = ROOT / "reports/brand-cleanup/asset-cleanup.json"
media = read_json(media_path)
dimensions = read_json(dimensions_path)
remaining = read_json(remaining_path)
pending = {entry["asset"]: entry for entry in remaining["pending"]}
variant_to_primary = {
    variant: entry["asset"] for entry in remaining["pending"] for variant in entry["variants"]
}
restored_primaries = {variant_to_primary.get(old) for old in mapping}
if None in restored_primaries:
    raise ValueError("Mapping includes an asset outside the reviewed pending list")
for primary in restored_primaries:
    variants = pending[primary]["variants"]
    if not all(variant in mapping for variant in variants):
        raise ValueError(f"Not all reviewed variants are mapped: {primary}")
    if len({mapping[variant] for variant in variants}) != 1:
        raise ValueError(f"Variants must share one restored image: {primary}")

for old, new in mapping.items():
    if not old.startswith("/assets/") or not new.startswith("/cleaned/"):
        raise ValueError(f"Unexpected asset mapping: {old} -> {new}")
    if old in media:
        raise ValueError(f"Asset is already mapped: {old}")
    if not (ROOT / "public" / old.lstrip("/")).is_file():
        raise FileNotFoundError(old)
    if not (ROOT / "public" / new.lstrip("/")).is_file():
        raise FileNotFoundError(new)

sources = [ROOT / "content/index.json", *sorted((ROOT / "content/pages").glob("*.json"))]
for folder in ("public/styles", "app", "components", "lib", "config"):
    sources.extend(
        path for path in (ROOT / folder).rglob("*")
        if path.is_file() and path.suffix in {".css", ".json", ".ts", ".tsx"}
    )

replaced_occurrences = 0
for path in sources:
    before = path.read_text()
    after = before
    for old, new in mapping.items():
        replaced_occurrences += after.count(old)
        after = after.replace(old, new)
    if after != before:
        path.write_text(after)

for old, new in mapping.items():
    media[old] = new
    dimensions.pop(old, None)
    dimensions[new] = image_size(ROOT / "public" / new.lstrip("/"))

remaining["pending"] = [entry for entry in remaining["pending"] if entry["asset"] not in restored_primaries]
remaining["generated_images"] += len(restored_primaries)
remaining["replaced_asset_urls"] = len(media)
remaining["confirmed_remaining_images"] = len(remaining["pending"])
remaining["review_candidates"] = [
    entry for entry in remaining["review_candidates"] if entry["asset"] not in mapping
]
remaining["additional_candidates_needing_review"] = len(remaining["review_candidates"])
asset_report = read_json(asset_report_path)
asset_report["mapped_assets"] = len(media)

write_json(media_path, media)
dimensions_path.write_text(json.dumps(dimensions, ensure_ascii=False))
write_json(remaining_path, remaining)
write_json(asset_report_path, asset_report)
write_json(
    ROOT / "reports/brand-cleanup" / report_name,
    {"restored_images": len(restored_primaries), "replaced_asset_urls": len(mapping),
     "replaced_references": replaced_occurrences, "assets": mapping},
)

for old in mapping:
    if any(old in path.read_text() for path in sources):
        raise RuntimeError(f"Source still referenced after replacement: {old}")
    (ROOT / "public" / old.lstrip("/")).unlink()

print(json.dumps({"restored_images": len(restored_primaries), "replaced_references": replaced_occurrences,
                  "confirmed_remaining_images": remaining["confirmed_remaining_images"]}))
