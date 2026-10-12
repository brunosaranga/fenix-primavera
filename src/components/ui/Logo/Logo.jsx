import { Link } from "react-router-dom";
import wordmark from "../../../assets/logos/fenix-wordmark.svg";
import wordmarkInverse from "../../../assets/logos/fenix-wordmark-inverse.svg";
import wordmarkCenter from "../../../assets/logos/fenix-wordmark-center.svg";
import wordmarkCenterInverse from "../../../assets/logos/fenix-wordmark-center-inverse.svg";
import phoenix from "../../../assets/logos/fenix-phoenix.svg";
import phoenixInverse from "../../../assets/logos/fenix-phoenix-inverse.svg";
import { useTheme } from "../../../context/ThemeContext";
import styles from "./Logo.module.css";

const SOURCES = {
    wordmark: { default: wordmark, inverse: wordmarkInverse },
    wordmarkCenter: { default: wordmarkCenter, inverse: wordmarkCenterInverse },
    phoenix: { default: phoenix, inverse: phoenixInverse },
};

const ALT = "Fenix Logistics & Services";

// variant:
//   "full"        → text logo, left-aligned (default)
//   "center"      → text logo, centred version (centred layouts, e.g. the identity band)
//   "mark"        → phoenix only (footer, etc.)
//   "collapsible" → text logo ↔ phoenix cross-fade (navbar)
// tone: "auto" (follows theme) | "default" (light backgrounds) | "inverse" (dark backgrounds)
export default function Logo({ variant = "full", tone = "auto", compact = false, link = true, className = "" }) {
    const { theme } = useTheme();
    const resolved = tone === "auto" ? (theme === "dark" ? "inverse" : "default") : tone;
    const src = (name) => SOURCES[name][resolved];

    let image;
    if (variant === "mark") {
        image = <img src={src("phoenix")} alt={ALT} className={styles.mark} />;
    } else if (variant === "center") {
        image = <img src={src("wordmarkCenter")} alt={ALT} className={styles.wordmarkCenter} />;
    } else if (variant === "collapsible") {
        image = (
            <span className={[styles.collapsible, compact ? styles.isCompact : ""].join(" ")}>
                <img src={src("wordmark")} alt={ALT} className={styles.wordmark} />
                <img src={src("phoenix")} alt="" aria-hidden="true" className={styles.collapsedMark} />
            </span>
        );
    } else {
        image = <img src={src("wordmark")} alt={ALT} className={styles.wordmark} />;
    }

    if (!link) {
        return <span className={className}>{image}</span>;
    }

    return (
        <Link to="/" className={[styles.link, className].join(" ")} aria-label="Fenix: início">
            {image}
        </Link>
    );
}