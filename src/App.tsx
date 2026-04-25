import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import Contact from '@/sections/Contact';
import Resume from '@/sections/Resume';
import Footer from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
