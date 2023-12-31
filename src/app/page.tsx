import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { FC } from "react";
const Home: FC = () => {
  return (
    <main className="max-w-4xl mx-auto">
      <Navbar
        links={[
          { id: "about", text: "About" },
          { id: "projects", text: "Projects" },
          { id: "experience", text: "Experience" },
          { id: "skills", text: "Skills" },
          { id: "contact", text: "Contact" },
        ]}
      />
      <Hero />
      <Projects />
      <WorkExperience />
      <Skills />
      <Contact />
      <footer className="bg-stone-950 text-center p-6">
        ©2023 JUAN CARDENAS
      </footer>
    </main>
  );
};
export default Home;
