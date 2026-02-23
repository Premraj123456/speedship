import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

export const About: React.FC = () => {
    return (
        <Section className="bg-slate-50" id="about">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center"
                    >
                        About SpeedShip
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="prose prose-lg max-w-none"
                    >
                        <p className="text-lg text-slate-600 mb-6">
                            SpeedShip was founded with a simple mission: to help non-technical founders and early-stage startups
                            bring their ideas to life quickly and affordably.
                        </p>
                        <p className="text-lg text-slate-600 mb-6">
                            Traditional development is slow and expensive. Agencies charge $50k-$200k and take months.
                            Freelancers are unreliable. No-code tools hit limitations fast. Building an in-house team
                            costs $200k+/year per engineer.
                        </p>
                        <p className="text-lg text-slate-600 mb-6">
                            We leverage AI-assisted engineering workflows to deliver production-ready web and mobile
                            applications in just 14 days. Our system combines the speed of automation with the expertise
                            of experienced engineers, ensuring you get high-quality, scalable code that you fully own.
                        </p>
                        <p className="text-lg text-slate-600">
                            Whether you're launching an MVP, building a SaaS platform, or creating a mobile app,
                            we're here to help you ship faster without sacrificing quality.
                        </p>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};
