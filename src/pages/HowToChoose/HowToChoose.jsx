import Seo from "../../components/layout/Seo/Seo";
import PageHeader from "../../components/layout/PageHeader/PageHeader";
import Comparison from "../../components/sections/Comparison/Comparison";
import CtaBand from "../../components/sections/CtaBand/CtaBand";
import { useContent } from "../../hooks/useContent";
import styles from "./HowToChoose.module.css";

// Full comparison: sticky tabs, cards with checks, full table, FAQ.
// TODO (optional): "Qual é a melhor opção para si?" mini-quiz between table and FAQ.
export default function HowToChoose() {
    const { pages, comparisons } = useContent();
    const page = pages.howToChoose;

    return (
        <>
            <Seo title={page.seo.title} description={page.seo.description} />
            <PageHeader label={comparisons.label} title={comparisons.title} text={page.intro} />
            <Comparison variant="full" showHeader={false} />

            <section className="section" aria-labelledby="faq-title">
                <div className={`container ${styles.faq}`}>
                    <h2 id="faq-title">{comparisons.faq.title}</h2>
                    <div className={styles.items}>
                        {comparisons.faq.items.map((item) => (
                            <details key={item.q} className={styles.item}>
                                <summary>{item.q}</summary>
                                <p>{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBand />
        </>
    );
}
