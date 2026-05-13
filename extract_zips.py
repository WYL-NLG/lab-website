import zipfile
import os
from pathlib import Path

base_dir = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态")
zips = list(base_dir.glob("*_with_images.zip"))

for z in zips:
    folder_name = z.stem.replace("_with_images", "")
    extract_to = base_dir / folder_name
    extract_to.mkdir(exist_ok=True)
    with zipfile.ZipFile(z, 'r') as zip_ref:
        zip_ref.extractall(extract_to)
    print(f"Extracted: {folder_name}")

print(f"\nDone! Extracted {len(zips)} files.")