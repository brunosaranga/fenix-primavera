import { Link } from "react-router-dom";
import Logo from "../../ui/Logo/Logo";
import PartnerBadge from "../../ui/PartnerBadge/PartnerBadge";
import { navRoutes } from "../../../routes";
import { useContent } from "../../../hooks/useContent";
import styles from "./Footer.module.css";

export default function Footer() {
    const { footer, nav, contact, common } = useContent();
    const details = Object.entries(contact.details).filter(([, value]) => value);
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.brand}>
                    <Logo variant="mark" tone="inverse" className={styles.brandMark} />
                    <p className={styles.description}>{footer.description}</p>
                    <PartnerBadge tone="inverse" showLabel={false} />
                </div>

                <div>
                    <h2 className={styles.heading}>{footer.linksTitle}</h2>
                    <ul className={styles.list}>
                        {navRoutes.map((route) => (
                            <li key={route.path}>
                                <Link to={route.path}>{nav[route.labelKey]}</Link>
                            </li>
                        ))}
                        <li>
                            <Link to="/como-escolher">{nav.howToChoose}</Link>
                        </li>
                        <li>
                            <Link to="/contactos">{nav.contact}</Link>
                        </li>
                    </ul>
                </div>

                {details.length > 0 ? (
                    <div>
                        <h2 className={styles.heading}>{footer.contactTitle}</h2>
                        <ul className={styles.list}>
                            {details.map(([key, value]) => (
                                <li key={key}>{value}</li>
                            ))}
                        </ul>
                    </div>
                ) : null}

                {footer.social.length > 0 ? (
                    <div>
                        <h2 className={styles.heading}>{footer.socialTitle}</h2>
                        <ul className={styles.list}>
                            {footer.social.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </div>

            <div className={`container ${styles.bottom}`}>
                <p>
                    © {year} {common.brand}. {footer.legal}
                </p>
                <Link to={footer.privacy.to}>{footer.privacy.label}</Link>
            </div>
        </footer>
    );
}
