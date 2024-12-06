"use client";

import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    title: "Alibaba Cloud Certification",
    content:
      "Certified in developing applications using Alibaba Cloud Services.",
    image: "/img/certifications/alibaba.png",
    credential: "",
  },
  {
    id: 2,
    title: "Edspert Front-end React.js",
    content:
      "Learned React.js through Codepolitan by building a Split Bill app with dynamic features.",
    image: "/img/certifications/edspert.png",
    credential: "",
  },
  {
    id: 3,
    title: "HTML Mastery",
    content: "Deep dive into HTML structure, semantics, and web standards.",
    image: "/img/certifications/html.png",
    credential: "https://www.codepolitan.com/c/CS9CVSL/",
  },
  {
    id: 4,
    title: "CSS Design Techniques",
    content: "Mastered CSS for responsive and aesthetic web designs.",
    image: "/img/certifications/css.png",
    credential: "https://www.codepolitan.com/c/LTHPVOQ/",
  },
  {
    id: 5,
    title: "Bootstrap Essentials",
    content: "Learned rapid UI development with Bootstrap framework.",
    image: "/img/certifications/bootstrap.png",
    credential: "https://www.codepolitan.com/c/8YXA5SN/",
  },
  {
    id: 6,
    title: "JavaScript Basics",
    content: "Understanding core JavaScript concepts and syntax.",
    image: "/img/certifications/javascript.png",
    credential: "https://www.codepolitan.com/c/JEG9BKR/",
  },
  {
    id: 7,
    title: "JS DOM Manipulation",
    content: "Interacting with and manipulating the DOM using JavaScript.",
    image: "/img/certifications/js-dom.png",
    credential: "https://www.codepolitan.com/c/G4WQ6T8/",
  },
  {
    id: 8,
    title: "Asynchronous JavaScript",
    content: "Mastered async programming with Promises and async/await.",
    image: "/img/certifications/js-asynchronous.png",
    credential: "https://www.codepolitan.com/c/DFIK17B/",
  },
  {
    id: 9,
    title: "AJAX & Web API",
    content: "Fetching and displaying data using AJAX and RESTful APIs.",
    image: "/img/certifications/ajax-web-api.png",
    credential: "https://www.codepolitan.com/c/1RQFPSO/",
  },
  {
    id: 10,
    title: "JavaScript OOP",
    content: "Learned Object-Oriented Programming in JavaScript.",
    image: "/img/certifications/js-oop.png",
    credential: "https://www.codepolitan.com/c/KPUWTLL/",
  },
  {
    id: 11,
    title: "Node.js Basics",
    content:
      "Understanding the basics of server-side development with Node.js.",
    image: "/img/certifications/nodejs.png",
    credential: "https://www.codepolitan.com/c/SRPLXNU/",
  },
  {
    id: 12,
    title: "Express.js Fundamentals",
    content: "Learned building RESTful APIs using Express.js.",
    image: "/img/certifications/express.png",
    credential: "https://www.codepolitan.com/c/V5WYGOE/",
  },
  {
    id: 13,
    title: "Express.js with EJS",
    content: "Dynamic web development using Express.js and EJS.",
    image: "/img/certifications/express-ejs.png",
    credential: "https://www.codepolitan.com/c/KAMOH2D/",
  },
  {
    id: 14,
    title: "RESTful API with Express",
    content: "Built RESTful APIs following industry standards with Express.js.",
    image: "/img/certifications/express-restful.png",
    credential: "https://www.codepolitan.com/c/ZYJNRDP/",
  },
  {
    id: 15,
    title: "MongoDB Basics",
    content: "Introduction to NoSQL databases using MongoDB.",
    image: "/img/certifications/mongodb.png",
    credential: "https://www.codepolitan.com/c/ZK6WBAA/",
  },
  {
    id: 16,
    title: "Mongoose in JavaScript",
    content: "Database interaction in JavaScript using Mongoose ORM.",
    image: "/img/certifications/mongodb-in-js-mongoose.png",
    credential: "https://www.codepolitan.com/c/KGCB3QS/",
  },
  {
    id: 17,
    title: "Express & MongoDB Project",
    content: "Create project of MongoDB with Express.js and Mongoose.",
    image: "/img/certifications/mongo-express-ejs-mongoose.png",
    credential: "https://www.codepolitan.com/c/AW9VF4H/",
  },
  {
    id: 18,
    title: "Express Middleware",
    content: "Implementing middleware in Express.js.",
    image: "/img/certifications/mongo-express-middleware.png",
    credential: "https://www.codepolitan.com/c/HBNGUA6/",
  },
  {
    id: 19,
    title: "Error Handling in Express",
    content: "Advanced error management in Express.js applications.",
    image: "/img/certifications/mongo-error-handler-express.js-mongoose.png",
    credential: "https://www.codepolitan.com/c/40CBU1A/",
  },
  {
    id: 20,
    title: "MongoDB Relationships",
    content: "Modeling relationships in MongoDB with Mongoose.",
    image: "/img/certifications/mongodb-relationship-mongoose.png",
    credential: "https://www.codepolitan.com/c/ZRA9QWK/",
  },
  {
    id: 21,
    title: "Implementing Relationships in MongoDB",
    content: "Practical implementation of relationships using Mongoose.",
    image:
      "/img/certifications/mongo-implementasi-relationship-express-mongoose.png",
    credential: "https://www.codepolitan.com/c/VWEFQDU/",
  },
  {
    id: 22,
    title: "Express.js Routing & Cookies",
    content: "Enhanced routing and cookie handling in Express.js.",
    image: "/img/certifications/express-route-cookies.png",
    credential: "https://www.codepolitan.com/c/4WSPMNZ/",
  },
  {
    id: 23,
    title: "Express.js Sessions",
    content: "Learned session management in Express.js applications.",
    image: "/img/certifications/express-session.png",
    credential: "https://www.codepolitan.com/c/KHWF6RN/",
  },
  {
    id: 24,
    title: "Authentication with Express",
    content:
      "Built secure authentication systems using Express.js with ORM Mongoose",
    image: "/img/certifications/express-mongoose-authentication.png",
    credential: "https://www.codepolitan.com/c/M45RUJZ/",
  },
];

// Fungsi untuk membagi data berdasarkan halaman
const getPaginatedData = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[],
  currentPage: number,
  itemsPerPage: number
) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return data.slice(startIndex, endIndex);
};

// Fungsi untuk menentukan halaman yang akan ditampilkan
const getVisiblePages = (currentPage: number, totalPages: number) => {
  const pages: (number | string)[] = [];

  // Tambahkan halaman pertama jika bukan halaman pertama
  if (currentPage > 2) {
    pages.push(1);
    pages.push("...");
  }

  // Halaman yang sedang aktif
  pages.push(currentPage);

  // Tambahkan halaman terakhir jika bukan halaman terakhir
  if (currentPage < totalPages - 1) {
    pages.push("...");
    pages.push(totalPages);
  }

  return pages;
};
// const getVisiblePages = (
//   currentPage: number,
//   totalPages: number,
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   visiblePages: number
// ) => {
//   const pages: (number | string)[] = [];
//   const startPage = Math.max(1, currentPage - 1);
//   const endPage = Math.min(totalPages, currentPage + 1);

//   if (startPage > 1) pages.push(1);
//   if (startPage > 2) pages.push("...");

//   for (let i = startPage; i <= endPage; i++) {
//     pages.push(i);
//   }

//   if (endPage < totalPages - 1) pages.push("...");
//   if (endPage < totalPages) pages.push(totalPages);

//   return pages;
// };

const Certifications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(cardData.length / itemsPerPage);
  // const visiblePages = 1; // Jumlah halaman yang terlihat selain elipsis

  const paginatedData = getPaginatedData(cardData, currentPage, itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const visiblePageNumbers = getVisiblePages(currentPage, totalPages);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold">Certifications</h1>
        <p className="text-sm w-72 text-center">
          Have a look at the certifications that empower my professional
          journey.
        </p>
      </div>

      <div className="my-5 flex flex-wrap justify-center gap-5">
        {paginatedData.map((card) => (
          <div
            key={card.id}
            className="w-72 rounded-xl border shadow bg-white dark:bg-slate-800 flex flex-col justify-between"
          >
            <div className="overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={400}
              />
            </div>
            <div className="text-xs p-5 text-center flex flex-col justify-between h-40">
              <div>
                <h2 className="text-lg font-bold">{card.title}</h2>
                <p>{card.content}</p>
              </div>
              <p className="text-[#1FEE00] text-sm font-normal pt-3">
                <a
                  href={card.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1FEE00] hover:text-green-500 transition duration-300"
                >
                  View Credential
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePrevious();
              }}
            />
          </PaginationItem>
          {visiblePageNumbers.map((page, index) =>
            page === "..." ? (
              <PaginationItem key={index}>
                <span className="px-2">...</span>
              </PaginationItem>
            ) : (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page as number);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          )}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNext();
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default Certifications;
