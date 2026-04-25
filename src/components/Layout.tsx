import type { ReactNode } from 'react';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-[var(--color-bg-primary)] overflow-x-hidden selection:bg-[var(--color-bg-tertiary)] selection:text-[var(--color-accent)]">
            <Header />
            <div id="content">
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}
