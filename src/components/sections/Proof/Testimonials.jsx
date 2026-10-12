import Card from "../../ui/Card/Card";
import Chip from "../../ui/Chip/Chip";
import styles from "./Proof.module.css";

export default function Testimonials({ items }) {
    return (
        <ul className={styles.testimonials}>
            {items.map((item) => (
                <li key={`${item.name}-${item.company}`}>
                    <Card as="figure" className={styles.testimonial}>
                        <blockquote className={styles.quote}>“{item.quote}”</blockquote>
                        <figcaption className={styles.author}>
                            {item.logo ? <img src={item.logo} alt="" className={styles.authorLogo} /> : null}
                            <span>
                                <strong>{item.name}</strong>
                                <span className={styles.role}>
                                    {item.role}, {item.company}
                                </span>
                            </span>
                        </figcaption>
                        <div className={styles.chips}>
                            {item.sector ? <Chip>{item.sector}</Chip> : null}
                            {(item.modules ?? []).map((module) => (
                                <Chip key={module}>{module}</Chip>
                            ))}
                        </div>
                    </Card>
                </li>
            ))}
        </ul>
    );
}
