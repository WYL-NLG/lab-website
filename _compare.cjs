const { execSync } = require('child_process');
const fs = require('fs');

const mdRaw = execSync('powershell -Command "$dir = Get-ChildItem -Path \'D:\\\\博士\\\\课题组网页\\\\client\\\\public\\\\avatars\\\\新闻动态\' -Directory | Where-Object { $_.Name -like \'*64邵怡蕾*\' }; $md = Get-ChildItem -Path $dir.FullName -File -Filter \'*.md\'; Get-Content -Path $md.FullName -Encoding UTF8 -Raw"', { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 });

console.log('MARKDOWN LENGTH: ' + mdRaw.length);

const tsx = fs.readFileSync('client/src/pages/NewsDetail.tsx', 'utf8');
const startIdx = tsx.indexOf('"49": {');
const endIdx = tsx.indexOf('"48": {', startIdx);
const tsxBlock = tsx.substring(startIdx, endIdx);

const contentMatch = tsxBlock.match(/content:\s*`([\s\S]*?)`\s*,\s*\n\s*images/);
let htmlContent = '';
if (contentMatch) {
  htmlContent = contentMatch[1];
  console.log('HTML CONTENT LENGTH: ' + htmlContent.length);
}

if (!htmlContent) {
  console.log('ERROR: Could not extract content!');
  console.log('Block excerpt: ' + tsxBlock.substring(tsxBlock.indexOf('content:'), tsxBlock.indexOf('content:') + 100));
  process.exit(1);
}

const keyPhrases = [
  'America',
  'Berkeley',
  'Azagury',
  '齐泽克',
  '怪兽',
  'IDP',
  'Intelligent Domestic Product',
  'KPMG',
  '48,000',
  'Google',
  'OpenAI',
  'Model Spec',
  'Anthropic',
  'Constitutional AI',
  'Latour',
  '拉图尔',
  '行动者网络',
  'Actor-Network',
  'Durkheim',
  'Bourdieu',
  'Bernstein',
  'Tegmark',
  '吴冠军',
  'David Harvey',
  'Mounk',
  'Levitsky',
  'Chakrabarty',
  'Daniel Bell',
  '中国模式',
  'Huntington',
  'Eisenstadt',
  '多元现代性',
  'Charles Taylor',
  '社会想象',
  'Ancient Greece',
  '古希腊',
  'French Revolution',
  '法国大革命',
  'audit',
  'algorithmic constitutionalism',
];

console.log('\nCHECKING KEY PHRASES:');
let missingCount = 0;
keyPhrases.forEach(phrase => {
  const inTSX = htmlContent.includes(phrase);
  const inMD = mdRaw.includes(phrase);
  if (inMD && !inTSX) {
    console.log('  MISSING: [' + phrase + ']');
    missingCount++;
  } else if (inTSX && inMD) {
    // console.log('  OK: ' + phrase);
  }
});

console.log('\nTotal missing phrases: ' + missingCount + '/' + keyPhrases.length);

// Check sections
console.log('\n=== SECTION CHECK ===');
const sections = [
  '一、导论',
  '二、AI技术',
  '（一）意识形态',
  '（二）国家能力',
  '（三）个人境况',
  '三、',
  '四、算法',
  '五、人工智能教育',
  '1. 解释缺口',
  '2. 规范缺口',
  '3. 秩序缺口',
  '六、教育范式',
  '图1',
  '图2',
  '图3',
];
sections.forEach(s => {
  const inTSX = htmlContent.includes(s);
  console.log((inTSX ? '  OK: ' : '  MISSING: ') + s);
});