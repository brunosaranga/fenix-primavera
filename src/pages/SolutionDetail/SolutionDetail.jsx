import { useParams } from "react-router-dom";
import Seo from "../../components/layout/Seo/Seo";
import PageHeader from "../../components/layout/PageHeader/PageHeader";
import Button from "../../components/ui/Button/Button";
import CtaBand from "../../components/sections/CtaBand/CtaBand";
import NotFound from "../NotFound/NotFound";
import { useContactModal } from "../../context/ContactModalContext";
import { useContent } from "../../hooks/useContent";

// TODO: extend each item in content/pt/solutions.js with features, screenshots, etc.
export default function SolutionDetail() {
    const { slug } = useParams();
    const { solutions } = useContent();
    const { openContact } = useContactModal();
    const item = solutions.items.find((s) => s.slug === slug);

    if (!item) {
        return <NotFound />;
    }

    return (
        <>
            <Seo title={`${item.name} | Fenix`} description={item.short} />
            <PageHeader label={solutions.title} title={item.name} text={item.short} />
            <section className="section">
                <div className="container">
                    <Button onClick={() => openContact(item.name)}>{solutions.ctaLabel}</Button>
                </div>
            </section>
            <CtaBand />
        </>
    );
}
