# Adept Pharma Website - Configuration Guide

This guide covers all configuration settings, API integrations, and customization options for the website.

---

## Table of Contents
1. [WhatsApp Integration](#whatsapp-integration)
2. [Google Maps Embed](#google-maps-embed)
3. [Google Analytics Setup](#google-analytics-setup)
4. [Cookie Consent Configuration](#cookie-consent-configuration)
5. [Email Service Configuration](#email-service-configuration)
6. [Custom Branding & Colors](#custom-branding--colors)
7. [Content Management (js/data.js)](#content-management-jsdata-js)
8. [Social Media Links](#social-media-links)

---

## WhatsApp Integration

### How to Enable WhatsApp Chat Button

The website includes a floating WhatsApp button in the footer and contact sections. To activate it:

#### Step 1: Get Your WhatsApp Business Number
```
Format: [COUNTRY_CODE][PHONE_NUMBER]
Example: 923400123456 (Pakistan: +92 34 0012 3456)
```

#### Step 2: Update WhatsApp Links

**In index.html** (line ~550, footer):
```html
<!-- OLD -->
<a href="https://wa.me/923400123456" target="_blank" class="whatsapp-btn">
  <span>WhatsApp</span>
</a>

<!-- UPDATE TO (replace 923400123456 with your actual number) -->
<a href="https://wa.me/923400123456" target="_blank" class="whatsapp-btn">
  <span>Chat with us</span>
</a>
```

**In pages/contact.html** (around line 150):
```html
<a href="https://wa.me/923400123456" class="btn btn-primary">
  Message on WhatsApp
</a>
```

#### Step 3: Customize WhatsApp Styling

In **css/main.css**, locate `.whatsapp-btn`:
```css
.whatsapp-btn {
  background-color: #25D366;  /* WhatsApp green */
  color: white;
  padding: 12px 20px;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;
  font-weight: 600;
}

.whatsapp-btn:hover {
  background-color: #20BA58;
  transform: scale(1.05);
}
```

#### Step 4: Add Floating WhatsApp Widget (Optional)

To add a persistent floating button in bottom-right corner, add to **js/main.js**:

```javascript
// Add after initScrollAnimations() in DOMContentLoaded
function initWhatsAppWidget() {
  const whatsappNumber = '923400123456'; // YOUR NUMBER
  const whatsappWidget = document.createElement('a');
  whatsappWidget.href = `https://wa.me/${whatsappNumber}?text=Hello%20Adept%20Pharma!%20I%20have%20a%20query`;
  whatsappWidget.target = '_blank';
  whatsappWidget.className = 'whatsapp-widget';
  whatsappWidget.innerHTML = `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.762 0-3.42.734-4.604 2.007-.904.959-1.423 2.208-1.423 3.582 0 2.848 2.423 5.169 5.33 5.169 1.42 0 2.764-.435 3.92-1.293l.002-.001 2.582-4.001c.178-.275.178-.393.005-.644-.205-.298-.778-.383-.994-.191-.121.11-5.529 8.379-5.6 8.487-.315.368-.768.576-1.31.576-.772 0-1.406-.634-1.406-1.429 0-.739.578-1.368 1.309-1.422.121-.009.242-.009.363 0 .737.062 1.364.547 1.583 1.245.112.35.388.504.675.504.308 0 .574-.203.686-.524.112-.322.056-.673-.168-.953-.416-.537-1.04-.872-1.745-.872-.516 0-1.002.165-1.412.478"/>
    </svg>
  `;
  document.body.appendChild(whatsappWidget);
}

// Call in DOMContentLoaded:
initWhatsAppWidget();
```

Add to **css/main.css**:
```css
.whatsapp-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  z-index: 999;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: all 0.3s;
}

.whatsapp-widget:hover {
  background-color: #20BA58;
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0,0,0,0.2);
}

.whatsapp-widget svg {
  width: 30px;
  height: 30px;
}
```

---

## Google Maps Embed

### How to Add Maps to Contact Page

Currently in **pages/contact.html** (around line 200):

```html
<!-- Replace placeholder with your actual map -->
<div class="map-container">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.123456789!2d67.123456!3d24.987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34d...!" 
          width="100%" 
          height="450" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
```

### Get Your Embed Code:

1. Go to **Google Maps** (maps.google.com)
2. Search for your location
3. Click **Share** button (top-left)
4. Select **Embed a map**
5. Copy the iframe code
6. Replace the `src` URL in contact.html

### Style:

Add to **css/main.css**:
```css
.map-container {
  width: 100%;
  height: 400px;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-top: var(--space-lg);
}

@media (max-width: 768px) {
  .map-container {
    height: 300px;
  }
}
```

---

## Google Analytics Setup

### Step 1: Create Google Analytics Account

1. Visit **analytics.google.com**
2. Sign in with Gmail account
3. Click **Create** → **Account**
4. Fill in account details:
   - Account name: "Adept Pharma"
   - Website URL: "https://adeptpharma.com"

### Step 2: Get Measurement ID

After setup, you'll receive a **Measurement ID** like: `G-XXXXXXXXXX`

### Step 3: Add Code to Website

Add this to the `<head>` of **index.html** and all major pages (around line 20):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Replace `G-XXXXXXXXXX` with your actual Measurement ID.**

### Step 4: Set Up Form Tracking

In **js/main.js**, track form submissions:

```javascript
// Inside handleFormSubmit() function
if (window.gtag) {
  gtag('event', 'form_submit', {
    'form_name': formName,
    'form_type': formType
  });
}
```

### Step 5: Verify Setup

1. Go to **Google Analytics** → **Real Time** → **Overview**
2. Visit your website
3. You should see active user in real-time

---

## Cookie Consent Configuration

### Current Implementation

Already implemented in **js/main.js**:

```javascript
function initCookieConsent() {
  const consentKey = 'adept-pharma-consent';
  const consentBanner = document.querySelector('.cookie-banner');
  
  if (localStorage.getItem(consentKey)) {
    consentBanner?.remove();
    return;
  }
  
  document.querySelector('.cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem(consentKey, 'true');
    consentBanner?.remove();
    // Initialize analytics here
  });
  
  document.querySelector('.cookie-reject')?.addEventListener('click', () => {
    localStorage.setItem(consentKey, 'false');
    consentBanner?.remove();
  });
}
```

### Customize Cookie Banner

In **index.html** (footer area), find `.cookie-banner`:

```html
<div class="cookie-banner" style="display: block;">
  <div class="cookie-content">
    <div>
      <h4>Cookie Consent</h4>
      <p>We use cookies to improve your experience. By using our site, you agree to our use of cookies.</p>
      <a href="/pages/privacy-policy.html" target="_blank">Learn more</a>
    </div>
    <div class="cookie-actions">
      <button class="cookie-reject btn btn-secondary">Reject</button>
      <button class="cookie-accept btn btn-primary">Accept All</button>
    </div>
  </div>
</div>
```

### Style in css/main.css:

```css
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--color-dark-bg);
  color: white;
  padding: var(--space-lg);
  z-index: 1000;
  box-shadow: 0 -4px 12px rgba(0,0,0,0.2);
}

.cookie-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-lg);
}

.cookie-actions {
  display: flex;
  gap: var(--space-md);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .cookie-content {
    flex-direction: column;
    align-items: stretch;
  }
  
  .cookie-actions {
    width: 100%;
  }
  
  .cookie-actions button {
    flex: 1;
  }
}
```

### Hide Banner After Accept

```javascript
// Already handled in initCookieConsent()
// Banner is automatically removed from DOM after user action
```

---

## Email Service Configuration

### Option 1: Formspree (Recommended - No Backend)

**Setup:**
1. Visit https://formspree.io
2. Create account
3. Add new form
4. Get endpoint: `https://formspree.io/f/YOUR_ID`

**Update all forms:**

Find in **pages/contact.html**, **pages/careers.html**, etc.:
```html
<!-- OLD -->
<form method="POST" action="/api/send-email">

<!-- NEW -->
<form method="POST" action="https://formspree.io/f/YOUR_ID" class="contact-form">
  <!-- Form fields -->
</form>
```

### Option 2: Basin.io (Alternative)

**Setup:**
1. Visit https://basin.io
2. Create account
3. Create new form
4. Get endpoint: `https://basin.io/forms/YOUR_FORM_ID`

**Update forms:**
```html
<form method="POST" action="https://basin.io/forms/YOUR_FORM_ID">
  <!-- Form fields -->
</form>
```

### Option 3: PHP Backend

Create `api/send-email.php`:
```php
<?php
// Receive form data
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);

// Set recipient
$to = "info@adeptpharma.com";
$subject = "New Contact Form Submission from " . $name;

// Email body
$body = "
Name: $name
Email: $email
Message: $message
";

// Send email
if (mail($to, $subject, $body)) {
  header("Location: /pages/thank-you.html");
  exit;
} else {
  echo "Error sending email";
}
?>
```

Update form action:
```html
<form method="POST" action="/api/send-email.php">
```

---

## Custom Branding & Colors

### Update Company Colors

All colors are centralized in **css/main.css** at the top in `:root`:

```css
:root {
  /* Primary Colors */
  --color-primary: #1E3A5F;          /* Deep Navy - Main brand color */
  --color-accent: #E8403A;           /* Coral Red - Accent/CTA */
  --color-light-blue: #7AA8D8;       /* Light Blue - Secondary */
  --color-dark-bg: #0A0E1A;          /* Dark Background */
  --color-white: #FFFFFF;
  --color-light-bg: #F4F6FA;         /* Light gray background */
  --color-text-dark: #1A1A2E;        /* Dark text */
  --color-text-muted: #6B7A99;       /* Muted gray text */
  --color-border: #E0E6F2;           /* Light border */
  
  /* To change: */
  /* 1. Replace #1E3A5F with your primary color everywhere */
  /* 2. Replace #E8403A with your accent color */
  /* 3. Other colors cascade automatically */
}
```

**To customize:**

1. Find & Replace in css/main.css:
   - `#1E3A5F` → Your primary color
   - `#E8403A` → Your accent color
   - `#7AA8D8` → Your secondary color

2. Test in browser (Ctrl+Shift+R to hard refresh)

3. Update in multiple locations:
   - css/main.css (:root variables)
   - Any inline styles (rare)
   - Button hover states (automatically use CSS variables)

---

## Content Management (js/data.js)

### SiteData Object Structure

In **js/data.js**, find and update:

```javascript
const SiteData = {
  company: {
    name: "Adept Pharma",
    tagline: "Leading Pharmaceutical Manufacturing in Pakistan",
    phone: "+92 21 XXXX XXXX",
    email: "info@adeptpharma.com",
    address: "Plot 25-C, Korangi Industrial Area, Karachi",
    city: "Karachi",
    country: "Pakistan",
    established: "2010",
    employees: "150+",
    certifications: ["GMP", "DRAP", "ISO 13485"],
    description: "We manufacture high-quality pharmaceuticals..."
  },
  
  services: [
    {
      id: 1,
      title: "Toll Manufacturing",
      description: "...",
      image: "/assets/images/services/toll.jpg",
      slug: "toll-manufacturing"
    },
    // ... more services
  ],
  
  products: [
    {
      id: 1,
      name: "Product Name",
      category: "Tablets",
      description: "...",
      image: "/assets/images/products/product.jpg",
      dosage: "500mg",
      available: true
    },
    // ... more products
  ],
  
  testimonials: [
    {
      name: "Client Name",
      company: "Company",
      message: "Great service...",
      rating: 5
    }
  ],
  
  faqs: [
    {
      question: "How long does manufacturing take?",
      answer: "Typically 4-6 weeks..."
    }
  ]
};
```

### How to Update:

1. Open **js/data.js**
2. Find the section you want to update (company, services, products, etc.)
3. Edit the values (don't change the structure)
4. Save file
5. Changes appear automatically on website

**Important:** Don't change property names (like `title`, `description`), only values.

---

## Social Media Links

### Update in Multiple Locations:

**In index.html footer** (line ~550):
```html
<div class="social-links">
  <a href="https://facebook.com/adeptpharma" target="_blank">Facebook</a>
  <a href="https://linkedin.com/company/adept-pharma" target="_blank">LinkedIn</a>
  <a href="https://instagram.com/adeptpharma" target="_blank">Instagram</a>
  <a href="https://wa.me/923400123456" target="_blank">WhatsApp</a>
</div>
```

**In pages/about.html:**
Look for similar social links section

**In js/data.js** (recommended - single source of truth):
```javascript
const SiteData = {
  // ... other data ...
  social: {
    facebook: "https://facebook.com/adeptpharma",
    linkedin: "https://linkedin.com/company/adept-pharma",
    instagram: "https://instagram.com/adeptpharma",
    whatsapp: "https://wa.me/923400123456",
    youtube: "https://youtube.com/c/adeptpharma"
  }
};
```

Then reference in HTML:
```html
<a href="https://facebook.com/adeptpharma" target="_blank">
```

---

## Quick Reference - Configuration Checklist

| Setting | Location | Value |
|---------|----------|-------|
| Phone Number | css/main.css, index.html, pages/contact.html | +92 21 XXXX XXXX |
| Email | js/data.js, pages/contact.html | info@adeptpharma.com |
| WhatsApp Number | pages/contact.html, js/main.js | 923400123456 |
| Google Analytics ID | index.html, all pages | G-XXXXXXXXXX |
| Form Endpoint | pages/contact.html, pages/careers.html | https://formspree.io/f/... |
| Primary Color | css/main.css (:root) | #1E3A5F |
| Accent Color | css/main.css (:root) | #E8403A |
| Company Address | js/data.js | Plot 25-C, Korangi... |
| Google Maps Embed | pages/contact.html | Your iframe URL |
| Facebook Page | index.html footer | Your Facebook URL |
| LinkedIn Company | index.html footer | Your LinkedIn URL |
| Instagram Profile | index.html footer | Your Instagram URL |

---

## Testing Configurations

### Test Each Integration:

1. **WhatsApp:** Click WhatsApp button → Should open WhatsApp web
2. **Google Maps:** Visit contact page → Map should display
3. **Analytics:** Open DevTools → Network tab → Look for `analytics.google.com` requests
4. **Cookies:** Clear localStorage → Refresh → Cookie banner appears
5. **Forms:** Fill form → Submit → Check email/Formspree dashboard
6. **Colors:** Update CSS variable → Refresh → All matching elements change

---

**Configuration Complete!**

For support, refer to:
- DEPLOYMENT.md (Hosting & Launch)
- FORM_SETUP.md (Email Setup)
- components/README.md (Component Usage)

---

Version: 1.0
Last Updated: May 5, 2026
