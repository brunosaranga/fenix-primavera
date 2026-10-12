import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import PartnerBadge from "../../ui/PartnerBadge/PartnerBadge";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import LogoStrip from "./LogoStrip";
import { useContent } from "../../../hooks/useContent";
import styles from "./Proof.module.css";

// Data-driven and self-hiding: each block renders only if its array has items.
// With no data at all the section renders nothing (the partner badge already
// appears in the hero and the identity band). Set SHOW_FALLBACK to true to show it here too.
const SHOW_FALLBACK = false;
export default function Proof() {
    const { proof } = useContent();
    const hasStats = proof.stats.length > 0;
    const hasTestimonials = proof.testimonials.length > 0;
    const hasLogos = proof.logos.length > 0;

    if (!hasStats && !hasTestimonials && !hasLogos) {
        if (!SHOW_FALLBACK) {
            return null;
        }
        return (
            <section className={styles.fallback} aria-label={proof.fallback}>
                <div className="container">
                    <PartnerBadge />
                </div>
            </section>
        );
    }

    return (
        <section className="section" aria-labelledby="proof-title">
            <div className={`container ${styles.stack}`}>
                <SectionHeader id="proof-title" title={proof.title} />
                {hasStats ? <Stats items={proof.stats} /> : null}
                {hasTestimonials ? <Testimonials items={proof.testimonials} /> : null}
                {hasLogos ? <LogoStrip items={proof.logos} /> : null}
            </div>
        </section>
    );
}
