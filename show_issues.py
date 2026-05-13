import re
from pathlib import Path

base_dir = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态")

# Check first file with issues
folders = [f for f in base_dir.iterdir() if f.is_dir() and f.name != "images"]
folders = sorted(folders, key=lambda x: x.name)

for folder in folders:
    md_files = list(folder.glob("*.md"))
    if not md_files:
        continue
    
    md_file = md_files[0]
    with open(md_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    has_issues = False
    issue_lines = []
    
    for i, line in enumerate(lines, 1):
        asterisk_count = line.count('**')
        if asterisk_count % 2 != 0:
            has_issues = True
            issue_lines.append((i, line))
    
    if has_issues:
        print(f"\nFile: {folder.name}")
        print(f"Issues: {len(issue_lines)}")
        for line_num, line in issue_lines[:3]:  # Show first 3 issues
            print(f"\n  Line {line_num} ({line.count('**')} asterisks):")
            print(f"  {line.rstrip()[:100]}")
        break
