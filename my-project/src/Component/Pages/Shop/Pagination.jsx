import React from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage
}) => {
  console.log(currentPage, 'currentPage');

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Dynamically add page numbers
  let pageNumbers = []; 

  // Add the first two pages
  pageNumbers.push(1, 2);

  // Add current page numbers (if within range 3 to 8)
  if (currentPage >= 3 && currentPage <= 8) {
    pageNumbers.push(currentPage);
  }

  // Add ellipsis if necessary
  if (totalPages > 8 && currentPage < totalPages - 2) {
    pageNumbers.push('...');
  }

  // Add second-to-last and last pages
  if (totalPages > 1) {
    pageNumbers.push(totalPages - 1, totalPages);
  }

  console.log(pageNumbers,'pageNumbers');

  
  // Handle page change
  const paginate = (pageNumber, e) => {
    e.preventDefault();
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo(0, 490); // Scroll to top 
    }
  };

  // Go to the previous page
  const goToPreviousPage = (e) => {
    e.preventDefault();
    if (currentPage === 1) {
      setCurrentPage(totalPages); // Loop to the last page
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  // Go to the next page
  const goToNextPage = (e) => {
    e.preventDefault();
    if (currentPage === totalPages) {
      setCurrentPage(1); // Loop to the first page
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
      {/* Previous Button */}
      <button
        className="flex items-center justify-center 
          md:w-[108px] md:h-[60px] text-[20px]
          sm:w-[75px] sm:h-[30px]
          md:rounded-l-lg sm:rounded-l-lg
          transition-all
          bg-cream-bg text-black-darkest"
        onClick={goToPreviousPage}
        disabled={currentPage === 1} // Disable on the first page
      >
        <MdArrowBackIos className='pl-[4px]'/>
        Previous
      </button>

      {/* Pagination buttons */}
      <div className="flex gap-4">
        {pageNumbers.map((number, index) => (
          number === '...' ? (
            <span key={index} className="text-xl text-gray-500">...</span>
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
                ${currentPage === number ? 'bg-yellow-dark text-white' : 'bg-cream-bg text-black-darkest border border-gray-300 hover:bg-yellow-600'}
              `}
              onClick={(e) => paginate(number, e)}
            >
              {number}
            </button>
          )
        ))}
      </div>

      {/* Next Button */}
      <button
        className="flex items-center justify-center 
          md:w-[98px] md:h-[60px] bg-cream-bg text-black-darkest 
          md:rounded-r-lg  text-[20px]
          transition-all"
        onClick={goToNextPage}
        disabled={currentPage === totalPages} // Disable on the last page
      >
        Next
        <MdArrowForwardIos className='pl-[2px]'/>
      </button>
    </div>
  );
};

export default Pagination;
