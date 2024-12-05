"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const projectsAbout = [
  {
    title: "AI Credit Scoring",
    image: "/img/projects/project-1.png",
    techStack: ["Next.js", "Express", "PostgreSQL"],
    description:
      "Website untuk melakukan proses kredit scoring dengan fitur yang terintegrasi dengan AI. Fitur utama melakukan pengecekan Identitas, Registrasi User dan Download Laporan User dalam bentuk PDF atau ZIP.",
  },
  {
    title: "E-Document Management",
    image: "/img/projects/project-1.png",
    techStack: ["React", "Node.js", "MongoDB"],
    description:
      "Platform untuk mengelola dokumen secara online dengan fitur unggah, unduh, dan berbagi dokumen secara aman menggunakan otentikasi user.",
  },
  {
    title: "E-Document Management",
    image: "/img/projects/project-1.png",
    techStack: ["React", "Node.js", "MongoDB"],
    description:
      "Platform untuk mengelola dokumen secara online dengan fitur unggah, unduh, dan berbagi dokumen secara aman menggunakan otentikasi user.",
  },
];
const projects = [
  {
    title: "AI Credit Scoring",
    image: "/img/projects/project-1.png",
    techStack: ["Next.js", "Express", "PostgreSQL"],
    description:
      "Website untuk melakukan proses kredit scoring dengan fitur yang terintegrasi dengan AI. Fitur utama melakukan pengecekan Identitas, Registrasi User dan Download Laporan User dalam bentuk PDF atau ZIP.",
  },
  {
    title: "E-Document Management",
    image: "/img/projects/project-1.png",
    techStack: ["React", "Node.js", "MongoDB"],
    description:
      "Platform untuk mengelola dokumen secara online dengan fitur unggah, unduh, dan berbagi dokumen secara aman menggunakan otentikasi user.",
  },
  {
    title: "E-Document Management",
    image: "/img/projects/project-1.png",
    techStack: ["React", "Node.js", "MongoDB"],
    description:
      "Platform untuk mengelola dokumen secara online dengan fitur unggah, unduh, dan berbagi dokumen secara aman menggunakan otentikasi user.",
  },
  {
    title: "E-Document Management",
    image: "/img/projects/project-1.png",
    techStack: ["React", "Node.js", "MongoDB"],
    description:
      "Platform untuk mengelola dokumen secara online dengan fitur unggah, unduh, dan berbagi dokumen secara aman menggunakan otentikasi user.",
  },
  {
    title: "E-Document Management",
    image: "/img/projects/project-1.png",
    techStack: ["React", "Node.js", "MongoDB"],
    description:
      "Platform untuk mengelola dokumen secara online dengan fitur unggah, unduh, dan berbagi dokumen secara aman menggunakan otentikasi user.",
  },
];

const Projects = ({ buttonAllProjects }: { buttonAllProjects: boolean }) => {
  const router = useRouter();

  const linkProjects = () => {
    router.push("/projects");
  };
  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center ${buttonAllProjects ? "py-0" : "py-20"}`}
    >
      <div className="flex flex-col items-center my-5">
        <h1 className="text-xl font-bold">Projects</h1>
        <p className="text-sm w-72 text-center">
          Some of my skills I learned in my journey of self-taught coding.
        </p>
      </div>

      <div
        className={`${buttonAllProjects ? "hidden" : "block"} flex flex-col md:flex-row flex-wrap justify-center gap-5 md:px-20`}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-72 rounded-xl overflow-hidden border shadow cursor-pointer bg-white dark:bg-slate-800"
          >
            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={400}
            />
            {/* Project Details */}
            <div className="p-4 text-start flex flex-col justify-between h-48">
              <div>
                <h2 className="font-bold text-lg">{project.title}</h2>
                <p className="text-xs">{project.description}</p>
              </div>
              <ul className="text-xs flex gap-x-3 flex-wrap my-2">
                {project.techStack.map((tech, i) => (
                  <li
                    key={i}
                    className="px-2 py-1 rounded-xl bg-[#1FEE00] text-white font-bold"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Projects Grid */}
      <div
        className={`${buttonAllProjects ? "block" : "hidden"} flex flex-col md:flex-row flex-wrap justify-center gap-5 md:px-20`}
      >
        {projectsAbout.map((project, index) => (
          <div
            key={index}
            className="w-72 rounded-xl overflow-hidden border shadow cursor-pointer bg-white dark:bg-slate-800"
          >
            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={400}
            />
            {/* Project Details */}
            <div className="p-4 text-start flex flex-col justify-between h-48">
              <div>
                <h2 className="font-bold text-lg">{project.title}</h2>
                <p className="text-xs">{project.description}</p>
              </div>
              <ul className="text-xs flex gap-x-3 flex-wrap my-2">
                {project.techStack.map((tech, i) => (
                  <li
                    key={i}
                    className="px-2 py-1 rounded-xl bg-[#1FEE00] text-white font-bold"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className={`${buttonAllProjects ? "block" : "hidden"} my-5`}>
        <Button onClick={linkProjects} variant={"default"}>
          View All Project
        </Button>
      </div>
    </section>
  );
};

export default Projects;
