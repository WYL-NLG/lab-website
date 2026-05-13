import re
from pathlib import Path

base_dir = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态")

def fix_bold_markers(content):
    """Fix unbalanced bold markers **text** or **text without proper closing"""
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Count asterisks in line
        asterisk_count = line.count('**')
        
        # If odd number of **, we have unbalanced markers
        if asterisk_count % 2 != 0:
            # Try to fix common patterns
            
            # Pattern: **text**text - missing closing **
            # Replace with: **text** + text
            fixed_line = re.sub(r'\*\*([^*]+)\*\*([^*]+)$', r'**\1**\2', line)
            if fixed_line != line:
                line = fixed_line
            else:
                # Pattern: text**text** - missing opening **
                # Replace with: text + **text**
                fixed_line = re.sub(r'^([^*]+)\*\*([^*]+)\*\*$', r'\1**\2**', line)
                if fixed_line != line:
                    line = fixed_line
        
        # Fix any remaining double asterisks without proper pairs
        # Look for **text** followed by more text without **
        line = re.sub(r'\*\*([^*]+)\*\*([^*]+)$', r'**\1** \2', line)
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def count_issues(content):
    """Count lines with potentially unbalanced bold markers"""
    count = 0
    lines = content.split('\n')
    for line in lines:
        asterisk_count = line.count('**')
        if asterisk_count % 2 != 0:
            count += 1
    return count

print("="*80)
print("Fixing Bold Markers in News Content")
print("="*80)

folders = [f for f in base_dir.iterdir() if f.is_dir() and f.name != "images"]
folders = sorted(folders, key=lambda x: x.name)

total_files = len(folders)
files_with_issues = 0
total_issues = 0

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

    issue_count = count_issues(content)
    if issue_count > 0:
        files_with_issues += 1
        total_issues += issue_count
        
        # Fix the content
        fixed_content = fix_bold_markers(content)
        
        # Write back
        with open(md_file, 'w', encoding='utf-8') as f:
            f.write(fixed_content)

print(f"\nFiles with issues: {files_with_issues}")
print(f"Total lines fixed: {total_issues}")
print("="*80)
