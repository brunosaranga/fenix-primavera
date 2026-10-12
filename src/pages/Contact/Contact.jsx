import Seo from "../../components/layout/Seo/Seo";
import PageHeader from "../../components/layout/PageHeader/PageHeader";
import Card from "../../components/ui/Card/Card";
import ContactForm from "../../components/forms/ContactForm/ContactForm";
import { useContent } from "../../hooks/useContent";
import styles from "./Contact.module.css";

export default function Contact() {
    const { pages, contact } = useContent();
    const page = pages.contact;
    const details = Object.entries(contact.details).filter(([, value]) => value);

    return (
        <>
            <Seo title={page.seo.title} description={page.seo.description} />
            <PageHeader label={page.label} title={page.title} text={page.text} />
            <section className="section">
                <div className={`container ${styles.grid}`}>
                    <Card className={styles.form}>
                        <ContactForm />
                    </Card>
                    {details.length > 0 ? (
                        <ul className={styles.details}>
                            {details.map(([key, value]) => (
                                <li key={key}>{value}</li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            </section>
        </>
    );
}
