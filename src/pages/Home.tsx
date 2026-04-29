import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import BlogSection from '@/sections/BlogSection';
import Contact from '@/sections/Contact';
import Resume from '@/sections/Resume';

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <BlogSection />
            <Contact />
            <Resume />
        </>
    );
}
