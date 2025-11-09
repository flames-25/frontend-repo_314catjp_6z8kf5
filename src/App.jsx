import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-white/10 bg-slate-950/40">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 text-white">
            <User className="w-5 h-5 text-amber-300" />
            <span className="font-semibold">Your VA</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-amber-400 text-slate-900 font-medium px-3 py-1.5 hover:bg-amber-300 transition">
            Hire me
          </a>
        </div>
      </header>

      <main id="top">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Your VA — Operations, admin, and systems support.</p>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-white">Book a call</a>
            <a href="#skills" className="hover:text-white">Capabilities</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
