import styles from "./Comparison.module.css";

// Real <table> on desktop; each row becomes a small card on mobile (CSS).
export default function ComparisonTable({ group }) {
    const [a, b] = group.options;

    return (
        <table className={styles.table}>
            <caption className="visually-hidden">
                {a.title} vs {b.title}
            </caption>
            <thead>
                <tr>
                    <td />
                    <th scope="col">{a.title}</th>
                    <th scope="col">{b.title}</th>
                </tr>
            </thead>
            <tbody>
                {group.rows.map((row) => (
                    <tr key={row.label}>
                        <th scope="row">{row.label}</th>
                        <td data-label={a.title}>{row.values[0]}</td>
                        <td data-label={b.title}>{row.values[1]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
