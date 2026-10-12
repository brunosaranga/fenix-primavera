import Card from "../../ui/Card/Card";
import Icon from "../../ui/Icon/Icon";
import styles from "./Comparison.module.css";

// A <button>, so it works with keyboard and screen readers, not just hover.
export default function OptionCard({ option, showChecks, labels, onSelect }) {
    return (
        <Card as="button" type="button" interactive className={styles.card} onClick={onSelect}>
            <span className={styles.cardIcon}>
                <Icon name={option.icon} size={32} />
            </span>
            <span className={styles.cardTitle}>{option.title}</span>
            <span className={styles.cardShort}>{option.short}</span>

            {showChecks ? (
                <span className={styles.checks}>
                    {option.checks.map((check) => (
                        <span key={check} className={styles.check}>
                            <Icon name="check" size={18} />
                            {check}
                        </span>
                    ))}
                </span>
            ) : null}

            <span className={styles.ideal}>
                <strong>{labels.idealForLabel}:</strong> {option.idealFor}
            </span>
            <span className={styles.cardLink}>{labels.openDetailsLabel} →</span>
        </Card>
    );
}
