import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { ContactModal } from '../ui/ContactModal';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: 'How It Works', sectionId: 'process' },
        { name: 'Features', sectionId: 'features' },
        { name: 'Case Studies', sectionId: 'case-studies' },
        { name: 'Pricing', sectionId: 'pricing' },
        { name: 'FAQ', sectionId: 'faq' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
                        >
                            SpeedShip
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.sectionId}
                                    onClick={() => scrollToSection(link.sectionId)}
                                    className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <Button size="sm" variant="primary" onClick={() => setIsContactModalOpen(true)}>
                                Book a Call
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-slate-700 hover:text-slate-900"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-slate-200">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.sectionId}
                                        onClick={() => scrollToSection(link.sectionId)}
                                        className="text-left text-slate-700 hover:text-slate-900 font-medium transition-colors py-2"
                                    >
                                        {link.name}
                                    </button>
                                ))}
                                <Button size="sm" variant="primary" className="w-full" onClick={() => setIsContactModalOpen(true)}>
                                    Book a Call
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
};
