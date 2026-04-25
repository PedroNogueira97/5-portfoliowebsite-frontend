import { useTranslation } from 'react-i18next';

const projectKeys = ['aiJail', 'aiResume', 'lnmWebsite'] as const;

export default function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">
                    <span className="mono accent-text text-xl mr-2">03.</span>
                    {t('projects.title')}
                </h2>
                <p className="section-subtitle mb-12">{t('projects.subtitle')}</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectKeys.map((key) => {
                        const tech = t(`projects.items.${key}.tech`, { returnObjects: true }) as string[];
                        return (
                            <div
                                key={key}
                                className="group p-6 rounded-[var(--radius-xl)] bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent-border)] hover:bg-[var(--color-bg-card-hover)] transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="text-[var(--color-accent)] text-3xl mb-4 mono">&lt;/&gt;</div>
                                <h3 className="text-xl font-semibold mb-3 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
                                    {t(`projects.items.${key}.name`)}
                                </h3>
                                <p className="text-[var(--color-text-secondary)] text-sm mb-4 leading-relaxed">
                                    {t(`projects.items.${key}.description`)}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {tech.map((item) => (
                                        <span
                                            key={item}
                                            className="px-2 py-1 text-xs mono text-[var(--color-text-muted)] bg-[var(--color-bg-tertiary)] rounded-[var(--radius-sm)]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
