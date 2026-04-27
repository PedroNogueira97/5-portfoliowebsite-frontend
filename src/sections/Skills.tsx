import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Settings } from 'lucide-react';

export default function Skills() {
    const { t } = useTranslation();

    const skillGroups = [
        {
            key: 'ai',
            icon: <Code2 className="accent-text" />,
        },
        {
            key: 'testing',
            icon: <Settings className="accent-text" />,
        },
        {
            key: 'backend',
            icon: <Database className="accent-text" />,
        },
        {
            key: 'data',
            icon: <Database className="accent-text" />,
        },
        {
            key: 'ide',
            icon: <Database className="accent-text" />, // Using Database as placeholder for IDEs if needed, or find a better one
        },
        {
            key: 'devops',
            icon: <Terminal className="accent-text" />,
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
        <section id="skills" className="bg-[var(--color-bg-secondary)] py-10">
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
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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
                                <ul className="space-y-3">
                                    {items.map((skill) => (
                                        <li
                                            key={skill}
                                            className="flex items-center gap-2 text-sm mono text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-200"
                                        >
                                            <span className="accent-text text-lg">▹</span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
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
