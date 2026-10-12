import { Link } from "react-router-dom";
import wordmark from "../../../assets/logos/fenix-wordmark.svg";
import wordmarkInverse from "../../../assets/logos/fenix-wordmark-inverse.svg";
import mark from "../../../assets/logos/fenix-mark.svg";
import { useTheme } from "../../../context/ThemeContext";
import styles from "./Logo.module.css";

// variant: "full" (wordmark) | "collapsible" (wordmark ↔ square mark, cross-fade)
// tone: "auto" (follows the theme) | "default" | "inverse" (white, for dark backgrounds)
export default function Logo({ variant = "full", tone = "auto", compact = false, link = true, className = "" }) {
    const { theme } = useTheme();
    const resolvedTone = tone === "auto" ? (theme === "dark" ? "inverse" : "default") : tone;
    const src = resolvedTone === "inverse" ? wordmarkInverse : wordmark;

    const image =
        variant === "collapsible" ? (
            <span className={[styles.collapsible, compact ? styles.isCompact : ""].join(" ")}>
                <img src={src} alt="Fenix Logistics & Services" className={styles.wordmark} />
                <img src={mark} alt="" aria-hidden="true" className={styles.mark} />
            </span>
        ) : (
            <img src={src} alt="Fenix Logistics & Services" className={styles.wordmark} />
        );

    if (!link) {
        return <span className={className}>{image}</span>;
    }

    return (
        <Link to="/" className={[styles.link, className].join(" ")} aria-label="Fenix: início">
            {image}
        </Link>
    );
}
