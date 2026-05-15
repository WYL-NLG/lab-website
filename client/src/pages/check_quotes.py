import re

# 读取文件
with open('NewsDetail.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 查找包含"AI只是聪明"的部分
match = re.search(r'<strong>(.{0,50}AI只是聪明.{0,50})</strong>', content)
if match:
    text = match.group(1)
    print(f"Found text: {text}")
    print(f"\nCharacter codes:")
    for i, char in enumerate(text):
        print(f"  {i}: '{char}' -> U+{ord(char):04X}")
else:
    print("Not found")
