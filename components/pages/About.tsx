import React from "react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section className="flex flex-col justify-center mx-auto min-h-screen w-[300px] sm:w-[500px] lg:w-[700px] text-center">
      {/* Title Name */}
      <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
        Hi, I am <span className="text-[#1FEE00] underline">SandiArba</span> a{" "}
        <br /> Fullstack Web Developer
        <span className="text-[#1FEE00]">.</span>
      </p>

      {/* Headline */}
      <p className="w-[300px] sm:w-[350px] lg:w-[400px] mx-auto text-center text-sm my-1">
        A comprehensive showcase of my software development skills, experiences,
        and projects, highlighting my expertise and dedication to the craft of
        coding..
      </p>

      {/* Icons */}
      <ul className="flex gap-x-5 text-2xl justify-center my-5">
        <li className="icon-style">
          <FaGithub />
        </li>
        <li className="icon-style">
          <FaLinkedin />
        </li>
        <li className="icon-style">
          <FaInstagram />
        </li>
      </ul>

      {/* Button */}
      <div>
        <Button variant={"default"}>Download CV</Button>
      </div>
    </section>
  );
};

export default About;
