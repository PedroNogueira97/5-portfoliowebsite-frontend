import { useTranslation } from 'react-i18next';
import { Code, Cpu, Globe, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Code size={20} />, href: 'https://github.com/PedroNogueira97', label: 'GitHub' },
        { icon: <Cpu size={20} />, href: 'https://linkedin.com/in/pedronogueiraneto', label: 'LinkedIn' },
        { icon: <Globe size={20} />, href: 'https://twitter.com/pedronogueira', label: 'Twitter' },
        { icon: <Mail size={20} />, href: 'mailto:pedronogueiraneto@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="py-12 border-t border-[var(--color-border)] bg-[var(--color-bg-primary)]">
            <div className="container flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 mb-8"
                >
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300"
                            aria-label={link.label}
                        >
                            {link.icon}
                        </a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center space-y-2"
                >
                    <p className="text-sm text-[var(--color-text-secondary)] mono flex items-center justify-center gap-2">
                        {t('footer.builtWith')}
                        <Heart size={14} className="text-red-500 fill-red-500" />
                        {t('footer.using')}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)] mono uppercase tracking-widest">
                        © {currentYear} — Pedro Nogueira de Moraes Neto
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
