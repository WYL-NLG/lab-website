import re
from pathlib import Path

base_dir = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态")

# Check a specific file
md_path = base_dir / "2024，AI在SAIFS！" / "2024，AI在SAIFS！.md"

with open(md_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("Lines with odd number of asterisks:")
for i, line in enumerate(lines, 1):
    asterisk_count = line.count('**')
    if asterisk_count % 2 != 0:
        print(f"\nLine {i} ({asterisk_count} asterisks):")
        print(f"  {repr(line)}")
        print(f"  Display: {line.strip()}")

# Show first 10 lines
print("\n\nFirst 15 lines:")
for i, line in enumerate(lines[:15], 1):
    print(f"{i}: {repr(line)}")
