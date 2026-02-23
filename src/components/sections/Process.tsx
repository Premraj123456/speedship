import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Layout, Cog, Rocket } from 'lucide-react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

const steps = [
    {
        icon: Lightbulb,
        title: 'Strategy',
        description: 'We understand your vision, define requirements, and create a detailed product roadmap.',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Layout,
        title: 'Architecture',
        description: 'We design scalable system architecture and create detailed technical specifications.',
        color: 'from-purple-500 to-pink-500',
    },
    {
        icon: Cog,
        title: 'Build',
        description: 'Our AI-assisted team builds your product with clean, maintainable, production-ready code.',
        color: 'from-orange-500 to-red-500',
    },
    {
        icon: Rocket,
        title: 'Test & Deploy',
        description: 'Rigorous testing, CI/CD setup, and seamless deployment to production environments.',
        color: 'from-green-500 to-emerald-500',
    },
];

export const Process: React.FC = () => {
    return (
        <Section id="process">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Our Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        A proven 4-step system that delivers production-ready apps in 14 days.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Step number */}
                            <div className="text-8xl font-bold text-slate-100 absolute -top-8 -left-2 -z-10">
                                {index + 1}
                            </div>

                            <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
                                {/* Icon with gradient background */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                                    <step.icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-slate-600">{step.description}</p>
                            </div>

                            {/* Connecting line (except for last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-300 to-transparent" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
