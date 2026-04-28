import nodemailer from 'nodemailer'

function getTransporter() {
  const config = useRuntimeConfig()
  return nodemailer.createTransport({
    host:   config.smtpHost,
    port:   parseInt(config.smtpPort ?? '587'),
    secure: config.smtpPort === '465',
    auth: config.smtpUser ? {
      user: config.smtpUser,
      pass: config.smtpPass,
    } : undefined,
  })
}

function baseLayout(content: string, title: string) {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;width:100%;">
  <tr><td style="background:linear-gradient(135deg,#1e3a5f,#2563eb);padding:28px 32px;">
    <p style="margin:0;color:#93c5fd;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Sri Lanka Society for Transport and Logistics</p>
    <h1 style="margin:6px 0 0;color:#ffffff;font-size:22px;font-weight:800;">${title}</h1>
  </td></tr>
  <tr><td style="padding:32px;">${content}</td></tr>
  <tr><td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:20px 32px;text-align:center;">
    <p style="margin:0;color:#94a3b8;font-size:12px;">© ${new Date().getFullYear()} SLSTL · Sri Lanka Society for Transport and Logistics</p>
    <p style="margin:4px 0 0;color:#94a3b8;font-size:12px;">info@slstl.lk</p>
  </td></tr>
</table>
</td></tr></table>
</body></html>`
}

function btn(text: string, url: string) {
  return `<a href="${url}" style="display:inline-block;background:#2563eb;color:#ffffff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;margin-top:20px;">${text}</a>`
}

function p(text: string) {
  return `<p style="margin:0 0 14px;color:#334155;font-size:14px;line-height:1.7;">${text}</p>`
}

function h2(text: string) {
  return `<h2 style="margin:0 0 16px;color:#1e3a5f;font-size:18px;font-weight:700;">${text}</h2>`
}

function infoRow(label: string, value: string) {
  return `<tr>
    <td style="padding:8px 12px;font-size:13px;color:#64748b;font-weight:600;width:40%;border-bottom:1px solid #f1f5f9;">${label}</td>
    <td style="padding:8px 12px;font-size:13px;color:#1e293b;border-bottom:1px solid #f1f5f9;">${value}</td>
  </tr>`
}

function infoTable(rows: [string, string][]) {
  return `<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:8px;margin:16px 0;">${rows.map(([l, v]) => infoRow(l, v)).join('')}</table>`
}

// ── Email senders ──────────────────────────────────────────────────────────────

export async function sendRegistrationConfirmation(to: string, name: string) {
  const config = useRuntimeConfig()
  const html = baseLayout(`
    ${h2('Application Received')}
    ${p(`Dear ${name},`)}
    ${p('Thank you for applying for SLSTL membership. Your application has been received and is currently under review by our committee.')}
    ${p('You will be notified by email once a decision has been made. This typically takes up to 4 weeks.')}
    ${p('In the meantime, you can log in to check the status of your application.')}
    ${btn('Check Application Status', `${config.public.siteUrl}/pending`)}
  `, 'Application Received')

  await send({ to, subject: 'SLSTL Membership Application Received', html })
}

export async function sendApprovalEmail(to: string, name: string, membershipNumber: string, category: string) {
  const config = useRuntimeConfig()
  const html = baseLayout(`
    ${h2('Welcome to SLSTL!')}
    ${p(`Dear ${name},`)}
    ${p('We are pleased to inform you that your membership application has been <strong style="color:#059669;">approved</strong>. Welcome to the Sri Lanka Society for Transport and Logistics!')}
    ${infoTable([
      ['Membership Number', membershipNumber],
      ['Membership Category', category],
    ])}
    ${p('You can now log in to access your member area, pay your annual fees, and register for events.')}
    ${btn('Go to Member Area', `${config.public.siteUrl}/member`)}
  `, 'Welcome to SLSTL')

  await send({ to, subject: 'SLSTL Membership Approved — Welcome!', html })
}

export async function sendRejectionEmail(to: string, name: string, notes?: string) {
  const html = baseLayout(`
    ${h2('Application Update')}
    ${p(`Dear ${name},`)}
    ${p('We regret to inform you that your SLSTL membership application has not been approved at this time.')}
    ${notes ? infoTable([['Committee Notes', notes]]) : ''}
    ${p('If you have questions or would like to discuss this further, please contact us at <a href="mailto:info@slstl.lk" style="color:#2563eb;">info@slstl.lk</a>.')}
  `, 'Application Update')

  await send({ to, subject: 'SLSTL Membership Application Update', html })
}

export async function sendPasswordResetEmail(to: string, resetUrl: string) {
  const html = baseLayout(`
    ${h2('Password Reset Request')}
    ${p('We received a request to reset the password for your SLSTL account.')}
    ${p('Click the button below to reset your password. This link is valid for <strong>1 hour</strong>.')}
    ${btn('Reset Password', resetUrl)}
    ${p('<span style="color:#94a3b8;font-size:12px;">If you did not request a password reset, you can safely ignore this email.</span>')}
  `, 'Password Reset')

  await send({ to, subject: 'SLSTL — Reset Your Password', html })
}

export async function sendPaymentConfirmation(to: string, name: string, description: string, amount: string, orderId: string) {
  const config = useRuntimeConfig()
  const html = baseLayout(`
    ${h2('Payment Confirmed')}
    ${p(`Dear ${name},`)}
    ${p('Your payment has been successfully processed.')}
    ${infoTable([
      ['Description', description],
      ['Amount', `LKR ${amount}`],
      ['Order ID', orderId],
      ['Date', new Date().toLocaleDateString('en-LK', { dateStyle: 'long' })],
    ])}
    ${btn('View Payment History', `${config.public.siteUrl}/member/payments`)}
  `, 'Payment Confirmed')

  await send({ to, subject: `SLSTL Payment Confirmed — ${description}`, html })
}

export async function sendEventRegistrationConfirmation(to: string, name: string, eventTitle: string, eventDate: string, venue: string, orderId: string, isFree: boolean) {
  const config = useRuntimeConfig()
  const html = baseLayout(`
    ${h2('Event Registration Confirmed')}
    ${p(`Dear ${name},`)}
    ${p(`Your registration for <strong>${eventTitle}</strong> has been confirmed.`)}
    ${infoTable([
      ['Event', eventTitle],
      ['Date', eventDate],
      ['Venue', venue || 'TBA'],
      ['Order ID', orderId],
      ['Payment', isFree ? 'Free' : 'Paid'],
    ])}
    ${p('We look forward to seeing you at the event!')}
    ${btn('View My Registrations', `${config.public.siteUrl}/member/events`)}
  `, 'Event Registration Confirmed')

  await send({ to, subject: `SLSTL — Registered for ${eventTitle}`, html })
}

export async function sendNewUserWelcome(to: string, tempPassword: string) {
  const config = useRuntimeConfig()
  const html = baseLayout(`
    ${h2('Your Account Has Been Created')}
    ${p('An administrator has created an SLSTL account for you.')}
    ${infoTable([
      ['Email', to],
      ['Temporary Password', `<code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;">${tempPassword}</code>`],
    ])}
    ${p('<strong>Please change your password immediately after logging in.</strong>')}
    ${btn('Login Now', `${config.public.siteUrl}/login`)}
  `, 'Account Created')

  await send({ to, subject: 'SLSTL — Your Account Has Been Created', html })
}

// ── Internal send ──────────────────────────────────────────────────────────────

async function send({ to, subject, html }: { to: string; subject: string; html: string }) {
  const config = useRuntimeConfig()
  if (!config.smtpHost) {
    console.log(`[mailer] SMTP not configured — skipping email to ${to}: ${subject}`)
    return
  }
  try {
    const transporter = getTransporter()
    await transporter.sendMail({
      from: config.smtpFrom || '"SLSTL" <no-reply@slstl.lk>',
      to,
      subject,
      html,
    })
  } catch (err) {
    console.error('[mailer] Failed to send email:', err)
  }
}
