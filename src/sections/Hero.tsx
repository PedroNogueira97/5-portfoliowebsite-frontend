import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const roles = ['Backend Developer', 'AI Agent Specialist', 'AI Developer Specialist', 'Technical Leadership', 'Software Engineer', 'Technical Support Engineer'];

export default function Hero() {
    const { t } = useTranslation();
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }
        },
    };

    return (
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center pt-20 pb-0 overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[var(--color-accent)] opacity-5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-blue-500 opacity-5 blur-[100px] rounded-full pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container"
            >
                <div className="max-w-4xl">
                    <motion.p variants={itemVariants} className="mono accent-text mb-4 text-base sm:text-lg">
                        {t('hero.greeting')}
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 text-[var(--color-text-primary)]"
                    >
                        {t('hero.name')}
                    </motion.h1>

                    {/* Title Wrapper with fixed height and centering */}
                    <motion.div variants={itemVariants} className="relative h-[1.2em] mb-8 sm:mb-10 text-3xl sm:text-5xl lg:text-6xl font-bold">
                        {roles.map((role, idx) => (
                            <motion.h2
                                key={role}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: idx === roleIndex ? 1 : 0,
                                    y: idx === roleIndex ? 0 : (idx < roleIndex ? -20 : 20),
                                    visibility: idx === roleIndex ? 'visible' : 'hidden'
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute inset-0 text-[var(--color-text-secondary)] whitespace-nowrap"
                            >
                                {role}
                            </motion.h2>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="max-w-xl text-[var(--color-text-secondary)] text-lg mb-10 space-y-4"
                    >
                        <p className="font-medium text-[var(--color-text-primary)]">{t('hero.role')}</p>
                        <p className="text-base leading-relaxed opacity-80">{t('hero.description')}</p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] rounded-[var(--radius-sm)] hover:bg-[var(--color-accent-muted)] transition-all duration-300 mono flex items-center gap-2 group"
                        >
                            {t('hero.viewProjects')}
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-[var(--color-accent)] rounded-[var(--radius-sm)] hover:bg-[var(--color-accent-hover)] transition-all duration-300 flex items-center gap-2 group border border-[var(--color-accent)]"
                        >
                            <span className="text-[#0a192f] font-bold">
                                {t('hero.cta')}
                            </span>
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex gap-6">
                        <SocialLink href="https://github.com/PedroNogueira97" icon={<GithubIcon size={24} />} label="GitHub" />
                        <SocialLink href="https://linkedin.com/in/pedronogueiraneto" icon={<LinkedinIcon size={24} />} label="LinkedIn" />
                        <SocialLink href="mailto:pedronogueiraneto@gmail.com" icon={<Mail size={24} />} label="Email" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300 p-2"
            aria-label={label}
        >
            {icon}
        </a>
    );
}
