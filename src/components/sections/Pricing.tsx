import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ContactModal } from '../ui/ContactModal';

const plans = [
    {
        name: 'Starter',
        price: '$12,000',
        description: 'Perfect for MVPs and simple web apps',
        features: [
            'Single-platform (Web or Mobile)',
            'Up to 5 core features',
            'Basic admin dashboard',
            'Responsive design',
            'Basic CI/CD setup',
            '2 weeks of support',
        ],
        popular: false,
    },
    {
        name: 'Growth',
        price: '$24,000',
        description: 'For more complex apps with advanced features',
        features: [
            'Web + Mobile or Web only',
            'Up to 10 core features',
            'Advanced admin dashboard',
            'Payment integration',
            'Full CI/CD pipeline',
            'API development',
            '1 month of support',
        ],
        popular: true,
    },
    {
        name: 'Custom',
        price: 'Contact Us',
        description: 'Enterprise solutions and custom requirements',
        features: [
            'Full-stack multi-platform',
            'Unlimited features',
            'Custom integrations',
            'Dedicated team',
            'Priority support',
            'Ongoing maintenance',
        ],
        popular: false,
    },
];

export const Pricing: React.FC = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <>
            <Section className="bg-white" id="pricing">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
                        >
                            Simple, Transparent Pricing
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-600"
                        >
                            Fixed prices. No surprises. Full ownership of code.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative bg-white rounded-2xl p-8 border-2 ${plan.popular ? 'border-blue-600 shadow-xl' : 'border-slate-200'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                    <p className="text-slate-600 text-sm mb-4">{plan.description}</p>
                                    <div className="text-4xl font-bold text-slate-900">{plan.price}</div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={plan.popular ? 'primary' : 'outline'}
                                    className="w-full"
                                    onClick={() => setIsContactModalOpen(true)}
                                >
                                    {plan.name === 'Custom' ? 'Contact Sales' : 'Get Started'}
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
};
