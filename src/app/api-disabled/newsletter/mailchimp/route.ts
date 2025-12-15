import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      )
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const DATACENTER = process.env.MAILCHIMP_API_KEY?.split('-')[1]

    if (!API_KEY || !AUDIENCE_ID) {
      console.error('Mailchimp API credentials not configured')
      return NextResponse.json(
        { success: false, message: 'Newsletter service not configured' },
        { status: 500 }
      )
    }

    // Add subscriber to Mailchimp
    const mailchimpResponse = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Authorization': `apikey ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            SOURCE: 'website_footer',
            SIGNUP_DATE: new Date().toISOString()
          },
          tags: ['website', 'technical_updates']
        })
      }
    )

    const result = await mailchimpResponse.json()

    if (mailchimpResponse.ok) {
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed! Check your email for confirmation.'
      })
    } else {
      // Handle specific Mailchimp errors
      if (result.title === 'Member Exists') {
        return NextResponse.json({
          success: false,
          message: 'This email is already subscribed to our newsletter.'
        })
      } else {
        console.error('Mailchimp error:', result)
        return NextResponse.json({
          success: false,
          message: 'Failed to subscribe. Please try again.'
        })
      }
    }

  } catch (error) {
    console.error('Mailchimp subscription error:', error)
    return NextResponse.json(
      { success: false, message: 'Newsletter service error. Please try again.' },
      { status: 500 }
    )
  }
}

// To use this API route, add these environment variables to your .env.local:
// MAILCHIMP_API_KEY=your_mailchimp_api_key
// MAILCHIMP_AUDIENCE_ID=your_audience_id
// NEXT_PUBLIC_MAILCHIMP_API_KEY=true (to enable this integration)