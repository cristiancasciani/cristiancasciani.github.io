"""Fetch React Bits components (JS + CSS variant) into src/components/reactbits/.
Usage: python3 -I scripts/add-reactbits.py ShinyText Magnet ..."""
import json, os, subprocess, sys

for name in sys.argv[1:]:
    raw = subprocess.run(["curl", "-sf", f"https://reactbits.dev/r/{name}-JS-CSS.json"],
                         check=True, capture_output=True).stdout
    data = json.loads(raw)
    print(name, "deps:", data.get("dependencies"))
    for f in data["files"]:
        out = os.path.join("src/components/reactbits", os.path.basename(f["path"]))
        with open(out, "w") as fh:
            fh.write(f["content"])
        print("  ->", out)
