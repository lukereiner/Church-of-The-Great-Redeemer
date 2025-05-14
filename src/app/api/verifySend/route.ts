import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import type { TurnstileServerValidationResponse } from '@marsidev/react-turnstile';

const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const secret = process.env.NEXT_PRIVATE_TURNSTILE_SECRET_KEY as string;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  try {
    const { token, formData } = await req.json();

    // Verify Turnstile token
    const verifyRes = await fetch(verifyEndpoint, {
      method: 'POST',
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    });

    const verifyData = (await verifyRes.json()) as TurnstileServerValidationResponse;

    if (!verifyData.success) {
      return NextResponse.json({ message: 'Verification failed' }, { status: 400 });
    }

    // Send email using Resend
    const { name, email, subject, message } = formData;
    const sendEmailRes = await resend.emails.send({
      from: 'contact@greatredeemerchurch.org',
      to: 'lukereiner@greatredeemerchurch.org',
      subject: subject,
      html: `<div style="max-width: 600px; margin: auto; background-color: white; padding: 20px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); border-radius: 4px;">
        <h1 style="color: #333;">From: ${name}</h1>
        <h2 style="color: #666;">Subject: ${subject}</h2>
        <p style="line-height: 1.5;">${message}</p>
        <p>Respond at <a href="mailto:${email}?subject=${encodeURIComponent(subject)}">${email}</a></p>
        </div>`,
    });

    if (sendEmailRes) {
      return NextResponse.json({ message: 'Email sent' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in verification or sending email:', error);
    return NextResponse.json({ message: 'Error in verification or sending email', error }, { status: 500 });
  }
}