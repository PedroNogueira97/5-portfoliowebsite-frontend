import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code } from 'lucide-react';

export default function ProjectDetail() {
    const { slug } = useParams();
    const { t } = useTranslation();

    // Placeholder for project data fetching logic
    // In a real scenario, this would load from a JSON or CMS based on :slug

    return (
        <div className="py-24">
            <div className="container">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:underline mb-12 mono text-sm"
                >
                    <ArrowLeft size={16} />
                    {t('nav.backToHome') || 'Back to Home'}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-[var(--color-text-primary)]">
                        {slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </h1>

                    <div className="flex flex-wrap gap-3 mb-12">
                        {['React', 'TypeScript', 'Node.js'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full text-xs mono text-[var(--color-accent)]">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-[1fr_400px] gap-16">
                        <div className="space-y-8">
                            <div className="aspect-video bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border)] overflow-hidden">
                                {/* Project Image Placeholder */}
                                <div className="w-full h-full flex items-center justify-center text-[var(--color-text-muted)] italic">
                                    Project Screenshot Placement
                                </div>
                            </div>

                            <div className="prose prose-invert max-w-none text-[var(--color-text-secondary)]">
                                <p className="text-lg leading-relaxed">
                                    Detailed project description will go here. This page will showcase the challenges, solutions, and key features of the project: {slug}.
                                </p>
                            </div>
                        </div>

                        <aside className="space-y-8">
                            <div className="p-8 rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                                <h3 className="text-xl font-bold mb-6 text-[var(--color-text-primary)]">Project Links</h3>
                                <div className="space-y-4">
                                    <a href="#" className="flex items-center gap-3 p-4 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-[var(--radius-sm)] hover:border-[var(--color-accent-border)] transition-colors group">
                                        <ExternalLink size={20} className="accent-text" />
                                        <span className="font-medium group-hover:text-[var(--color-accent)] transition-colors">Live Demo</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-3 p-4 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-[var(--radius-sm)] hover:border-[var(--color-accent-border)] transition-colors group">
                                        <Code size={20} className="accent-text" />
                                        <span className="font-medium group-hover:text-[var(--color-accent)] transition-colors">Source Code</span>
                                    </a>
                                </div>
                            </div>

                            <div className="p-8 rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                                <h3 className="text-xl font-bold mb-6 text-[var(--color-text-primary)]">Key Features</h3>
                                <ul className="space-y-3">
                                    {['Feature One', 'Feature Two', 'Feature Three'].map((f, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-[var(--color-text-secondary)]">
                                            <span className="accent-text">▹</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
