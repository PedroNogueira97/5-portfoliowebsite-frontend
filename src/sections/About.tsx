import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap, Languages, Award } from 'lucide-react';

export default function About() {
    const { t } = useTranslation();

    const education = t('about.educationItems', { returnObjects: true }) as any[];
    const certifications = t('about.certifications', { returnObjects: true }) as any[];
    const spokenLanguages = t('about.languageItems', { returnObjects: true }) as any[];

    return (
        <section id="about" className="py-10">
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

                <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed text-lg mb-12">
                            <p>{t('about.description')}</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-10">
                            <div>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[var(--color-text-primary)]">
                                    <GraduationCap className="accent-text" size={24} />
                                    {t('about.education')}
                                </h3>
                                <div className="space-y-6">
                                    {education.map((item, index) => (
                                        <div key={index} className="pl-4 border-l border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors duration-300">
                                            <h4 className="font-bold text-[var(--color-text-primary)]">{item.degree}</h4>
                                            <p className="text-sm mono accent-text mt-1">{item.university}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[var(--color-text-primary)]">
                                    <Award className="accent-text" size={24} />
                                    Certifications
                                </h3>
                                <div className="space-y-4">
                                    {certifications.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <span className="accent-text mt-1">▹</span>
                                            <div>
                                                <p className="text-[var(--color-text-primary)] font-medium text-sm leading-tight">{item.name}</p>
                                                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.provider}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.aside
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="p-8 rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] sticky top-24">
                            <h3 className="text-lg font-bold mb-8 flex items-center gap-2 text-[var(--color-text-primary)]">
                                <Languages className="accent-text" size={20} />
                                {t('about.languages')}
                            </h3>
                            <div className="space-y-6">
                                {spokenLanguages.map((lang, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium text-[var(--color-text-primary)]">{lang.name}</span>
                                            <span className="text-xs mono accent-text">{lang.level}</span>
                                        </div>
                                        <div className="h-1 w-full bg-[var(--color-bg-primary)] rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${lang.progress}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.6 + (index * 0.1) }}
                                                className="h-full bg-[var(--color-accent)]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}
