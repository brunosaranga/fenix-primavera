import Seo from "../../components/layout/Seo/Seo";
import PageHeader from "../../components/layout/PageHeader/PageHeader";
import CtaBand from "../../components/sections/CtaBand/CtaBand";
import { useContent } from "../../hooks/useContent";

// TODO: sections for this page once Fenix confirms the content.
export default function Training() {
    const { pages } = useContent();
    const page = pages.training;

    return (
        <>
            <Seo title={page.seo.title} description={page.seo.description} />
            <PageHeader label={page.label} title={page.title} text={page.text} />
            <div className="section" />
            <CtaBand />
        </>
    );
}
