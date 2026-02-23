import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

export const Privacy: React.FC = () => {
    return (
        <Section className="bg-white" id="privacy">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center"
                    >
                        Privacy Policy
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="prose prose-lg max-w-none space-y-6 text-slate-600"
                    >
                        <p className="text-sm text-slate-500">Last updated: February 12, 2026</p>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Information We Collect</h3>
                            <p>
                                We collect information you provide directly to us, such as when you fill out a contact form,
                                book a strategy call, or communicate with us via email. This may include your name, email
                                address, company name, and project details.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">How We Use Your Information</h3>
                            <p>
                                We use the information we collect to provide, maintain, and improve our services, to communicate
                                with you, and to respond to your inquiries. We do not sell or share your personal information
                                with third parties for marketing purposes.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Data Security</h3>
                            <p>
                                We take reasonable measures to help protect your personal information from loss, theft, misuse,
                                unauthorized access, disclosure, alteration, and destruction.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Your Rights</h3>
                            <p>
                                You have the right to access, update, or delete your personal information at any time.
                                To exercise these rights, please contact us at privacy@speedship.com.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Contact Us</h3>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at privacy@speedship.com.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};
