import { useTranslation } from 'react-i18next';

const skillData = {
    backend: [
        'PHP', 'Python', 'JavaScript', 'TypeScript', 'Java', 'Bash',
        'Symfony', 'Laravel', 'Zend', 'FastAPI', 'Node.js',
    ],
    ai: [
        'LLM APIs', 'Claude', 'Gemini', 'OpenAI', 'LangChain',
        'RAG', 'Prompt Engineering', 'Agent Engineering', 'MCPs',
    ],
    infra: [
        'MySQL', 'Elasticsearch', 'MongoDB', 'Redis',
        'Docker', 'GitHub Actions', 'Nginx', 'Linux', 'AWS', 'Zabbix',
    ],
};

export default function Skills() {
    const { t } = useTranslation();

    const competencies = t('skills.competencyItems', { returnObjects: true }) as string[];

    return (
        <section id="skills" className="bg-[var(--color-bg-secondary)]">
            <div className="container">
                <h2 className="section-title">
                    <span className="mono accent-text text-xl mr-2">02.</span>
                    {t('skills.title')}
                </h2>
                <p className="section-subtitle mb-12">{t('skills.subtitle')}</p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {Object.entries(skillData).map(([category, skills]) => (
                        <div key={category} className="p-6 rounded-[var(--radius-xl)] bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent-border)] transition-colors duration-200">
                            <h3 className="text-lg font-semibold mb-4 accent-text mono">
                                {t(`skills.categories.${category}`)}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-xs mono bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] rounded-[var(--radius-sm)] border border-[var(--color-border)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent-border)] transition-colors duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Core Competencies */}
                <div className="p-6 rounded-[var(--radius-xl)] bg-[var(--color-bg-card)] border border-[var(--color-border)]">
                    <h3 className="text-lg font-semibold mb-4 accent-text mono">
                        {t('skills.coreCompetencies')}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {competencies.map((item) => (
                            <span
                                key={item}
                                className="px-4 py-2 text-sm bg-[var(--color-accent-muted)] text-[var(--color-accent)] rounded-[var(--radius-md)] border border-[var(--color-accent-border)] mono"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
