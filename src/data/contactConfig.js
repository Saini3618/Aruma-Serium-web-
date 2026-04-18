export const WHATSAPP_NUMBER = '918766245754';

export function createWhatsAppLink(message = '', options = {}) {
  const { isEncoded = false } = options;
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  if (!message) return baseUrl;

  const text = isEncoded ? message : encodeURIComponent(message);
  return `${baseUrl}?text=${text}`;
}
