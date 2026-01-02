import AboutMeSection from "@/components/aboutme";
import PortfolioHeader from "@/components/header";
import Hero from "@/components/hero";
import ProjectShowcase from "@/components/projectshowcase";
import SkillsTools from "@/components/skills";
import Contact from "@/components/contact";
export default function Page() {
  return (
    <>
      <PortfolioHeader />
      <main className="pt-24">
        <Hero />
       <AboutMeSection/>
       <ProjectShowcase />
       <SkillsTools />
       <Contact />
       
      </main>
    </>
  );
}
