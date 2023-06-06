import genDiff from '../src/genDiff.js';

const stileObj = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}'

test('genDif', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(stileObj);
});

test('genDif1', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual('{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}');
});

test('genDiff2', () => {
  expect(genDiff('file2.json', 'file1.json')).toEqual('{\n  + follow: false\n    host: hexlet.io\n  + proxy: 123.234.53.22\n  - timeout: 20\n  + timeout: 50\n  - verbose: true\n}');
});
