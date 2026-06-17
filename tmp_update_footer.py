from pathlib import Path
import re

root = Path('.').resolve()


def footer_html(link_prefix, img_prefix):
    return f'''<footer>
  <div class="container">
    <div class="footer-top">
      <div class="footer-col">
        <div class="footer-logo">
          <img src="{img_prefix}assets/images/icons/logo.png" alt="Adept Pharma" style="height: 110px; width: auto; display: block; margin-bottom: 16px; filter: brightness(0) invert(1);">
        </div>
        <p class="footer-desc">
          Your trusted pharmaceutical manufacturing partner in Pakistan, delivering excellence in quality, compliance, and innovation.
        </p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="{link_prefix}about.html">About</a></li>
          <li><a href="{link_prefix}services.html">Services</a></li>
          <li><a href="{link_prefix}blog.html">Blog</a></li>
          <li><a href="{link_prefix}contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Support Links</h4>
        <ul>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#disclaimer">Disclaimer</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms & Conditions</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul style="list-style: none; margin: 0; padding: 0;">
          <li style="margin-bottom: var(--space-md);"><strong>📍 Address:</strong><br>Plot# 32, Street S-2, Industrial Estate, Rawat, Islamabad, Pakistan</li>
          <li style="margin-bottom: var(--space-md);"><strong>📞 Phone:</strong><br><a href="tel:+923331110194">+92 3331110194</a></li>
          <li><strong>✉ Email:</strong><br><a href="mailto:adeptpharma@gmail.com">adeptpharma@gmail.com</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>&copy; 2026 Adept Pharma. All rights reserved.</div>
      <div class="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms & Conditions</a>
        <a href="#disclaimer">Disclaimer</a>
      </div>
      <div class="footer-social">
        <a href="#" title="Facebook">f</a>
        <a href="#" title="Instagram">📷</a>
        <a href="#" title="LinkedIn">in</a>
        <a href="#" title="WhatsApp">💬</a>
      </div>
    </div>
  </div>
</footer>'''

html_files = sorted(root.rglob('*.html'))
updated = []

for path in html_files:
    text = path.read_text(encoding='utf-8')
    if '<footer>' not in text:
        continue
    rel = path.parent.relative_to(root)
    if path.parent == root:
        link_prefix = 'pages/'
        img_prefix = ''
    elif rel == Path('pages'):
        link_prefix = ''
        img_prefix = '../'
    elif rel == Path('pages') / 'services':
        link_prefix = '../'
        img_prefix = '../../'
    else:
        link_prefix = ''
        img_prefix = ''

    new_footer = footer_html(link_prefix, img_prefix)
    new_text, count = re.subn(r'<footer>.*?</footer>', new_footer, text, flags=re.S, count=1)
    if count:
        path.write_text(new_text, encoding='utf-8')
        updated.append(str(path))

print(f'Updated {len(updated)} HTML files:')
for p in updated:
    print(p)
