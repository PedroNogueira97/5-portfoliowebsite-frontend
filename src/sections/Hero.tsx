import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, ChevronRight, Globe, Code, Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = ['Senior Backend Developer', 'AI Agent Specialist', 'System Architect', 'Tech Lead'];

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
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-bold rounded-[var(--radius-sm)] hover:bg-[var(--color-accent-hover)] transition-all duration-300 flex items-center gap-2 relative z-10"
                        >
                            {t('hero.cta')}
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex gap-6">
                        <SocialLink href="https://github.com/PedroNogueira97" icon={<Code size={24} />} label="GitHub" />
                        <SocialLink href="https://linkedin.com/in/pedronogueiraneto" icon={<Cpu size={24} />} label="LinkedIn" />
                        <SocialLink href="mailto:pedronogueiraneto@gmail.com" icon={<Mail size={24} />} label="Email" />
                        <SocialLink href="https://twitter.com/pedronogueira" icon={<Globe size={24} />} label="Twitter" />
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
