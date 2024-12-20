import PageLayout from "@/components/layouts/PageLayout";
import About from "@/components/pages/About";
import Certifications from "@/components/pages/Certifications";
import Education from "@/components/pages/Education";
import Experience from "@/components/pages/Experience";
import Projects from "@/components/pages/Projects";
import Skills from "@/components/pages/Skills";

export default function Home() {
  return (
    <>
      <PageLayout>
        <About />
        <Skills />
        <Education />
        <Projects buttonAllProjects={true} />
        <Certifications />
        <Experience />
      </PageLayout>
    </>
  );
}
