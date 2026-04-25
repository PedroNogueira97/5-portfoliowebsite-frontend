import { useTranslation } from 'react-i18next';

export default function Resume() {
    const { t } = useTranslation();

    return (
        <section id="resume" className="bg-[var(--color-bg-secondary)]">
            <div className="container text-center">
                <h2 className="section-title">
                    <span className="mono accent-text text-xl mr-2">06.</span>
                    {t('resume.title')}
                </h2>
                <p className="section-subtitle mx-auto mb-8">{t('resume.description')}</p>
                <a
                    href="/assets/docs/resume.pdf"
                    download
                    className="inline-block px-8 py-4 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-[var(--radius-md)] hover:bg-[var(--color-accent-muted)] transition-all duration-200 mono text-sm font-medium"
                >
                    ↓ {t('resume.download')}
                </a>
            </div>
        </section>
    );
}
