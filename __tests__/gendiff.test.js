import { test, expect } from "@jest/globals";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import genDiff from "../src/index.js";

const getFixturePath = (file) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, "..", "__fixtures__", file);
};

// test.each([
//   { a: "file1.json", b: "file2.json", result: "file_result.txt" },
//   { a: "file1.yaml", b: "file2.yaml", result: "file_result.txt" },
//   { a: "file1.yml", b: "file2.yml", result: "file_result.txt" },
//   { a: "file1.yml", b: "file2.yml", result: "file_result_plain.txt" },
// ])("test %p ", (a, b, result) => {
//   expect(genDiff(a, b)).toEqual(result);
// });

test("file json", () => {
  const filename1 = getFixturePath("file1.json");
  const filename2 = getFixturePath("file2.json");
  const resultName = getFixturePath("file_result.txt");
  const result = readFileSync(resultName, "utf8");
  expect(genDiff(filename1, filename2)).toEqual(result);
});

test("file yaml", () => {
  const filename1 = getFixturePath("file1.yaml");
  const filename2 = getFixturePath("file2.yaml");
  const resultName = getFixturePath("file_result.txt");
  const result = readFileSync(resultName, "utf8");
  expect(genDiff(filename1, filename2)).toEqual(result);
});

test("file yml", () => {
  const filename1 = getFixturePath("file1.yml");
  const filename2 = getFixturePath("file2.yml");
  const resultName = getFixturePath("file_result.txt");
  const result = readFileSync(resultName, "utf8");
  expect(genDiff(filename1, filename2)).toEqual(result);
});

test("plain", () => {
  const filename1 = getFixturePath("file1.yml");
  const filename2 = getFixturePath("file2.yml");
  const resultName = getFixturePath("file_result_plain.txt");
  const result = readFileSync(resultName, "utf8");
  expect(genDiff(filename1, filename2, "plain")).toEqual(result);
});
