import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ContactModal } from '../ui/ContactModal';

export const Hero: React.FC = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const scrollToProcess = () => {
        const element = document.getElementById('process');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
                {/* Animated background gradient orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.2, 0.3],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.2, 0.3, 0.2],
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
                    />
                </div>

                <Container className="relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 border border-slate-900/10 mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-slate-700">AI-Powered Engineering</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 text-balance leading-tight"
                        >
                            Ship Your Web or Mobile App in{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                14 Days
                            </span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto text-balance"
                        >
                            Production-ready apps built by an AI-powered engineering team.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Button size="lg" variant="primary" className="group" onClick={() => setIsContactModalOpen(true)}>
                                Book a Free Strategy Call
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button size="lg" variant="outline" onClick={scrollToProcess}>
                                See How It Works
                            </Button>
                        </motion.div>

                        {/* Trust indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span>14-Day Delivery</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span>Production-Ready Code</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span>Full Ownership</span>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
};
