import styles from "./Proof.module.css";

export default function Stats({ items }) {
    return (
        <dl className={styles.stats}>
            {items.map((item) => (
                <div key={item.label} className={styles.stat}>
                    <dt className={styles.statLabel}>{item.label}</dt>
                    <dd className={styles.statValue}>{item.value}</dd>
                </div>
            ))}
        </dl>
    );
}
