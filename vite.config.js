import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { Resend } from 'resend';

function resendDevPlugin({ apiKey, recipientEmail, fromEmail }) {
  const targetTo = recipientEmail || 'jsprateeks@gmail.com';
  const targetFrom = fromEmail || 'onboarding@resend.dev';

  return {
    name: 'resend-dev-server-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/send-email' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });

          req.on('end', async () => {
            try {
              if (!apiKey) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 500;
                res.end(
                  JSON.stringify({
                    success: false,
                    error: 'RESEND_API_KEY is not configured in .env or environment variables',
                  })
                );
                return;
              }

              const resend = new Resend(apiKey);
              const data = JSON.parse(body || '{}');
              const {
                name,
                phone,
                email,
                division,
                specificArea,
                location,
                message,
                source,
              } = data;

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

              let result = await resend.emails.send({
                from: targetFrom,
                to: targetTo,
                subject: `New Legal Inquiry: ${name || 'Client'} - ${division || 'General Consultation'}`,
                html: htmlContent,
              });

              // If Resend free sandbox restricts recipient to account owner, fallback gracefully
              if (
                result.error &&
                (result.error.statusCode === 403 || result.error.name === 'validation_error') &&
                result.error.message?.includes('testing emails')
              ) {
                console.warn(
                  `[Resend Notice] Direct dispatch to ${targetTo} restricted in free sandbox. Forwarding to verified account address.`
                );
                result = await resend.emails.send({
                  from: targetFrom,
                  to: 'ashwani9080singh@gmail.com',
                  subject: `[Intended For: ${targetTo}] New Legal Inquiry: ${name || 'Client'} - ${division || 'General Consultation'}`,
                  html: `
                    <div style="background:#fffbeb;border:1px solid #fde68a;padding:12px 16px;border-radius:8px;margin-bottom:16px;font-size:12px;color:#92400e;">
                      <strong>⚠️ Resend Sandbox Delivery:</strong> Intended recipient is <strong>${targetTo}</strong>.<br/>
                      While Resend is in free testing mode with <code>onboarding@resend.dev</code>, Resend only delivers to the account owner email. Once a custom domain is verified at <a href="https://resend.com/domains" style="color:#b45309;font-weight:bold;">resend.com/domains</a>, emails will be delivered directly to <strong>${targetTo}</strong>.
                    </div>
                    ${htmlContent}
                  `,
                });
              }

              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true, result }));
            } catch (error) {
              console.error('Resend middleware error:', error);
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 500;
              res.end(
                JSON.stringify({
                  success: false,
                  error: error.message || 'Failed to send email',
                })
              );
            }
          });
          return;
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;
  const recipientEmail = env.RECIPIENT_EMAIL || process.env.RECIPIENT_EMAIL || 'jsprateeks@gmail.com';
  const fromEmail = env.RESEND_FROM_EMAIL || process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  return {
    plugins: [
      react(),
      resendDevPlugin({ apiKey, recipientEmail, fromEmail }),
    ],
  };
});
