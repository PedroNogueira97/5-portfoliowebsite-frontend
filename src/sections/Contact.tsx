import { useTranslation } from 'react-i18next';
import { useState, type FormEvent } from 'react';

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: integrate with backend/email service
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact">
            <div className="container max-w-2xl text-center">
                <h2 className="section-title">
                    <span className="mono accent-text text-xl mr-2">05.</span>
                    {t('contact.title')}
                </h2>
                <p className="section-subtitle mx-auto mb-12">{t('contact.subtitle')}</p>

                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div>
                        <label htmlFor="name" className="block text-sm mono text-[var(--color-text-muted)] mb-2">
                            {t('contact.name')}
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            placeholder={t('contact.namePlaceholder')}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm mono text-[var(--color-text-muted)] mb-2">
                            {t('contact.email')}
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            placeholder={t('contact.emailPlaceholder')}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm mono text-[var(--color-text-muted)] mb-2">
                            {t('contact.message')}
                        </label>
                        <textarea
                            id="message"
                            required
                            rows={5}
                            placeholder={t('contact.messagePlaceholder')}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-200 resize-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] rounded-[var(--radius-md)] hover:bg-[var(--color-accent-muted)] transition-all duration-200 mono text-sm cursor-pointer"
                    >
                        {t('contact.send')}
                    </button>
                </form>
            </div>
        </section>
    );
}
