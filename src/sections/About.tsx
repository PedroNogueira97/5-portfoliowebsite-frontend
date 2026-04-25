import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap, Languages } from 'lucide-react';

export default function About() {
    const { t } = useTranslation();

    const education = t('about.education.items', { returnObjects: true }) as any[];
    const spokenLanguages = t('about.languages.items', { returnObjects: true }) as any[];

    return (
        <section id="about">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-title"
                >
                    <span className="mono accent-text text-xl mr-2">01.</span>
                    {t('about.title')}
                </motion.h2>

                <div className="grid lg:grid-cols-[1fr_350px] gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                            <p>{t('about.description')}</p>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <GraduationCap className="accent-text" />
                                {t('about.education.title')}
                            </h3>
                            <div className="space-y-6">
                                {education.map((item, index) => (
                                    <div key={index} className="pl-4 border-l-2 border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors duration-300">
                                        <h4 className="font-bold text-[var(--color-text-primary)]">{item.degree}</h4>
                                        <p className="text-sm mono accent-text mt-1">{item.school} | {item.period}</p>
                                        <p className="text-sm text-[var(--color-text-muted)] mt-1">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.aside
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="p-6 rounded-[var(--radius-xl)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <Languages className="accent-text" />
                                {t('about.languages.title')}
                            </h3>
                            <div className="space-y-4">
                                {spokenLanguages.map((lang, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm font-medium">{lang.language}</span>
                                            <span className="text-xs mono accent-text">{lang.level}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-[var(--color-bg-primary)] rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '100%' }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                                className="h-full bg-[var(--color-accent)]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Profile Photo Placeholder / Frame */}
                        <div className="relative group max-w-[300px] mx-auto lg:mx-0">
                            <div className="absolute inset-0 border-2 border-[var(--color-accent)] rounded-[var(--radius-md)] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                            <div className="relative overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] aspect-square border border-[var(--color-border)]">
                                <img
                                    src="/assets/images/profile.jpeg"
                                    alt="Pedro Nogueira"
                                    className="w-full h-full object-cover mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300"
                                />
                                <div className="absolute inset-0 bg-[var(--color-accent)]/20 group-hover:bg-transparent transition-colors duration-300" />
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}
