import PortfolioHeader from "@/components/header";
import Hero from "@/components/hero";
import AboutMe from "@/components/aboutme";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Page() {
  return (
    <>
      <PortfolioHeader />
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
