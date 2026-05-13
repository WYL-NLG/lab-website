import re
import json
from pathlib import Path

base_dir = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态")

def extract_title(content):
    """Extract the first heading from markdown"""
    match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
    return match.group(1).strip() if match else ""

def extract_date(content):
    """Extract date from content"""
    patterns = [
        r'\*\*发布日期\*\*[：:]\s*(\d{4}年\d{1,2}月\d{1,2}日)',
        r'(\d{4}-\d{2}-\d{2})',
    ]
    for pattern in patterns:
        match = re.search(pattern, content)
        if match:
            date = match.group(1)
            date = date.replace('年', '-').replace('月', '-').replace('日', '')
            return date
    return "2024-01-01"

def extract_excerpt(content, max_length=150):
    """Extract excerpt from content"""
    lines = content.split('\n')
    excerpt_lines = []
    started = False
    for line in lines:
        if line.startswith('---') or line.startswith('#'):
            started = True
            continue
        if started and line.strip() and not line.startswith('![') and not line.startswith('**'):
            excerpt_lines.append(line.strip())
        if len(excerpt_lines) >= 3:
            break
    excerpt = ' '.join(excerpt_lines)
    return excerpt[:max_length] + '...' if len(excerpt_lines) > 0 else ""

print("Generating news data from actual directories...")

folders = [f for f in base_dir.iterdir() if f.is_dir() and f.name != "images"]
folders = sorted(folders, key=lambda x: x.name)

news_items = []
for i, folder in enumerate(folders, 1):
    md_files = list(folder.glob("*.md"))
    if not md_files:
        print(f"Skipping {folder.name}: no markdown file")
        continue

    md_file = md_files[0]
    try:
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {md_file}: {e}")
        continue

    title = extract_title(content)
    date = extract_date(content)
    excerpt = extract_excerpt(content)

    # Extract English title if available (assume same as Chinese for now)
    title_en = title

    # Generate cover image path
    cover_image = f"/avatars/新闻动态/{folder.name}/images/cover.jpeg"

    news_items.append({
        "id": str(i),
        "folder": folder.name,
        "date": date,
        "titleZh": title,
        "titleEn": title_en,
        "excerptZh": excerpt,
        "excerptEn": excerpt,
        "coverImage": cover_image,
    })

# Generate TypeScript code
ts_lines = []
ts_lines.append("export const news = [")

for i, item in enumerate(news_items):
    ts_lines.append("  {")
    ts_lines.append(f'    id: "{item["id"]}",')
    ts_lines.append(f'    folder: "{item["folder"]}",')
    ts_lines.append(f'    date: "{item["date"]}",')
    ts_lines.append(f'    titleZh: "{item["titleZh"]}",')
    ts_lines.append(f'    titleEn: "{item["titleEn"]}",')
    ts_lines.append(f'    excerptZh: "{item["excerptZh"]}",')
    ts_lines.append(f'    excerptEn: "{item["excerptEn"]}",')
    ts_lines.append(f'    coverImage: "{item["coverImage"]}",')
    ts_lines.append("  },")
    if i < len(news_items) - 1:
        ts_lines.append("")

ts_lines.append("];")

output = "\n".join(ts_lines)

# Save to file
output_path = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态\news_data_corrected.ts")
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(output)

print(f"\nGenerated {len(news_items)} news items")
print(f"Output saved to: {output_path}")
print("\n" + "="*80)
print("Copy the 'export const news = [...]' section to News.tsx")
print("="*80)
