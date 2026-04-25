import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = ['about', 'skills', 'projects', 'experience', 'contact'];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Simple ScrollSpy logic
            const sections = ['hero', ...navItems];
            const scrollPos = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en');
    };

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center',
                isScrolled ? 'glass h-16 shadow-lg' : 'bg-transparent'
            )}
        >
            <div className="container flex items-center justify-between">
                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    href="#hero"
                    className="text-2xl font-bold mono accent-text group select-none"
                >
                    <span className="group-hover:text-[var(--color-text-primary)] transition-colors duration-300">&lt;</span>
                    PN
                    <span className="group-hover:text-[var(--color-text-primary)] transition-colors duration-300"> /&gt;</span>
                </motion.a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            href={`#${item}`}
                            className={cn(
                                'text-sm transition-all duration-300 hover:text-[var(--color-accent)]',
                                activeSection === item ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-secondary)]'
                            )}
                        >
                            <span className="mono accent-text text-xs mr-1 opacity-70">0{index + 1}.</span>
                            {t(`nav.${item}`)}
                        </motion.a>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        className="flex items-center gap-4 ml-4"
                    >
                        <button
                            onClick={toggleLanguage}
                            className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 text-xs mono"
                            title={i18n.language === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
                        >
                            <Globe size={16} />
                            {i18n.language.toUpperCase()}
                        </button>

                        <a
                            href="/assets/docs/resume.pdf"
                            download
                            className="px-5 py-2.5 text-xs border border-[var(--color-accent)] text-[var(--color-accent)] rounded-[var(--radius-sm)] hover:bg-[var(--color-accent-muted)] transition-all duration-300 mono flex items-center gap-2"
                        >
                            <Download size={14} />
                            {t('nav.resume')}
                        </a>
                    </motion.div>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={toggleLanguage} className="p-2 text-[var(--color-accent)]">
                        <Globe size={20} />
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-[var(--color-accent)] p-2"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-3/4 bg-[var(--color-bg-secondary)] z-40 shadow-2xl flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navItems.map((item, index) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg flex flex-col items-center gap-1"
                            >
                                <span className="mono accent-text text-sm">0{index + 1}.</span>
                                <span className="text-[var(--color-text-primary)]">{t(`nav.${item}`)}</span>
                            </a>
                        ))}
                        <a
                            href="/assets/docs/resume.pdf"
                            download
                            className="px-8 py-4 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-[var(--radius-sm)] mono mt-4"
                        >
                            {t('nav.resume')}
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Backdrop */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
                    />
                )}
            </AnimatePresence>
        </header>
    );
}
