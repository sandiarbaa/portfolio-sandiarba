import PageLayout from "@/components/layouts/PageLayout";
import Projects from "@/components/pages/Projects";

const ProjectsPage = () => {
  return (
    <PageLayout>
      <Projects buttonAllProjects={false} />
    </PageLayout>
  );
};

export default ProjectsPage;
