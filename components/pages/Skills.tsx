"use client";

import { BiLogoPostgresql } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import {
  FaAws,
  FaBootstrap,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaLaravel,
  FaReact,
  FaSass,
  FaVuejs,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiJest,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiPhp,
  SiPrisma,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  { Icon: FaHtml5, label: "HTML5" },
  { Icon: IoLogoCss3, label: "CSS3" },
  { Icon: SiJavascript, label: "JavaScript" },
  { Icon: SiPhp, label: "PHP" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: FaBootstrap, label: "Bootstrap" },
  { Icon: RiTailwindCssFill, label: "Tailwind CSS" },
  { Icon: DiNodejs, label: "Node.js" },
  { Icon: FaLaravel, label: "Laravel" },
  { Icon: SiExpress, label: "Express.js" },
  { Icon: FaReact, label: "React.js" },
  { Icon: RiNextjsFill, label: "Next.js" },
  { Icon: FaVuejs, label: "Vue.js" },
  { Icon: SiVite, label: "Vite.js" },
  { Icon: FaSass, label: "Sass" },
  { Icon: FaGithub, label: "GitHub" },
  { Icon: SiMysql, label: "MySQL" },
  { Icon: BiLogoPostgresql, label: "PostgreSQL" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: SiFirebase, label: "Firebase" },
  { Icon: SiPrisma, label: "Prisma" },
  { Icon: FaAws, label: "AWS" },
  { Icon: SiNginx, label: "Nginx" },
  { Icon: SiJest, label: "Jest" },
  { Icon: SiJquery, label: "JQuery" },
  { Icon: FaFigma, label: "Figma" },
];

const Skills = () => {
  return (
    <TooltipProvider>
      <section className="min-h-screen flex flex-col justify-center items-center py-20">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold">Skills</h1>
          <p className="text-sm w-72 text-center">
            Some of my skills I learned in my journey of self-taught coding.
          </p>
        </div>

        {/* Icons Skills */}
        <div className="grid grid-cols-3 gap-3 my-5 md:grid-cols-5 lg:grid-cols-7 place-items-center">
          {skills.map(({ Icon, label }, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div className="p-5 border cursor-pointer hover:shadow rounded-md dark:border-white hover:scale-95 transition duration-200 hover:bg-[#1FEE00]">
                  <Icon className="text-5xl" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Skills;
