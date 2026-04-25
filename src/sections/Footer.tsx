import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-[var(--color-border)]">
            <div className="container text-center">
                <div className="flex justify-center gap-6 mb-6">
                    <a
                        href="https://linkedin.com/in/pedronogueiraneto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/PedroNogueira97"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
                    >
                        GitHub
                    </a>
                    <a
                        href="mailto:pedronogueiraneto@gmail.com"
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
                    >
                        Email
                    </a>
                </div>

                <p className="text-sm text-[var(--color-text-muted)] mono">
                    {t('footer.builtWith')} ♥ {t('footer.using')}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-2">
                    © {currentYear} Pedro Nogueira. {t('footer.rights')}
                </p>
            </div>
        </footer>
    );
}
