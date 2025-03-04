import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendEmail = async ({ to, subject, text, html }) => {
  if (!process.env.SMTP_USER) {
    console.warn('SMTP not configured. Email sending skipped.');
    return;
  }

  try {
    const info = await transporter.sendMail({
      from: `"DJ Portfolio" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html
    });
    
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const sendContactNotification = async (messageData) => {
  const { name, email, subject, message } = messageData;
  
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> ${name} (${email})</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  return sendEmail({
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form Message: ${subject}`,
    text: `New message from ${name} (${email}): ${message}`,
    html
  });
};

export default {
  sendEmail,
  sendContactNotification
};
