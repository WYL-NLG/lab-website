#!/usr/bin/env python3
import os, re

# Find the news folder
avatars_folder = 'client/public/avatars/新闻动态'
folder_name = None
for item in os.listdir(avatars_folder):
    if '17' in item:
        folder_name = item
        break

if not folder_name:
    print('Folder not found')
    exit(1)

print(f'Found folder: {folder_name!r}')

# Verify the folder name has curly quotes (U+201C, U+201D)
lq = chr(0x201C)  # left double quote
rq = chr(0x201D)  # right double quote
assert lq in folder_name, f'Expected left curly quote in folder name'
assert rq in folder_name, f'Expected right curly quote in folder name'
assert '"' not in folder_name, f'Unexpected ASCII quote in folder name'
print(f'Folder name verified: contains curly quotes (U+201C/U+201D), no ASCII quotes')

# Read md file
folder_full = os.path.join(avatars_folder, folder_name)
md_path = None
for f in os.listdir(folder_full):
    if f.endswith('.md'):
        md_path = os.path.join(folder_full, f)
        break

with open(md_path, 'r', encoding='utf-8') as f:
    md_content = f.read()

print(f'MD content length: {len(md_content)}')

# Verify no ASCII double quotes in md content
if '"' in md_content:
    print('WARNING: MD has ASCII quotes')
else:
    print('MD content verified: no ASCII quotes')

# Convert md to HTML content
def md_to_html(md, folder_name):
    lines = md.split('\n')
    html_parts = []
    paragraph_buffer = []

    def flush_paragraph():
        nonlocal paragraph_buffer
        if paragraph_buffer:
            text = ''.join(paragraph_buffer).strip()
            if text:
                text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
                html_parts.append(text + '<br/><br/>')
            paragraph_buffer = []

    for line in lines:
        line = line.rstrip()
        if line.startswith('---') or line.startswith('>') or line.startswith('# '):
            flush_paragraph()
            continue
        img_match = re.match(r'!\[[^\]]*\]\(([^)]+)\)', line)
        if img_match:
            flush_paragraph()
            img_src = img_match.group(1)
            if not img_src.startswith('/'):
                img_src = f'/avatars/新闻动态/{folder_name}/{img_src}'
            html_parts.append(
                f"<div style='display: flex; justify-content: center; margin-bottom: 16px;'>"
                f"<img src='{img_src}' alt='' style='max-width: 60%; height: auto;'/>"
                f"</div>"
            )
            continue
        if line.startswith('## '):
            flush_paragraph()
            html_parts.append(f"<h3>{line[3:]}</h3>")
            continue
        if not line.strip():
            flush_paragraph()
            continue
        paragraph_buffer.append(line + ' ')

    flush_paragraph()
    return ''.join(html_parts)

html_content = md_to_html(md_content, folder_name)

# Verify no ASCII double quotes in html
assert '"' not in html_content, f'HTML content has ASCII quotes!'
print(f'HTML content length: {len(html_content)}')

# Chinese title/strings using explicit Unicode
LQ = chr(0x201C)  # "
RQ = chr(0x201D)  # "

CHINESE_TITLE = f'第一届量子与老子国际论坛{LQ}AI之道{RQ}：AI将带给你我什么样的未来？'
CHINESE_EXCERPT = (
    f'7月7日，华东师范大学联合港城集团举办第一届量子与老子国际论坛{LQ}AI之道{RQ}，'
    '聚焦AI未来发展与人类如何驾驭AI等前沿问题，18场主题演讲碰撞思想火花...'
)

folder_path = f'/avatars/新闻动态/{folder_name}'

# Verify no ASCII quotes in our strings
assert '"' not in CHINESE_TITLE
assert '"' not in CHINESE_EXCERPT
assert '"' not in folder_name

# === newsData.ts entry ===
# titleZh, excerptZh use backticks (template literals) because they contain curly quotes
# titleEn, excerptEn use double quotes with escaped ASCII quotes
nd_entry = f'''  {{
    id: "30",
    folder: `{folder_name}`,
    date: "2024-07-11",
    titleZh: `{CHINESE_TITLE}`,
    titleEn: "1st International Forum on Quantum and Laozi \\\"The Way of AI\\\": What Future Will AI Bring Us?",
    excerptZh: `{CHINESE_EXCERPT}`,
    excerptEn: "On July 7, ECNU jointly hosted the 1st International Forum on Quantum and Laozi \\\"The Way of AI\\\": focusing on the future of AI development and how humans can harness AI, featuring 18 thematic speeches...",
    coverImage: "{folder_path}/images/cover.jpeg",
  }},'''

# Verify nd_entry has no unescaped ASCII quotes in titleZh/excerptZh
# The escaped quotes in titleEn are \\\\" which is backslash + quote in the file
# Let's check what nd_entry looks like
print('nd_entry preview:')
for i, line in enumerate(nd_entry.split('\n')):
    print(f'  {i}: {repr(line[:80])}')

with open('client/src/data/newsData.ts', 'r', encoding='utf-8') as f:
    nd_content = f.read()

insert_pos = nd_content.rfind('];')
new_nd_content = nd_content[:insert_pos] + nd_entry + '\n' + nd_content[insert_pos:]

with open('client/src/data/newsData.ts', 'w', encoding='utf-8') as f:
    f.write(new_nd_content)
print('Added entry to newsData.ts')

# === NewsDetail.tsx entry ===
# title uses backtick, content uses double-quoted string (no ASCII quotes inside)
ndetail_entry = f'''  "30": {{
    date: "2024-07-11",
    title: `{CHINESE_TITLE}`,
    content: "{html_content}",
    images: [],
    showHeader: true
  }},'''

with open('client/src/pages/NewsDetail.tsx', 'r', encoding='utf-8') as f:
    ndetail_content = f.read()

insert_pos2 = ndetail_content.rfind('};')
new_ndetail_content = ndetail_content[:insert_pos2] + ndetail_entry + '\n' + ndetail_content[insert_pos2:]

with open('client/src/pages/NewsDetail.tsx', 'w', encoding='utf-8') as f:
    f.write(new_ndetail_content)
print('Added entry to NewsDetail.tsx')
print('Done!')
