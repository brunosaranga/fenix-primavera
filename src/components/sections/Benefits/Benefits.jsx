import Card from "../../ui/Card/Card";
import Icon from "../../ui/Icon/Icon";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import { useContent } from "../../../hooks/useContent";
import styles from "./Benefits.module.css";

export default function Benefits() {
    const { home } = useContent();
    const { benefits } = home;

    return (
        <section className="section" aria-labelledby="benefits-title">
            <div className="container">
                <SectionHeader id="benefits-title" title={benefits.title} />
                <ul className={styles.grid}>
                    {benefits.items.map((item) => (
                        <li key={item.title}>
                            <Card className={styles.card}>
                                <h3 className={styles.title}>{item.title}</h3>
                                <span className={styles.icon}>
                                    <Icon name={item.icon} size={40} />
                                </span>
                            </Card>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
