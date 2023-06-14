import { readFileSync } from 'fs';
import path from 'path';
import buildTree from './buildTree.js';
import format from './formatters/index.js';
import parse from './parse.js';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
export const getType = (filepath) => path.extname(filepath).substring(1);
export const readPath = (filepath) => readFileSync(getAbsolutePath(filepath), 'utf-8');

const genDiff = (filepath1, filepath2, formaName = 'stylish') => {
  const file1 = readPath(filepath1);
  const file2 = readPath(filepath2);
  const data1 = parse(file1, getType(filepath1));
  const data2 = parse(file2, getType(filepath2));
  const tree = buildTree(data1, data2);
  return format(tree, formaName);
};

export default genDiff;
