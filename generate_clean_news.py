import re
from pathlib import Path

base_dir = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态")

def clean_excerpt(content, max_length=150):
    """Extract clean excerpt from content, removing metadata"""
    lines = content.split('\n')
    excerpt_lines = []
    started = False
    
    for line in lines:
        # Skip metadata lines
        if line.startswith('---'):
            started = True
            continue
        if started and line.strip():
            # Skip if it's metadata
            if line.startswith('> **') or line.startswith('**') and ('作者' in line or '发布日期' in line or '来源' in line):
                continue
            # Skip if it's just an image
            if line.startswith('!['):
                continue
            # Get actual text content
            clean_line = line.replace('**', '').replace('*', '').strip()
            if clean_line:
                excerpt_lines.append(clean_line)
        if len(excerpt_lines) >= 3:
            break
    
    excerpt = ' '.join(excerpt_lines)
    return excerpt[:max_length] + '...' if len(excerpt) > max_length else excerpt

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

print("="*100)
print("News Data with Clean Excerpts")
print("="*100)

folders = [f for f in base_dir.iterdir() if f.is_dir() and f.name != "images"]
folders = sorted(folders, key=lambda x: x.name)

news_items = []
for i, folder in enumerate(folders, 1):
    md_files = list(folder.glob("*.md"))
    if not md_files:
        continue

    md_file = md_files[0]
    try:
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        continue

    title = extract_title(content)
    date = extract_date(content)
    excerpt = clean_excerpt(content)
    
    cover_image = f"/avatars/新闻动态/{folder.name}/images/cover.jpeg"
    
    news_items.append({
        "id": str(i),
        "folder": folder.name,
        "date": date,
        "titleZh": title,
        "titleEn": title,
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
output_path = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态\news_data_clean.ts")
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(output)

print(f"\nGenerated {len(news_items)} news items with clean excerpts")
print(f"Output saved to: {output_path}")
print("\n" + "="*100)
