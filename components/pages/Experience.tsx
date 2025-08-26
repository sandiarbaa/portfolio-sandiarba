import Image from "next/image";

const Experience = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold">Experience</h1>
        <p className="text-sm w-72 text-center">
          My experience as a professional developer in the world of software
          development.
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-x-10 my-5 md:my-10">
        <div className="w-[300px] md:w-[450px] order-2">
          <div className="mb-5 flex  flex-col  h-full justify-center">
            <h2 className="font-bold text-xl">
              Fullstack Developer (Internship)
            </h2>
            <h2 className="font-normal text-sm">Jun 2024 - Nov 2024</h2>
            <h2 className="font-bold tracking-wider mb-3 text-sm">
              PT Menara Indonesia | M-Knows Consulting | KampusGratis
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Internship as a Full-Stack Web Developer, contributing to the
              development of a web-based internal credit scoring application for
              M-Knows Consulting, automating and digitizing manual credit
              checks, and improving operational efficiency. The Front-end
              project was built with Next.js Typescript and the Back-end was
              built with Express.js PostgreSQL, Deployed to AWS.
            </p>
          </div>
        </div>

        <div className="border rounded-md overflow-hidden dark:shadow-white md:h-[283px] order-1 mb-5 lg:mb-0 shadow-md w-[300px] md:w-[400px] mx-auto">
          <Image
            src={"/img/experience/fullstack-mknows-experience.png"}
            alt="fullstack-mknows-experience"
            width={400}
            height={400}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center gap-x-10 my-5 md:my-10">
        <div className="w-[300px] md:w-[450px] order-2">
          <div className="mb-5 flex  flex-col  h-full justify-center">
            <h2 className="font-bold text-xl">
              Fullstack Developer (Fulltime)
            </h2>
            <h2 className="font-normal text-sm">Feb 2025 - Jul 2025</h2>
            <h2 className="font-bold tracking-wider mb-3 text-sm">
              PT Peksi Andaru Sakti | PASTI GROUP
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Full-time as a Full-Stack Developer, contributing to the
              development of the Fund-Request feature, which includes Advance,
              Expense, and Reimburse to support the company’s operational needs.
              This feature enables employees such as sales, drivers, and
              collectors to request travel funds, record expenses, and submit
              reimbursements. The company had several internal applications for
              different divisions, such as the Sales Activity App, Delivery App,
              and Collection App. I initially developed the Fund-Request feature
              in one application, and later replicated and implemented it across
              the other division-specific apps. The Front-end was developed with
              React.js and React Native (Expo), while the Back-end was built
              with .NET, resulting in a more integrated, transparent, and
              efficient internal financial system.
            </p>
          </div>
        </div>

        <div className="border rounded-md overflow-hidden dark:shadow-white md:h-[283px] order-1 mb-5 lg:mb-0 shadow-md w-[300px] md:w-[400px] mx-auto">
          <Image
            src={"/img/experience/logo-pas.jpeg"}
            alt="fullstack-mknows-experience"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
