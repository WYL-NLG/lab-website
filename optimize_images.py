import re
from pathlib import Path

base_dir = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态")

def optimize_markdown_images(content, folder_name):
    """Optimize images in markdown for web layout"""
    lines = content.split('\n')
    optimized_lines = []
    last_was_image = False

    for i, line in enumerate(lines):
        # Check if line is an image
        img_match = re.match(r'^!\[(.*?)\]\((.*?)\)$', line.strip())

        if img_match:
            alt_text = img_match.group(1)
            img_path = img_match.group(2)

            # Skip if it's a cover image (usually first image)
            if 'cover' in img_path.lower():
                continue

            # Convert relative path to absolute path
            if not img_path.startswith('/'):
                # If it's a relative path like "images/image1.png"
                img_path = f"/avatars/新闻动态/{folder_name}/{img_path}"

            # Add proper spacing around images
            if not last_was_image:
                optimized_lines.append('')  # Add blank line before image
                optimized_lines.append(f'<div class="news-image-wrapper">')
                optimized_lines.append(f'<img src="{img_path}" alt="{alt_text}" class="news-image" loading="lazy" />')
                optimized_lines.append(f'</div>')
                optimized_lines.append('')  # Add blank line after image
            else:
                # Consecutive image, just add it
                optimized_lines.append(f'<div class="news-image-wrapper">')
                optimized_lines.append(f'<img src="{img_path}" alt="{alt_text}" class="news-image" loading="lazy" />')
                optimized_lines.append(f'</div>')

            last_was_image = True
        else:
            optimized_lines.append(line)
            if line.strip():
                last_was_image = False

    return '\n'.join(optimized_lines)

def clean_markdown(content):
    """Clean and optimize markdown content"""
    lines = content.split('\n')
    cleaned_lines = []
    in_metadata = False
    metadata_content = []

    for line in lines:
        # Skip initial cover image
        if line.strip().startswith('![') and 'cover' in line.lower():
            continue

        # Handle metadata section
        if line.strip().startswith('>'):
            if not in_metadata:
                in_metadata = True
            metadata_content.append(line)
            continue
        elif line.strip() == '---':
            in_metadata = False
            metadata_content = []
            continue
        elif in_metadata:
            continue  # Skip metadata lines

        # Skip empty lines at the beginning
        if not cleaned_lines and not line.strip():
            continue

        cleaned_lines.append(line)

    return '\n'.join(cleaned_lines).strip()

def process_file(md_file, folder_name):
    """Process a single markdown file"""
    try:
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"  Error reading {md_file}: {e}")
        return False

    # Clean content
    cleaned = clean_markdown(content)

    # Optimize images
    optimized = optimize_markdown_images(cleaned, folder_name)

    try:
        with open(md_file, 'w', encoding='utf-8') as f:
            f.write(optimized)
        return True
    except Exception as e:
        print(f"  Error writing {md_file}: {e}")
        return False

print("="*80)
print("Optimizing Markdown Images for Web Layout")
print("="*80)

folders = [f for f in base_dir.iterdir() if f.is_dir() and f.name != "images"]
folders = sorted(folders, key=lambda x: x.name)

total = len(folders)
success = 0

for idx, folder in enumerate(folders, 1):
    md_files = list(folder.glob("*.md"))
    if not md_files:
        print(f"\n[{idx}/{total}] SKIP {folder.name}: No markdown file")
        continue

    md_file = md_files[0]
    print(f"\n[{idx}/{total}] Processing: {folder.name}")

    if process_file(md_file, folder.name):
        success += 1
        # Count images processed
        with open(md_file, 'r', encoding='utf-8') as f:
            img_count = len(re.findall(r'<img.*?class="news-image".*?/>', f.read()))
        print(f"  [OK] Optimized (images: {img_count})")
    else:
        print(f"  [FAIL] Failed")

print("\n" + "="*80)
print(f"Completed: {success}/{total} files processed successfully")
print("="*80)
