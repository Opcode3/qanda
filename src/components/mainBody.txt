import React from "react";
import { Inter } from "next/font/google";
import Search from "./search";
import { Course } from "@/util/types";
import Tile from "./tile";

const inter = Inter({ subsets: ["latin"] });

const MainBody = () => {
  const [searchResults, setSearchResults] = React.useState<Course[]>([]);

  return (
    <main className={`min-h-[80vh] mx-auto ${inter.className} `}>
      <div className=" border-b-[1px] border-gray-200 pt-5 pb-6 bg-white">
        <Search setSearchResults={setSearchResults} />
      </div>

      <div className=" w-[80%] mx-auto py-5">
        {searchResults.length > 0 ? (
          <div>
            <h2>Search Results:</h2>
            <ul>
              {searchResults.map((course, index) => (
                <Tile key={index} data={course} />
              ))}
            </ul>
          </div>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </main>
  );
};

export default MainBody;
