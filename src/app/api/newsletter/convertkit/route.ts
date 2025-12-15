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

    const API_KEY = process.env.CONVERTKIT_API_KEY
    const FORM_ID = process.env.CONVERTKIT_FORM_ID

    if (!API_KEY || !FORM_ID) {
      console.error('ConvertKit API credentials not configured')
      return NextResponse.json(
        { success: false, message: 'Newsletter service not configured' },
        { status: 500 }
      )
    }

    // Subscribe to ConvertKit form
    const convertkitResponse = await fetch(
      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          api_key: API_KEY,
          email: email,
          fields: {
            source: 'website_footer',
            signup_date: new Date().toISOString()
          },
          tags: ['website', 'technical_updates']
        })
      }
    )

    const result = await convertkitResponse.json()

    if (convertkitResponse.ok) {
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed! Check your email for confirmation.'
      })
    } else {
      // Handle ConvertKit errors
      if (result.message?.includes('already subscribed')) {
        return NextResponse.json({
          success: false,
          message: 'This email is already subscribed to our newsletter.'
        })
      } else {
        console.error('ConvertKit error:', result)
        return NextResponse.json({
          success: false,
          message: 'Failed to subscribe. Please try again.'
        })
      }
    }

  } catch (error) {
    console.error('ConvertKit subscription error:', error)
    return NextResponse.json(
      { success: false, message: 'Newsletter service error. Please try again.' },
      { status: 500 }
    )
  }
}

// To use this API route, add these environment variables to your .env.local:
// CONVERTKIT_API_KEY=your_convertkit_api_key  
// CONVERTKIT_FORM_ID=your_form_id
// NEXT_PUBLIC_CONVERTKIT_API_KEY=true (to enable this integration)