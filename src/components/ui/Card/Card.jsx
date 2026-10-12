import styles from "./Card.module.css";

// Plain surface with border + radius. Pass `as="button"` for clickable cards.
export default function Card({ as: Tag = "div", className = "", interactive = false, children, ...rest }) {
    const classes = [styles.card, interactive ? styles.interactive : "", className].join(" ");
    return (
        <Tag className={classes} {...rest}>
            {children}
        </Tag>
    );
}
