import Button from "../../ui/Button/Button";
import PartnerBadge from "../../ui/PartnerBadge/PartnerBadge";
import { useContactModal } from "../../../context/ContactModalContext";
import { useContent } from "../../../hooks/useContent";
import styles from "./Hero.module.css";

export default function Hero() {
    const { home, common } = useContent();
    const { openContact } = useContactModal();
    const { hero } = home;

    return (
        <section className={styles.hero} aria-labelledby="hero-title">
            <div className={`container ${styles.grid}`}>
                <div className={styles.copy}>
                    <h1 id="hero-title" className={styles.title}>
                        {hero.title}
                    </h1>
                    <p className={styles.subtitle}>{hero.subtitle}</p>
                    <div className={styles.actions}>
                        <Button onClick={() => openContact()}>{common.ctaPrimary}</Button>
                        <Button variant="secondary" to={hero.secondaryCta.to}>
                            {hero.secondaryCta.label}
                        </Button>
                    </div>
                </div>

                <div className={styles.visual}>
                    {hero.image ? (
                        <img src={hero.image} alt={hero.imageAlt} className={styles.image} />
                    ) : (
                        <div className={styles.placeholder} role="img" aria-label={hero.imageAlt}>
                            <span>Imagem hero (content/pt/home.js → hero.image)</span>
                        </div>
                    )}
                    <PartnerBadge />
                </div>
            </div>
        </section>
    );
}
