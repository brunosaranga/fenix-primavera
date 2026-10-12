import { useLocale } from "../../../context/LocaleContext";
import { useContent } from "../../../hooks/useContent";
import Icon from "../Icon/Icon";
import styles from "./LocaleToggle.module.css";

// Cycles through available locales. With only "pt" it simply shows PT.
export default function LocaleToggle() {
    const { locale, locales, cycleLocale } = useLocale();
    const { common } = useContent();
    const single = locales.length < 2;

    return (
        <button
            type="button"
            className={styles.toggle}
            onClick={cycleLocale}
            disabled={single}
            aria-label={common.localeToggle}
            title={common.localeToggle}
        >
            <Icon name="globe" size={16} />
            <span>{locale.toUpperCase()}</span>
        </button>
    );
}
