import fs from 'fs';
const filePath = 'd:\\博士\\课题组网页\\client\\src\\pages\\NewsDetail.tsx';
let content = fs.readFileSync(filePath, 'utf8');
const oldFooter = '<br/><div style=\'text-align: right; font-size: 12px; color: #999;\'>通联｜潘诚男　整理｜钟雪莹 徐心成　编辑｜徐心成</div>';
const newFooter = '<br/><p style=\'text-align: center; font-size: 12px; color: #999; margin: 4px 0;\'>华东师范大学上海人工智能金融产业研究院暨孵化器</p><p style=\'text-align: center; font-size: 12px; color: #999; margin: 4px 0;\'>通联 | 潘诚男</p><p style=\'text-align: center; font-size: 12px; color: #999; margin: 4px 0;\'>整理 | 钟雪莹 徐心成</p><p style=\'text-align: center; font-size: 12px; color: #999; margin: 4px 0;\'>编辑 | 徐心成</p>';
content = content.replace(oldFooter, newFooter);
fs.writeFileSync(filePath, content, 'utf8');
console.log('修改成功！新闻99的署名已更新为居中多行格式。');
