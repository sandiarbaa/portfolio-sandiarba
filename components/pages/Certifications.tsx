// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

// const Certifications = ({ addPadding }: { addPadding: boolean }) => {
//   return (
//     <section
//       className={`min-h-screen flex flex-col justify-center items-center ${addPadding ? "py-20" : ""}`}
//     >
//       <div className="flex flex-col items-center">
//         <h1 className="text-xl font-bold">Certifications</h1>
//         <p className="text-sm w-72 text-center">
//           Have a look at the certifications that empower my professional
//           journey.
//         </p>
//       </div>

//       {/* Pagination */}
//       <Pagination>
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious href="#" />
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink href="#">1</PaginationLink>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink href="#" isActive>
//               2
//             </PaginationLink>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink href="#">3</PaginationLink>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationNext href="#" />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </section>
//   );
// };

// export default Certifications;

// "use client";

// import { useState } from "react";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

// const Certifications = ({ addPadding }: { addPadding: boolean }) => {
//   // State untuk halaman aktif
//   const [currentPage, setCurrentPage] = useState<number>(1);

//   // Jumlah total halaman
//   const totalPages: number = 5;

//   // Fungsi untuk pindah ke halaman berikutnya
//   const handleNext = (): void => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   // Fungsi untuk pindah ke halaman sebelumnya
//   const handlePrevious = (): void => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   // Fungsi untuk pindah ke halaman tertentu
//   const handlePageChange = (page: number): void => {
//     setCurrentPage(page);
//   };

//   return (
//     <section
//       className={`min-h-screen flex flex-col justify-center items-center ${
//         addPadding ? "py-20" : ""
//       }`}
//     >
//       <div className="flex flex-col items-center">
//         <h1 className="text-xl font-bold">Certifications</h1>
//         <p className="text-sm w-72 text-center">
//           Have a look at the certifications that empower my professional
//           journey.
//         </p>
//       </div>

//       {/* Konten Berdasarkan Halaman */}
//       <div className="my-5">
//         <h2 className="text-2xl">Hello {currentPage}</h2>
//       </div>

//       {/* Pagination */}
//       <Pagination>
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 handlePrevious();
//               }}
//             />
//           </PaginationItem>

//           {/* Buat Link untuk Setiap Halaman */}
//           {[...Array(totalPages)].map((_, index) => (
//             <PaginationItem key={index}>
//               <PaginationLink
//                 href="#"
//                 isActive={currentPage === index + 1}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handlePageChange(index + 1);
//                 }}
//               >
//                 {index + 1}
//               </PaginationLink>
//             </PaginationItem>
//           ))}

//           <PaginationItem>
//             <PaginationNext
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleNext();
//               }}
//             />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </section>
//   );
// };

// export default Certifications;

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

// Data Dummy
const cardData = [
  {
    id: 1,
    title: "Card 1",
    content: "This is content for card 1.",
    image: "/img/projects/project-1.png",
  },
  {
    id: 2,
    title: "Card 2",
    content: "This is content for card 2.",
    image: "/img/projects/project-1.png",
  },
  {
    id: 3,
    title: "Card 3",
    content: "This is content for card 3.",
    image: "/img/projects/project-1.png",
  },
  {
    id: 4,
    title: "Card 4",
    content: "This is content for card 4.",
    image: "/img/projects/project-1.png",
  },
  {
    id: 5,
    title: "Card 5",
    content: "This is content for card 5.",
    image: "/img/projects/project-1.png",
  },
  {
    id: 6,
    title: "Card 6",
    content: "This is content for card 6.",
    image: "/img/projects/project-1.png",
  },
  {
    id: 7,
    title: "Card 7",
    content: "This is content for card 7.",
    image: "/img/projects/project-1.png",
  },
  {
    id: 8,
    title: "Card 8",
    content: "This is content for card 8.",
    image: "/img/projects/project-1.png",
  },
  {
    id: 9,
    title: "Card 9",
    content: "This is content for card 9.",
    image: "/img/projects/project-1.png",
  },
  {
    id: 10,
    title: "Card 10",
    content: "This is content for card 10.",
    image: "/img/projects/project-1.png",
  },
  {
    id: 11,
    title: "Card 11",
    content: "This is content for card 11.",
    image: "/img/projects/project-1.png",
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

const Certifications = ({ addPadding }: { addPadding: boolean }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Jumlah kartu per halaman
  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  // Data untuk halaman saat ini
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

  return (
    <section
      className={`min-h-screen flex flex-col justify-center items-center ${
        addPadding ? "py-20" : ""
      }`}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold">Certifications</h1>
        <p className="text-sm w-72 text-center">
          Have a look at the certifications that empower my professional
          journey.
        </p>
      </div>

      {/* Render Cards */}
      {/* <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"> */}
      <div className="my-5 flex flex-wrap justify-center gap-5">
        {paginatedData.map((card) => (
          <div
            key={card.id}
            className="w-72 rounded-xl overflow-hidden border shadow bg-white dark:bg-slate-800"
          >
            <Image src={card.image} alt={card.title} width={400} height={400} />
            <div className="text-xs p-5 text-center">
              {/* <h2 className="text-lg font-bold">{card.title}</h2> */}
              {/* <p>{card.content}</p> */}
              <h2 className="text-lg font-bold">Certificate {card.title}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore odit numquam ullam delectus aspernatur totam magnam fuga
                excepturi doloribus dolores.
              </p>
              <p className="text-[#1FEE00] text-base font-normal pt-3">
                View Credential
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
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
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                isActive={currentPage === index + 1}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(index + 1);
                }}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
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
