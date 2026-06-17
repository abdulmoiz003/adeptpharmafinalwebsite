# Form Backend & Email Integration Setup

## Overview
This document provides two implementation options for handling form submissions on the Adept Pharma website.

---

## Option 1: Formspree (Recommended - No Backend Required)

**Best for:** VPS/cPanel hosting where you want to avoid server-side coding.

### Setup Steps:

1. **Register at Formspree:**
   - Go to https://formspree.io/
   - Sign up with your email (info@adeptpharma.com)
   - Create a new form project

2. **Get Your Formspree Endpoint:**
   - Formspree will provide a unique endpoint like: `https://formspree.io/f/YOUR_FORM_ID`
   - Keep this ID safe

3. **Update All Forms:**
   - Replace `action="/api/send-email"` with `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Keep `method="POST"`

### Forms to Update:
- `index.html` — Contact CTA form (if present)
- `pages/contact.html` — Main contact form
- `pages/careers.html` — Job application form
- `components/contact-form.html` — Template

### Example Form Update:
```html
<form method="POST" action="https://formspree.io/f/xyzABC123">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <!-- ... other fields ... -->
  <button type="submit">Send</button>
</form>
```

### Formspree Features:
- ✅ Automatic email notifications
- ✅ Form submission dashboard
- ✅ No credit card required (free plan)
- ✅ SPAM protection built-in
- ✅ File uploads supported
- ✅ Custom redirects after submission

---

## Option 2: PHP Mailer (For Full Server Control)

**Best for:** Your own VPS/cPanel where you want complete control.

### Setup Steps:

1. **Create a PHP handler file** at `api/submit-form.php`:
```php
<?php
header('Content-Type: application/json');

// Get form data
$name = sanitize_input($_POST['name'] ?? '');
$email = sanitize_input($_POST['email'] ?? '');
$phone = sanitize_input($_POST['phone'] ?? '');
$message = sanitize_input($_POST['message'] ?? '');
$inquiry_type = sanitize_input($_POST['inquiry_type'] ?? 'General');

// Validate
if (empty($name) || empty($email) || empty($message)) {
  http_response_code(400);
  echo json_encode(['error' => 'Missing required fields']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid email']);
  exit;
}

// Email headers
$to = 'info@adeptpharma.com';
$subject = "New Inquiry from {$name} - {$inquiry_type}";
$body = "
Name: {$name}
Email: {$email}
Phone: {$phone}
Inquiry Type: {$inquiry_type}

Message:
{$message}
";

$headers = "From: " . filter_var($email, FILTER_SANITIZE_EMAIL) . "\r\n";
$headers .= "Reply-To: " . filter_var($email, FILTER_SANITIZE_EMAIL) . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
  // Log submission
  file_put_contents(
    __DIR__ . '/../logs/submissions.log',
    date('Y-m-d H:i:s') . " | {$name} | {$email}\n",
    FILE_APPEND
  );
  
  http_response_code(200);
  echo json_encode(['success' => true, 'message' => 'Submission received']);
} else {
  http_response_code(500);
  echo json_encode(['error' => 'Failed to send email']);
}

function sanitize_input($input) {
  return htmlspecialchars(stripslashes(trim($input)), ENT_QUOTES, 'UTF-8');
}
?>
```

2. **Update forms to point to PHP handler:**
```html
<form method="POST" action="api/submit-form.php">
  <!-- form fields -->
</form>
```

3. **Create logs directory:**
   - Create `logs/` folder in project root
   - Make it writable: `chmod 755 logs/`

### PHP Mailer Prerequisites:
- PHP 5.6+ with `mail()` function enabled
- Valid SMTP configuration on server
- Proper DNS records (SPF, DKIM) for email deliverability

---

## Option 3: Netlify Forms (If Deploying to Netlify)

**Best for:** Free static hosting on Netlify.

### Setup:
1. Add `netlify` attribute to form:
```html
<form name="contact" method="POST" netlify>
  <!-- fields -->
</form>
```

2. Deploy to Netlify and submissions appear in their dashboard

---

## Current Implementation

The website currently has forms configured for backend submission. To activate email functionality:

### Quick Start (Formspree - 5 minutes):
1. Register at formspree.io
2. Create a form and get your endpoint
3. Update `action` attributes in all HTML forms
4. Test a submission
5. Formspree will send confirmations to your email

### For Server-Side (PHP - 10 minutes):
1. Create `api/submit-form.php` (see template above)
2. Create `logs/` directory with proper permissions
3. Update form `action` attributes to `api/submit-form.php`
4. Test submissions

---

## Form Locations to Update:

| File | Form Type | Notes |
|------|-----------|-------|
| `pages/contact.html` | Main Contact | Primary contact form |
| `pages/careers.html` | Job Application | Career applications |
| `components/contact-form.html` | Template Snippet | For reference |

---

## Testing Checklist:

- [ ] Form submits without JavaScript errors
- [ ] Email received at info@adeptpharma.com
- [ ] User redirected to thank-you page
- [ ] Form data is sanitized
- [ ] SPAM protection is active
- [ ] Response time is acceptable
- [ ] Mobile form submission works
- [ ] All required fields are validated

---

## Security Best Practices:

1. **Input Sanitization:** Always sanitize and validate inputs
2. **Rate Limiting:** Implement CAPTCHA or rate limits to prevent abuse
3. **HTTPS Only:** All forms should submit over HTTPS (not HTTP)
4. **CSRF Protection:** Use CSRF tokens if implementing custom PHP
5. **Sensitive Data:** Never log passwords or credit card info
6. **Privacy:** Comply with GDPR/privacy regulations

---

## Monitoring & Logs:

### Formspree:
- Check dashboard at formspree.io
- All submissions logged automatically
- Email notifications sent for each submission

### PHP/Custom:
- Check `logs/submissions.log` for submission history
- Monitor server error logs for mail failures
- Set up cron job for log rotation if needed

---

## Support & Troubleshooting:

**Form not submitting:**
- Check browser console for JavaScript errors
- Verify endpoint URL is correct
- Ensure form fields have correct `name` attributes

**Email not arriving:**
- Check spam/junk folder
- Verify email address is correct
- Check SPF/DKIM records if using custom server

**Rate limiting issues:**
- Implement CAPTCHA (Google reCAPTCHA v3)
- Add backend rate limiting
- Use Formspree's built-in rate limits

---

## Recommended: Use Formspree
For this static B2B pharmaceutical website, **Formspree is the recommended choice** because:
- ✅ Zero backend infrastructure needed
- ✅ Enterprise-grade email delivery
- ✅ Built-in SPAM/bot protection
- ✅ Dashboard for managing submissions
- ✅ Redirect users after submission
- ✅ Attachments supported
- ✅ Easy to implement (2 minutes)
