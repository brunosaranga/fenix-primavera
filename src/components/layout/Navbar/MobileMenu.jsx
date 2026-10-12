import { useEffect } from "react";
import NavLinks from "./NavLinks";
import Button from "../../ui/Button/Button";
import ThemeToggle from "../../ui/ThemeToggle/ThemeToggle";
import LocaleToggle from "../../ui/LocaleToggle/LocaleToggle";
import styles from "./Navbar.module.css";

// Full-screen panel under the bar. TODO: port the Unts!Unts! menu animation here if wanted.
export default function MobileMenu({ open, onClose, onContact, ctaLabel }) {
    useEffect(() => {
        if (!open) {
            return undefined;
        }
        document.body.classList.add("is-scroll-locked");
        const onKey = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.classList.remove("is-scroll-locked");
            window.removeEventListener("keydown", onKey);
        };
    }, [open, onClose]);

    return (
        <div id="mobile-menu" className={styles.mobileMenu} data-open={open} hidden={!open}>
            <nav aria-label="Menu">
                <NavLinks variant="mobile" onNavigate={onClose} />
            </nav>
            <div className={styles.mobileFooter}>
                <Button onClick={onContact}>{ctaLabel}</Button>
                <div className={styles.mobileToggles}>
                    <ThemeToggle />
                    <LocaleToggle />
                </div>
            </div>
        </div>
    );
}
