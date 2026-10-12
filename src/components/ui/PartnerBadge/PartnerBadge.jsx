import { useContent } from "../../../hooks/useContent";
import styles from "./PartnerBadge.module.css";

// Shows the official badge image once it's set in content/pt/common.js;
// until then, a text placeholder with the same proportions.
export default function PartnerBadge({ tone = "default", showLabel = true }) {
    const { common } = useContent();
    const { label, tier, image } = common.partnerBadge;

    return (
        <div className={[styles.badge, styles[tone]].join(" ")}>
            {showLabel ? <p className={styles.label}>{label}</p> : null}
            {image ? (
                <img src={image} alt={`Cegid Partner ${tier}`} className={styles.image} />
            ) : (
                <div className={styles.placeholder} aria-label={`Cegid Partner ${tier}`} role="img">
                    <span className={styles.wordmark}>
                        <strong>cegid</strong> <em>partner</em>
                    </span>
                    <span className={styles.tier}>{tier}</span>
                </div>
            )}
        </div>
    );
}
