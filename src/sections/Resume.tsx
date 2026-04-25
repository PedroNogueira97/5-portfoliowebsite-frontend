import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileDown, Terminal } from 'lucide-react';

export default function Resume() {
    const { t } = useTranslation();

    return (
        <section id="resume" className="bg-[var(--color-bg-secondary)] py-24">
            <div className="container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="inline-block p-3 rounded-full bg-[var(--color-accent-muted)] text-[var(--color-accent)] mb-6">
                        <Terminal size={32} />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--color-text-primary)]">
                        {t('resume.title')}
                    </h2>

                    <p className="text-[var(--color-text-secondary)] mb-10 text-lg leading-relaxed">
                        {t('resume.subtitle')}
                    </p>

                    <a
                        href="/assets/docs/resume.pdf"
                        download
                        className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-bold rounded-[var(--radius-sm)] hover:bg-[var(--color-accent-hover)] transition-all duration-300 shadow-lg shadow-[var(--color-accent-muted)] active:scale-95"
                    >
                        <FileDown size={20} />
                        {t('resume.button')}
                    </a>

                    <div className="mt-12 flex justify-center gap-8 text-[var(--color-text-muted)] mono text-xs uppercase tracking-widest">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                            PDF Version
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] opacity-50" />
                            v2.1.0
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
