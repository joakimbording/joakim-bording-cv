import styles from './Section.module.scss';

interface SectionProps {
    title: string;
    html: string;
}

export default function Section({ title, html }: SectionProps) {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </section>
    );
}
