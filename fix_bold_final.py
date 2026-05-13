import re
from pathlib import Path

base_dir = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态")

def fix_incomplete_bold(content):
    """Fix incomplete bold markers like **text****text**  or **text****text"""
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Fix pattern: **text**** or **text****something 
        # This usually means the closing ** was repeated
        line = re.sub(r'\*\*+\s*\*', '**', line)
        
        # Fix pattern: **text****  (triple or more asterisks)
        line = re.sub(r'\*{3,}', '**', line)
        
        # Fix pattern: **text**text**  -> **text** text**
        line = re.sub(r'\*\*([^*]+)\*\*([^*]+)\*\*', r'**\1** \2**', line)
        
        # Fix pattern: **text**text**text**  -> **text** text** text**
        line = re.sub(r'\*\*([^*]+)\*\*([^*]+)\*\*([^*]+)\*\*', r'**\1** \2** \3**', line)
        
        # Fix pattern: text****  -> text** 
        line = re.sub(r'([^*])\*{4,}', r'\1**', line)
        
        # Fix pattern: **text****text**  -> **text** text**
        line = re.sub(r'\*\*([^*]+)\*{4,}([^*]+)\*\*', r'**\1** \2**', line)
        
        # Fix trailing ** with spaces before punctuation
        line = re.sub(r'\*\*\s+([。；，：、])', r'**\1', line)
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def count_issues(content):
    """Count remaining asterisk issues"""
    count = 0
    lines = content.split('\n')
    for line in lines:
        asterisk_count = line.count('**')
        if asterisk_count % 2 != 0:
            count += 1
    return count

print("="*80)
print("Fixing Incomplete Bold Markers")
print("="*80)

folders = [f for f in base_dir.iterdir() if f.is_dir() and f.name != "images"]
folders = sorted(folders, key=lambda x: x.name)

total_files = len(folders)
files_with_issues = 0
total_issues = 0
iterations = 5

for iteration in range(iterations):
    print(f"\nIteration {iteration + 1}/{iterations}")
    issues_this_round = 0
    
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
            issues_this_round += issue_count
            total_issues += issue_count
            if iteration == iterations - 1:
                files_with_issues += 1
            
            # Fix the content
            fixed_content = fix_incomplete_bold(content)
            
            # Write back
            with open(md_file, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
    
    print(f"  Issues found: {issues_this_round}")
    
    if issues_this_round == 0:
        break

print("\n" + "="*80)
print(f"Total files with remaining issues: {files_with_issues}")
print(f"Total issues fixed across all iterations: {total_issues}")
print("="*80)
