import { Navbar } from '../sections/Navbar';
import { Hero } from '../sections/Hero';
import { Problem } from '../sections/Problem';
import { Process } from '../sections/Process';
import { Features } from '../sections/Features';
import { CaseStudies } from '../sections/CaseStudies';
import { Pricing } from '../sections/Pricing';
import { FAQ } from '../sections/FAQ';
import { CTA } from '../sections/CTA';
import { Footer } from '../sections/Footer';

export const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Problem />
            <Process />
            <Features />
            <CaseStudies />
            <Pricing />
            <FAQ />
            <CTA />
            <Footer />
        </>
    );
};
