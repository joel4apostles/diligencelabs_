# 🚀 Complete Hostinger Shared Hosting Deployment Guide

## Overview
This guide will walk you through deploying your Diligence Labs website to Hostinger shared hosting with the new refactored design, enhanced UI, and official favicon.

## Prerequisites
- ✅ Hostinger shared hosting account
- ✅ Domain name configured
- ✅ FTP/File Manager access
- ✅ Local development environment ready

---

## 🔧 Step 1: Prepare the Build

### Option A: Using the Build Script (Recommended)
```bash
# Navigate to project directory
cd /Users/joel/Diligencelabs/diligencelabs-advisory-consultant-services

# Run the Hostinger build script
npm run build:hostinger
```

### Option B: Manual Next.js Build
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Export static files
npm run export
```

---

## 📦 Step 2: Access Your Hostinger Account

### Via Hostinger Control Panel
1. **Login to Hostinger**
   - Go to https://hpanel.hostinger.com
   - Enter your credentials
   - Navigate to your hosting account

2. **Access File Manager**
   - Click on **"File Manager"** in the control panel
   - Navigate to `public_html` folder
   - This is where your website files will go

### Via FTP Client (Alternative)
1. **Get FTP Details**
   - In Hostinger panel, go to **"FTP Accounts"**
   - Note the FTP hostname, username, and password

2. **Popular FTP Clients**
   - **FileZilla** (Free)
   - **Cyberduck** (Free)
   - **WinSCP** (Windows)

---

## 🗂️ Step 3: Clean Existing Files (Important!)

### Clear public_html Directory
1. **Backup Existing Files** (if any)
   - Select all files in `public_html`
   - Create a backup folder: `public_html/backup_old_site`
   - Move old files there

2. **Delete Current Content**
   - Select all files in `public_html` root
   - Delete everything except:
     - `.htaccess` (if exists - keep it)
     - `cgi-bin/` folder (if exists - keep it)
     - Any backup folders you created

---

## 📤 Step 4: Upload New Website Files

### Method 1: File Manager Upload
1. **Locate Build Files**
   ```
   Local path: /Users/joel/Diligencelabs/diligencelabs-advisory-consultant-services/out/
   Or: diligence-labs-hostinger-ready.zip (if using build script)
   ```

2. **Upload Process**
   - In File Manager, stay in `public_html` directory
   - Click **"Upload"** button
   - Select all files from your `out/` folder OR upload the ZIP file
   - Wait for upload to complete

3. **Extract ZIP (if uploaded ZIP)**
   - Right-click on `diligence-labs-hostinger-ready.zip`
   - Select **"Extract"**
   - Extract to current directory (`public_html`)
   - Delete the ZIP file after extraction

### Method 2: FTP Upload
1. **Connect via FTP Client**
   - Open your FTP client
   - Connect using Hostinger FTP credentials
   - Navigate to `public_html/` on remote side

2. **Upload Files**
   - On local side, navigate to your build output folder
   - Select all files and folders
   - Drag and drop or use upload command
   - Wait for transfer to complete

---

## 🔧 Step 5: Configure the Website

### Update File Structure
Your `public_html` should now contain:
```
public_html/
├── index.html                 ← Main page
├── _next/                     ← Next.js assets
├── favicon.ico               ← Diligence Labs favicon
├── favicon.png               ← Main favicon (64x64)
├── favicon-16x16.png         ← Browser tabs
├── favicon-32x32.png         ← Standard size
├── icon.png                  ← PWA icon (192x192)
├── apple-icon.png            ← Apple devices (512x512)
├── site.webmanifest          ← PWA manifest
├── robots.txt                ← SEO file
├── sitemap.xml               ← Search engine sitemap
└── assets/                   ← CSS, JS, images
```

### Check .htaccess Configuration
Create or verify `.htaccess` file in `public_html`:
```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/x-javascript "access plus 1 month"
    ExpiresByType image/x-icon "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>

# URL rewriting for SPA
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]
```

---

## 🧪 Step 6: Test the Deployment

### Initial Testing
1. **Visit Your Website**
   ```
   https://yourdomain.com
   ```

2. **Check Key Features**
   - ✅ Homepage loads correctly
   - ✅ Navigation menu works
   - ✅ Hero section displays properly
   - ✅ Light/dark theme toggle functions
   - ✅ All sections (About, Services, etc.) load
   - ✅ Contact forms work
   - ✅ Favicon displays correctly

### Browser Testing
Test in multiple browsers:
- ✅ Chrome (desktop & mobile)
- ✅ Firefox
- ✅ Safari (desktop & mobile)
- ✅ Edge

### Performance Testing
1. **Page Speed**
   - Use Google PageSpeed Insights
   - Check Core Web Vitals
   - Aim for 90+ score

2. **Mobile Responsiveness**
   - Test on various screen sizes
   - Check touch interactions
   - Verify mobile navigation

---

## 🔍 Step 7: Verification Checklist

### Design & UI ✅
- [ ] Refactored Hero section with Space Grotesk typography
- [ ] Glassmorphism navigation with backdrop blur
- [ ] Technical blueprint background with grid patterns
- [ ] Enhanced CTA buttons with Calendar icons
- [ ] "Explore Services" secondary link
- [ ] Light mode contrast improvements with text shadows
- [ ] Responsive design on all devices

### Technical ✅
- [ ] Favicon displays correctly (hexagonal green "D" logo)
- [ ] All pages load without 404 errors
- [ ] CSS and JS files load properly
- [ ] Images display correctly
- [ ] Forms submit successfully
- [ ] HTTPS certificate working
- [ ] Robots.txt accessible
- [ ] Sitemap.xml accessible

### SEO & Performance ✅
- [ ] Meta tags in place
- [ ] Open Graph images work
- [ ] Twitter Card preview works
- [ ] Page load speed < 3 seconds
- [ ] Mobile-first responsive
- [ ] Accessibility compliance

---

## 🛠️ Troubleshooting Common Issues

### Issue 1: 404 Error on Homepage
**Solution:**
- Ensure `index.html` is in `public_html` root
- Check file permissions (should be 644)
- Clear browser cache

### Issue 2: Favicon Not Showing
**Solutions:**
- Hard refresh: Ctrl+Shift+R (Cmd+Shift+R)
- Check favicon files are in root directory
- Verify file sizes are correct
- Wait up to 24 hours for propagation

### Issue 3: CSS/JS Not Loading
**Solutions:**
- Check `_next/` folder uploaded correctly
- Verify file paths in HTML
- Check file permissions (644 for files, 755 for directories)

### Issue 4: Images Not Displaying
**Solutions:**
- Check image files uploaded to correct paths
- Verify image file extensions match HTML
- Check file permissions

### Issue 5: Contact Form Not Working
**Solutions:**
- Verify PHP support is enabled (if using PHP forms)
- Check form action URLs
- Test email configuration in hosting panel

---

## 🔄 Future Updates

### Quick Update Process
1. **Make Changes Locally**
2. **Run Build Script**
   ```bash
   npm run build:hostinger
   ```
3. **Upload Only Changed Files**
4. **Clear Browser Cache**
5. **Test Live Site**

### Backup Strategy
- **Before Major Updates**: Download current live site
- **Regular Backups**: Use Hostinger's backup features
- **Version Control**: Keep Git history of all changes

---

## 📞 Support Resources

### Hostinger Support
- **Knowledge Base**: https://support.hostinger.com
- **Live Chat**: Available 24/7 in hosting panel
- **Ticket System**: For complex technical issues

### Development Support
- **Next.js Documentation**: https://nextjs.org/docs
- **Deployment Troubleshooting**: Check build logs
- **Performance Optimization**: Use Lighthouse audits

---

## 🎉 Deployment Complete!

Your Diligence Labs website is now live with:
- ✨ **Enhanced UI/UX** with glassmorphism and Space Grotesk typography
- 🎨 **Professional Design** with technical blueprint backgrounds  
- 📱 **Perfect Mobile Experience** with responsive design
- 🚀 **Optimal Performance** with static site generation
- 🔒 **Security Headers** and proper configuration
- 🎯 **SEO Optimized** with proper meta tags and structure

**Live Website**: https://yourdomain.com
**Admin Panel**: https://hpanel.hostinger.com

Your professional blockchain advisory platform is ready to serve clients! 🚀