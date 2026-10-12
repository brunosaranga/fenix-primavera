import Seo from "../../components/layout/Seo/Seo";
import Hero from "../../components/sections/Hero/Hero";
import PainPoints from "../../components/sections/PainPoints/PainPoints";
import IdentityBand from "../../components/sections/IdentityBand/IdentityBand";
import Benefits from "../../components/sections/Benefits/Benefits";
import Comparison from "../../components/sections/Comparison/Comparison";
import ProcessTimeline from "../../components/sections/ProcessTimeline/ProcessTimeline";
import Proof from "../../components/sections/Proof/Proof";
import CtaBand from "../../components/sections/CtaBand/CtaBand";
import { useContent } from "../../hooks/useContent";

export default function Home() {
    const { home } = useContent();

    return (
        <>
            <Seo title={home.seo.title} description={home.seo.description} />
            <Hero />
            <PainPoints />
            <IdentityBand />
            <Benefits />
            <Comparison variant="compact" />
            <ProcessTimeline />
            <Proof />
            <CtaBand />
        </>
    );
}
