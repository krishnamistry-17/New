// import React from 'react'
// import { MdArrowForwardIos } from "react-icons/md";
// import { MdArrowBackIos } from "react-icons/md";

//circular pagination

// const Pagination = ({
//   postsPerPage,
//   totalPosts,
//   setCurrentPage,
//   currentPage,
//   handlePageChange
// }) => {
//   const totalPages = Math.ceil(totalPosts / postsPerPage);
//   const pageNumbers = [];

//   for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(i);
//   }

//   const paginate = (pageNumber, e) => {
//     e.preventDefault();
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   const goToPreviousPage = (e) => {
//       e.preventDefault();
//       if (currentPage === 1) {
//           handlePageChange(totalPages);
//       } else {
//           handlePageChange(currentPage - 1);
//       }
//   };

//   const goToNextPage = (e) => {
//       e.preventDefault();
//       if (currentPage === totalPages) {
//           handlePageChange(1);
//       } else {
//           handlePageChange(currentPage + 1);
//       }
//   };

//   const firstLineNumbers = pageNumbers.slice(0,5);
//   const secondLineNumbers = pageNumbers.slice(-5)

//       return (
//         <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
//         {/* Previous Button */}
//         <button
//             className="flex items-center justify-center
//              md:w-[90px] md:h-[60px] text-[14px]
//              xs:w-[95px] xs:h-[32px]
//              md:rounded-l-lg sm:rounded-l-lg xs:rounded-lg
//              transition-all bg-cream-bg text-black-darkest
//              "
//             onClick={goToPreviousPage}
//           >
//           Previous
//           </button>

//         {/* Pagination buttons (1 to 5) */}
//         <div className="grid grid-cols-5 gap-2 md:gap-4 sm:grid-cols-5">

//           {firstLineNumbers.map((number) => (
//             <button
//               key={number}
//               className={`
//                 md:w-[50px] md:h-[40px]
//                 xs:w-[50px] xs:h-[30px]

//                 md:px-[16px] md:py-[4px]
//                 xs:px-[10px] xs:py-[4px]

//                 md:text-lg xs:text-sm
//                 md:rounded-lg xs:rounded-lg
//                 transition-all font-semibold
//                 ${currentPage === number ? 'bg-yellow-dark text-white' : 'bg-cream-bg text-black-darkest border border-gray-300 hover:bg-yellow-600'}
//               `}
//               onClick={(e) => paginate(number, e)}
//             >
//               {number}
//             </button>
//           ))}
//         </div>

//         {/* Pagination buttons (6 to 10) */}
//         {totalPages > 5 && (
//           <div className="grid grid-cols-5 gap-2 md:gap-4 sm:grid-cols-5 ">
//             {secondLineNumbers.map((number) => (
//               <button
//                 key={number}
//                 className={`
//                   md:w-[50px] md:h-[40px]
//                   xs:w-[50px] xs:h-[30px]

//                   md:px-[16px] md:py-[4px]
//                   xs:px-[10px] xs:py-[4px]

//                   md:text-lg xs:text-sm
//                   md:rounded-lg xs:rounded-lg
//                   transition-all font-semibold
//                   ${currentPage === number ? 'bg-yellow-dark text-white' : 'bg-cream-bg text-black-darkest border border-gray-300 hover:bg-yellow-600'}
//                 `}
//                 onClick={(e) => paginate(number, e)}
//               >
//                 {number}
//               </button>
//             ))}
//           </div>
//         )}

//         {/* Next Button */}
//         <button
//           className="flex items-center justify-center
//             md:w-[90px] md:h-[60px] text-[14px]
//              xs:w-[95px] xs:h-[32px]
//             bg-cream-bg text-black-darkest
//             md:rounded-l-lg sm:rounded-l-lg xs:rounded-lg
//             transition-all"
//           onClick={goToNextPage}
//         >
//           Next
//         </button>
//       </div>

//       );
//     };

// export default Pagination

//>>>>>>>>>>
import React, { useState, useEffect } from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Create an array for page numbers based on the logic
  let pageNumbers = [];

  // Add the first two pages
  pageNumbers.push(1, 2);

  // Add ellipsis if there are hidden pages
  if (totalPages > 5) {
    pageNumbers.push("...");
  }

  // Add the last two pages, ensuring they're not duplicates of the already included pages
  if (totalPages > 4) {
    pageNumbers.push(totalPages - 1, totalPages);
  }

  const paginate = (pageNumber, e) => {
    e.preventDefault();
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo(0, 0); // Scroll to top after page change
    }
  };

  const goToPreviousPage = (e) => {
    e.preventDefault();
    if (currentPage === 1) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = (e) => {
    e.preventDefault();
    if (currentPage === totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
      {/* Previous Button */}
      <button
        className="flex items-center justify-center 
          md:w-[98px] md:h-[60px] text-[20px]
          sm:w-[75px] sm:h-[30px]
          md:rounded-l-lg sm:rounded-l-lg
          transition-all
          bg-cream-bg text-black-darkest"
        onClick={goToPreviousPage}
      >
        Previous
      </button>

      {/* Pagination buttons */}
      <div className="flex gap-4">
        {pageNumbers.map((number, index) =>
          number === "..." ? (
            <span key={index} className="text-xl text-gray-500">
              ...
            </span>
          ) : (
            <button
              key={number}
              className={`
                md:w-[60px] md:h-[40px] 
                sm:w-[50px] sm:h-[30px] 
                md:px-[16px] md:py-[8px]
                sm:px-[10px] sm:py-[4px]
                md:text-lg sm:text-sm 
                md:rounded-lg sm:rounded-lg 
                transition-all font-semibold 
                ${
                  currentPage === number
                    ? "bg-yellow-dark text-white"
                    : "bg-cream-bg text-black-darkest border border-gray-300 hover:bg-yellow-600"
                }
              `}
              onClick={(e) => paginate(number, e)}
            >
              {number}
            </button>
          )
        )}
      </div>

      {/* Next Button */}
      <button
        className="flex items-center justify-center 
          md:w-[98px] md:h-[60px] bg-cream-bg text-black-darkest 
          md:rounded-r-lg 
          transition-all"
        onClick={goToNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
let pageNumbers = []; // Array to store page numbers
let currentIndex = currentPage;

// Always add the first page
pageNumbers.push(1);

// Add the next page after the first (if currentIndex is less than totalPages)
if (currentIndex < totalPages) {
  pageNumbers.push(currentIndex + 1);
}

// Add pages up to 8
if (totalPages >= 3) {
  pageNumbers.push(3);
}
if (totalPages >= 4) {
  pageNumbers.push(4);
}
if (totalPages >= 5) {
  pageNumbers.push(5);
}
if (totalPages >= 6) {
  pageNumbers.push(6);
}
if (totalPages >= 7) {
  pageNumbers.push(7);
}
if (totalPages >= 8) {
  pageNumbers.push(8);
}

// Add dots if there are pages after 8
if (totalPages > 8) {
  pageNumbers.push("...");
}

// Add the last two pages (9 and 10)
if (totalPages > 1) {
  pageNumbers.push(totalPages - 1, totalPages);
}
//>>
// Add the next set of pages, depending on the currentPage
if (currentPage > 2 && currentPage < totalPages - 2) {
  pageNumbers.push(currentPage);
}
if (currentPage > 3 && currentPage < totalPages - 2) {
  pageNumbers.push(currentPage + 1); // Show next page after current
}
if (currentPage > 4 && currentPage < totalPages - 2) {
  pageNumbers.push(currentPage + 2); // Show next page after current + 1
}
if (currentPage > 5 && currentPage < totalPages - 2) {
  pageNumbers.push(currentPage + 3); // Show next page after current + 2
}

// Show ellipsis if there are more pages to show
if (totalPages > 8 && currentPage < totalPages - 3) {
  pageNumbers.push("...");
}

//>>
//   let pageNumbers = [];
// const totalPages = 10; // Total pages

// // Add the first two pages
// pageNumbers.push(1, 2);

// // Add the current page and a range from 3 to 8, dynamically showing the next page
// if (currentPage >= 3 && currentPage <= 8) {
//   pageNumbers.push(currentPage);
// }

// // Add pages from 3 to 8 if they are in range
// for (let i = 3; i <= 8; i++) {
//   if (i !== currentPage) {
//     pageNumbers.push(i);
//   }
// }

// // Add an ellipsis if there are more pages after 7
// if (totalPages > 8 && currentPage < totalPages - 2) {
//   pageNumbers.push('...');
// }

// // Always add the last two pages
// pageNumbers.push(totalPages - 1, totalPages);

// console.log(pageNumbers);
