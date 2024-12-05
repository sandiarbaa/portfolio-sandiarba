import PageLayout from "@/components/layouts/PageLayout";
import About from "@/components/pages/About";
import Skills from "@/components/pages/Skills";

export default function Home() {
  return (
    <>
      <PageLayout>
        <About />
        <Skills />
      </PageLayout>
    </>
  );
}
