import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ExternalLink, Folder, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectKeys = ['aiJail', 'aiResume', 'lnmWebsite'] as const;

export default function Projects() {
    const { t } = useTranslation();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.645, 0.045, 0.355, 1] } }
    };

    return (
        <section id="projects" className="py-24 bg-[var(--color-bg-secondary)]">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-title"
                >
                    <span className="mono accent-text text-xl mr-2">03.</span>
                    {t('projects.title')}
                </motion.h2>

                <p className="section-subtitle mb-12">{t('projects.subtitle')}</p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projectKeys.map((key) => {
                        const tech = t(`projects.items.${key}.tech`, { returnObjects: true }) as string[];
                        return (
                            <motion.div
                                key={key}
                                variants={itemVariants}
                                className="group relative p-10 rounded-[var(--radius-lg)] bg-[var(--color-bg-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent-border)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="flex justify-between items-center mb-8">
                                    <div className="accent-text">
                                        <Folder size={40} />
                                    </div>
                                    <div className="flex gap-4 text-[var(--color-text-secondary)]">
                                        <Link to={`/project/${key}`} className="hover:text-[var(--color-accent)] transition-colors">
                                            <ExternalLink size={20} />
                                        </Link>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                                    <Link to={`/project/${key}`}>
                                        {t(`projects.items.${key}.name`)}
                                    </Link>
                                </h3>

                                <p className="text-[var(--color-text-secondary)] text-sm mb-6 leading-relaxed grow">
                                    {t(`projects.items.${key}.shortDescription`)}
                                </p>

                                <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
                                    {tech.map((item) => (
                                        <li
                                            key={item}
                                            className="text-xs mono text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] transition-colors"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
