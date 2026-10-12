import Modal from "../../ui/Modal/Modal";
import ContactForm from "../ContactForm/ContactForm";
import { useContactModal } from "../../../context/ContactModalContext";
import { useContent } from "../../../hooks/useContent";
import styles from "./ContactModal.module.css";

// Mounted once in <Layout />. Every "Agendar diagnóstico" button opens it.
export default function ContactModal() {
    const { isOpen, interest, closeContact } = useContactModal();
    const { contact, common } = useContent();

    return (
        <Modal open={isOpen} onClose={closeContact} title={contact.modalTitle} closeLabel={common.modalClose}>
            <p className={styles.intro}>{contact.modalText}</p>
            <ContactForm initialInterest={interest} />
        </Modal>
    );
}
