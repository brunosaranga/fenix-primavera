import Seo from "../../components/layout/Seo/Seo";
import PageHeader from "../../components/layout/PageHeader/PageHeader";
import IdentityBand from "../../components/sections/IdentityBand/IdentityBand";
import ProcessTimeline from "../../components/sections/ProcessTimeline/ProcessTimeline";
import CtaBand from "../../components/sections/CtaBand/CtaBand";
import { useContent } from "../../hooks/useContent";

export default function About() {
    const { pages } = useContent();
    const page = pages.about;

    return (
        <>
            <Seo title={page.seo.title} description={page.seo.description} />
            <PageHeader label={page.label} title={page.title} text={page.text} />
            <IdentityBand />
            <ProcessTimeline />
            <CtaBand />
        </>
    );
}
