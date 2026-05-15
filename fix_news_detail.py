#!/usr/bin/env python3
with open('client/src/pages/NewsDetail.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find "30"'s content field and escape inner ASCII quotes
idx30 = content.find('"30": {')
if idx30 == -1:
    print('Entry 30 not found')
    exit(1)

# Find the content field line after "30"
content_field_line = content.find('content:', idx30)
# Find the opening quote of the content string on this line
str_start = content.index('"', content_field_line)

# Escape inner quotes: from str_start+1 until the end of this line
# The line ends at the next unescaped quote followed by comma/newline/space/brace
i = str_start + 1
result = []
n = len(content)

while i < n:
    c = content[i]
    if c == '\\' and i + 1 < n and content[i + 1] == '"':
        # Already escaped, preserve
        result.append(c)
        result.append('"')
        i += 2
    elif c == '"':
        # Check what follows
        j = i + 1
        while j < n and content[j] in ' \t':
            j += 1
        next_c = content[j] if j < n else ''
        if next_c == ',' or next_c == '}' or next_c == '\n' or next_c == '\r':
            # End of string
            result.append(c)
            result.append(content[i+1:j+1])  # include what follows
            i = j + 1
            break
        else:
            # Inner quote, escape it
            result.append('\\')
            result.append('"')
            i += 1
    else:
        result.append(c)
        i += 1

# Append rest of file
result.append(content[i:])

fixed = ''.join(result)
if fixed != content:
    with open('client/src/pages/NewsDetail.tsx', 'w', encoding='utf-8') as f:
        f.write(fixed)
    print('Done - fixed content field for entry 30')
else:
    print('No change')
