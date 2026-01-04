"use client";

import ScrollToTop from "@/components/ScrollToTop";
import Hero from "@/components/hero";
import AboutMe from "@/components/aboutme";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Page() {
  return (
    <>
      <ScrollToTop />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
