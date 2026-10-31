/**
 * Open WhatsApp with pre-filled message, optimized to launch directly
 * into native WhatsApp mobile app on Android/iOS, with fallback to WhatsApp Web.
 * 
 * @param {string} customMessage - Optional customized inquiry text
 */
export const openWhatsApp = (customMessage) => {
  const phone = "919794801100";
  const defaultMsg =
    "Hello Advocate Prateek Pal, I came across your legal practice website and would like to schedule a consultation regarding a GST / Legal matter. Please let me know your availability.";

  const text = encodeURIComponent(customMessage || defaultMsg);

  // Detect mobile device
  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    // Direct app deep-link protocol for native mobile app launch
    const appUrl = `whatsapp://send?phone=${phone}&text=${text}`;
    const webFallbackUrl = `https://wa.me/${phone}?text=${text}`;

    // Attempt to open native app directly
    const start = Date.now();
    window.location.href = appUrl;

    // Fallback if app doesn't open within 1.5 seconds
    setTimeout(() => {
      if (Date.now() - start < 2500) {
        window.open(webFallbackUrl, "_blank", "noopener,noreferrer");
      }
    }, 1500);
  } else {
    // Desktop: opens WhatsApp Web or desktop client seamlessly
    const webUrl = `https://web.whatsapp.com/send?phone=${phone}&text=${text}`;
    window.open(webUrl, "_blank", "noopener,noreferrer");
  }
};
