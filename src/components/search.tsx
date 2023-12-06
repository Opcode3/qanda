import { Course } from "@/util/types";
import { SearchIcon } from "./searchIcon";
import React from "react";

type SearchType = {
  setSearchResults: React.Dispatch<React.SetStateAction<Course[]>>;
};

const Search = ({ setSearchResults }: SearchType) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchKey, setSearchKey] = React.useState("all");

  const data = require("public/db/coursera.json");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchKey(e.target.value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    let results: Course[] = [];
    if (searchKey === "all") {
      // Search in all keys
      results = data.filter((course: string[]) =>
        Object.values(course).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      // Search in the selected key
      results = data.filter((course: any) =>
        course[searchKey]
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }
    setSearchResults(results);
  };

  return (
    <form
      action=""
      className="w-[80%] mx-auto flex items-center justify-center gap-4 p-0"
    >
      <label
        htmlFor="search"
        className="flex items-center border-[1px] border-gray-500 rounded-lg w-[64%] py-3 px-4 gap-4"
      >
        <span className="text-gray-800 text-sm block">Search&nbsp;by</span>
        <input
          type="text"
          className="outline-none text-gray-800 min-w-[400px] w-full border-none bg-transparent font-extralight text-sm"
          name="search"
          id="search"
          onChange={handleChange}
          value={searchTerm}
          placeholder="Course, University, etc..."
        />
        <span className="block w-6">
          {" "}
          <SearchIcon />{" "}
        </span>
      </label>
      <label
        htmlFor="filter"
        className="flex items-center bg-white w-[30%] py-1 px-4 gap-4 border-[1px] border-gray-500 rounded-lg "
      >
        <select
          name="filter"
          value={searchKey}
          id="filter"
          onChange={handleSelectChange}
          className=" w-full block border-none outline-none text-sm py-2"
        >
          <option value="all">All</option>
          <option value="course_name">Course Name</option>
          <option value="university">University</option>
        </select>
      </label>
      <button
        type="submit"
        onClick={(e) => handleSearch(e)}
        className=" bg-blue-600 text-white py-2 px-4 rounded text-base"
      >
        Find
      </button>
    </form>
  );
};

export default Search;
