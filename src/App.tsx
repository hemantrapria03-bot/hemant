/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThreeScene from './components/ThreeScene';

export default function App() {
  return (
    <main className="relative min-h-screen">
      <ThreeScene />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-12 text-center border-top border-white/10 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Hemant. All rights reserved.</p>
      </footer>
    </main>
  );
}

