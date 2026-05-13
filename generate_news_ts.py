import json
from pathlib import Path

base_dir = Path(r"D:\博士\课题组网页\client\public\avatars\新闻动态")

with open(base_dir / "parsed_news.json", "r", encoding="utf-8") as f:
    data = json.load(f)

ts_lines = []
ts_lines.append("const news = [")
for i, item in enumerate(data["news"]):
    ts_lines.append("  {")
    ts_lines.append(f'    id: "{item["id"]}",')
    ts_lines.append(f'    folder: "{item["folder"]}",')
    ts_lines.append(f'    date: "{item["date"]}",')
    title_zh = item["titleZh"].replace('"', '\\"').replace('\n', ' ')
    ts_lines.append(f'    titleZh: "{title_zh}",')
    title_en = item["titleEn"].replace('"', '\\"').replace('\n', ' ')
    ts_lines.append(f'    titleEn: "{title_en}",')
    excerpt_zh = item["excerptZh"].replace('"', '\\"').replace('\n', ' ')[:200]
    ts_lines.append(f'    excerptZh: "{excerpt_zh}",')
    excerpt_en = item["excerptEn"].replace('"', '\\"').replace('\n', ' ')[:200]
    ts_lines.append(f'    excerptEn: "{excerpt_en}",')
    cover = item["coverImage"].replace("\\", "/")
    ts_lines.append(f'    coverImage: "{cover}",')
    ts_lines.append("  },")
    if i < len(data["news"]) - 1:
        ts_lines.append("")

ts_lines.append("];")

output = "\n".join(ts_lines)

with open(base_dir / "news_data.ts", "w", encoding="utf-8") as f:
    f.write(output)

print("Done!")