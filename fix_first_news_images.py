import re
from pathlib import Path

md_file = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态\2024，AI在SAIFS！\2024，AI在SAIFS！.md")

with open(md_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace relative image paths with absolute paths
content = re.sub(
    r'!\[文章图片\]\(images/(image\d+\.(?:png|jpeg|jpg|webp))\)',
    r'![文章图片](/avatars/新闻动态/2024，AI在SAIFS！/images/\1)',
    content
)

with open(md_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated all image paths to absolute paths")

# Verify the changes
with open(md_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"\nFirst 20 lines:")
for i, line in enumerate(lines[:20], 1):
    if 'image' in line.lower():
        print(f"{i}: {line.rstrip()}")
