const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || "";

export class NotConfiguredError extends Error {}

// Sends the contact form as JSON. Works with Formspree out of the box;
// swap the body/headers here if Fenix uses another service.
export async function sendContact(data) {
    if (!ENDPOINT) {
        console.warn("VITE_FORM_ENDPOINT is not set. See .env.example.");
        throw new NotConfiguredError("Form endpoint not configured");
    }

    const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`Form submission failed (${response.status})`);
    }
    return response;
}
