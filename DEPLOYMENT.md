# Adept Pharma Website - Deployment & Launch Guide

## Project Overview

**Website:** Adept Pharma B2B Pharmaceutical Manufacturing Platform  
**Stack:** HTML5 + CSS3 + Vanilla JavaScript (No frameworks)  
**Pages:** 18 core pages + utilities  
**Hosting:** Static hosting (VPS, cPanel, or cloud platforms)

---

## Directory Structure

```
adept-pharma-website/
├── index.html                          # Homepage
├── css/
│   └── main.css                        # Design system & component styles
├── js/
│   ├── main.js                         # Core JavaScript (navigation, forms, animations)
│   └── data.js                         # Content data layer (company info, products, etc.)
├── assets/
│   ├── images/
│   │   ├── hero-pharma-lab.jpg
│   │   ├── facility.jpg
│   │   ├── services/
│   │   ├── quality/
│   │   └── ...other images...
│   └── icons/                          # Optional icon set
├── pages/
│   ├── about.html                      # About Us
│   ├── contact.html                    # Contact Form
│   ├── services.html                   # Services Overview
│   ├── services/
│   │   ├── toll-manufacturing.html
│   │   ├── 3rd-party-manufacturing.html
│   │   └── research-development.html
│   ├── products.html                   # Products Catalog
│   ├── quality.html                    # Quality & Compliance
│   ├── careers.html                    # Careers/Jobs
│   ├── blog.html                       # Blog/News
│   ├── why-us.html                     # Why Adept Pharma
│   ├── 404.html                        # 404 Error Page
│   └── thank-you.html                  # Form Submission Thank You
├── components/
│   ├── README.md                       # Component documentation
│   ├── header.html
│   ├── footer.html
│   ├── hero.html
│   ├── accordion.html
│   ├── contact-form.html
│   ├── service-card.html
│   ├── product-card.html
│   ├── testimonial-card.html
│   ├── two-col.html
│   └── cta-banner.html
├── FORM_SETUP.md                       # Email form setup guide
├── DEPLOYMENT.md                       # This file
└── .gitignore                          # Git configuration (optional)
```

---

## Pre-Deployment Checklist

### Content & Functionality
- [ ] All placeholder text replaced with real content
- [ ] Phone numbers updated: Replace `+92 21 XXXX XXXX` with actual number
- [ ] Email addresses updated: Replace `info@adeptpharma.com` with production email
- [ ] Social media links configured (Facebook, LinkedIn, Instagram, WhatsApp)
- [ ] Office hours updated in footer and contact page
- [ ] Company address verified in multiple locations
- [ ] Product data populated in `/js/data.js`
- [ ] Team information added if using team section
- [ ] Blog/news content populated if applicable

### Forms & Email
- [ ] Email service configured (Formspree or PHP backend)
- [ ] Form submission action URLs updated
- [ ] Thank-you redirect working
- [ ] Form validation tested on all devices
- [ ] Test emails received successfully

### Images & Assets
- [ ] All hero images optimized and uploaded
- [ ] Product images ready and optimized
- [ ] Service section images prepared
- [ ] About/team images (if used) ready
- [ ] Logo/branding assets finalized
- [ ] Image alt-text filled in for SEO

### SEO & Metadata
- [ ] Page titles optimized (see SEO section below)
- [ ] Meta descriptions added to all pages
- [ ] Canonical URLs set correctly
- [ ] Open Graph tags updated with correct images
- [ ] sitemap.xml created and submitted
- [ ] robots.txt configured
- [ ] Google Analytics code added (optional)

### Performance
- [ ] CSS minified (optional, not critical for small files)
- [ ] JavaScript checked for console errors
- [ ] Images compressed (use TinyPNG or similar)
- [ ] Lazy loading verified for images
- [ ] Page load time acceptable (<3s)
- [ ] Mobile responsiveness tested

### Security
- [ ] All forms use HTTPS only (enforce in .htaccess)
- [ ] Input validation in place
- [ ] SPAM protection enabled
- [ ] No sensitive data in HTML comments
- [ ] X-UA-Compatible header set
- [ ] Content-Security-Policy headers configured

---

## Deployment Steps

### For VPS/cPanel Hosting

1. **Upload Files:**
   ```bash
   # Via FTP/SCP
   scp -r adept-pharma-website/ user@yourdomain.com:/public_html/
   
   # Or via cPanel File Manager
   # Upload all files to public_html/ directory
   ```

2. **Set Correct Permissions:**
   ```bash
   chmod 755 /public_html/          # Directories
   chmod 644 /public_html/*.html    # HTML files
   chmod 644 /public_html/css/*     # CSS files
   chmod 644 /public_html/js/*      # JS files
   ```

3. **Create .htaccess** (Apache servers):
   ```apache
   # Force HTTPS
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   
   # Redirect 404 to custom page
   ErrorDocument 404 /pages/404.html
   
   # Cache static assets
   <FilesMatch "\.(jpg|jpeg|png|gif|css|js|ico)$">
     Header set Cache-Control "max-age=31536000, public"
   </FilesMatch>
   ```

4. **Configure DNS:**
   - Point domain A record to server IP
   - Add CNAME records if needed
   - Wait for DNS propagation (up to 48 hours)

5. **Set Up SSL Certificate:**
   - Use Let's Encrypt (free, via cPanel AutoSSL)
   - Or purchase from certificate authority
   - Redirect HTTP to HTTPS

### For Netlify (Free Static Hosting)

1. **Connect Repository:**
   ```bash
   cd adept-pharma-website/
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Deploy:**
   - Go to netlify.com
   - Connect GitHub/GitLab repository
   - Click "Deploy site"
   - Netlify will automatically build and host

3. **Configure Domain:**
   - In Netlify dashboard: Domain settings
   - Add custom domain
   - Update DNS at domain registrar

4. **Enable Forms:**
   - Add `netlify` attribute to forms (already set up if using Netlify Forms)

### For AWS S3 + CloudFront

1. **Create S3 bucket:**
   ```bash
   aws s3 mb s3://adeptpharma-website
   ```

2. **Upload files:**
   ```bash
   aws s3 sync . s3://adeptpharma-website --delete
   ```

3. **Configure for static hosting:**
   - Enable static website hosting in S3
   - Set index.html as default
   - Set 404.html as error page

4. **Set up CloudFront CDN:**
   - Create distribution pointing to S3
   - Add SSL certificate
   - Configure caching

---

## Post-Deployment Validation

### Test All Pages Load
```bash
curl -I https://adeptpharma.com/index.html
curl -I https://adeptpharma.com/pages/about.html
curl -I https://adeptpharma.com/pages/contact.html
# etc.
```

### Test Forms
1. Fill out contact form
2. Verify email received
3. Verify redirect to thank-you page
4. Check form data in Formspree dashboard or logs

### Mobile Testing
- Use Chrome DevTools device emulation
- Test on actual iOS device
- Test on actual Android device
- Verify all navigation works
- Check touch responsiveness

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Performance Testing
- Use Google PageSpeed Insights
- Use GTmetrix
- Target: Performance >85, SEO >90, Accessibility >90

### SEO Validation
- Submit sitemap to Google Search Console
- Submit to Bing Webmaster Tools
- Check structured data with Schema.org validator
- Verify Open Graph tags with Facebook Debugger

---

## SEO & Metadata Setup

### Page Titles (Character limit: 60 characters)
```html
Homepage:    "Adept Pharma - Pharmaceutical Manufacturer Pakistan"
About:       "About Adept Pharma | Manufacturing Excellence"
Services:    "Pharmaceutical Manufacturing Services | Adept Pharma"
Contact:     "Contact Us | Adept Pharma - Karachi, Pakistan"
Products:    "Pharmaceutical Products | Adept Pharma"
Quality:     "Quality & Compliance | Adept Pharma"
Careers:     "Careers at Adept Pharma | Join Our Team"
```

### Meta Descriptions (120-160 characters)
```html
Homepage:    "Leading pharmaceutical manufacturer in Pakistan offering toll manufacturing, 
             private label, R&D, and packaging solutions. GMP certified & DRAP registered."

Services:    "Comprehensive pharmaceutical manufacturing solutions including toll 
             manufacturing, contract manufacturing, R&D, and packaging design services."

Products:    "Explore our range of pharmaceutical products including tablets, syrups, 
             sachets, herbal products, and OTC supplements manufactured to GMP standards."
```

### Structured Data (Schema.org)
Already included in homepage `<head>`:
```json
{
  "@type": "LocalBusiness",
  "name": "Adept Pharma",
  "description": "Pharmaceutical manufacturer",
  "url": "https://adeptpharma.com",
  "telephone": "+92 21 XXXX XXXX",
  "email": "info@adeptpharma.com",
  "address": {
    "streetAddress": "Plot 25-C, Korangi Industrial Area",
    "addressLocality": "Karachi",
    "addressCountry": "PK"
  }
}
```

---

## Maintenance & Updates

### Regular Tasks
- **Weekly:** Monitor website uptime
- **Monthly:** Review analytics, check for broken links
- **Quarterly:** Update blog content, refresh testimonials
- **Yearly:** Review SEO strategy, update certifications

### Backup Strategy
- Use cPanel backups (if available)
- Git repository as backup
- Manual backup: Download entire site monthly

### Version Control
```bash
# Track changes with Git
git add .
git commit -m "Update product listings"
git push origin main
```

### Update Process
1. Make changes locally
2. Test thoroughly
3. Commit to Git
4. Deploy to production
5. Verify on live site

---

## Email Configuration (Formspree)

### Quick Setup (Recommended)
1. Visit https://formspree.io/
2. Sign up with info@adeptpharma.com
3. Create a new form
4. Get the form endpoint (e.g., `https://formspree.io/f/xyzABC123`)
5. Update all forms with this endpoint

### Update Forms:
```html
<!-- Change this: -->
<form method="POST" action="/api/send-email">

<!-- To this: -->
<form method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
```

### Locations to Update:
- `pages/contact.html`
- `pages/careers.html`
- Any other contact forms

---

## Performance Optimization Tips

1. **Minify CSS/JS** (optional):
   ```bash
   # Using tools like minify.com or UglifyJS
   ```

2. **Enable Gzip Compression** (in .htaccess):
   ```apache
   <IfModule mod_deflate.c>
     AddOutputFilterByType DEFLATE text/html
     AddOutputFilterByType DEFLATE text/plain
     AddOutputFilterByType DEFLATE text/css
     AddOutputFilterByType DEFLATE application/javascript
   </IfModule>
   ```

3. **Set Cache Headers**:
   Already configured in .htaccess (see above)

4. **Optimize Images**:
   - Use TinyPNG for compression
   - Target: <100KB per image
   - Use WebP format if possible

5. **Lazy Load Images**:
   - Already implemented via `data-src` attribute
   - Images load only when visible

---

## Monitoring & Analytics

### Google Analytics Setup
Add to `<head>` of all pages:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Monitoring Services
- **Uptime:** UptimeRobot.com (free)
- **Analytics:** Google Analytics (free)
- **SEO:** Google Search Console (free)
- **Performance:** PageSpeed Insights (free)

---

## Support & Troubleshooting

### Common Issues

**Form not sending emails:**
- Verify Formspree endpoint is correct
- Check form has `method="POST"`
- Test in incognito mode (bypass cache)
- Check browser console for errors

**404 errors on navigation:**
- Verify relative paths are correct
- Check .htaccess error document rule
- Clear browser cache

**Slow page load:**
- Optimize images (compress)
- Enable browser caching
- Check server load
- Consider CDN for assets

**Mobile display issues:**
- Clear browser cache
- Test in device emulation mode
- Check viewport meta tag

---

## Launch Checklist

- [ ] Domain registered & DNS configured
- [ ] SSL certificate installed
- [ ] All files uploaded
- [ ] Permissions set correctly
- [ ] .htaccess configured
- [ ] Email service configured
- [ ] Forms tested and working
- [ ] All pages load without errors
- [ ] Mobile responsiveness verified
- [ ] SEO metadata added
- [ ] Analytics configured
- [ ] Sitemap submitted to Google
- [ ] 404 page working
- [ ] Security headers set
- [ ] Performance acceptable
- [ ] Team trained on maintenance

---

## Support Contact

For technical support or questions about the website structure:
- Review FORM_SETUP.md for email integration
- Check components/README.md for component usage
- Review inline HTML comments for implementation details

---

**Website Status:** ✅ Production Ready

Version: 1.0  
Last Updated: May 5, 2026
