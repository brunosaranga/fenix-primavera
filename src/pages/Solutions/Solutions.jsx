import { Link } from "react-router-dom";
import Seo from "../../components/layout/Seo/Seo";
import PageHeader from "../../components/layout/PageHeader/PageHeader";
import Card from "../../components/ui/Card/Card";
import Icon from "../../components/ui/Icon/Icon";
import CtaBand from "../../components/sections/CtaBand/CtaBand";
import { useContent } from "../../hooks/useContent";
import styles from "./Solutions.module.css";

export default function Solutions() {
    const { solutions } = useContent();

    return (
        <>
            <Seo title={solutions.seo.title} description={solutions.seo.description} />
            <PageHeader title={solutions.title} text={solutions.subtitle} />
            <section className="section">
                <ul className={`container ${styles.grid}`}>
                    {solutions.items.map((item) => (
                        <li key={item.slug}>
                            <Card as={Link} to={`/solucoes/${item.slug}`} interactive className={styles.card}>
                                <span className={styles.icon}>
                                    <Icon name={item.icon} size={28} />
                                </span>
                                <h2 className={styles.name}>{item.name}</h2>
                                <p className={styles.short}>{item.short}</p>
                            </Card>
                        </li>
                    ))}
                </ul>
            </section>
            <CtaBand />
        </>
    );
}
