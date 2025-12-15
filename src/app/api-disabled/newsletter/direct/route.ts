import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, source, userAgent, timestamp } = await request.json()

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Check for spam/bot submissions (basic protection)
    if (!userAgent || userAgent.length < 10) {
      return NextResponse.json(
        { success: false, message: 'Invalid submission detected' },
        { status: 400 }
      )
    }

    // Create subscriber record
    const subscriberData = {
      email: email.toLowerCase().trim(),
      source: source || 'website',
      userAgent,
      ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
      timestamp,
      status: 'subscribed'
    }

    // Log the subscription (in production, save to database or send to email service)
    console.log('Newsletter subscription received:', subscriberData)

    // Send confirmation email to subscriber (implement with your email service)
    await sendConfirmationEmail(email)

    // Notify admin about new subscription
    await notifyAdminOfSubscription(subscriberData)

    return NextResponse.json({
      success: true,
      message: 'Welcome to our technical insights newsletter! Check your inbox for confirmation.'
    })

  } catch (error) {
    console.error('Direct newsletter subscription error:', error)
    return NextResponse.json(
      { success: false, message: 'Unable to process subscription. Please try again.' },
      { status: 500 }
    )
  }
}

async function sendConfirmationEmail(email: string) {
  // Placeholder for confirmation email
  // Implement with Resend, SendGrid, or your preferred email service
  
  const confirmationData = {
    to: email,
    subject: 'Welcome to Diligence Labs Technical Insights',
    message: 'Thank you for subscribing to our newsletter!'
  }
  
  console.log('Sending confirmation email:', confirmationData)
  
  // Example implementation:
  /*
  if (process.env.RESEND_API_KEY) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Technical Team <technical@diligencelabs.xyz>',
        to: email,
        subject: 'Welcome to Diligence Labs Technical Insights',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Welcome to Diligence Labs!</h2>
            <p>Thank you for subscribing to our technical insights newsletter.</p>
            <p>You'll receive:</p>
            <ul>
              <li>Protocol development insights</li>
              <li>Infrastructure analysis</li>
              <li>Blockchain technical deep-dives</li>
              <li>DeFi and tokenomics research</li>
            </ul>
            <p>Stay tuned for our next technical update!</p>
            <p>Best regards,<br>The Diligence Labs Team</p>
          </div>
        `
      })
    })
  }
  */
}

async function notifyAdminOfSubscription(data: any) {
  // Notify admin about new subscription
  console.log('Admin notification - New subscriber:', data)
  
  // Example implementation:
  /*
  if (process.env.RESEND_API_KEY) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Website <noreply@diligencelabs.xyz>',
        to: 'info@diligencelabs.xyz',
        subject: 'New Newsletter Subscription',
        html: `
          <h3>New Newsletter Subscription</h3>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Source:</strong> ${data.source}</p>
          <p><strong>Timestamp:</strong> ${data.timestamp}</p>
          <p><strong>IP Address:</strong> ${data.ipAddress}</p>
        `
      })
    })
  }
  */
}