import { useRef } from "react";
import styles from "./Tabs.module.css";

// Accessible tab list (arrow keys, Home/End). The parent renders the panel:
//   <Tabs tabs={[{ id, label }]} value={active} onChange={setActive} idPrefix="cmp" />
//   <div role="tabpanel" id={`cmp-panel-${active}`} aria-labelledby={`cmp-tab-${active}`}>…</div>
export default function Tabs({ tabs, value, onChange, idPrefix, label, sticky = false }) {
    const refs = useRef([]);

    const onKeyDown = (event, index) => {
        let next = null;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = tabs.length - 1;
        if (next !== null) {
            event.preventDefault();
            onChange(tabs[next].id);
            refs.current[next]?.focus();
        }
    };

    return (
        <div className={[styles.wrap, sticky ? styles.sticky : ""].join(" ")}>
            <div role="tablist" aria-label={label} className={styles.list}>
                {tabs.map((tab, index) => {
                    const selected = tab.id === value;
                    return (
                        <button
                            key={tab.id}
                            ref={(el) => {
                                refs.current[index] = el;
                            }}
                            type="button"
                            role="tab"
                            id={`${idPrefix}-tab-${tab.id}`}
                            aria-selected={selected}
                            aria-controls={`${idPrefix}-panel-${tab.id}`}
                            tabIndex={selected ? 0 : -1}
                            className={[styles.tab, selected ? styles.active : ""].join(" ")}
                            onClick={() => onChange(tab.id)}
                            onKeyDown={(event) => onKeyDown(event, index)}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
