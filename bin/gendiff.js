#!/usr/bin/env node

import { program } from "commander";
import _ from "lodash";
import * as fs from "fs";
import path from "path";
import genDiff from "../src/genDiff.js";

// const file1 = JSON.parse(fs.readFileSync(path.resolve("./__fixtures__", program.args[0]), "utf-8"));
// const file2 = JSON.parse(fs.readFileSync(path.resolve("./__fixtures__", program.args[1]), "utf-8"));

// const genDiff = (obj1, obj2) => {
//   const space = " ";
//   const mergedObj = { ...obj1, ...obj2 };
//   const keys = Object.keys(mergedObj);
//   const result = _.orderBy(keys).map((key) => {
//     if (!Object.hasOwn(obj1, key)) {
//       return `${space.repeat(2)}+ ${key}: ${obj2[key]}`;
//     }
//     if (!Object.hasOwn(obj2, key)) {
//       return `${space.repeat(2)}- ${key}: ${obj1[key]}`;
//     }
//     if (obj1[key] !== obj2[key]) {
//       return `${space.repeat(2)}- ${key}: ${obj1[key]}\n  + ${key}: ${
//         obj2[key]
//       }`;
//     }
//     return `${space.repeat(4)}${key}: ${obj1[key]}`;
//   });
//   return `{\n${result.join("\n")}\n}`;
// };

// console.log(genDiff(file1, file2));

// export default genDiff;

    program
      .version("0.0.1")
      .description("Compares two configuration files and shows a difference.")
      .argument('<filepath1>', 'path to first file.json')
      .argument('<filepath2>', 'path to second file.json')
      .action((filepath1, filepath2) => {
        console.log(genDiff(filepath1, filepath2))
      })
      .option("-f, --format <type>", "output format")
      .helpOption("-h, --help", "output usage information");
    program.parse();