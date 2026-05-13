import os
import json

news_dir = r'd:\博士\课题组网页\client\public\avatars\新闻动态'
news_items = []

all_items = os.listdir(news_dir)
folders = [f for f in all_items if os.path.isdir(os.path.join(news_dir, f)) and not f.endswith('.zip')]

print(f"Found {len(folders)} news folders")

for folder_name in folders:
    folder_path = os.path.join(news_dir, folder_name)
    md_file_name = f'{folder_name}.md'
    md_file = os.path.join(folder_path, md_file_name)
    images_dir = os.path.join(folder_path, 'images')
    
    if os.path.exists(md_file):
        with open(md_file, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            
        lines = content.split('\n')
        title = folder_name
        date = ''
        excerpt = ''
        
        for line in lines[:50]:
            if line.startswith('日期：'):
                date = line.replace('日期：', '').strip()
            elif line.startswith('时间：'):
                date = line.replace('时间：', '').strip()
            elif '发布时间' in line:
                parts = line.split('：')
                if len(parts) > 1:
                    date = parts[1].strip()
                else:
                    parts = line.split(':')
                    if len(parts) > 1:
                        date = parts[1].strip()
        
        if not date or '-' not in date:
            date = '2024-01-01'
        
        text_lines = []
        for l in lines[:30]:
            stripped = l.strip()
            if stripped and not stripped.startswith('#') and not stripped.startswith('!['):
                text_lines.append(stripped)
        excerpt = ' '.join(text_lines[:3])[:200]
        
        cover_image = ''
        if os.path.exists(images_dir):
            for img in os.listdir(images_dir):
                lower_img = img.lower()
                if lower_img == 'cover.jpeg' or lower_img == 'cover.jpg':
                    cover_image = f'/avatars/新闻动态/{folder_name}/images/{img}'
                    break
            if not cover_image:
                for img in os.listdir(images_dir):
                    lower_img = img.lower()
                    if lower_img.endswith('.jpeg') or lower_img.endswith('.jpg') or lower_img.endswith('.png'):
                        cover_image = f'/avatars/新闻动态/{folder_name}/images/{img}'
                        break
        
        news_items.append({
            'id': str(len(news_items) + 1),
            'folder': folder_name,
            'date': date,
            'titleZh': title,
            'titleEn': title,
            'excerptZh': excerpt,
            'excerptEn': excerpt,
            'coverImage': cover_image
        })

news_items.sort(key=lambda x: x['date'], reverse=True)

output = 'export const news = ' + json.dumps(news_items, ensure_ascii=False, indent=2) + ';'

with open('news_data_output.js', 'w', encoding='utf-8') as f:
    f.write(output)

print(f'Generated {len(news_items)} news items')