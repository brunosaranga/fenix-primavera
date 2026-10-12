import Logo from "../../ui/Logo/Logo";
import Icon from "../../ui/Icon/Icon";
import PartnerBadge from "../../ui/PartnerBadge/PartnerBadge";
import { useContent } from "../../../hooks/useContent";
import styles from "./IdentityBand.module.css";

export default function IdentityBand() {
    const { home } = useContent();
    const { identity } = home;

    return (
        <section className={styles.wrap} aria-labelledby="identity-title">
            <div className={styles.band}>
                <div className={`container ${styles.inner}`}>
                    <Logo tone="inverse" link={false} className={styles.logo} />
                    <h2 id="identity-title" className={styles.title}>
                        {identity.title}
                    </h2>
                    <p className={styles.text}>{identity.text}</p>

                    <ul className={styles.pillars}>
                        {identity.pillars.map((pillar) => (
                            <li key={pillar.label} className={styles.pillar}>
                                <span className={styles.pillarIcon}>
                                    {pillar.icon === "partner" ? (
                                        <PartnerBadge tone="inverse" showLabel={false} />
                                    ) : (
                                        <Icon name={pillar.icon} size={56} strokeWidth={1.25} />
                                    )}
                                </span>
                                <span className={styles.pillarLabel}>{pillar.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
