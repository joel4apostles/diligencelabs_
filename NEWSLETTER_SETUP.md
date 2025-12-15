# 📧 Newsletter Subscription Setup Guide

The Diligence Labs website includes a fully functional email subscription system with multiple integration options.

## 🚀 Quick Setup

### Option 1: Mailchimp Integration (Recommended)

1. **Create a Mailchimp account** and get your API key
2. **Create an audience** and get the Audience ID
3. **Add environment variables** to `.env.local`:
   ```bash
   MAILCHIMP_API_KEY=your_api_key-datacenter
   MAILCHIMP_AUDIENCE_ID=your_audience_id
   NEXT_PUBLIC_MAILCHIMP_API_KEY=true
   ```

### Option 2: ConvertKit Integration

1. **Create a ConvertKit account** and get your API key
2. **Create a form** and get the Form ID
3. **Add environment variables** to `.env.local`:
   ```bash
   CONVERTKIT_API_KEY=your_api_key
   CONVERTKIT_FORM_ID=your_form_id
   NEXT_PUBLIC_CONVERTKIT_API_KEY=true
   ```

### Option 3: Simple Email Collection

1. **Add environment variable** to `.env.local`:
   ```bash
   NEXT_PUBLIC_ENABLE_EMAIL_COLLECTION=true
   ADMIN_EMAIL=your@email.com
   ```

### Option 4: Custom Email Service

1. **Choose your email service** (Resend, SendGrid, etc.)
2. **Add API key** to `.env.local`:
   ```bash
   RESEND_API_KEY=your_resend_api_key
   # or
   SENDGRID_API_KEY=your_sendgrid_api_key
   ```

## 📝 How It Works

### Frontend Component
- **Location**: `src/components/forms/NewsletterSubscription.tsx`
- **Features**: 
  - Real-time email validation
  - Loading states and success/error feedback
  - Responsive design with professional animations
  - Form submission prevention for invalid emails

### API Routes
- **`/api/newsletter/mailchimp`** - Mailchimp integration
- **`/api/newsletter/convertkit`** - ConvertKit integration
- **`/api/newsletter/subscribe`** - Basic email collection
- **`/api/newsletter/direct`** - Direct email notifications

### Priority System
The component automatically detects which service is configured and uses this priority:
1. Mailchimp (if `NEXT_PUBLIC_MAILCHIMP_API_KEY` is set)
2. ConvertKit (if `NEXT_PUBLIC_CONVERTKIT_API_KEY` is set)
3. Email Collection (if `NEXT_PUBLIC_ENABLE_EMAIL_COLLECTION` is true)
4. Direct notifications (fallback)

## 🔧 Customization

### Modify Newsletter Component

```tsx
// src/components/forms/NewsletterSubscription.tsx
<NewsletterSubscription 
  className="custom-styles"
  placeholder="Custom placeholder text"
  submitText="Custom submit text"
/>
```

### Add Custom Email Templates

Update the API routes in `src/app/api/newsletter/*/route.ts` to customize:
- Welcome email templates
- Admin notification formats
- Success/error messages

### Database Integration

To store subscribers in a database, modify the API routes:

```typescript
// Example: Add to database
await db.subscribers.create({
  email: email,
  source: 'website',
  subscribedAt: new Date()
})
```

## 📊 Analytics & Tracking

### Track Subscription Events

Add analytics tracking to the newsletter component:

```typescript
// In NewsletterSubscription.tsx
const handleSubmit = async (e: FormEvent) => {
  // ... existing code ...
  
  // Track successful subscription
  if (result.success) {
    // Google Analytics
    gtag('event', 'newsletter_subscription', {
      event_category: 'engagement',
      event_label: 'footer_form'
    })
    
    // Custom analytics
    analytics.track('Newsletter Subscribed', {
      source: 'footer',
      email: email
    })
  }
}
```

## 🛡️ Security Features

- **Email validation**: Client and server-side validation
- **Rate limiting**: Prevent spam submissions  
- **Bot protection**: User-agent validation
- **Input sanitization**: Clean email inputs
- **Error handling**: Graceful failure handling

## 🧪 Testing

### Test the Newsletter Form

1. **Development testing**:
   ```bash
   npm run dev
   # Navigate to http://localhost:3000
   # Scroll to footer and test the form
   ```

2. **API testing**:
   ```bash
   curl -X POST http://localhost:3000/api/newsletter/direct \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","timestamp":"2024-01-01T00:00:00.000Z"}'
   ```

3. **Production testing**: Always test on staging before production deployment

## 🚀 Deployment Notes

### Vercel Deployment
- Environment variables are automatically available
- API routes deploy as serverless functions
- No additional configuration needed

### Other Platforms
- Ensure environment variables are set
- API routes must support serverless functions
- Check email service CORS settings

## 📞 Support

If you need help setting up the newsletter system:

1. **Check the console logs** for API errors
2. **Verify environment variables** are set correctly
3. **Test email service credentials** independently
4. **Review the API route responses** for detailed error messages

For additional customization or advanced features, modify the components and API routes according to your specific requirements.