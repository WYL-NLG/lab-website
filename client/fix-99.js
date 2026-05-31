const fs = require('fs');

const filePath = 'src/pages/NewsDetail.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 查找并替换署名部分
const searchStr = "<br/><div style='text-align: right; font-size: 12px; color: #999;'>通联｜潘诚男　整理｜钟雪莹 徐心成　编辑｜徐心成</div>";
const replaceStr = "<br/><p style='text-align: center; font-size: 12px; color: #999; margin: 4px 0;'>华东师范大学上海人工智能金融产业研究院暨孵化器</p><p style='text-align: center; font-size: 12px; color: #999; margin: 4px 0;'>通联 | 潘诚男</p><p style='text-align: center; font-size: 12px; color: #999; margin: 4px 0;'>整理 | 钟雪莹 徐心成</p><p style='text-align: center; font-size: 12px; color: #999; margin: 4px 0;'>编辑 | 徐心成</p>";

if (content.indexOf(searchStr) !== -1) {
  content = content.replace(searchStr, replaceStr);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✅ 修改成功！');
} else {
  console.log('❌ 未找到目标字符串！');
}
