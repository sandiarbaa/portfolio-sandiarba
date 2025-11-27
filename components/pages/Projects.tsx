"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

// Data Projects About
const projectsAbout = [
  {
    title: "Portal UMKM",
    type: "Fullstack",
    image: "/img/projects/portal-umkm.png",
    techStack: ["Next.js", "Laravel", "MySQL"],
    description:
      "Website to gather UMKM. Displaying UMKM products, the admin can manage the existing UMKM, owners can manage their products, and buyers can contact sellers and purchase products via WhatsApp.",
    projectURL: "https://portal-umkm-parung-serab.vercel.app/welcome",
  },
  {
    title: "AI Credit Scoring",
    type: "Fullstack",
    image: "/img/projects/ai-credit-scoring.png",
    techStack: ["Next.js", "Express", "PostgreSQL"],
    description:
      "Website to perform credit scoring process with features integrated with AI. The main features are checking Identity, User Registration and Downloading User Reports in PDF or ZIP format.",
    // projectURL: "https://github.com/sandiarbaa/mknows-scoring-website",
  },
  {
    title: "Shopping Cart",
    type: "Fullstack",
    image: "/img/projects/shopping-cart-mevn.png",
    techStack: ["Vue", "Express", "MongoDB"],
    description:
      "Website for product checkout. There is a feature to view details and all products, then you can add products to your cart and calculate your total purchases.",
    projectURL:
      "https://github.com/sandiarbaa/vuestore-source-code/blob/main/vuestore-source-code.md",
  },
];

// Data Projects Page
const projects = [
  {
    title: "Portal UMKM",
    type: "Fullstack",
    image: "/img/projects/portal-umkm.png",
    techStack: ["Next.js", "Laravel", "MySQL"],
    description:
      "Website to gather UMKM. Displaying UMKM products, the admin can manage the existing UMKM, owners can manage their products, and buyers can contact sellers and purchase products via WhatsApp.",
  },
  {
    title: "AI Credit Scoring",
    type: "Fullstack",
    image: "/img/projects/ai-credit-scoring.png",
    techStack: ["Next.js", "Express", "PostgreSQL"],
    description:
      "Internship Project | Website to perform credit scoring process with features integrated with AI. The main features are checking Identity, User Registration and Downloading User Reports in PDF or ZIP format.",
    // projectURL: "https://github.com/sandiarbaa/mknows-scoring-website",
  },
  {
    title: "Shopping Cart",
    type: "Fullstack",
    image: "/img/projects/shopping-cart-mevn.png",
    techStack: ["Vue", "Express", "MongoDB"],
    description:
      "Bootcamp Project | Website for product checkout. There is a feature to view details and all products, then you can add products to your cart and calculate your total purchases.",
    projectURL:
      "https://github.com/sandiarbaa/vuestore-source-code/blob/main/vuestore-source-code.md",
  },

  {
    title: "Beauty G",
    type: "Fullstack",
    image: "/img/projects/beauty-g.png",
    techStack: ["Laravel", "Tailwind", "MySQL"],
    description:
      "Freelance Project | Website for managing documents online with features for uploading, editing, viewing and sharing documents.",
    projectURL: "https://github.com/sandiarbaa/web-produk-kecantikan-beauty-g",
  },
  {
    title: "Cars Rent",
    type: "Fullstack",
    image: "/img/projects/cars-rent.png",
    techStack: ["Laravel", "Bootstrap", "MySQL"],
    description:
      "Freelance Project | Website for car rental, there are features for managing rental lists and rental checkouts. As well as data management of cars to be rented.",
    projectURL: "https://github.com/sandiarbaa/Rental-Mobil-App",
  },
  {
    title: "E-Document",
    type: "Fullstack",
    image: "/img/projects/e-document.png",
    techStack: ["Laravel", "Bootstrap", "MySQL"],
    description:
      "Freelance Project | Website for managing documents online with features for uploading, editing, viewing and sharing documents.",
    projectURL: "https://github.com/sandiarbaa/laravel-doc",
  },
  // {
  //   title: "Shopping Cart",
  //   image: "/img/projects/shopping-cart-fe.png",
  //   techStack: ["Next.js", "Redux", "Typescript"],
  //   description:
  //     "Website untuk melakukan untuk melakukan checkout product dari product yang tersedia.",
  //   projectURL: "https://github.com/sandiarbaa/shopping-cart",
  // },
  {
    title: "Split Bill",
    type: "Frontend",
    image: "/img/projects/split-bill.png",
    techStack: ["React", "Typescript", "Tailwind"],
    description:
      "Bootcamp Project | Split Bill app to calculate the calculation of the amount of the split with friends. And can determine who makes the payment.",
    projectURL: "https://github.com/sandiarbaa/split-bill",
  },
  {
    title: "Portfolio",
    type: "Frontend",
    image: "/img/projects/portfolio.png",
    techStack: ["Next.js", "Redux", "Tailwind"],
    description:
      "Personal Project | Portfolio website to show skills and projects that I have worked on and has a Darkmode feature.",
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
        {buttonAllProjects ? (
          <p className="text-sm w-72 text-center">
            Some of my projects i built, click view all for all projects.
          </p>
        ) : (
          <p className="text-sm w-72 text-center">
            Some of my projects i built, see my github for all projects.
          </p>
        )}
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
                <h2 className="font-bold text-lg flex justify-between items-center">
                  <a
                    href={project.projectURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1FEE00] transition duration-300 flex items-center gap-1.5"
                  >
                    <span>{project.title}</span>
                    <HiMiniArrowTopRightOnSquare size={15} />
                  </a>
                  <h4 className="text-xs italic text-white dark:text-black bg-black dark:bg-white font-bold px-2 py-0.5 rounded-xl">
                    {project.type}
                  </h4>
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
                <h2 className="font-bold text-lg flex justify-between items-center">
                  <a
                    href={project.projectURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1FEE00] transition duration-300 flex items-center gap-1.5"
                  >
                    <span>{project.title}</span>
                    <HiMiniArrowTopRightOnSquare size={15} />
                  </a>
                  <h4 className="text-xs italic text-white dark:text-black bg-black dark:bg-white font-bold px-2 py-0.5 rounded-xl">
                    {project.type}
                  </h4>
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
