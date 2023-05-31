#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/genDiff.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>', 'path to first file.json')
  .argument('<filepath2>', 'path to second file.json')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  })
  .option('-f, --format <type>', 'output format')
  .helpOption('-h, --help', 'output usage information');
program.parse();
