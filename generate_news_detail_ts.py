import json
import re
from pathlib import Path

base_dir = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态")

with open(base_dir / "parsed_news.json", "r", encoding="utf-8") as f:
    data = json.load(f)

ts_lines = []
ts_lines.append("const newsData: Record<string, {")
ts_lines.append("  date: string;")
ts_lines.append("  title: string;")
ts_lines.append("  titleZh: string;")
ts_lines.append("  titleEn: string;")
ts_lines.append("  content: string;")
ts_lines.append("  folder: string;")
ts_lines.append("}> = {")

for i, item in enumerate(data["news"]):
    folder_name = item["folder"]
    md_path = base_dir / folder_name / f"{folder_name}.md"

    content = ""
    if md_path.exists():
        content = md_path.read_text(encoding='utf-8')
        content = re.sub(r'!\[.*?\]\(images/', f'![image]({folder_name}/images/', content)
        content = content.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${').replace('\n', '\\n')

    ts_lines.append(f'  "{item["id"]}": {{')
    ts_lines.append(f'    date: "{item["date"]}",')
    title_zh = item["titleZh"].replace('"', '\\"')
    ts_lines.append(f'    titleZh: "{title_zh}",')
    title_en = item["titleEn"].replace('"', '\\"')
    ts_lines.append(f'    titleEn: "{title_en}",')
    ts_lines.append(f'    title: "{title_zh}",')
    ts_lines.append(f'    folder: "{folder_name}",')
    ts_lines.append(f'    content: `{content}`,')
    ts_lines.append("  },")

ts_lines.append("};")

output = "\n".join(ts_lines)
with open(base_dir / "news_detail_data.ts", "w", encoding="utf-8") as f:
    f.write(output)

print("Done!")