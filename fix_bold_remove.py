import re
from pathlib import Path

base_dir = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态")

def fix_problematic_bold(content):
    """Remove bold markers that are causing formatting issues"""
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        asterisk_count = line.count('**')
        
        # If odd number of **, this line has a formatting issue
        if asterisk_count % 2 != 0:
            # Remove all ** from this line to fix it
            line = line.replace('**', '')
        
        # Also fix lines where ** appears in problematic positions
        # Pattern: text**text**  or **text**text
        if '**' in line:
            # If the line has unbalanced **, remove all **
            if line.count('**') % 2 != 0:
                line = line.replace('**', '')
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def count_remaining_issues(content):
    """Count remaining asterisk issues"""
    lines = content.split('\n')
    count = 0
    for line in lines:
        if line.count('**') % 2 != 0:
            count += 1
    return count

print("="*80)
print("Final Bold Marker Fix - Removing All Problematic Bold Markers")
print("="*80)

folders = [f for f in base_dir.iterdir() if f.is_dir() and f.name != "images"]
folders = sorted(folders, key=lambda x: x.name)

total_files = len(folders)
files_fixed = 0
total_lines_fixed = 0

for folder in folders:
    md_files = list(folder.glob("*.md"))
    if not md_files:
        continue

    md_file = md_files[0]
    try:
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        continue

    issue_count = count_remaining_issues(content)
    if issue_count > 0:
        files_fixed += 1
        total_lines_fixed += issue_count
        
        # Fix the content
        fixed_content = fix_problematic_bold(content)
        
        # Write back
        with open(md_file, 'w', encoding='utf-8') as f:
            f.write(fixed_content)

print(f"\nFiles fixed: {files_fixed}/{total_files}")
print(f"Total problematic lines fixed: {total_lines_fixed}")
print("="*80)
