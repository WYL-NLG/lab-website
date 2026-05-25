#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Fix quote mismatch: replace escaped straight quotes with curly quotes
# to match the actual folder name on disk.

LEFT_CURLY = '\u201c'   # "
RIGHT_CURLY = '\u201d'  # "

# === Fix newsData.ts ===
with open(r'd:\博士\课题组网页\client\src\data\newsData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# In newsData.ts, the id=54 entry has \"历史终结\" in folder, titleZh, excerptZh, coverImage
# Replace \"历史终结\" with curly quotes
# Only do this for the id=54 entry block
old = '\\"历史终结\\"'
new = LEFT_CURLY + '历史终结' + RIGHT_CURLY
# First check if id=54 exists
idx54 = content.find('id: "54"')
if idx54 >= 0:
    # Find the block for id=54 (from "id: "54"" to next "id: ")
    block_start = content.rfind('\n', 0, idx54) + 1
    next_id = content.find('\n  {', idx54 + 10)
    if next_id < 0:
        next_id = content.find('\n];', idx54)
    block = content[block_start:next_id]
    
    # Replace \"历史终结\" with curly quotes in this block
    block_fixed = block.replace(old, new)
    content = content[:block_start] + block_fixed + content[next_id:]
    
    with open(r'd:\博士\课题组网页\client\src\data\newsData.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print('Fixed newsData.ts')
else:
    print('WARNING: id=54 not found in newsData.ts')

# === Fix NewsDetail.tsx ===
with open(r'd:\博士\课题组网页\client\src\pages\NewsDetail.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# In NewsDetail.tsx, replace \"历史终结\" with curly quotes
# Only in the id=54 entry (between line 262 and 268)
idx54 = content.find('"54": {')
if idx54 >= 0:
    # Find the block for id=54
    block_start = content.rfind('\n', 0, idx54) + 1
    next_id = content.find('\n  "', idx54 + 10)
    if next_id < 0:
        next_id = content.find('\n};', idx54)
    block = content[block_start:next_id]
    
    # In this block, the \"历史终结\" appears in:
    # 1. title field (line 264) - display text, should use curly quotes for display consistency
    # 2. content field (line 265) - in image src paths AND display text
    # 
    # To match the folder name, ALL occurrences in this entire block should use curly quotes
    # because curly quotes are valid Unicode chars in JS strings
    block_fixed = block.replace(old, new)
    content = content[:block_start] + block_fixed + content[next_id:]
    
    with open(r'd:\博士\课题组网页\client\src\pages\NewsDetail.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print('Fixed NewsDetail.tsx')
else:
    print('WARNING: id=54 not found in NewsDetail.tsx')

print('Done!')