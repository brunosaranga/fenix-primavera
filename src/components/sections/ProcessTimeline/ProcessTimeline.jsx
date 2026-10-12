import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import { useContent } from "../../../hooks/useContent";
import { useInView } from "../../../hooks/useInView";
import styles from "./ProcessTimeline.module.css";

const pad = (n) => String(n).padStart(2, "0");

export default function ProcessTimeline() {
    const { process } = useContent();
    const [ref, inView] = useInView({ threshold: 0.25 });
    let counter = 0;

    return (
        <section className="section" aria-labelledby="process-title">
            <div className="container">
                <SectionHeader
                    id="process-title"
                    title={process.title}
                    subtitle={process.subtitle}
                    text={process.text}
                />

                <div ref={ref} className={styles.phases} data-visible={inView}>
                    {process.phases.map((phase) => (
                        <div key={phase.title} className={styles.phase}>
                            <h3 className={styles.phaseTitle}>{phase.title}</h3>
                            <ol className={styles.steps}>
                                {phase.steps.map((step) => {
                                    counter += 1;
                                    return (
                                        <li
                                            key={step.title}
                                            className={styles.step}
                                            style={{ transitionDelay: `${counter * 80}ms` }}
                                        >
                                            <p className={styles.stepTitle}>
                                                <span className={styles.number}>{pad(counter)}</span>
                                                {step.title}
                                            </p>
                                            <p className={styles.stepText}>{step.text}</p>
                                        </li>
                                    );
                                })}
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
