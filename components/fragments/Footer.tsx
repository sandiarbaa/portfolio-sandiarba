"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { DarkMode, LightMode } from "@/app/redux/slice/themeSlice";
import { Sun, Moon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();

  const toggleDarkMode = () => {
    dispatch(DarkMode());
  };

  const toggleLightMode = () => {
    dispatch(LightMode());
  };

  return (
    <footer className="flex flex-col px-10 md:px-20 lg:px-40 py-5 container mx-auto">
      {/* Logo & Mode */}
      <section className="flex justify-between">
        <div className="font-bold text-2xl text-black dark:text-white">
          <span className="text-[#1FEE00]">SAP</span>.
        </div>
        <div>
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
        </div>
      </section>

      <section className="text-center text-sm">
        {/* <div className="h-[1px] w-full bg-black dark:bg-white">helo</div> */}
        <div>
          <ul className="flex gap-x-3 text-2xl justify-center my-5">
            <li className="icon-style">
              <a
                href="https://github.com/sandiarbaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className="icon-style">
              <a
                href="https://www.linkedin.com/in/sandi-arba-putra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="icon-style">
              <a
                href="https://www.instagram.com/_arbaa_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="icon-style">
              <a
                href="mailto:sandiarbaa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail />
              </a>
            </li>
          </ul>
        </div>
        <p>Built by 💖, available on GitHub.</p>
        <p>© 2024 SandiArbaa All Rights Reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
