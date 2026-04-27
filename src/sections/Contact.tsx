import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';

export default function Contact() {
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const email = formData.get('email') as string;

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);

        try {
            // Integration with Resend (assuming a proxy or serverless function if needed)
            // For now, we'll use a direct fetch to show the implementation
            // Note: In production, this should go through a backend to keep the API key safe
            const response = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_RESEND_API_KEY || 're_bRr65VhZ_tNKrpmjUrdiJ63HzARMoLm6T'}`,
                },
                body: JSON.stringify({
                    from: 'Portfolio Contact <onboarding@resend.dev>',
                    to: 'pedronogueiraneto@gmail.com',
                    subject: `New Message from ${formData.get('name')}`,
                    html: `<p><strong>Name:</strong> ${formData.get('name')}</p>
                           <p><strong>Email:</strong> ${formData.get('email')}</p>
                           <p><strong>Message:</strong></p>
                           <p>${formData.get('message')}</p>`,
                }),
            });

            if (response.ok) {
                alert(t('contact.form.success') || 'Message sent!');
                (e.target as HTMLFormElement).reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('There was an error sending your message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-10">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-title"
                >
                    <span className="mono accent-text text-xl mr-2">05.</span>
                    {t('contact.title')}
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-16 mt-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-3xl font-bold mb-6 text-[var(--color-text-primary)]">
                            {t('contact.subtitle')}
                        </h3>
                        <p className="text-[var(--color-text-secondary)] mb-10 leading-relaxed max-w-lg">
                            {t('contact.description')}
                        </p>

                        <div className="space-y-6">
                            <ContactInfoItem
                                icon={<Mail className="accent-text" size={24} />}
                                label="Email"
                                value="pedronogueiraneto@gmail.com"
                                href="mailto:pedronogueiraneto@gmail.com"
                            />
                            <ContactInfoItem
                                icon={<MapPin className="accent-text" size={24} />}
                                label="Location"
                                value="Bauru, SP, Brasil"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm mono accent-text ml-1">{t('contact.form.name')}</label>
                                    <input
                                        required
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-sm)] p-4 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm mono accent-text ml-1">{t('contact.form.email')}</label>
                                    <input
                                        required
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-sm)] p-4 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm mono accent-text ml-1">{t('contact.form.message')}</label>
                                <textarea
                                    required
                                    id="message"
                                    name="message"
                                    rows={6}
                                    className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-sm)] p-4 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                                />
                            </div>
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full sm:w-auto px-10 py-4 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] rounded-[var(--radius-sm)] hover:bg-[var(--color-accent-muted)] transition-all duration-300 mono flex items-center justify-center gap-3 disabled:opacity-50 group"
                            >
                                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ContactInfoItem({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href?: string }) {
    const content = (
        <div className="flex items-start gap-4 group">
            <div className="p-3 rounded-[var(--radius-sm)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] group-hover:border-[var(--color-accent-border)] transition-colors">
                {icon}
            </div>
            <div>
                <p className="text-xs mono accent-text uppercase tracking-widest">{label}</p>
                <p className="text-[var(--color-text-primary)] font-medium group-hover:text-[var(--color-accent)] transition-colors">{value}</p>
            </div>
        </div>
    );

    return href ? <a href={href}>{content}</a> : <div>{content}</div>;
}
