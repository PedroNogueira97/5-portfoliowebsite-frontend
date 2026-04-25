import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Settings } from 'lucide-react';

export default function Skills() {
    const { t } = useTranslation();

    const skillGroups = [
        {
            key: 'backend',
            icon: <Database className="accent-text" />,
        },
        {
            key: 'ai',
            icon: <Code2 className="accent-text" />,
        },
        {
            key: 'devops',
            icon: <Terminal className="accent-text" />,
        },
        {
            key: 'testing',
            icon: <Settings className="accent-text" />,
        }
    ];

    const coreCompetencies = t('skills.core.items', { returnObjects: true }) as string[];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="bg-[var(--color-bg-secondary)] py-24">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-title"
                >
                    <span className="mono accent-text text-xl mr-2">02.</span>
                    {t('skills.title')}
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                >
                    {skillGroups.map((group) => {
                        const items = t(`skills.groups.${group.key}.items`, { returnObjects: true }) as string[];
                        return (
                            <motion.div
                                key={group.key}
                                variants={itemVariants}
                                className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent-border)] transition-all duration-300 group"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    {group.icon}
                                    <h3 className="font-bold text-[var(--color-text-primary)]">
                                        {t(`skills.groups.${group.key}.title`)}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-xs mono text-[var(--color-text-secondary)] bg-[var(--color-bg-tertiary)] rounded-full hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-muted)] transition-colors duration-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="p-8 rounded-[var(--radius-xl)] border-2 border-dashed border-[var(--color-border)] text-center"
                >
                    <h3 className="text-xl font-bold mb-8 accent-text mono">{t('skills.core.title')}</h3>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
                        {coreCompetencies.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span className="accent-text">▹</span>
                                <span className="text-[var(--color-text-primary)] font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
