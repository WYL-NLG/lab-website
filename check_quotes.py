with open('client/src/data/newsData.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

line = lines[18]  # line 19 (0-indexed)
print(f"Line 19: {repr(line[:100])}")
for i, c in enumerate(line[:80]):
    if c == '"' or ord(c) > 127:
        print(f'  pos={i} char={repr(c)} ord={hex(ord(c))}')