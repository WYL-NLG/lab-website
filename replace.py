
with open(r'd:\博士\课题组网页\client\src\pages\NewsDetail.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old = "<br/><div style='text-align: right; font-size: 12px; color: #999;'>通联｜潘诚男　整理｜钟雪莹 徐心成　编辑｜徐心成</div>"
new = "<br/><p style='text-align: center; font-size: 12px; color: #999; margin: 4px 0;'>华东师范大学上海人工智能金融产业研究院暨孵化器</p><p style='text-align: center; font-size: 12px; color: #999; margin: 4px 0;'>通联 | 潘诚男</p><p style='text-align: center; font-size: 12px; color: #999; margin: 4px 0;'>整理 | 钟雪莹 徐心成</p><p style='text-align: center; font-size: 12px; color: #999; margin: 4px 0;'>编辑 | 徐心成</p>"

content = content.replace(old, new)

with open(r'd:\博士\课题组网页\client\src\pages\NewsDetail.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('修改成功')
