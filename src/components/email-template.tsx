interface EmailTemplateProps {
  name: string;
  subject: string;
  email: string;
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = (
  {
      name,
      subject,
      email,
      message
  }

) => (
  <div>
      <h1>Email from: {name}</h1>
      <h2>{subject}</h2>
      <p>
          {message}.
      </p>
      <p>Respond at <a href={`mailto:${email}?subject=${subject}`}></a></p>
      <a href="https://www.greatredeemerchurch.org" target="_blank" rel="noreferrer">
          Visit our website
      </a>
  </div>
);
