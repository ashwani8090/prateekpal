import { Resend } from 'resend';

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, error: 'RESEND_API_KEY is not configured' });
  }

  const resend = new Resend(apiKey);
  const defaultRecipient = process.env.RECIPIENT_EMAIL || 'jsprateeks@gmail.com';
  const defaultFrom = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  try {
    const body = req.body || {};
    const {
      to,
      from,
      subject,
      html,
      text,
      name,
      phone,
      email,
      division,
      specificArea,
      location,
      message,
      source,
    } = body;

    // Mode 1: Direct email payload provided (to, subject, html/text)
    if (to && (html || text)) {
      const emailPayload = {
        from: from || defaultFrom,
        to,
        subject: subject || 'New Notification from Prateek Associates',
        ...(html ? { html } : {}),
        ...(text ? { text } : {}),
      };

      const result = await resend.emails.send(emailPayload);
      if (result.error) {
        return res.status(400).json({ success: false, error: result.error.message || result.error });
      }
      return res.status(200).json({ success: true, result });
    }

    // Mode 2: Contact / Inquiry form submission
    const clientName = name || 'Prospective Client';
    const emailSubject = subject || `New Legal Inquiry: ${clientName} - ${division || 'General Consultation'}`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
        <div style="border-bottom: 2px solid #d97706; padding-bottom: 12px; margin-bottom: 16px;">
          <span style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #b45309;">
            NEW LEGAL INQUIRY &bull; PRATEEK ASSOCIATES
          </span>
          <h2 style="margin: 6px 0 0; color: #0f172a; font-size: 20px;">
            Client Consultation Request
          </h2>
        </div>

        <p style="color: #64748b; font-size: 13px; margin: 0 0 16px;">
          Source: <strong>${source || 'Website Contact Form'}</strong>
        </p>

        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
          <tbody>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 8px; font-weight: 600; color: #475569; width: 150px;">Client Name</td>
              <td style="padding: 10px 8px; color: #0f172a; font-weight: bold;">${name || 'Not provided'}</td>
            </tr>
            <tr style="background: #f8fafc; border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 8px; font-weight: 600; color: #475569;">Phone Number</td>
              <td style="padding: 10px 8px; color: #0f172a;">
                <a href="tel:${phone}" style="color: #b45309; font-weight: 600; text-decoration: none;">${phone || 'Not provided'}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 8px; font-weight: 600; color: #475569;">Email Address</td>
              <td style="padding: 10px 8px; color: #0f172a;">
                <a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email || 'Not provided'}</a>
              </td>
            </tr>
            ${division ? `
            <tr style="background: #f8fafc; border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 8px; font-weight: 600; color: #475569;">Service Division</td>
              <td style="padding: 10px 8px; color: #0f172a; font-weight: 600;">${division}</td>
            </tr>` : ''}
            ${specificArea ? `
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 8px; font-weight: 600; color: #475569;">Specific Matter</td>
              <td style="padding: 10px 8px; color: #0f172a;">${specificArea}</td>
            </tr>` : ''}
            ${location ? `
            <tr style="background: #f8fafc; border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 8px; font-weight: 600; color: #475569;">Preferred Location</td>
              <td style="padding: 10px 8px; color: #0f172a;">${location}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 8px; font-weight: 600; color: #475569; vertical-align: top;">Brief Description</td>
              <td style="padding: 10px 8px; color: #0f172a; white-space: pre-wrap; line-height: 1.5;">${message || 'No description provided.'}</td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top: 24px; padding-top: 14px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; display: flex; justify-content: space-between;">
          <span>Prateek Associates &bull; Patiala House Courts Chambers</span>
          <span>Dispatched via Resend</span>
        </div>
      </div>
    `;

    const recipient = to || defaultRecipient;
    const sender = from || defaultFrom;

    const result = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email || undefined,
      subject: emailSubject,
      html: htmlContent,
    });

    if (result.error) {
      // If free sandbox restricts recipient to account owner, fallback gracefully
      if (
        (result.error.statusCode === 403 || result.error.name === 'validation_error') &&
        result.error.message?.includes('testing emails')
      ) {
        console.warn(
          `[Resend Notice] Direct dispatch to ${recipient} restricted in free sandbox. Forwarding to verified account address.`
        );
        const sandboxFallback = await resend.emails.send({
          from: sender,
          to: 'ashwani9080singh@gmail.com',
          replyTo: email || undefined,
          subject: `[Intended For: ${recipient}] ${emailSubject}`,
          html: `
            <div style="background:#fffbeb;border:1px solid #fde68a;padding:12px 16px;border-radius:8px;margin-bottom:16px;font-size:12px;color:#92400e;">
              <strong>⚠️ Resend Sandbox Delivery:</strong> Intended recipient is <strong>${recipient}</strong>.<br/>
              While Resend is in free testing mode with <code>onboarding@resend.dev</code>, Resend only delivers to the account owner email. Once a custom domain is verified at <a href="https://resend.com/domains" style="color:#b45309;font-weight:bold;">resend.com/domains</a>, emails will be delivered directly to <strong>${recipient}</strong>.
            </div>
            ${htmlContent}
          `,
        });
        return res.status(200).json({ success: true, result: sandboxFallback });
      }

      return res.status(400).json({ success: false, error: result.error.message || result.error });
    }

    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.error('API send-email error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to dispatch email',
    });
  }
}
