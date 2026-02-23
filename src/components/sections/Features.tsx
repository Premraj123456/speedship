import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Boxes, Code2, GitBranch, DollarSign } from 'lucide-react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

const features = [
    {
        icon: Sparkles,
        title: 'AI-Assisted Engineering',
        description: 'Leverage cutting-edge AI tools to accelerate development without sacrificing quality.',
    },
    {
        icon: Boxes,
        title: 'Scalable Architecture',
        description: 'Built with growth in mind. Your app scales from 100 to 100,000 users seamlessly.',
    },
    {
        icon: Code2,
        title: 'Clean, Maintainable Code',
        description: 'No spaghetti code. Fully documented, tested, and ready for your team to extend.',
    },
    {
        icon: GitBranch,
        title: 'CI/CD Integration',
        description: 'Automated testing and deployment pipelines set up from day one.',
    },
    {
        icon: DollarSign,
        title: 'Transparent Pricing',
        description: 'Fixed-price packages. No hidden fees, no scope creep, no surprises.',
    },
];

export const Features: React.FC = () => {
    return (
        <Section className="bg-white" id="features">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Why Choose SpeedShip
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        We combine AI-powered efficiency with human expertise to deliver exceptional results.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                                <feature.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
