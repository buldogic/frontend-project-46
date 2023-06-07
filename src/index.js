import buildTree from './buildTree.js';
import formatter from './formatters/index.js';
import parse from './parse.js';
import { getFormat, readPath } from './utils.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1 = readPath(filepath1);
  const file2 = readPath(filepath2);
  const obj1 = parse(file1, getFormat(filepath1));
  const obj2 = parse(file2, getFormat(filepath2));
  const tree = buildTree(obj1, obj2);
  return formatter(tree, format);
};

export default genDiff;
