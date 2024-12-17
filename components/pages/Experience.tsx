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
            <h2 className="font-bold text-xl">Fullstack Web Developer</h2>
            <h2 className="font-normal text-sm">21 Jun - 21 Nov 2024</h2>
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

          {/* Features List */}
          {/* <div>
            <h2 className="font-bold mb-3">
              Features I developed in the Credit Scoring Project
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm font-light">
              <li>
                <span className="font-semibold">
                  Role-based Authentication:
                </span>{" "}
                Implemented secure authentication with three roles (Superadmin,
                Admin, User), each with unique permissions and capabilities.
              </li>
              <li>
                <span className="font-semibold">AI Document Verification:</span>{" "}
                Built a feature leveraging AI to verify KTP and selfie images,
                ensuring identity validation before accessing other
                functionalities.
              </li>
              <li>
                <span className="font-semibold">AI Automation:</span> Developed
                an automated document processing feature for uploads such as
                NPWP, SIM, and other critical documents.
              </li>
              <li>
                <span className="font-semibold">Report Management:</span>{" "}
                Enabled users to view and download reports, supporting single
                reports as PDFs or multiple reports as ZIP files.
              </li>
              <li>
                <span className="font-semibold">Search Functionality:</span>{" "}
                Added search capability to locate reports or user requests by
                keywords such as person names or specific features used.
              </li>
              <li>
                <span className="font-semibold">Dashboard Integration:</span>{" "}
                Designed a dashboard with charts including vertical bars, double
                vertical bars, doughnuts, and location maps (data integration in
                progress).
              </li>
              <li>
                <span className="font-semibold">Pagination & Selection:</span>{" "}
                Implemented multi-selection for processing verified users and
                features, integrated with table pagination.
              </li>
              <li>
                <span className="font-semibold">Collaboration:</span> Worked
                closely with UI/UX teams and product owners to align development
                with client needs and expectations.
              </li>
              <li>
                <span className="font-semibold">Deployment:</span> Deployed
                front-end and back-end systems, including AI integrations, on
                AWS EC2 with Nginx for server configuration.
              </li>
            </ul>
          </div> */}
        </div>

        <div className="border rounded-md overflow-hidden dark:shadow-white md:h-[283px] order-1 mb-5 lg:mb-0 shadow-md bg-red-500 w-[300px] md:w-[400px] mx-auto">
          <Image
            src={"/img/experience/fullstack-mknows-experience.png"}
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
