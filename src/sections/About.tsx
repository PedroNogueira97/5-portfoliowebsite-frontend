import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    const educationItems = [
        { key: 'degree', provider: 'university' },
        { key: 'postgrad', provider: 'postgradUniversity' },
        { key: 'certAI', provider: 'certAIProvider' },
        { key: 'certScrum', provider: 'certScrumProvider' },
    ];

    const languageKeys = ['english', 'spanish', 'portuguese'];

    return (
        <section id="about">
            <div className="container">
                <h2 className="section-title">
                    <span className="mono accent-text text-xl mr-2">01.</span>
                    {t('about.title')}
                </h2>
                <p className="text-[var(--color-text-secondary)] max-w-2xl mb-12 text-lg leading-relaxed">
                    {t('about.description')}
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 accent-text mono">
                            {t('about.education')}
                        </h3>
                        <div className="space-y-4">
                            {educationItems.map(({ key, provider }) => (
                                <div key={key} className="p-4 rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent-border)] transition-colors duration-200">
                                    <p className="font-medium text-[var(--color-text-primary)]">
                                        {t(`about.educationItems.${key}`)}
                                    </p>
                                    <p className="text-sm text-[var(--color-text-muted)] mono">
                                        {t(`about.educationItems.${provider}`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 accent-text mono">
                            {t('about.languages')}
                        </h3>
                        <div className="space-y-4">
                            {languageKeys.map((key) => (
                                <div key={key} className="p-4 rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent-border)] transition-colors duration-200">
                                    <p className="text-[var(--color-text-primary)]">
                                        {t(`about.languageItems.${key}`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
