import { Nav } from "@/components/Nav";
  import { AnimatedBackground } from "@/components/AnimatedBackground";
  import { Hero } from "@/sections/Hero";
  import { Projects } from "@/sections/Projects";
  import { Experience } from "@/sections/Experience";
  import { Certifications } from "@/sections/Certifications";
  import { Skills } from "@/sections/Skills";
  import { Education } from "@/sections/Education";
  import { ResumeSection } from "@/sections/ResumeSection";
  import { CoCurricular } from "@/sections/CoCurricular";
  import { Footer } from "@/sections/Footer";

  export const revalidate = 3600; // Revalidate every hour

  export default function Page() {
    return (
      <div className="relative min-h-[100dvh] w-full text-foreground overflow-x-hidden">
        <AnimatedBackground />
        <Nav />
        <main>
          <Hero />
          <Projects />
          <Experience />
          <Certifications />
          <Skills />
          <Education />
          <ResumeSection />
          <CoCurricular />
        </main>
        <Footer />
      </div>
    );
  }
  