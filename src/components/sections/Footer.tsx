import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { Container } from '../ui/Container';

export const Footer: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <footer className="bg-slate-900 text-white py-12">
            <Container>
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">SpeedShip</h3>
                        <p className="text-slate-400 mb-4 max-w-md">
                            Ship production-ready web and mobile apps in 14 days with our AI-powered engineering team.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li><button onClick={() => scrollToSection('process')} className="hover:text-white transition-colors">How It Works</button></li>
                            <li><button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
                            <li><button onClick={() => scrollToSection('case-studies')} className="hover:text-white transition-colors">Case Studies</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">FAQ</button></li>
                            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-slate-400 text-sm">
                    © 2026 SpeedShip. All rights reserved.
                </div>
            </Container>
        </footer>
    );
};
