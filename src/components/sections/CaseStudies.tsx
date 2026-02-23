import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, TrendingUp, Clock } from 'lucide-react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

const caseStudies = [
    {
        title: 'FinTech Mobile App',
        category: 'Mobile App',
        description: 'A payment processing app for freelancers with real-time transaction tracking.',
        metrics: [
            { icon: Users, label: '10K+ Users' },
            { icon: TrendingUp, label: '4.8★ Rating' },
            { icon: Clock, label: '12 Days' },
        ],
        tags: ['React Native', 'Node.js', 'Stripe'],
    },
    {
        title: 'SaaS Dashboard',
        category: 'Web App',
        description: 'Analytics platform for e-commerce businesses with custom reporting.',
        metrics: [
            { icon: Users, label: '500+ Teams' },
            { icon: TrendingUp, label: '$2M ARR' },
            { icon: Clock, label: '14 Days' },
        ],
        tags: ['React', 'TypeScript', 'PostgreSQL'],
    },
    {
        title: 'Marketplace Platform',
        category: 'Web + Mobile',
        description: 'Two-sided marketplace connecting service providers with customers.',
        metrics: [
            { icon: Users, label: '25K+ Users' },
            { icon: TrendingUp, label: '$500K GMV' },
            { icon: Clock, label: '14 Days' },
        ],
        tags: ['Next.js', 'React Native', 'AWS'],
    },
];

export const CaseStudies: React.FC = () => {
    return (
        <Section id="case-studies">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Recent Success Stories
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        Real projects delivered in 14 days or less.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                    {study.category}
                                </span>
                                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{study.title}</h3>
                            <p className="text-slate-600 mb-6">{study.description}</p>

                            <div className="space-y-3 mb-6">
                                {study.metrics.map((metric, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm">
                                        <metric.icon className="w-4 h-4 text-slate-400" />
                                        <span className="text-slate-700 font-medium">{metric.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {study.tags.map((tag, idx) => (
                                    <span key={idx} className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
