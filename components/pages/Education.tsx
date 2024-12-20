import Image from "next/image";
import SectionTitle from "../elements/section-title";

const Education = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20">
      <SectionTitle title="Education">
        The place where I seek knowledge and skills, both formal and informal
        education.
      </SectionTitle>
      <div className="my-10">
        {/* MEVN */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-x-5 mb-16">
          {/* Image */}
          <div className="overflow-hidden rounded-md border shadow-md dark:shadow-white bg-blue-500 w-[300px] md:w-[400px]">
            <Image
              src="/img/education/bootcamp-mevn.png"
              alt="bootcamp-mevn"
              width={400}
              height={400}
            />
          </div>
          {/* Content */}
          <div className="w-[300px] md:w-[450px] flex flex-col justify-center mx-auto mt-5 text-center">
            <h2 className="font-bold text-sm md:text-base lg:text-lg">
              Bootcamp Full Stack MEVN - Codepolitan
            </h2>
            <h2 className="font-semibold text-slate-500 text-sm">
              Jan 2024 - Des 2024
            </h2>
            <p className="text-sm lg:text-base mt-3">
              Learn Fullstack Web Development from the basics such as HTML, CSS,
              Javascript, Git and Github. Then learn the Vue.js Front-end
              framework and the Express.js Backend framework with the MongoDB
              Database, at the end of the bootcamp create a final{" "}
              <span className="italic font-bold">Shopping Cart Project</span>{" "}
              with MEVN Tech-stack.
            </p>
          </div>
        </div>

        {/* React */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-x-5 mb-16">
          {/* Image */}
          <div className="overflow-hidden rounded-md border shadow-md dark:shadow-white bg-blue-500 w-[300px] md:w-[400px]">
            <Image
              src="/img/education/bootcamp-react.png"
              alt="bootcamp-react"
              width={400}
              height={400}
            />
          </div>
          {/* Content */}
          <div className="w-[300px] md:w-[450px] flex flex-col justify-center mx-auto mt-5 text-center">
            <h2 className="font-bold text-sm md:text-base lg:text-lg">
              Bootcamp Frontend React - Codepolitan
            </h2>
            <h2 className="font-semibold text-slate-500 text-sm">
              Aug 2024 - Jul 2025
            </h2>
            <p className="text-sm lg:text-base mt-3">
              Learn Front-end Web Development starting from the basics such as
              HTML, CSS, Javascript, Git and Github. Then learn the React
              Front-end framework. Starting from components, props, hooks, state
              management, etc. And at the end of the Bootcamp create a{" "}
              <span className="italic font-bold">Split Bill App Project</span>{" "}
              using React.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
