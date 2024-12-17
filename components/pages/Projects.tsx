"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

// Data Projects About
const projectsAbout = [
  {
    title: "AI Credit Scoring",
    image: "/img/projects/project-1.png",
    techStack: ["Next.js", "Express", "PostgreSQL"],
    description:
      "INTERNSHIP PROJECT | Website untuk melakukan proses kredit scoring dengan fitur yang terintegrasi dengan AI. Fitur utama melakukan pengecekan Identitas, Registrasi User dan Download Laporan User dalam bentuk PDF atau ZIP.",
    // projectURL: "https://github.com/sandiarbaa/mknows-scoring-website",
  },
  {
    title: "Booking Rental Mobil",
    image: "/img/projects/project-2.png",
    techStack: ["Laravel", "Bootstrap", "MySQL"],
    description:
      "Website untuk melakukan sewa mobil, ada fitur pengelolaan daftar sewa dan checkout sewa. Serta management data mobil yang akan disewakan",
    projectURL: "https://github.com/sandiarbaa/Rental-Mobil-App",
  },
  {
    title: "E-Document Management",
    image: "/img/projects/project-3.png",
    techStack: ["Laravel", "Bootstrap", "MySQL"],
    description:
      "Website untuk mengelola dokumen secara online dengan fitur unggah, edit, lihat, dan berbagi dokumen.",
    projectURL: "https://github.com/sandiarbaa/laravel-doc",
  },
];

// Data Projects Page
const projects = [
  {
    title: "AI Credit Scoring",
    image: "/img/projects/project-1.png",
    techStack: ["Next.js", "Express", "PostgreSQL"],
    description:
      "INTERNSHIP PROJECT | Website untuk melakukan proses kredit scoring dengan fitur yang terintegrasi dengan AI. Fitur utama melakukan pengecekan Identitas, Registrasi User dan Download Laporan User dalam bentuk PDF atau ZIP.",
    // projectURL: "https://github.com/sandiarbaa/mknows-scoring-website",
  },
  {
    title: "Booking Rental Mobil",
    image: "/img/projects/project-2.png",
    techStack: ["Laravel", "Bootstrap", "MySQL"],
    description:
      "Website untuk melakukan sewa mobil, ada fitur pengelolaan daftar sewa dan checkout sewa. Serta management data mobil yang akan disewakan",
    projectURL: "https://github.com/sandiarbaa/Rental-Mobil-App",
  },
  {
    title: "E-Document Management",
    image: "/img/projects/project-3.png",
    techStack: ["Laravel", "Bootstrap", "MySQL"],
    description:
      "Website untuk mengelola dokumen secara online dengan fitur unggah, edit, lihat, dan berbagi dokumen.",
    projectURL: "https://github.com/sandiarbaa/laravel-doc",
  },
  {
    title: "Web Kecantikan Beauty G",
    image: "/img/projects/project-4.png",
    techStack: ["Laravel", "Tailwind", "MySQL"],
    description:
      "INTERNSHIP PROJECT | Website penyedia berbagai produk kecantikan. Tersedia fitur multi role, approve user, registrasi user dan management produk.",
    projectURL: "https://github.com/sandiarbaa/web-produk-kecantikan-beauty-g",
  },
  {
    title: "Shopping Cart",
    image: "/img/projects/project-5.png",
    techStack: ["Next.js", "Redux", "Typescript"],
    description:
      "Website untuk melakukan untuk melakukan checkout product dari product yang tersedia.",
    projectURL: "https://github.com/sandiarbaa/shopping-cart",
  },
  {
    title: "Split Bill",
    image: "/img/projects/project-6.png",
    techStack: ["React", "Typescript", "Tailwind"],
    description:
      "Split Bill app untuk menghitung jumlah patungan dengan teman.",
    projectURL: "https://github.com/sandiarbaa/split-bill",
  },
  {
    title: "Portfolio",
    image: "/img/projects/portfolio.png",
    techStack: ["Next.js", "Redux", "Tailwind"],
    description:
      "Website Portfolio untuk menunjukan skills dan project-project yang telah saya kerjakan serta memiliki fitur Darkmode.",
    projectURL: "https://github.com/sandiarbaa/portfolio-sandiarba",
  },
];

const Projects = ({ buttonAllProjects }: { buttonAllProjects: boolean }) => {
  const router = useRouter();

  const linkProjects = () => {
    router.push("/projects");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20">
      <div className="flex flex-col items-center my-5">
        <h1 className="text-xl font-bold">Projects</h1>
        <p className="text-sm w-72 text-center">
          Some of my skills I learned in my journey of self-taught coding.
        </p>
      </div>

      {/* Project Page */}
      <div
        className={`${buttonAllProjects ? "hidden" : "block"} flex flex-col md:flex-row flex-wrap justify-center gap-5 md:px-20`}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-72 rounded-xl overflow-hidden border shadow cursor-pointer bg-white dark:shadow-white dark:bg-slate-800"
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
                <h2 className="font-bold text-lg">
                  <a
                    href={project.projectURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1FEE00] transition duration-300 flex items-center gap-1.5"
                  >
                    <span>{project.title}</span>
                    <HiMiniArrowTopRightOnSquare size={15} />
                  </a>
                </h2>
                <p className="text-xs">{project.description}</p>
              </div>
              <ul className="text-xs flex gap-x-3 flex-wrap my-2">
                {project.techStack.map((tech, i) => (
                  <li
                    key={i}
                    className="px-2 py-1 rounded-xl bg-[#1FEE00] text-white dark:text-slate-800 font-bold"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Projects | About */}
      <div
        className={`${buttonAllProjects ? "block" : "hidden"} flex flex-col md:flex-row flex-wrap justify-center gap-5 md:px-20`}
      >
        {projectsAbout.map((project, index) => (
          <div
            key={index}
            className="w-72 rounded-xl overflow-hidden shadow border dark:shadow-white cursor-pointer bg-white dark:bg-slate-800 "
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
                <h2 className="font-bold text-lg">
                  <a
                    href={project.projectURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1FEE00] transition duration-300 flex items-center gap-1.5"
                  >
                    <span>{project.title}</span>
                    <HiMiniArrowTopRightOnSquare size={15} />
                  </a>
                </h2>
                <p className="text-xs">{project.description}</p>
              </div>
              <ul className="text-xs flex gap-x-3 flex-wrap my-2">
                {project.techStack.map((tech, i) => (
                  <li
                    key={i}
                    className="px-2 py-1 rounded-xl bg-[#1FEE00] text-white dark:text-slate-800 font-bold"
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
