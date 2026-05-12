import styles from './CVSection.module.scss';

interface CVSectionProps {
    title: string;
    html: string;
}

export default function CVSection({ title, html }: CVSectionProps) {
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
