import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import styles from "./PageHeader.module.css";

// Top of every inner page: clears the fixed navbar and reuses the hero gradient.
export default function PageHeader({ label, title, text }) {
    return (
        <div className={styles.header}>
            <div className="container">
                <SectionHeader as="h1" label={label} title={title} text={text} align="left" />
            </div>
        </div>
    );
}
