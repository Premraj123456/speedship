import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

const faqs = [
    {
        question: 'Can you really build a production-ready app in 14 days?',
        answer: 'Yes. Our AI-assisted workflow and proven processes allow us to deliver high-quality, production-ready apps in 14 days. We focus on core features first and ensure everything is properly tested before deployment.',
    },
    {
        question: 'Who owns the code?',
        answer: 'You do. You get full ownership of all code, designs, and assets. We provide complete access to GitHub repositories, documentation, and deployment credentials.',
    },
    {
        question: 'What tech stack do you use?',
        answer: 'We use modern, battle-tested technologies: React/Next.js for web, React Native for mobile, Node.js/Python for backend, and PostgreSQL/MongoDB for databases. The specific stack is tailored to your project needs.',
    },
    {
        question: 'What happens after launch?',
        answer: 'All plans include post-launch support. We provide documentation, training, and bug fixes. For ongoing development and maintenance, we offer monthly retainer packages.',
    },
    {
        question: 'What if I need changes during development?',
        answer: 'Minor adjustments are included. Major scope changes may require timeline or budget adjustments. We communicate proactively and keep you involved throughout the process.',
    },
    {
        question: 'Do you provide hosting and deployment?',
        answer: 'Yes. We handle deployment to your preferred cloud provider (AWS, Vercel, etc.) and set up CI/CD pipelines. You maintain full control over your infrastructure.',
    },
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section id="faq">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        Everything you need to know about working with SpeedShip.
                    </motion.p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                                <div className="flex-shrink-0">
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-slate-600" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-slate-600" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-5 text-slate-600">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
