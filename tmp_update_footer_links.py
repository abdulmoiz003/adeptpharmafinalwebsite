from pathlib import Path

root = Path('.').resolve()
updated = []

for path in root.rglob('*.html'):
    text = path.read_text(encoding='utf-8')
    if 'href="#faq"' not in text and 'href="#disclaimer"' not in text and 'href="#privacy"' not in text and 'href="#terms"' not in text:
        continue

    rel = path.parent.relative_to(root)
    if path.parent == root:
        prefix = 'pages/'
    else:
        prefix = ''

    new_text = text.replace('href="#faq"', f'href="{prefix}faq.html"')
    new_text = new_text.replace('href="#disclaimer"', f'href="{prefix}disclaimer.html"')
    new_text = new_text.replace('href="#privacy"', f'href="{prefix}privacy-policy.html"')
    new_text = new_text.replace('href="#terms"', f'href="{prefix}terms-and-conditions.html"')

    if new_text != text:
        path.write_text(new_text, encoding='utf-8')
        updated.append(str(path))

print(f'Updated {len(updated)} files')
for p in updated:
    print(p)
