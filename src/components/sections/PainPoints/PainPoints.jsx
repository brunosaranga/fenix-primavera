import { useContent } from "../../../hooks/useContent";
import { useInView } from "../../../hooks/useInView";
import styles from "./PainPoints.module.css";

function CurvedArrow() {
    return (
        <svg className={styles.arrow} viewBox="0 0 32 64" fill="none" aria-hidden="true">
            <path d="M18 4 C 2 18, 2 42, 22 56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M14 57 L 23 57 L 21 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function PainPoints() {
    const { home } = useContent();
    const [ref, inView] = useInView();
    const { painPoints } = home;

    return (
        <section className={styles.section} aria-labelledby="pain-title">
            <div className="container">
                <h2 id="pain-title" className={styles.label}>
                    {painPoints.label}
                </h2>
                <ul ref={ref} className={styles.grid}>
                    {painPoints.items.map((item, index) => (
                        <li
                            key={item.problem}
                            className={`reveal ${inView ? "is-visible" : ""} ${styles.item}`}
                            style={{ transitionDelay: `${index * 120}ms` }}
                        >
                            <p className={styles.problem}>{item.problem}</p>
                            <CurvedArrow />
                            <p className={styles.solution}>{item.solution}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
