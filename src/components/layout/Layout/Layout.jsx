import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ContactModal from "../../forms/ContactModal/ContactModal";
import { useContent } from "../../../hooks/useContent";
import styles from "./Layout.module.css";

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo({ top: 0, behavior: "instant" });
        }
    }, [pathname, hash]);

    return null;
}

export default function Layout() {
    const { common } = useContent();

    return (
        <>
            <a href="#main" className="skip-link">
                {common.skipToContent}
            </a>
            <ScrollToTop />
            <Navbar />
            <main id="main" className={styles.main}>
                <Outlet />
            </main>
            <Footer />
            <ContactModal />
        </>
    );
}
