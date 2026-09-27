"""Record intrinsic dimensions of images referenced by the mirrored pages.

Run this after importing or replacing images. The runtime uses this small manifest
instead of reading files from Vercel's static asset directory on each request.
"""

import json
import re
import struct
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "public"
PAGES = ROOT / "content" / "pages"
OUTPUT = ROOT / "content" / "image-dimensions.json"
IMAGE = re.compile(r"/assets/[\w.-]+\.(?:jpe?g|png|webp|gif)", re.I)
SOF = {0xC0, 0xC1, 0xC2, 0xC3, 0xC5, 0xC6, 0xC7, 0xC9, 0xCA, 0xCB, 0xCD, 0xCE, 0xCF}


def dimensions(file: Path):
    with file.open("rb") as stream:
        start = stream.read(30)
        if start.startswith(b"\x89PNG\r\n\x1a\n"):
            return struct.unpack(">II", start[16:24])
        if start[:3] == b"GIF":
            return struct.unpack("<HH", start[6:10])
        if start[:4] == b"RIFF" and start[8:12] == b"WEBP":
            if start[12:16] == b"VP8X":
                return (1 + int.from_bytes(start[24:27], "little"), 1 + int.from_bytes(start[27:30], "little"))
            if start[12:16] == b"VP8L":
                bits = int.from_bytes(start[21:25], "little")
                return ((bits & 0x3FFF) + 1, ((bits >> 14) & 0x3FFF) + 1)
            if start[12:16] == b"VP8 ":
                return (struct.unpack("<H", start[26:28])[0] & 0x3FFF, struct.unpack("<H", start[28:30])[0] & 0x3FFF)
        if not start.startswith(b"\xff\xd8"):
            return None
        stream.seek(2)
        while True:
            marker = stream.read(1)
            if not marker:
                return None
            if marker != b"\xff":
                continue
            marker = stream.read(1)
            while marker == b"\xff":
                marker = stream.read(1)
            if not marker or marker in (b"\xd9", b"\xda"):
                return None
            if marker in (b"\x01",) or 0xD0 <= marker[0] <= 0xD7:
                continue
            size = int.from_bytes(stream.read(2), "big")
            if size < 2:
                return None
            if marker[0] in SOF:
                info = stream.read(5)
                return (int.from_bytes(info[3:5], "big"), int.from_bytes(info[1:3], "big"))
            stream.seek(size - 2, 1)


def main():
    paths = set()
    for page in PAGES.glob("*.json"):
        data = json.loads(page.read_text())
        paths.update(IMAGE.findall(data.get("html", "")))
    result = {}
    missing = []
    for path in sorted(paths):
        file = ASSETS / path.lstrip("/")
        size = dimensions(file) if file.is_file() else None
        if size and all(size):
            result[path] = size
        else:
            missing.append(path)
    OUTPUT.write_text(json.dumps(result, separators=(",", ":")) + "\n")
    print(f"{len(result)} image dimensions written to {OUTPUT.relative_to(ROOT)}")
    if missing:
        print(f"{len(missing)} images could not be read: {missing[:10]}")


if __name__ == "__main__":
    main()
