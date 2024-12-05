import Navbar from "@/components/fragments/Navbar";
import About from "@/components/pages/About";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <About />
        <section id="skills" className="min-h-screen">
          <h1>Skills</h1>
        </section>
        <section id="projects" className="min-h-screen">
          <h1>Projects</h1>
        </section>
      </main>
    </>
  );
}
