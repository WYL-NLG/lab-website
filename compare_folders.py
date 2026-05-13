import re
from pathlib import Path

# 读取News.tsx文件
news_tsx_path = Path(r"D:\博士\课题组网页\client\src\pages\News.tsx")
with open(news_tsx_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 提取所有folder字段
folder_pattern = r'folder:\s*"([^"]+)"'
folders_in_code = re.findall(folder_pattern, content)

# 获取所有实际目录
base_dir = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态")
actual_folders = [f.name for f in base_dir.iterdir() if f.is_dir() and f.name != "images"]
actual_folders_set = set(actual_folders)

print("="*100)
print("News.tsx Folder数据与实际目录对比")
print("="*100)

# 检查代码中的folder是否都存在
missing_dirs = []
for folder in folders_in_code:
    if folder not in actual_folders_set:
        print(f"[!] Folder in code but no directory: {folder}")
        missing_dirs.append(folder)

# 检查是否有未使用的目录
unused_dirs = []
for folder in actual_folders:
    if folder not in folders_in_code:
        print(f"[+] Directory exists but not in code: {folder}")
        unused_dirs.append(folder)

print("\n" + "="*100)
print(f"Code folders: {len(folders_in_code)}")
print(f"Actual directories: {len(actual_folders)}")
print(f"Missing directories: {len(missing_dirs)}")
print(f"Unused directories: {len(unused_dirs)}")
print("="*100)

# 显示前20个目录对比
print("\nFirst 20 folders comparison:")
print("-"*100)
for i, folder in enumerate(folders_in_code[:20]):
    exists = "✓" if folder in actual_folders_set else "✗"
    print(f"{i+1:2d}. {exists} {folder}")
