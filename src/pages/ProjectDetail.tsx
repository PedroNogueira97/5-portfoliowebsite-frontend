import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code } from 'lucide-react';

export default function ProjectDetail() {
    const { slug } = useParams();
    const { t } = useTranslation();

    const projectKeys = ['aiJail', 'aiResume', 'lnmWebsite'];

    if (!slug || !projectKeys.includes(slug)) {
        return <Navigate to="/" replace />;
    }

    const project = t(`projects.items.${slug}`, { returnObjects: true }) as any;
    const tech = project.tech || [];

    return (
        <div className="py-24 bg-[var(--color-bg-primary)] min-h-screen">
            <div className="container">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:underline mb-12 mono text-sm group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    {t('nav.backToHome')}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-[var(--color-text-primary)]">
                                {project.name}
                            </h1>
                            <div className="flex flex-wrap gap-2">
                                {tech.map((item: string) => (
                                    <span key={item} className="px-3 py-1 bg-[var(--color-accent-muted)] border border-[var(--color-accent-border)] rounded-full text-xs mono accent-text">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            {project.liveDemo && (
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg-primary)] rounded-[var(--radius-md)] font-bold hover:bg-[var(--color-accent-hover)] transition-all">
                                    <ExternalLink size={18} />
                                    Live Demo
                                </a>
                            )}
                            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-[var(--radius-md)] font-bold hover:bg-[var(--color-accent-muted)] transition-all">
                                <Code size={18} />
                                Source Code
                            </a>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-[1fr_350px] gap-16">
                        <div className="space-y-12">
                            <div className="aspect-video bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border)] overflow-hidden shadow-xl">
                                <div className="w-full h-full flex items-center justify-center text-[var(--color-text-muted)] italic bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)]">
                                    <div className="text-center p-8">
                                        <Code size={48} className="mx-auto mb-4 opacity-20" />
                                        <p>{project.name} Visual Showcase</p>
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-invert max-w-none text-[var(--color-text-secondary)]">
                                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Overview</h2>
                                <p className="text-lg leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                {project.keyFeatures && (
                                    <>
                                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Key Features</h2>
                                        <ul className="grid sm:grid-cols-2 gap-4 list-none p-0">
                                            {(project.keyFeatures as string[]).map((f, i) => (
                                                <li key={i} className="flex gap-3 p-4 bg-[var(--color-bg-secondary)] rounded-[var(--radius-md)] border border-[var(--color-border)]">
                                                    <span className="accent-text mt-0.5">▹</span>
                                                    <span className="text-sm font-medium">{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>

                        <aside className="space-y-8">
                            <div className="p-8 rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] text-[var(--color-bg-primary)] shadow-lg">
                                <h3 className="text-xl font-bold mb-4 text-[var(--color-bg-primary)]">Interested in this?</h3>
                                <p className="text-sm font-semibold mb-6 leading-relaxed">
                                    I'm available for collaborations or discussing the technical details of this implementation.
                                </p>
                                <Link to="/#contact" className="inline-block w-full text-center py-3 bg-[var(--color-bg-primary)] text-[var(--color-accent)] rounded-[var(--radius-md)] font-bold hover:bg-opacity-90 transition-all">
                                    Contact Me
                                </Link>
                            </div>
                        </aside>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
