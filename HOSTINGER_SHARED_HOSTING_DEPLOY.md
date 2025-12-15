# 🌐 Complete Hostinger Shared Hosting Deployment Guide

## ✅ Prerequisites Completed
- ✅ Next.js app configured for static export
- ✅ API routes disabled (renamed to api-disabled)
- ✅ Static build successful (`out` folder created)
- ✅ Favicon and theme system ready

## 📋 Step-by-Step Deployment Process

### Step 1: Access Hostinger Control Panel
1. Log in to your Hostinger account
2. Go to your hosting dashboard
3. Click on **"Manage"** for your hosting plan

### Step 2: Access File Manager
1. In the Hostinger control panel, find **"File Manager"**
2. Click **"File Manager"** or **"Website Files"**
3. Navigate to the **`public_html`** folder
4. **Important**: Clear all existing files in `public_html` first

### Step 3: Prepare Your Files Locally
```bash
# Create a zip file of the static export
cd out
zip -r ../diligence-labs-static.zip .

# Or use tar if you prefer
tar -czf ../diligence-labs-static.tar.gz .
```

### Step 4: Upload Files to Hostinger

#### Option A: File Manager Upload (Recommended)
1. In File Manager, make sure you're in the `public_html` directory
2. Click **"Upload Files"** or the upload icon
3. Upload your `diligence-labs-static.zip` file
4. Right-click the uploaded zip file
5. Select **"Extract"** or **"Unzip"**
6. Delete the zip file after extraction

#### Option B: FTP Upload
```bash
# Using FTP (if you have FTP credentials)
# Upload all contents of the 'out' folder to public_html
```

#### Option C: Manual File Upload
1. Select all files inside the `out` folder on your computer
2. Drag and drop them into the `public_html` folder in File Manager
3. Wait for upload to complete

### Step 5: Verify File Structure
Your `public_html` should now contain:
```
public_html/
├── index.html          # Main page
├── _next/              # Next.js assets
│   ├── static/
│   └── [hash]/
├── favicon.ico         # Your new DL favicon
├── favicon.png
├── robots.txt
├── sitemap.xml
├── manifest.json
└── ... (other assets)
```

### Step 6: Configure Domain (If Not Already Done)

#### If Using a Subdomain:
1. In Hostinger control panel, go to **"Subdomains"**
2. Create a new subdomain (e.g., `app.yourdomain.com`)
3. Point it to your `public_html` folder

#### If Using Main Domain:
1. Ensure your domain is pointed to Hostinger nameservers
2. The site should be accessible at `yourdomain.com`

### Step 7: Enable HTTPS
1. In Hostinger control panel, find **"SSL/TLS"**
2. Enable **"SSL Certificate"**
3. Choose **"Let's Encrypt SSL"** (free)
4. Wait 5-15 minutes for SSL to activate

### Step 8: Test Your Deployment
Visit your domain and test:
- ✅ Website loads correctly
- ✅ Dark/light theme toggle works
- ✅ All sections display properly
- ✅ Favicon shows correctly
- ✅ Mobile responsiveness
- ✅ Calendly integration works

## 🔧 Configuration for External Services

Since API routes don't work on shared hosting, configure external services:

### Newsletter Subscription (Choose One):

#### Option 1: Formspree (Recommended)
1. Go to [formspree.io](https://formspree.io)
2. Create account and get form endpoint
3. Update newsletter form in your code

#### Option 2: Netlify Forms (Alternative)
1. Deploy a copy to Netlify just for forms
2. Use Netlify form endpoints

#### Option 3: Direct ConvertKit/Mailchimp
Use their JavaScript SDK for direct integration

## 📁 File Permissions
Hostinger shared hosting usually handles this automatically, but ensure:
- HTML files: 644
- Directories: 755
- Images/assets: 644

## 🚀 Performance Optimization

### 1. Enable Gzip Compression
In Hostinger control panel:
1. Go to **"Advanced"** → **"Optimize Website"**
2. Enable **"Gzip Compression"**

### 2. Set up Caching
1. Enable **"Browser Caching"** in Hostinger control panel
2. Set cache headers for static assets

### 3. CDN (Optional)
1. Consider using Hostinger's CDN if available
2. Or use Cloudflare free CDN

## 🔄 Update Process for Future Changes

### Quick Update Script
```bash
#!/bin/bash
# Run this locally when you need to update

echo "🔨 Building latest version..."
npm run build

echo "📦 Creating deployment package..."
cd out
zip -r ../diligence-labs-update.zip .
cd ..

echo "✅ Upload diligence-labs-update.zip to Hostinger File Manager"
echo "🌐 Extract in public_html folder and replace existing files"
```

### Manual Update Steps:
1. Make changes to your code locally
2. Run `npm run build` to create new static files
3. Create zip of `out` folder
4. Upload to Hostinger File Manager
5. Extract and replace existing files

## ❓ Troubleshooting Common Issues

### Issue: Website shows Hostinger default page
**Solution**: Ensure files are in `public_html` root, not a subfolder

### Issue: Images/CSS not loading
**Solution**: Check file paths are correct and all files uploaded

### Issue: 404 errors on navigation
**Solution**: This is normal for static sites with client-side routing. The theme toggle and other features should still work.

### Issue: Calendly not working
**Solution**: Calendly should work fine as it's client-side JavaScript

### Issue: Theme toggle not working
**Solution**: Verify all JavaScript files in `_next/static/` uploaded correctly

## 📊 Expected Features on Shared Hosting

✅ **Will Work:**
- Dark/light theme switching
- Smooth animations and interactions
- Calendly booking widget
- Responsive design
- All static content

❌ **Won't Work:**
- Newsletter API endpoints (use external service)
- Server-side form processing
- Dynamic content generation

## 🎯 Final Checklist

- [ ] All files uploaded to `public_html`
- [ ] Website accessible at your domain
- [ ] HTTPS enabled and working
- [ ] Favicon displays correctly
- [ ] Theme toggle functional
- [ ] Mobile responsiveness confirmed
- [ ] External services configured (newsletter, etc.)
- [ ] Performance optimizations enabled

## 💡 Pro Tips

1. **Always backup**: Download a copy of your live site before updates
2. **Test locally**: Always test builds locally before uploading
3. **Monitor performance**: Use tools like GTmetrix to check site speed
4. **SEO**: The static export includes proper meta tags and sitemap

Your Diligence Labs website is now ready for production on Hostinger shared hosting! 🚀