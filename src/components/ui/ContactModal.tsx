
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { Button } from './Button';
import { supabase } from '../../lib/supabase';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        projectDetails: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { error } = await supabase.from('leads').insert([{
                name: formData.name,
                email: formData.email,
                company: formData.company,
                project_details: formData.projectDetails,
                status: 'new'
            }]);

            if (error) {
                console.error('Supabase error:', error);
                throw error;
            }

            setIsSubmitting(false);
            setIsSubmitted(true);

            // Reset after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                onClose();
                setFormData({ name: '', email: '', company: '', projectDetails: '' });
            }, 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsSubmitting(false);
            alert('Something went wrong. Please try again.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-slate-900">Book Your Free Strategy Call</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5 text-slate-500" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {!isSubmitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                placeholder="john@company.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                placeholder="Your Company"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="projectDetails" className="block text-sm font-medium text-slate-700 mb-2">
                                                Tell us about your project *
                                            </label>
                                            <textarea
                                                id="projectDetails"
                                                name="projectDetails"
                                                required
                                                value={formData.projectDetails}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                                placeholder="Describe your project, timeline, and what you're looking to build..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            variant="primary"
                                            size="lg"
                                            className="w-full"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5 mr-2" />
                                                    Send Request
                                                </>
                                            )}
                                        </Button>

                                        <p className="text-sm text-slate-500 text-center">
                                            We'll get back to you within 24 hours
                                        </p>
                                    </form>
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                                        <p className="text-slate-600">
                                            We've received your request and will contact you within 24 hours.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
