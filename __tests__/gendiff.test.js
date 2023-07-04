import { test, expect } from '@jest/globals';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const getFixturePath = (file) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, '..', '__fixtures__', file);
};

const fileResult = readFileSync(getFixturePath('file_result.txt'), 'utf8');
const fileResultPlain = readFileSync(getFixturePath('file_result_plain.txt'), 'utf8');

test.each([
  {
    file1: 'file1.json', file2: 'file2.json', result: fileResult, formaName: 'stylish',
  },
  {
    file1: 'file1.yaml', file2: 'file2.yaml', result: fileResult, formaName: 'stylish',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', result: fileResult, formaName: 'stylish',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', result: fileResultPlain, formaName: 'plain',
  },
])('%p', ({
  file1, file2, result, formaName,
}) => {
  expect(genDiff(getFixturePath(file1), getFixturePath(file2), formaName)).toEqual(result);
});
