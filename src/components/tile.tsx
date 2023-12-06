import { Course } from "@/util/types";
import React from "react";

type TileType = {
  data: Course;
};
const Tile = ({ data }: TileType) => {
  const reformKeys = (keyItem: string) => {
    const isChar = keyItem.slice(0, 1);
    const newWord = isChar.toUpperCase() + keyItem.slice(1);
    return newWord.split("_").join(" ");
  };
  //   console.log(Object.entries(data));
  return (
    <li className="border border-gray-600 my-2 rounded p-2">
      {Object.entries(data).map((item) => {
        if (!item[0].includes("description")) {
          return (
            <p key={item[0]} className=" text-gray-800">
              <strong className=" font-black text-black ">
                {reformKeys(item[0])}:
              </strong>{" "}
              {item[1]}{" "}
            </p>
          );
        }
        return <b key={item[0]}></b>;
      })}

      {Object.keys(data).includes("course_url") ? (
        <a
          href={data.course_url}
          className=" text-blue-500 underline"
          target="_blank"
        >
          {" "}
          Learn more
        </a>
      ) : (
        "No"
      )}
    </li>
  );
};

export default Tile;
