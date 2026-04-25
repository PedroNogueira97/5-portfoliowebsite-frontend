import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en');
    };

    const navItems = ['about', 'skills', 'projects', 'experience', 'contact'];

    return (
        <header id="header" className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--color-bg-primary)]/80 border-b border-[var(--color-border)]">
            <div className="container flex items-center justify-between h-16">
                <a href="#hero" className="text-xl font-bold mono accent-text">
                    &lt;PN /&gt;
                </a>

                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item, index) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200"
                        >
                            <span className="mono accent-text text-xs mr-1">0{index + 1}.</span>
                            {t(`nav.${item}`)}
                        </a>
                    ))}
                    <a
                        href="/assets/docs/resume.pdf"
                        download
                        className="ml-2 px-4 py-2 text-sm border border-[var(--color-accent)] text-[var(--color-accent)] rounded-[var(--radius-md)] hover:bg-[var(--color-accent-muted)] transition-all duration-200"
                    >
                        {t('nav.downloadResume')}
                    </a>
                    <button
                        onClick={toggleLanguage}
                        className="ml-2 px-3 py-1.5 text-xs mono border border-[var(--color-border-light)] text-[var(--color-text-secondary)] rounded-[var(--radius-sm)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent-border)] transition-all duration-200 cursor-pointer"
                    >
                        {i18n.language === 'en' ? 'PT' : 'EN'}
                    </button>
                </nav>
            </div>
        </header>
    );
}
