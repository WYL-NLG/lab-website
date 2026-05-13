import re
import os
import json
from pathlib import Path

base_dir = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态")

news_items = []

folders = [f for f in base_dir.iterdir() if f.is_dir() and f.name != "images"]

for folder in sorted(folders):
    md_files = list(folder.glob("*.md"))
    if not md_files:
        continue

    md_file = md_files[0]
    relative_path = f"/avatars/新闻动态/{folder.name}/{md_file.name}"
    cover_path = f"/avatars/新闻动态/{folder.name}/images/cover.jpeg"

    content = md_file.read_text(encoding='utf-8')

    title_match = re.search(r'^# (.+)$', content, re.MULTILINE)
    title = title_match.group(1) if title_match else folder.name

    date_match = re.search(r'\*\*发布日期\*\*[：:]\s*(\d{4}年\d{1,2}月\d{1,2}日)', content)
    if not date_match:
        date_match = re.search(r'(\d{4}-\d{2}-\d{2})', content)
    date_str = date_match.group(1) if date_match else "2024-01-01"
    date_str = date_str.replace('年', '-').replace('月', '-').replace('日', '')

    lines = content.split('\n')
    excerpt_lines = []
    in_content = False
    for line in lines:
        if line.startswith('---') and not in_content:
            in_content = True
            continue
        if in_content and not line.startswith('![') and not line.startswith('**') and line.strip():
            excerpt_lines.append(line.strip())
        if len(excerpt_lines) >= 2:
            break

    excerpt = ' '.join(excerpt_lines)[:150] + '...' if excerpt_lines else title

    clean_content = re.sub(r'!\[.*?\]\(images/', f'![image]({folder.name}/images/', content)
    clean_content = re.sub(r'\*\*发布日期\*\*.*?\n', '', clean_content)
    clean_content = re.sub(r'\*\*作者\*\*.*?\n', '', clean_content)
    clean_content = re.sub(r'\*\*来源\*\*.*?\n', '', clean_content)
    clean_content = re.sub(r'^---\s*$', '', clean_content, flags=re.MULTILINE)
    clean_content = re.sub(r'^>\s*\*\*.*?\*\*\s*$', '', clean_content, flags=re.MULTILINE)
    clean_content = re.sub(r'^\s*作者:.*$', '', clean_content, flags=re.MULTILINE)
    clean_content = re.sub(r'^\s*发布日期:.*$', '', clean_content, flags=re.MULTILINE)
    clean_content = re.sub(r'^\s*来源:.*$', '', clean_content, flags=re.MULTILINE)

    news_items.append({
        "id": str(len(news_items) + 1),
        "folder": folder.name,
        "date": date_str,
        "titleZh": title,
        "titleEn": title,
        "excerptZh": excerpt,
        "excerptEn": excerpt,
        "coverImage": cover_path,
        "content": clean_content.strip()
    })

print(f"Found {len(news_items)} news items")

for item in news_items[:3]:
    print(f"\nID: {item['id']}")
    print(f"Title: {item['titleZh']}")
    print(f"Date: {item['date']}")
    print(f"Cover: {item['coverImage']}")

output = {"news": news_items}
with open(base_dir / "parsed_news.json", "w", encoding="utf-8") as f:
    json.dump(output, f, ensure_ascii=False, indent=2)

print("\nSaved to parsed_news.json")