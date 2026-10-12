import { useTheme } from "../../../context/ThemeContext";
import { useContent } from "../../../hooks/useContent";
import Icon from "../Icon/Icon";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const { common } = useContent();
    const label = theme === "dark" ? common.themeToggle.toLight : common.themeToggle.toDark;

    return (
        <button type="button" className={styles.toggle} onClick={toggleTheme} aria-label={label} title={label}>
            <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
        </button>
    );
}
