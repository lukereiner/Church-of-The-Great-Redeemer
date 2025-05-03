import { Resend } from 'resend';

import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
    }

    try {
        const body = await req.json();
        const { name, message, email, subject } = body;

        const response = await resend.emails.send({
            from: 'contact@greatredeemerchurch.org',
            to: 'lukereiner@greatredeemerchurch.org',
            subject: subject,
            html: `<div style="max-width: 600px; margin: auto; background-color: white; padding: 20px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); border-radius: 4px;"><h1 style="color: #333;">From: ${name}</h1>
       <h2 style="color: #666;">Subject: ${subject}</h2>
       <p style="line-height: 1.5;">${message}</p>
       <p>Respond at <a href="mailto:${email}?subject=${encodeURIComponent(subject)}">${email}</a></p>
       </div>`,
        });

        return NextResponse.json({ message: 'Email sent', response }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
    }
}
