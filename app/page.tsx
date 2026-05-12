import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import Section from '@/components/Section';
import styles from './page.module.scss';

interface Section {
    title: string;
    html: string;
}

function parseSections(markdown: string): { intro: string; sections: Section[] } {
    // Strip horizontal rules
    const cleaned = markdown.replace(/\n---\n/g, '\n');

    // Split on ## headings
    const parts = cleaned.split(/\n## /);

    // First part is the intro (H1 + contact + preamble)
    const introRaw = parts[0].trim();
    const introHtml = marked(introRaw) as string;

    // Remaining parts are sections
    const sections: Section[] = parts.slice(1).map((part) => {
        const newlineIndex = part.indexOf('\n');
        const title = newlineIndex === -1 ? part.trim() : part.slice(0, newlineIndex).trim();
        const body = newlineIndex === -1 ? '' : part.slice(newlineIndex + 1).trim();
        const html = marked(body) as string;
        return { title, html };
    });

    return { intro: introHtml, sections };
}

export default function Home() {
    const filePath = path.join(process.cwd(), 'source/joakim-bording-cv.md');
    const markdown = fs.readFileSync(filePath, 'utf-8');
    const { intro, sections } = parseSections(markdown);

    return (
        <main className={styles.main}>
            <div
                className={styles.intro}
                dangerouslySetInnerHTML={{ __html: intro }}
            />
            {sections.map((section) => (
                <Section
                    key={section.title}
                    title={section.title}
                    html={section.html}
                />
            ))}
        </main>
    );
}
