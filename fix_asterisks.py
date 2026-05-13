import re
from pathlib import Path

base_dir = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态")

def fix_all_asterisk_issues(content):
    """Fix all asterisk-related issues in markdown content"""
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Fix pattern: **![...](...)**  - remove bold around images
        if re.match(r'^\*\*!\[', line) and line.rstrip().endswith('**'):
            # Remove the ** at start and end
            line = re.sub(r'^\*\*', '', line)
            line = re.sub(r'\*\*$', '', line)
        
        # Fix pattern: **text**text** - double bold markers
        # Replace **text**text** with **text** + text
        line = re.sub(r'\*\*([^*]+)\*\*([^*]+)\*\*', r'**\1**\2', line)
        
        # Fix pattern: text**text** - missing opening bold
        line = re.sub(r'([^*])\*\*([^*]+)\*\*', r'\1**\2**', line)
        
        # Fix pattern: **text**text**text** - triple sections
        line = re.sub(r'\*\*([^*]+)\*\*([^*]+)\*\*([^*]+)\*\*', r'**\1**\2**\3**', line)
        
        # Fix any remaining **** 
        line = re.sub(r'\*\*\*\*', r'**', line)
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def count_remaining_issues(content):
    """Count remaining asterisk issues"""
    # Look for patterns that shouldn't exist
    patterns = [
        r'\*\*[^*]+\*\*\*',  # **text***
        r'\*\*\*[^*]+\*\*',  # ***text**
        r'^\*\*!\[',          # **![ (bold before image)
    ]
    
    total = 0
    for pattern in patterns:
        total += len(re.findall(pattern, content, re.MULTILINE))
    
    return total

print("="*80)
print("Fixing All Asterisk Issues in News Content")
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

    issue_count = count_remaining_issues(content)
    if issue_count > 0:
        files_with_issues += 1
        total_issues += issue_count
        print(f"[{files_with_issues}] {folder.name}: {issue_count} issues")
        
        # Fix the content
        fixed_content = fix_all_asterisk_issues(content)
        
        # Write back
        with open(md_file, 'w', encoding='utf-8') as f:
            f.write(fixed_content)

print("\n" + "="*80)
print(f"Summary:")
print(f"  Total files checked: {total_files}")
print(f"  Files with issues: {files_with_issues}")
print(f"  Total issues fixed: {total_issues}")
print("="*80)
