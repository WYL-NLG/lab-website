---
name: "format-news-images"
description: "标准化处理新闻中两种图片格式（带小标题和不带小标题）、顺序编号条目标题及文末署名格式，确保与正文间距统一。当用户需要格式化新闻图片、统一图片间距、规范标题格式或设置文末署名时调用此技能。"
---

# 新闻内容格式化技能

## 功能说明

此技能用于标准化处理新闻内容中的四种特定格式要素，确保各类元素与正文之间的间距统一，提升阅读体验和视觉美观度。

## 格式分类标准

### 第一类：不带小标题的图片
- 图片下方没有图注或小标题
- 例如：文章开头的封面图、纯展示性图片

### 第二类：带小标题的图片
- 图片下方带有图注或小标题说明
- 例如：数据图表、截图说明、功能展示图

### 第三类：顺序编号条目标题
- 以数字序号开头的标题（如 "1. 标题内容"、"2. 标题内容"）
- 例如：章节标题、功能模块标题、步骤说明标题

### 第四类：文末署名
- 位于新闻内容末尾的署名信息
- 通常格式为：图文｜机构名称
- 例如：图文｜华东师范大学上海人工智能金融学院

## HTML模板规范

### 第一类图片模板（无小标题）

```html
<div style='display: flex; justify-content: center; margin: 16px 0;'>
  <img src='/avatars/新闻动态/{新闻文件夹名}/images/{图片文件名}' alt='{图片描述}' style='max-width: 60%; height: auto;'/>
</div>
```

**关键样式说明：**
- `margin: 16px 0` - 图片与上下正文的统一间距
- `max-width: 60%` - 图片最大宽度限制
- `justify-content: center` - 图片居中显示

### 第二类图片模板（带小标题）

```html
<div style='margin: 16px 0;'>
  <div style='display: flex; justify-content: center;'>
    <img src='/avatars/新闻动态/{新闻文件夹名}/images/{图片文件名}' alt='{图片描述}' style='max-width: 60%; height: auto;'/>
  </div>
  <p style='text-align: center; font-size: 14px; color: #0066cc; margin-top: 8px;'>▲{小标题内容}</p>
</div>
```

**关键样式说明：**
- 外层容器 `margin: 16px 0` - 整体单元与上下正文的统一间距
- 小标题 `margin-top: 8px` - 小标题与图片之间的内部间距
- 小标题 `font-size: 14px` - 小标题字号
- 小标题 `color: #0066cc` - 小标题颜色（蓝色）

### 第三类标题模板（顺序编号条目）

```html
<div style='margin: 16px 0;'>
  <strong style='font-size: 16px;'>{编号}. {标题内容}</strong>
</div>
```

**关键样式说明：**
- `margin: 16px 0` - 标题与上下正文/图片的统一间距
- `font-size: 16px` - 标题字号
- `<strong>` - 标题加粗显示

### 第四类文末署名模板

```html
<br/><div style='text-align: right; font-size: 12px; color: #999;'>图文｜{机构名称}</div>
```

**关键样式说明：**
- `<br/>` - 与上方内容保持适当间距
- `text-align: right` - 右对齐显示
- `font-size: 12px` - 署名字号（较小）
- `color: #999` - 署名颜色（灰色，弱化显示）

## 间距规范

| 元素 | 间距值 | 说明 |
|------|--------|------|
| 第一类图片与正文 | 16px | 图片上下边距 |
| 第二类图片整体与正文 | 16px | 整体单元上下边距 |
| 图片与小标题 | 8px | 小标题上边距 |
| 编号标题与上下文 | 16px | 标题上下边距 |
| 编号标题与图片 | 16px | 标题与图片间距 |
| 文末署名与正文 | 换行符 | 上方换行分隔 |

## 使用场景

1. **添加新新闻时** - 确保新添加的新闻图片、标题和署名格式符合规范
2. **修复现有新闻** - 统一已有新闻中的格式
3. **批量处理** - 对多条新闻进行统一的格式化处理

## 处理步骤

### 1. 识别内容类型
- 检查图片是否带有小标题/图注
- 识别顺序编号条目标题
- 确认文末署名位置
- 确定使用对应模板

### 2. 应用模板
- 根据内容类型选择对应模板
- 替换模板中的占位符（新闻文件夹名、图片文件名、图片描述、小标题内容、编号、标题内容、机构名称）

### 3. 验证间距
- 确保所有元素与正文的间距统一为16px
- 带小标题的图片整体作为一个单元处理
- 编号标题与周围元素保持统一间距
- 文末署名单独位于内容末尾

## 示例

### 第一类图片示例

**原始代码：**
```html
<img src='/avatars/新闻动态/示例新闻/images/image1.png' />
```

**格式化后：**
```html
<div style='display: flex; justify-content: center; margin: 16px 0;'>
  <img src='/avatars/新闻动态/示例新闻/images/image1.png' alt='文章图片' style='max-width: 60%; height: auto;'/>
</div>
```

### 第二类图片示例

**原始代码：**
```html
<img src='/avatars/新闻动态/示例新闻/images/image2.png' />
<p>平台首页展示图</p>
```

**格式化后：**
```html
<div style='margin: 16px 0;'>
  <div style='display: flex; justify-content: center;'>
    <img src='/avatars/新闻动态/示例新闻/images/image2.png' alt='平台首页展示图' style='max-width: 60%; height: auto;'/>
  </div>
  <p style='text-align: center; font-size: 14px; color: #0066cc; margin-top: 8px;'>▲平台首页展示图</p>
</div>
```

### 第三类标题示例

**原始代码：**
```html
<strong>1. 平台首页</strong>
```

**格式化后：**
```html
<div style='margin: 16px 0;'>
  <strong style='font-size: 16px;'>1. 平台首页</strong>
</div>
```

### 第四类文末署名示例

**原始代码：**
```html
<p>图文｜华东师范大学上海人工智能金融学院</p>
```

**格式化后：**
```html
<br/><div style='text-align: right; font-size: 12px; color: #999;'>图文｜华东师范大学上海人工智能金融学院</div>
```

## 注意事项

1. **保持一致性** - 同一篇新闻中所有同类元素应使用相同格式
2. **整体单元原则** - 带小标题的图片与小标题作为一个不可分割的整体
3. **间距统一** - 所有元素与正文的间距必须保持一致（16px）
4. **小标题格式** - 统一使用蓝色（#0066cc）、14px字号、居中对齐
5. **标题格式** - 统一使用16px字号、加粗显示
6. **文末署名** - 统一使用右对齐、12px字号、灰色（#999）、位于内容末尾

## 批量处理命令

当需要批量处理多条新闻时，可按以下流程操作：

1. 读取目标新闻的 `NewsDetail.tsx` 内容
2. 识别所有图片标签、编号标题和文末署名
3. 根据类型进行分类（无小标题图片、带小标题图片、编号标题、文末署名）
4. 应用对应模板进行格式化
5. 验证修改后的代码结构
