import type { Request, Response } from 'express';

interface ContactBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default async function handler(req: Request, res: Response) {
  const { name, email, subject, message } = req.body as ContactBody;

  // Validation
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ error: 'Please provide your name.' });
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters.' });
  }

  // Log the submission (in production you'd send an email here)
  console.log('contact.form.submission', {
    name: name.trim(),
    email: email.trim(),
    subject: subject?.trim() || '(no subject)',
    messageLength: message.trim().length,
    timestamp: new Date().toISOString(),
  });

  return res.status(200).json({ ok: true, message: 'Message received. I\'ll get back to you soon!' });
}
