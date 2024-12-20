"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { DarkMode, LightMode } from "@/app/redux/slice/themeSlice";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsHydrated(true); // Set to true after the component is mounted
  }, []);

  const toggleDarkMode = () => {
    dispatch(DarkMode());
  };

  const toggleLightMode = () => {
    dispatch(LightMode());
  };

  const linkAbout = () => {
    router.push("/");
  };

  const linkSkills = () => {
    router.push("/skills");
  };

  const linkEducation = () => {
    router.push("/education");
  };

  const linkProjects = () => {
    router.push("/projects");
  };

  const linkCertifications = () => {
    router.push("/certifications");
  };

  if (!isHydrated) {
    // Render nothing or a fallback until hydration is complete
    return null;
  }

  return (
    <nav className="container mx-auto flex px-10 md:px-20 lg:px-40 justify-between py-5 absolute top-0 left-1/2 -translate-x-1/2 z-10">
      <div className="font-bold text-2xl text-black dark:text-white">
        <span className="text-[#1FEE00]">SAP</span>.
      </div>
      <div className="flex justify-end">
        {/* Navbar Desktop */}
        <div className="hidden md:block">
          <ul className="flex gap-x-5 items-center">
            <li className="navbar-link relative">
              <Link href="/">About</Link>
            </li>
            <li className="navbar-link relative">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="navbar-link relative">
              <Link href="/education">Education</Link>
            </li>
            <li className="navbar-link relative">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="navbar-link relative">
              <Link href="/certifications">Certifications</Link>
            </li>
            <li className="navbar-link relative">
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Button variant={"default"}>
                <a
                  href="mailto:sandiarbaa@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Me
                </a>
              </Button>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-style">
                  {darkMode ? <Sun /> : <Moon />}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={toggleDarkMode}>
                    Dark Mode
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={toggleLightMode}>
                    Light Mode
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>

        {/* Navbar Mobile */}
        <div className="md:hidden">
          <ul className="flex gap-x-5 items-center">
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-style">
                  <GiHamburgerMenu className="text-2xl" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={linkAbout}>About</DropdownMenuItem>
                  <DropdownMenuItem onClick={linkSkills}>
                    Skills
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={linkEducation}>
                    Education
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={linkProjects}>
                    Projects
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={linkCertifications}>
                    Certifications
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Button variant={"default"}>
                <a
                  href="mailto:sandiarbaa@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Me
                </a>
              </Button>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-style">
                  {darkMode ? <Sun /> : <Moon />}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={toggleDarkMode}>
                    Dark Mode
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={toggleLightMode}>
                    Light Mode
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
