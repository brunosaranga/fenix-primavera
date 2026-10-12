import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import styles from "./Modal.module.css";

// Built on the native <dialog>: focus trap, Esc to close and focus restore come for free.
export default function Modal({ open, onClose, title, closeLabel = "Fechar", size = "md", children }) {
    const dialogRef = useRef(null);
    const titleId = useId();

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) {
            return;
        }
        if (open && !dialog.open) {
            dialog.showModal();
            document.body.classList.add("is-scroll-locked");
        } else if (!open && dialog.open) {
            dialog.close();
        }
        if (!open) {
            document.body.classList.remove("is-scroll-locked");
        }
    }, [open]);

    useEffect(() => () => document.body.classList.remove("is-scroll-locked"), []);

    // Esc fires "cancel": route it through onClose so React state stays in sync
    const onCancel = (event) => {
        event.preventDefault();
        onClose();
    };

    // Click on the backdrop (the dialog element itself, outside the panel) closes
    const onClick = (event) => {
        if (event.target === dialogRef.current) {
            onClose();
        }
    };

    return (
        <dialog
            ref={dialogRef}
            className={[styles.dialog, styles[size]].join(" ")}
            aria-labelledby={titleId}
            onCancel={onCancel}
            onClick={onClick}
        >
            <div className={styles.panel}>
                <header className={styles.header}>
                    <h2 id={titleId} className={styles.title}>
                        {title}
                    </h2>
                    <button type="button" className={styles.close} onClick={onClose} aria-label={closeLabel}>
                        <X aria-hidden="true" />
                    </button>
                </header>
                <div className={styles.body}>{open ? children : null}</div>
            </div>
        </dialog>
    );
}
