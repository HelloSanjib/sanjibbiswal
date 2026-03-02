import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");

  // Update active section on scroll
  const handleScroll = () => {
    const sections = [
      "home",
      "about",
      "projects",
      "skills",
      "education",
      "contact",
    ];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header activeSection={activeSection} />

      {/* Scroll listener */}
      {typeof window !== "undefined" &&
        window.addEventListener("scroll", handleScroll)}

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-foreground/60 text-sm">
            © 2026 Sanjib Biswal. All rights reserved.
          </p>
          <p className="text-foreground/40 text-xs mt-2">
            Built with React, Node.js, and TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
}
