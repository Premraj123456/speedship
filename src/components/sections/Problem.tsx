import React from 'react';
import { motion } from 'framer-motion';
import { X, DollarSign, Code, Zap } from 'lucide-react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

const problems = [
    {
        icon: DollarSign,
        title: 'Expensive Agencies',
        description: 'Agencies charge $50k-$200k+ for a simple MVP and take months to deliver.',
    },
    {
        icon: Code,
        title: 'Unreliable Freelancers',
        description: 'Freelancers disappear mid-project, deliver poor code, or miss deadlines.',
    },
    {
        icon: Zap,
        title: 'No-Code Limitations',
        description: 'No-code tools break down when you need custom features or real scalability.',
    },
    {
        icon: X,
        title: 'Hiring Nightmares',
        description: 'Building an in-house team takes months and costs $200k+/year per engineer.',
    },
];

export const Problem: React.FC = () => {
    return (
        <Section className="bg-slate-900 text-white" id="problem">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                    >
                        Most Founders Struggle to Build Their Product
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-300"
                    >
                        You have a great idea, but turning it into reality is frustratingly difficult.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                                    <problem.icon className="w-6 h-6 text-red-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                                    <p className="text-slate-300">{problem.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
