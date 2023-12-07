import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Search from "./search";
import { Course, ResultType } from "@/util/types";
import Tile from "./tile";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const MainBodyP = () => {
  const [searchResults, setSearchResults] = useState<ResultType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(10); // Change this number as per your requirement

  const noResultFoundImage = require("public/no_result_found-removebg-preview.png");
  // Logic to paginate results
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = searchResults.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const totalPaginationItems = Math.ceil(
      searchResults.length / resultsPerPage
    );
    const maxDisplayedButtons = 18; // Maximum number of pagination buttons to display

    if (totalPaginationItems <= maxDisplayedButtons) {
      return Array(totalPaginationItems)
        .fill(0)
        .map((_, index) => (
          <li key={index} className=" bg-gray-600 rounded ">
            <button
              onClick={() => paginate(index + 1)}
              className="text-sm px-[6px] text-white"
            >
              {index + 1}
            </button>
          </li>
        ));
    } else {
      const maxAllowedButtons = 8; // Maximum buttons to show on each side of the active button
      let start = currentPage - maxAllowedButtons;
      let end = currentPage + maxAllowedButtons;

      if (start <= 0) {
        start = 1;
        end = maxDisplayedButtons;
      }

      if (end > totalPaginationItems) {
        end = totalPaginationItems;
        start = totalPaginationItems - maxDisplayedButtons + 1;
      }

      return Array(end - start + 1)
        .fill(0)
        .map((_, index) => (
          <li key={start + index} className=" bg-gray-600 rounded ">
            <button
              className="text-sm px-[6px] text-white "
              onClick={() => paginate(start + index)}
            >
              {start + index}
            </button>
          </li>
        ));
    }
  };

  return (
    <main className={`min-h-[80vh] mx-auto ${inter.className} `}>
      <div className=" border-b-[1px] border-gray-200 pt-5 pb-6 bg-white">
        <Search setSearchResults={setSearchResults} />
      </div>

      <div className=" w-[80%] mx-auto py-5">
        {currentResults.length > 0 ? (
          <div>
            <h2>Search Results:</h2>
            <ul>
              {currentResults.map((course, index) => (
                <Tile key={index} data={course} />
              ))}
            </ul>
            {/* Pagination */}

            {searchResults.length > 0 ? (
              <ul className="flex items-center justify-center gap-1 py-6">
                {renderPagination()}
              </ul>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className="relative w-[350px] mx-auto mt-[100px]">
            <Image
              src={noResultFoundImage}
              alt="No result was found on search"
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default MainBodyP;
