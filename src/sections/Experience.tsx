import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
    const { t } = useTranslation();

    const experiences = t('experience.items', { returnObjects: true }) as any[];

    return (
        <section id="experience" className="bg-[var(--color-bg-secondary)] py-10">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-title"
                >
                    <span className="mono accent-text text-xl mr-2">04.</span>
                    {t('experience.title')}
                </motion.h2>

                <div className="relative mt-12 max-w-3xl mx-auto lg:mx-0">
                    {/* Vertical Line */}
                    <div className="absolute left-0 lg:left-0 top-0 bottom-0 w-[2px] bg-[var(--color-border)] ml-[11px]" />

                    <div className="space-y-12">
                        {experiences.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-12"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[var(--color-bg-primary)] border-2 border-[var(--color-accent)] z-10 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                                </div>

                                <div className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent-border)] transition-all duration-300 group">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                                        <h3 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                                            {item.role}
                                        </h3>
                                        <span className="mono text-xs accent-text px-3 py-1 bg-[var(--color-accent-muted)] rounded-full">
                                            {item.period}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 mb-4 text-[var(--color-text-secondary)] font-medium">
                                        <Briefcase size={16} className="accent-text" />
                                        <span>{item.company}</span>
                                    </div>

                                    <ul className="space-y-3">
                                        {(item.description as string[]).map((desc, i) => (
                                            <li key={i} className="text-sm text-[var(--color-text-secondary)] flex gap-3 leading-relaxed">
                                                <span className="accent-text mt-1.5">▹</span>
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
