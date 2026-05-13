import os
import re
import shutil
from pathlib import Path

base_dir = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态")

def clean_markdown_content(content):
    # 移除封面图片标记
    lines = content.split('\n')
    cleaned_lines = []
    for line in lines:
        line = line.strip('\ufeff')
        cleaned_lines.append(line)
    content = '\n'.join(cleaned_lines)
    
    # 清理多余的空行
    content = re.sub(r'\n{3,}', '\n\n', content)
    return content.strip()

def process_folder(folder):
    md_files = list(folder.glob("*.md"))
    if not md_files:
        return

    md_file = md_files[0]
    try:
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        try:
            with open(md_file, 'r', encoding='gbk') as f:
                content = f.read()
        except Exception as e:
            print(f"  无法读取 {md_file.name}: {e}")
            return

    original_length = len(content)
    cleaned_content = clean_markdown_content(content)

    with open(md_file, 'w', encoding='utf-8') as f:
        f.write(cleaned_content)

    print(f"  处理完成: {md_file.name} (原始长度 {original_length} -> 清理后长度 {len(cleaned_content)}")


print("="*80)
print("\n开始处理新闻文件")
print("="*80)

folders = [f for f in base_dir.iterdir() if f.is_dir() and not f.name.startswith('.')]
folders = sorted(folders)
for folder in folders:
    if folder.name == "images":
        continue
    print(f"\n处理目录: {folder.name}")
    process_folder(folder)

print("\n\n所有文件处理完成！")
print("="*80)
