import React, { useState } from "react";
import paginationArrow from "../assets/pagination-arrow.svg";
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const TotalNumber = 250;
  const next = () => {
    if (currentPage === TotalNumber) {
      return null;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  const prev = () => {
    if (currentPage === 1) {
      return null;
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const multiStepNext = () => {
    if (currentPage + 3 >= TotalNumber) {
      setCurrentPage(TotalNumber - 1);
    } else {
      setCurrentPage(currentPage + 3);
    }
  };

  const multiStepPrev = () => {
    if (currentPage - 3 <= 1) {
      setCurrentPage(TotalNumber + 1);
    } else {
      setCurrentPage(currentPage - 2);
    }
  };
  return (
    <div className="flex items-center">
      <ul className="flex items-center justify-end text-sm">
        <li className="flex items-center">
          <button className="w-8 outline-0 hover:text-cyan" onClick={prev}>
            <img
              className="w-full h-auto rotate-180"
              src={paginationArrow}
              alt="left-arrow"
            />
          </button>
        </li>
        <li>
          {" "}
          <button
            className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg"
            onClick={multiStepPrev}
          >
            ...
          </button>{" "}
        </li>
        <li>
          <button
            className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
            onClick={prev}
          >
            {currentPage - 1}
          </button>
        </li>
        <li>
          <button
            disabled
            className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-cyan text-gray-300 mx-1.5"
          >
            {currentPage}
          </button>
        </li>
        <li>
          <button
            className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
            onClick={next}
          >
            {currentPage + 1}
          </button>
        </li>
        <li>
          <button
            className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg"
            onClick={multiStepNext}
          >
            ...
          </button>{" "}
        </li>

        <li>
          <button
            className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
            onClick={() => setCurrentPage(TotalNumber)}
          >
            {TotalNumber}
          </button>
        </li>

        <li>
          {" "}
          <button className="w-8 outline-0 hover:text-cyan" onClick={next}>
            <img
              className="w-full h-auto "
              src={paginationArrow}
              alt="right-arrow"
            />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
