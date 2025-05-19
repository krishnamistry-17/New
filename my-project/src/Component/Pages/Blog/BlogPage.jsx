import React from "react";
import { useTranslation } from "react-i18next";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

const BlogPage = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPgae,
}) => {
  console.log("currentPgae", currentPgae);
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const { t } = useTranslation();
  let pageNumbers = [];

  pageNumbers.push(1);

  pageNumbers.push(2);

  pageNumbers.push(3);

  const paginate = (pageNumber, e) => {
    e.preventDefault();
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const goToPreviousPage = (e) => {
    e.preventDefault();
    if (currentPgae === 1) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(currentPgae - 1);
    }
  };

  const goToNextPage = (e) => {
    e.preventDefault();
    if (currentPgae === totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPgae + 1);
    }
  };
  return (
    <div
      className="flex flex-col sm:flex-row justify-center items-center
    gap-[16px]
    "
    >
      <button
        className="flex items-center justify-center
      md:w-[108px] md:h-[60px]
      xs:w-[110px] xs:h-[50px]
      sm:text-[20px] xs:text-[16px] font-light rounded-lg transition-all
      bg-cream-bglight text-black-darkest
      "
        onClick={goToPreviousPage}
      >
        <MdArrowBackIos />
        {t("pageprev")}
      </button>

      <div className="flex gap-[16px]">
        {pageNumbers.map((number, index) =>
          number === "..." ? (
            <span key={index}>...</span>
          ) : (
            <button
              key={number}
              className={`
              md:w-[60px] md:h-[60px]
              sm:w-[60px] sm:h-[50px]
              xs:w-[50px] xs:h-[50px]
              md:px-[16px] md:py-[8px]
              xs:px-[10px] xs:py-[4px]
              md:text-[20px] xs:text-[15px]
              md:rounded-lg sm:rounded-lg 
              transition-all font-semibold
            ${
              currentPgae === number
                ? "bg-yellow-dark text-white-light text-[20px]"
                : "bg-cream-bglight text-black-darkest"
            }
            `}
              onClick={(e) => paginate(number, e)}
            >
              {number}
            </button>
          )
        )}
      </div>

      <button
        className="flex items-center justify-center 
      md:w-[98px] md:h-[60px] 
      xs:w-[110px] xs:h-[50px]
      sm:text-[20px] xs:text-[16px]
       font-light rounded-lg transition-all
       bg-cream-bglight text-black-darkest"
        onClick={goToNextPage}
      >
        {t("pagenext")}
        <MdArrowForwardIos className="ml-[9px]" />
      </button>
    </div>
  );
};

export default BlogPage;
