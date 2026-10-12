import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../ui/Logo/Logo";
import Button from "../../ui/Button/Button";
import ThemeToggle from "../../ui/ThemeToggle/ThemeToggle";
import LocaleToggle from "../../ui/LocaleToggle/LocaleToggle";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useScrollDirection } from "../../../hooks/useScrollDirection";
import { useContactModal } from "../../../context/ContactModalContext";
import { useContent } from "../../../hooks/useContent";
import styles from "./Navbar.module.css";

const HOVER_DELAY = 150;

// Desktop: fixed, shrinks on scroll down, expands on scroll up / hover / keyboard focus.
// Mobile (CSS < 900px): links hide, hamburger opens <MobileMenu />.
export default function Navbar() {
    const { direction, scrolled } = useScrollDirection({ offset: 80 });
    const { openContact } = useContactModal();
    const { common } = useContent();
    const { pathname } = useLocation();

    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const hoverTimer = useRef(null);

    const compact = scrolled && direction === "down" && !hovered && !focused && !menuOpen;

    // Close the mobile menu whenever the route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => () => clearTimeout(hoverTimer.current), []);

    const onMouseEnter = () => {
        clearTimeout(hoverTimer.current);
        hoverTimer.current = setTimeout(() => setHovered(true), HOVER_DELAY);
    };

    const onMouseLeave = () => {
        clearTimeout(hoverTimer.current);
        setHovered(false);
    };

    // Only KEYBOARD focus keeps the bar expanded. A mouse click also focuses the
    // clicked button/link, which would otherwise pin the bar open until you click elsewhere.
    const onFocus = (event) => {
        if (event.target.matches(":focus-visible")) {
            setFocused(true);
        }
    };

    const onBlur = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setFocused(false);
        }
    };

    // MobileMenu sits outside <header>: the header's backdrop-filter would
    // otherwise become the containing block of the fixed menu.
    return (
        <>
            <header
                className={styles.navbar}
                data-compact={compact}
                data-scrolled={scrolled}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onFocus={onFocus}
                onBlur={onBlur}
            >
                <div className={`container ${styles.inner}`}>
                    <Logo variant="collapsible" compact={compact} />

                    <nav aria-label="Principal" className={styles.desktopNav}>
                        <NavLinks />
                    </nav>

                    <div className={styles.actions}>
                        <div className={styles.toggles}>
                            <ThemeToggle />
                            <LocaleToggle />
                        </div>
                        <Button size="sm" onClick={() => openContact()} className={styles.cta}>
                            {common.ctaPrimary}
                        </Button>
                        <button
                            type="button"
                            className={styles.burger}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                            aria-label={menuOpen ? common.menu.close : common.menu.open}
                            onClick={() => setMenuOpen((open) => !open)}
                        >
                            <span className={styles.burgerLines} data-open={menuOpen} />
                        </button>
                    </div>
                </div>
            </header>

            <MobileMenu
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
                onContact={() => {
                    setMenuOpen(false);
                    openContact();
                }}
                ctaLabel={common.ctaPrimary}
            />
        </>
    );
}
