import Modal from "../../ui/Modal/Modal";
import Icon from "../../ui/Icon/Icon";
import Button from "../../ui/Button/Button";
import { useContactModal } from "../../../context/ContactModalContext";
import { useContent } from "../../../hooks/useContent";
import styles from "./Comparison.module.css";

// Everything about the clicked option: description, checks, ideal for,
// and its column from the comparison table (incl. where it's installed).
export default function OptionModal({ selection, labels, onClose }) {
    const { openContact } = useContactModal();
    const { common } = useContent();

    const group = selection?.group;
    const index = selection?.optionIndex ?? 0;
    const option = group?.options[index];

    return (
        <Modal open={Boolean(option)} onClose={onClose} title={option?.title ?? ""} closeLabel={common.modalClose} size="lg">
            {option ? (
                <div className={styles.modal}>
                    <p className={styles.modalDescription}>{option.description}</p>

                    <ul className={styles.modalChecks}>
                        {option.checks.map((check) => (
                            <li key={check} className={styles.check}>
                                <Icon name="check" size={18} />
                                {check}
                            </li>
                        ))}
                    </ul>

                    <p className={styles.ideal}>
                        <strong>{labels.idealForLabel}:</strong> {option.idealFor}
                    </p>

                    <h3 className={styles.modalSubtitle}>{labels.detailsLabel}</h3>
                    <dl className={styles.details}>
                        {group.rows.map((row) => (
                            <div key={row.label} className={styles.detailRow}>
                                <dt>{row.label}</dt>
                                <dd>{row.values[index]}</dd>
                            </div>
                        ))}
                    </dl>

                    <div className={styles.modalActions}>
                        <Button
                            onClick={() => {
                                onClose();
                                openContact();
                            }}
                        >
                            {common.ctaPrimary}
                        </Button>
                    </div>
                </div>
            ) : null}
        </Modal>
    );
}
