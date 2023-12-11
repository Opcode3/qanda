import { Course, Course2, ResultType } from "@/util/types";
import { SearchIcon } from "./searchIcon";
import React from "react";

type SearchType = {
  setSearchResults: React.Dispatch<React.SetStateAction<ResultType[]>>;
};
type FilterType = {
  type: string;
  value: string;
};

const Search = ({ setSearchResults }: SearchType) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchKey, setSearchKey] = React.useState("all");

  const data_0 = require("public/db/coursera.json");
  const data_1 = require("public/db/concept_schemes_en.json");
  const data_2 = require("public/db/coursera_1.json");
  const data_3 = require("public/db/dig_comp_skills_collection_en.json");
  const data_4 = require("public/db/digital_skills_collection_en.json");
  const data_5 = require("public/db/green_skills_collection_en.json");
  const data_6 = require("public/db/isco_groups_en.json");
  const data_7 = require("public/db/language_skills_collection_en.json");
  const data_8 = require("public/db/occupations_en.json");
  const data_9 = require("public/db/research_occupations_collection_en.json");
  const data_10 = require("public/db/research_skills_collection_en.json");
  const data_11 = require("public/db/skill_groups_en.json");
  const data_12 = require("public/db/skills_en.json");
  const data_13 = require("public/db/transversal_skills_collection_en.json");
  const data_14 = require("public/db/jobscrawlfilterjobsuchek_en.json");

  const mergedData = [
    ...data_0,
    ...data_1,
    ...data_2,
    ...data_3,
    ...data_4,
    ...data_5,
    ...data_6,
    ...data_7,
    ...data_8,
    ...data_9,
    ...data_10,
    ...data_11,
    ...data_12,
    ...data_13,
    ...data_14,
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchKey(e.target.value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    let results: ResultType[] = [];
    if (searchKey === "all") {
      // Search in all keys
      results = mergedData.filter((course: string[]) =>
        Object.values(course).some((value) => {
          if (value == null || value == undefined) return "";
          return value
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        })
      );
    } else {
      // Search in the selected key
      results = mergedData.filter((course: any) => {
        if (course == null || course[searchKey] == undefined) return "";
        console.log(course);
        return course[searchKey]
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
    }

    const startData = [...results].sort(() => Math.random() - 0.5);

    setSearchResults(startData);
  };

  const filter: FilterType[] = [
    { type: "all", value: "All" },
    { type: "description", value: "Description" },
    { type: "title", value: "Title" },
    { type: "concept_uri", value: "Concept Uri" },
    { type: "course_by", value: "Course By" },
    { type: "occupation", value: "Occupation" },
    { type: "university", value: "University" },
    { type: "course_name", value: "Course name" },
    { type: "isco_group", value: "IscoGroup" },
    { type: "concept_type", value: "Concept Type" },
    { type: "preferred_label", value: "Preferred Label" },
    { type: "alt_labels", value: "Alt Labels" },
    { type: "course_url", value: "Course URL" },
    { type: "skills", value: "Skills" },
  ];

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
          {filter.map((item) => (
            <option key={item.type} value={item.type}>
              {item.value}
            </option>
          ))}
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
