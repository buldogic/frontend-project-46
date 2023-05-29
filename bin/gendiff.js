#!/usr/bin/env node

import { program  } from "commander";
import _ from "lodash";
import * as fs from 'fs'
import path from "path";


const command = (filepath1, filepath2) => {
const path1 = path.resolve(filepath1)
const path2 = path.resolve(filepath1)
};


program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .action(command)
  .option('-f, --format <type>' , 'output format')
  .helpOption('-h, --help', 'output usage information')

program.parse();