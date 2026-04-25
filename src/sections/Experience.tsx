import { useTranslation } from 'react-i18next';

const experienceKeys = ['lnm', 'arca', 'experience', 'twoRS'] as const;

export default function Experience() {
    const { t } = useTranslation();

    return (
        <section id="experience" className="bg-[var(--color-bg-secondary)]">
            <div className="container">
                <h2 className="section-title">
                    <span className="mono accent-text text-xl mr-2">04.</span>
                    {t('experience.title')}
                </h2>
                <p className="section-subtitle mb-12">{t('experience.subtitle')}</p>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[var(--color-border)]" />

                    <div className="space-y-8">
                        {experienceKeys.map((key) => (
                            <div key={key} className="relative pl-8 md:pl-20">
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-8 top-6 w-3 h-3 -translate-x-1.5 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-bg-primary)]" />

                                <div className="p-6 rounded-[var(--radius-xl)] bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent-border)] transition-colors duration-200">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                                            {t(`experience.items.${key}.role`)}
                                        </h3>
                                        <span className="mono text-xs text-[var(--color-text-muted)]">
                                            {t(`experience.items.${key}.period`)}
                                        </span>
                                    </div>
                                    <p className="accent-text mono text-sm mb-3">
                                        @ {t(`experience.items.${key}.company`)}
                                    </p>
                                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                        {t(`experience.items.${key}.description`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
