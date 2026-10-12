const NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "";

export function hasWhatsApp() {
    return NUMBER.length > 0;
}

export function whatsappLink(message = "") {
    const text = message ? `?text=${encodeURIComponent(message)}` : "";
    return `https://wa.me/${NUMBER}${text}`;
}
