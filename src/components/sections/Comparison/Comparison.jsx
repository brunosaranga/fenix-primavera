import { useState } from "react";
import { Link } from "react-router-dom";
import Tabs from "../../ui/Tabs/Tabs";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import OptionCard from "./OptionCard";
import OptionModal from "./OptionModal";
import ComparisonTable from "./ComparisonTable";
import { useContent } from "../../../hooks/useContent";
import styles from "./Comparison.module.css";

// variant="compact": landing (cards + link to full page)
// variant="full":    /como-escolher (sticky tabs, cards with checks, full table)
export default function Comparison({ variant = "compact", showHeader = true }) {
    const { comparisons } = useContent();
    const [activeGroupId, setActiveGroupId] = useState(comparisons.groups[0].id);
    const [selected, setSelected] = useState(null); // { group, optionIndex }

    const group = comparisons.groups.find((g) => g.id === activeGroupId);
    const isFull = variant === "full";

    return (
        <section className={`section ${styles.section}`} aria-labelledby={showHeader ? "comparison-title" : undefined}>
            <div className="container">
                {showHeader ? (
                    <SectionHeader
                        id="comparison-title"
                        label={comparisons.label}
                        title={comparisons.title}
                        text={comparisons.subtitle}
                    />
                ) : null}

                <Tabs
                    tabs={comparisons.groups.map((g) => ({ id: g.id, label: g.tab }))}
                    value={activeGroupId}
                    onChange={setActiveGroupId}
                    idPrefix="cmp"
                    label={comparisons.title}
                    sticky={isFull}
                />

                <div
                    role="tabpanel"
                    id={`cmp-panel-${group.id}`}
                    aria-labelledby={`cmp-tab-${group.id}`}
                    className={styles.panel}
                >
                    <div className={styles.cards}>
                        {group.options.map((option, index) => (
                            <OptionCard
                                key={option.id}
                                option={option}
                                showChecks={isFull}
                                labels={comparisons}
                                onSelect={() => setSelected({ group, optionIndex: index })}
                            />
                        ))}
                    </div>

                    {isFull ? <ComparisonTable group={group} /> : null}
                </div>

                {!isFull ? (
                    <p className={styles.more}>
                        <Link to={comparisons.moreLink.to}>{comparisons.moreLink.label} →</Link>
                    </p>
                ) : null}
            </div>

            <OptionModal selection={selected} labels={comparisons} onClose={() => setSelected(null)} />
        </section>
    );
}
