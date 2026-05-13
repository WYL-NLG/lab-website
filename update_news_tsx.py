import re
from pathlib import Path

base_dir = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态")

def escape_js_string(text):
    """Escape special characters for JavaScript string literals"""
    # First escape backslashes
    text = text.replace('\\', '\\\\')
    # Escape quotes (both single and double)
    text = text.replace('"', '\\"')
    text = text.replace("'", "\\'")
    # Remove control characters and problematic Unicode
    text = re.sub(r'[\x00-\x1f\x7f-\x9f]', '', text)
    return text

def clean_text(text):
    """Clean text by removing markdown formatting"""
    # Remove markdown images
    text = re.sub(r'!\[.*?\]', '', text)
    # Remove markdown links but keep text
    text = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', text)
    # Remove bold/italic markers
    text = re.sub(r'\*+', '', text)
    # Remove # markers at line start
    text = re.sub(r'^#+\s+', '', text, flags=re.MULTILINE)
    # Remove > quotes
    text = re.sub(r'^>\s*', '', text, flags=re.MULTILINE)
    # Clean up whitespace
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def extract_clean_excerpt(content, max_length=150):
    """Extract clean excerpt from content"""
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
            if any(keyword in line for keyword in ['作者', '发布日期', '来源', '原文链接']):
                continue
            # Skip if it's just an image
            if line.startswith('!['):
                continue
            # Get actual text content
            clean_line = clean_text(line)
            if clean_line and len(clean_line) > 10:
                excerpt_lines.append(clean_line)
        if len(excerpt_lines) >= 3:
            break
    
    excerpt = ' '.join(excerpt_lines)
    # Escape for JS and truncate
    excerpt = escape_js_string(excerpt)
    return excerpt[:max_length] + '...' if len(excerpt) > max_length else excerpt

def extract_title(content):
    """Extract the first heading from markdown"""
    match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
    title = match.group(1).strip() if match else ""
    return escape_js_string(title)

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

# Read News.tsx
news_tsx_path = Path(r"D:\博士\课题组网页\client\src\pages\News.tsx")
with open(news_tsx_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the news array boundaries
start_marker = 'export const news = ['
start_idx = content.find(start_marker)
if start_idx == -1:
    print("ERROR: Cannot find news array start")
    exit(1)

# Find the closing bracket (we need to match the outermost one)
depth = 0
in_string = False
string_char = None
i = start_idx + len(start_marker)
while i < len(content):
    c = content[i]
    
    if not in_string:
        if c in ['"', "'", '`']:
            in_string = True
            string_char = c
        elif c == '[':
            depth += 1
        elif c == ']':
            if depth == 0:
                end_idx = i + 1
                break
            depth -= 1
    else:
        if c == string_char and content[i-1] != '\\':
            in_string = False
            string_char = None
    
    i += 1

# Build new news array
folders = [f for f in base_dir.iterdir() if f.is_dir() and f.name != "images"]
folders = sorted(folders, key=lambda x: x.name)

news_lines = []
news_lines.append("export const news = [")

for idx, folder in enumerate(folders):
    md_files = list(folder.glob("*.md"))
    if not md_files:
        continue

    md_file = md_files[0]
    try:
        with open(md_file, 'r', encoding='utf-8') as f:
            md_content = f.read()
    except:
        continue

    title = extract_title(md_content)
    date = extract_date(md_content)
    excerpt = extract_clean_excerpt(md_content)
    cover_image = f"/avatars/新闻动态/{folder.name}/images/cover.jpeg"
    folder_name = escape_js_string(folder.name)
    
    news_lines.append("  {")
    news_lines.append(f'    id: "{idx + 1}",')
    news_lines.append(f'    folder: "{folder_name}",')
    news_lines.append(f'    date: "{date}",')
    news_lines.append(f'    titleZh: "{title}",')
    news_lines.append(f'    titleEn: "{title}",')
    news_lines.append(f'    excerptZh: "{excerpt}",')
    news_lines.append(f'    excerptEn: "{excerpt}",')
    news_lines.append(f'    coverImage: "{cover_image}",')
    news_lines.append("  },")
    if idx < len(folders) - 1:
        news_lines.append("")

news_lines.append("];")

new_news_array = "\n".join(news_lines)

# Replace old news array with new one
new_content = content[:start_idx] + new_news_array + content[end_idx:]

# Save
with open(news_tsx_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Successfully updated News.tsx with {len(folders)} news items")
print(f"All folder names now match actual directories")
print(f"All special characters properly escaped")
