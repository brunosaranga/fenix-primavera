import { Link } from "react-router-dom";
import styles from "./Button.module.css";

// One button for everything:
//   <Button to="/solucoes">            → router link
//   <Button href="https://…">          → external link (opens in new tab)
//   <Button onClick={…}>               → <button>
// variant: primary | secondary | inverse | whatsapp    size: md | sm
export default function Button({
    children,
    to,
    href,
    variant = "primary",
    size = "md",
    icon,
    className = "",
    ...rest
}) {
    const classes = [styles.button, styles[variant], styles[size], className].join(" ");
    const inner = (
        <>
            {icon ? <span className={styles.icon}>{icon}</span> : null}
            <span>{children}</span>
        </>
    );

    if (to) {
        return (
            <Link to={to} className={classes} {...rest}>
                {inner}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
                {inner}
            </a>
        );
    }

    return (
        <button type="button" className={classes} {...rest}>
            {inner}
        </button>
    );
}
