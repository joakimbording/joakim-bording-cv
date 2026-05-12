import './globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Joakim Bording – CV',
    description: 'Produktdesigner og frontend-utvikler med 15 års erfaring.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="no">
            <body>{children}</body>
        </html>
    );
}
