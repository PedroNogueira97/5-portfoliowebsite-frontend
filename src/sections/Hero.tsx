import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section id="hero" className="min-h-screen flex items-center pt-16">
            <div className="container">
                <div className="max-w-3xl">
                    <p className="mono accent-text text-sm mb-4">{t('hero.greeting')}</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-text-primary)] mb-2">
                        {t('hero.name')}
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-muted)] mb-6">
                        {t('hero.role')}
                    </h2>
                    <p className="text-[var(--color-text-secondary)] max-w-xl mb-8 text-lg leading-relaxed">
                        {t('hero.description')}
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-[var(--radius-md)] hover:bg-[var(--color-accent-muted)] transition-all duration-200 mono text-sm"
                        >
                            {t('hero.viewWork')}
                        </a>
                        <a
                            href="https://linkedin.com/in/pedronogueiraneto"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200 text-sm"
                        >
                            {t('hero.linkedin')} →
                        </a>
                        <a
                            href="https://github.com/PedroNogueira97"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200 text-sm"
                        >
                            {t('hero.github')} →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
