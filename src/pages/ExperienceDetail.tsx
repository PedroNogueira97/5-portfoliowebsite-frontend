import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Briefcase } from 'lucide-react';

export default function ExperienceDetail() {
    const { slug } = useParams();
    const { t } = useTranslation();

    const experiences = t('experience.items', { returnObjects: true }) as any[];
    const experience = experiences.find(exp => exp.company.toLowerCase().replace(/\s+/g, '-') === slug);

    if (!experience) {
        return <Navigate to="/" replace />;
    }

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
                    className="max-w-4xl"
                >
                    <div className="flex flex-col gap-4 mb-12">
                        <div className="flex items-center gap-2 text-[var(--color-accent)] mono text-sm mb-2">
                            <Calendar size={16} />
                            <span>{experience.period}</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl font-bold text-[var(--color-text-primary)] leading-tight mb-2">
                            {experience.company}
                        </h1>

                        <h2 className="text-2xl sm:text-3xl font-medium text-[var(--color-accent)]">
                            {experience.role}
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-[1fr_300px] gap-16">
                        <div className="space-y-12">
                            <div className="p-8 rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] shadow-sm">
                                <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-[var(--color-text-primary)]">
                                    <Briefcase size={20} className="accent-text" />
                                    Key Accomplishments
                                </h3>
                                <ul className="space-y-6">
                                    {(experience.description as string[]).map((desc, i) => (
                                        <li key={i} className="flex gap-4 group">
                                            <span className="accent-text mt-1.5 shrink-0 text-lg group-hover:scale-125 transition-transform">▹</span>
                                            <span className="text-[var(--color-text-secondary)] leading-relaxed">{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Technical Context</h3>
                                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                                    Working at {experience.company} as a {experience.role}, I focused on delivering high-quality technical solutions using a modern stack.
                                    My contributions involved not only individual development but also active participation in technical leadership and system architecture decisions.
                                </p>
                            </div>
                        </div>

                        <aside className="space-y-8">
                            <div className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">Core Focus</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Leadership', 'Backend', 'Optimization', 'Architecture'].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-full text-xs mono text-[var(--color-text-secondary)]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="relative p-8 rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] text-[var(--color-bg-primary)] shadow-lg overflow-hidden">
                                <div className="relative z-10">
                                    <h4 className="text-[var(--color-bg-primary)] font-bold mb-4">Looking for details?</h4>
                                    <p className="text-sm font-semibold mb-6 leading-relaxed">
                                        For a deeper dive into specific projects handled during this period, feel free to reach out.
                                    </p>
                                    <Link to="/#contact" className="inline-block w-full text-center py-3 bg-[var(--color-bg-primary)] text-[var(--color-accent)] rounded-[var(--radius-md)] font-bold hover:bg-opacity-90 transition-all">
                                        Email Me
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
