f = r'd:\博士\课题组网页\client\src\pages\NewsDetail.tsx'
with open(f, 'r', encoding='utf-8') as fh:
    content = fh.read()

idx101 = content.find('"101":')
idx100 = content.find('"100":', idx101)
section = content[idx101:idx100]

old_part = "image4.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><p style='margin: 8px 0;'>\u5434\u5b97\u7ff0 \u52a9\u7406\u6559\u6388</p><p style='margin: 8px 0; font-weight: bold;'>\u56fd\u9645\u4eba\u5de5\u667a\u80fd\u9886\u57df\u201c\u4e07\u5f15\u201d\u9752\u5e74\u5b66\u8005</p><p style='margin: 8px 0;'>\u534e\u4e1c\u5e08\u8303\u5927\u5b66\u4e0a\u6d77\u4eba\u5de5\u667a\u80fd\u91d1\u878d\u5b66\u9662\u52a9\u7406\u6559\u6388</p><p style='margin: 8px 0;'>\u6089\u5c3c\u79d1\u6280\u5927\u5b66\u535a\u58eb</p>"

new_part = "image4.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><p style='text-align: center; font-size: 14px; color: #0066cc; margin-top: 8px;'><b>\u5434\u5b97\u7ff0 \u52a9\u7406\u6559\u6388</b><br/>\u56fd\u9645\u4eba\u5de5\u667a\u80fd\u9886\u57df\u201c\u4e07\u5f15\u201d\u9752\u5e74\u5b66\u8005<br/>\u534e\u4e1c\u5e08\u8303\u5927\u5b66\u4e0a\u6d77\u4eba\u5de5\u667a\u80fd\u91d1\u878d\u5b66\u9662\u52a9\u7406\u6559\u6388<br/>\u6089\u5c3c\u79d1\u6280\u5927\u5b66\u535a\u58eb</p></div>"

if old_part in content:
    content = content.replace(old_part, new_part, 1)
    with open(f, 'w', encoding='utf-8') as fh:
        fh.write(content)
    print('SUCCESS')
else:
    print('NOT FOUND')
    test_idx = content.find('\u5434\u5b97\u7ff0 \u52a9\u7406\u6559\u6388')
    if test_idx >= 0:
        print('Found name at:', test_idx)
        print(repr(content[test_idx:test_idx+200]))
