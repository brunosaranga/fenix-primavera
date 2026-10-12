import { useState } from "react";
import Button from "../../ui/Button/Button";
import { sendContact } from "../../../lib/sendContact";
import { hasWhatsApp, whatsappLink } from "../../../lib/whatsapp";
import { useContent } from "../../../hooks/useContent";
import styles from "./ContactForm.module.css";

const EMPTY = { name: "", company: "", email: "", phone: "", interest: "", message: "", website: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ initialInterest = "", onSuccess }) {
    const { contact } = useContent();
    const [values, setValues] = useState({ ...EMPTY, interest: initialInterest });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const update = (field) => (event) => {
        setValues((prev) => ({ ...prev, [field]: event.target.value }));
        setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

    const validate = () => {
        const next = {};
        if (!values.name.trim()) {
            next.name = contact.validation.name;
        }
        if (!values.email.trim() && !values.phone.trim()) {
            next.email = contact.validation.contact;
        } else if (values.email.trim() && !EMAIL_RE.test(values.email.trim())) {
            next.email = contact.validation.email;
        }
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (values.website) {
            return; // honeypot filled: almost certainly a bot
        }
        if (!validate()) {
            return;
        }
        setStatus("sending");
        try {
            const { website, ...payload } = values;
            await sendContact(payload);
            setStatus("success");
            setValues(EMPTY);
            onSuccess?.();
        } catch {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <p className={styles.success} role="status">
                {contact.success}
            </p>
        );
    }

    const f = contact.fields;

    return (
        <form className={styles.form} onSubmit={onSubmit} noValidate>
            <div className={styles.row}>
                <Field id="cf-name" label={f.name} error={errors.name} required>
                    <input id="cf-name" value={values.name} onChange={update("name")} autoComplete="name" />
                </Field>
                <Field id="cf-company" label={f.company}>
                    <input
                        id="cf-company"
                        value={values.company}
                        onChange={update("company")}
                        autoComplete="organization"
                    />
                </Field>
            </div>

            <div className={styles.row}>
                <Field id="cf-email" label={f.email} error={errors.email}>
                    <input
                        id="cf-email"
                        type="email"
                        value={values.email}
                        onChange={update("email")}
                        autoComplete="email"
                    />
                </Field>
                <Field id="cf-phone" label={f.phone}>
                    <input
                        id="cf-phone"
                        type="tel"
                        value={values.phone}
                        onChange={update("phone")}
                        autoComplete="tel"
                    />
                </Field>
            </div>

            <Field id="cf-interest" label={f.interest}>
                <select id="cf-interest" value={values.interest} onChange={update("interest")}>
                    <option value="">{f.interestPlaceholder}</option>
                    {contact.interests.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </Field>

            <Field id="cf-message" label={f.message}>
                <textarea id="cf-message" rows={4} value={values.message} onChange={update("message")} />
            </Field>

            {/* Honeypot: hidden from people, bots fill it in */}
            <div className="visually-hidden" aria-hidden="true">
                <label htmlFor="cf-website">Website</label>
                <input id="cf-website" tabIndex={-1} autoComplete="off" value={values.website} onChange={update("website")} />
            </div>

            {status === "error" ? (
                <p className={styles.error} role="alert">
                    {contact.error}{" "}
                    {hasWhatsApp() ? (
                        <a href={whatsappLink(contact.whatsappMessage)} target="_blank" rel="noopener noreferrer">
                            WhatsApp →
                        </a>
                    ) : null}
                </p>
            ) : null}

            <div className={styles.actions}>
                <Button type="submit" disabled={status === "sending"}>
                    {status === "sending" ? contact.sending : contact.submit}
                </Button>
            </div>
        </form>
    );
}

function Field({ id, label, error, required = false, children }) {
    return (
        <div className={styles.field} data-invalid={Boolean(error)}>
            <label htmlFor={id} className={styles.label}>
                {label}
                {required ? <span aria-hidden="true"> *</span> : null}
            </label>
            {children}
            {error ? (
                <p className={styles.fieldError} id={`${id}-error`}>
                    {error}
                </p>
            ) : null}
        </div>
    );
}
