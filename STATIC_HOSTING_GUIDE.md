# 📋 Static Hosting Setup Guide for Hostinger

## Alternative Solutions for Dynamic Features

### 1. Newsletter Subscription
**Option A: Netlify Forms (Recommended)**
```html
<!-- Replace form action with Netlify -->
<form name="newsletter" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="newsletter" />
  <input type="email" name="email" placeholder="Enter your email" required />
  <button type="submit">Subscribe</button>
</form>
```

**Option B: Formspree**
```html
<!-- Use Formspree endpoint -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" placeholder="Enter your email" required />
  <button type="submit">Subscribe</button>
</form>
```

**Option C: ConvertKit/Mailchimp Direct**
```javascript
// Use their JavaScript SDK
// Add to your component
```

### 2. Contact Form
**Use Formspree for contact form:**
```html
<form action="https://formspree.io/f/YOUR_CONTACT_ID" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

### 3. Calendly Integration
✅ **Good News**: Calendly widget works perfectly with static hosting!
The existing Calendly integration will continue to work.

## Static Export Process

### Build Commands
```bash
# 1. Build for static export
npm run build

# 2. The 'out' folder will contain your static site
# 3. Upload contents of 'out' folder to Hostinger
```

## File Structure After Export
```
out/
├── index.html           # Main page
├── _next/              # Next.js assets
│   ├── static/
│   └── ...
├── favicon.ico         # Your favicon
├── robots.txt          # SEO
├── sitemap.xml         # SEO
└── ...                 # Other static assets
```