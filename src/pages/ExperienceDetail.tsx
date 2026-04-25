import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Building2 } from 'lucide-react';

export default function ExperienceDetail() {
    const { slug } = useParams();
    const { t } = useTranslation();

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
                    className="max-w-3xl"
                >
                    <div className="flex flex-col gap-4 mb-12">
                        <div className="flex items-center gap-3 text-[var(--color-text-secondary)] mono text-sm mb-2">
                            <Calendar size={16} className="accent-text" />
                            <span>2020 — Present</span>
                            <span className="mx-2 text-[var(--color-border-light)]">|</span>
                            <Building2 size={16} className="accent-text" />
                            <span>Company Name</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text-primary)]">
                            {slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </h1>
                    </div>

                    <div className="space-y-12 text-[var(--color-text-secondary)] text-lg leading-relaxed">
                        <div className="p-8 rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                            <h3 className="text-xl font-bold mb-6 text-[var(--color-text-primary)]">Role & Responsibilities</h3>
                            <ul className="space-y-4">
                                {[1, 2, 3].map(i => (
                                    <li key={i} className="flex gap-4">
                                        <span className="accent-text mt-1.5 shrink-0">▹</span>
                                        <span>Accomplished a major milestone or resolved a complex technical challenge during this tenure at {slug}.</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Technical Impact</h3>
                            <p>
                                Description of the specific technical contributions, architectures designed, and systems improved during this experience. Focus on quantifiable results and key technologies used.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
