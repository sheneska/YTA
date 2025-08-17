import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

// grab your API key from https://resend.com
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, type, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'Website Contact <hello@yourdomain.com>',
      to: 'admin@bixllc.net',
      subject: 'New Contact Message',
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>User Type:</strong> ${type}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, response });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false });
  }
}
