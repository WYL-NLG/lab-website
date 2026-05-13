import os
import re
from pathlib import Path

base_dir = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态")

def extract_title(content):
    """Extract the first heading from markdown"""
    match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
    return match.group(1) if match else None

def count_images(content):
    """Count images in content"""
    return len(re.findall(r'!\[.*?\]\(.*?\)', content))

def get_first_lines(content, num_lines=5):
    """Get first few lines of content"""
    lines = content.split('\n')
    return '\n'.join([l for l in lines[:num_lines] if l.strip()])

news_data_file = Path(r"D:\博士\课题组网页\client\src\pages\News.tsx")

print("="*100)
print("News Content vs Markdown File Comparison")
print("="*100)

folders = [f for f in base_dir.iterdir() if f.is_dir() and f.name != "images"]
folders = sorted(folders, key=lambda x: x.name)

total_checked = 0
issues_found = []

for folder in folders:
    md_files = list(folder.glob("*.md"))
    if not md_files:
        print(f"\n[!] Directory {folder.name} has no Markdown file")
        issues_found.append({"folder": folder.name, "issue": "No Markdown file"})
        continue

    md_file = md_files[0]
    try:
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"\n[X] Cannot read {md_file.name}: {e}")
        issues_found.append({"folder": folder.name, "issue": f"Read error: {e}"})
        continue

    title = extract_title(content)
    image_count = count_images(content)
    first_lines = get_first_lines(content, 10)

    print(f"\n[*] Directory: {folder.name}")
    print(f"    Title: {title}")
    print(f"    Image count: {image_count}")
    print(f"    First 10 lines preview:")
    for line in first_lines.split('\n'):
        if line.strip():
            print(f"      {line[:80]}")

    total_checked += 1

print("\n" + "="*100)
print(f"Check completed: {total_checked} directories checked")
print(f"Issues found: {len(issues_found)}")
print("="*100)

if issues_found:
    print("\nIssue list:")
    for issue in issues_found:
        print(f"  - {issue['folder']}: {issue['issue']}")
