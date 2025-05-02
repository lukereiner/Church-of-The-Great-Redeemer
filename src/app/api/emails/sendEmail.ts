interface Values {
    name: string;
    subject: string;
    email: string;
    message: string;
}

export const sendEmail = async (values: Values) => {
    try {
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        if (response.ok) {
            alert('Email sent! We will respond as soon as we can!')
            console.log('Email sent successfully with resend!');
        } else {
            const errorDetails = await response.json();
            console.error('Error sending email:', errorDetails.message);
        }
    } catch (error) {
        alert('There was a problem sending the email. Please try emailing us directly @ pastor@greatredeemerchurch.org')
        console.error('There was a problem sending the email:', error);
    }
};
