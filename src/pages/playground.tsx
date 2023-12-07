import { Course2 } from "@/util/types";
import React from "react";

const Playground = () => {
  const data = require("public/db/coursera_0.json");

  // console.log(data);

  const reformedData = data.map((item: Course2) => {
    const separateArr = item.level_type_and_duration.split(" · ");
    item.level = separateArr[0];
    item.type = separateArr[1];
    item.duration = separateArr[2];
    return item;
  });

  const emptySomething = (data: Course2[]) =>
    data.map((item: Course2) => {
      item.level_type_and_duration = "";
      return item;
    });
  // console.log(emptySomething(reformedData));
  return <div>{JSON.stringify(emptySomething([...reformedData]))}</div>;
  // return <p>Jesus</p>
};

export default Playground;
