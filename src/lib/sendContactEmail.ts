import emailjs from '@emailjs/browser';

export function isEmailJsConfigured(): boolean {
  return Boolean(
    import.meta.env.VITE_EMAILJS_SERVICE_ID &&
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  );
}

/**
 * Sends the contact form via EmailJS (connect Gmail in the EmailJS dashboard).
 * Create a template with variables matching `templateParams` keys.
 */
export async function sendContactEmail(params: {
  name: string;
  email: string;
  phone: string;
  message: string;
  toEmail: string;
}): Promise<void> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS environment variables are not set');
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: params.name,
      reply_to: params.email,
      phone: params.phone,
      message: params.message,
      to_email: params.toEmail,
    },
    { publicKey },
  );
}
