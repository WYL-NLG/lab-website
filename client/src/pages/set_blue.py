import re

# 读取文件
with open('NewsDetail.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到新闻30的内容部分
start_pattern = r'(\"30\": \{.*?date: \"2024-07-11\".*?content: \")'
end_pattern = r'(\",\s*images: \[\],\s*showHeader: true\s*\})'

pattern = start_pattern + r'(.*?)' + end_pattern
match = re.search(pattern, content, re.DOTALL)

if match:
    news_content = match.group(3)
    
    # 使用正确的Unicode引号字符
    left_quote = '\u201c'  # "
    right_quote = '\u201d'  # "
    
    # 定义需要替换的模式
    replacements = [
        (f'<strong>{left_quote}AI将带给你我什么样的未来？{right_quote}</strong>', f'<span style="color: blue;"><strong>{left_quote}AI将带给你我什么样的未来？{right_quote}</strong></span>'),
        (f'<strong>{left_quote}AI只是聪明，但并不智慧。{right_quote}</strong>', f'<span style="color: blue;"><strong>{left_quote}AI只是聪明，但并不智慧。{right_quote}</strong></span>'),
        (f'<strong>{left_quote}保持呼吸，保持笑容。{right_quote}</strong>', f'<span style="color: blue;"><strong>{left_quote}保持呼吸，保持笑容。{right_quote}</strong></span>'),
        (f'<strong>{left_quote}AI将显著提升全人类的生活质量。{right_quote}</strong>', f'<span style="color: blue;"><strong>{left_quote}AI将显著提升全人类的生活质量。{right_quote}</strong></span>'),
        (f'<strong>{left_quote}一个更令人激动的未来将是通过把人工智能和量子计算结合起来，我们也许可以理解和创造新的超越自然的智能。{right_quote}</strong>', f'<span style="color: blue;"><strong>{left_quote}一个更令人激动的未来将是通过把人工智能和量子计算结合起来，我们也许可以理解和创造新的超越自然的智能。{right_quote}</strong></span>'),
        (f'<strong>{left_quote}我们的科研理念是道法自然，向自然学习，在学习的过程中发现新现象和新原理，发明新材料，创造新技术。{right_quote}</strong>', f'<span style="color: blue;"><strong>{left_quote}我们的科研理念是道法自然，向自然学习，在学习的过程中发现新现象和新原理，发明新材料，创造新技术。{right_quote}</strong></span>'),
        (f'<strong>{left_quote}老子思想和量子思维可能提供认识智能的新思维。{right_quote}</strong>', f'<span style="color: blue;"><strong>{left_quote}老子思想和量子思维可能提供认识智能的新思维。{right_quote}</strong></span>'),
        (f'<strong>{left_quote}人工智能并非改变我们生活的首项技术，但能让我们以更快的速度、更大的规模和更低的成本处理问题。{right_quote}</strong>', f'<span style="color: blue;"><strong>{left_quote}人工智能并非改变我们生活的首项技术，但能让我们以更快的速度、更大的规模和更低的成本处理问题。{right_quote}</strong></span>'),
        (f'<strong>{left_quote}每一位演讲者都体现出了反思过去的历史感、关心当下的责任心和走向未来的行动力。{right_quote}</strong>', f'<span style="color: blue;"><strong>{left_quote}每一位演讲者都体现出了反思过去的历史感、关心当下的责任心和走向未来的行动力。{right_quote}</strong></span>')
    ]
    
    # 执行替换
    for old, new in replacements:
        if old in news_content:
            news_content = news_content.replace(old, new)
            print(f'[OK] Replaced: {old[15:45]}...')
        else:
            print(f'[SKIP] Not found: {old[15:45]}...')
    
    # 替换原文件中的内容
    new_full_content = content[:match.start(3)] + news_content + content[match.end(3):]
    
    # 写回文件
    with open('NewsDetail.tsx', 'w', encoding='utf-8') as f:
        f.write(new_full_content)
    
    print('\n替换完成！')
else:
    print('未找到新闻30的内容')
