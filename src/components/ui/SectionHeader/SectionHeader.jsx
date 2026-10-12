import styles from "./SectionHeader.module.css";

// label (small caps) + title + subtitle + text. align: center | left. tone: default | inverse
export default function SectionHeader({
    label,
    title,
    subtitle,
    text,
    as: Heading = "h2",
    align = "center",
    tone = "default",
    id,
}) {
    return (
        <header className={[styles.header, styles[align], styles[tone]].join(" ")}>
            {label ? <p className={styles.label}>{label}</p> : null}
            {title ? (
                <Heading id={id} className={styles.title}>
                    {title}
                </Heading>
            ) : null}
            {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
            {text ? <p className={styles.text}>{text}</p> : null}
        </header>
    );
}
