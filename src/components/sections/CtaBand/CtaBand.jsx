import Button from "../../ui/Button/Button";
import Icon from "../../ui/Icon/Icon";
import { useContactModal } from "../../../context/ContactModalContext";
import { useContent } from "../../../hooks/useContent";
import { hasWhatsApp, whatsappLink } from "../../../lib/whatsapp";
import styles from "./CtaBand.module.css";

// Dark band that visually rhymes with <IdentityBand />. Sits right above the footer.
export default function CtaBand() {
    const { home, common, contact } = useContent();
    const { openContact } = useContactModal();
    const { ctaBand } = home;

    return (
        <section className={styles.band} aria-labelledby="cta-title">
            <div className={`container ${styles.inner}`}>
                <h2 id="cta-title" className={styles.title}>
                    {ctaBand.title}
                </h2>
                <p className={styles.text}>{ctaBand.text}</p>

                <div className={styles.actions}>
                    <Button onClick={() => openContact()}>{common.ctaPrimary}</Button>
                    {hasWhatsApp() ? (
                        <Button
                            variant="whatsapp"
                            href={whatsappLink(contact.whatsappMessage)}
                            icon={<Icon name="whatsapp" size={18} />}
                        >
                            {common.ctaWhatsApp}
                        </Button>
                    ) : null}
                </div>

                <div className={styles.next}>
                    <p className={styles.nextTitle}>{ctaBand.nextStepsTitle}</p>
                    <ol className={styles.nextSteps}>
                        {ctaBand.nextSteps.map((step, index) => (
                            <li key={step}>
                                <span className={styles.nextNumber}>{index + 1}</span>
                                {step}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
