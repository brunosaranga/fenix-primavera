import styles from "./Proof.module.css";

export default function LogoStrip({ items }) {
    return (
        <ul className={styles.logos}>
            {items.map((logo) => (
                <li key={logo.name}>
                    <img src={logo.src} alt={logo.name} className={styles.logo} />
                </li>
            ))}
        </ul>
    );
}
