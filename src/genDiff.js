import _ from 'lodash';
import * as fs from 'fs';
import path from 'path';

const genDiff = (filepath1, filepath2) => {
  const obj1 = JSON.parse(fs.readFileSync(path.resolve('./__fixtures__', filepath1)));
  const obj2 = JSON.parse(fs.readFileSync(path.resolve('./__fixtures__', filepath2)));
  const space = ' ';
  const mergedObj = { ...obj1, ...obj2 };
  const keys = Object.keys(mergedObj);
  const result = _.orderBy(keys).map((key) => {
    if (!Object.hasOwn(obj1, key)) {
      return `${space.repeat(2)}+ ${key}: ${obj2[key]}`;
    }
    if (!Object.hasOwn(obj2, key)) {
      return `${space.repeat(2)}- ${key}: ${obj1[key]}`;
    }
    if (obj1[key] !== obj2[key]) {
      return `${space.repeat(2)}- ${key}: ${obj1[key]}\n  + ${key}: ${
        obj2[key]
      }`;
    }
    return `${space.repeat(4)}${key}: ${obj1[key]}`;
  });
  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
