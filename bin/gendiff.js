#!/usr/bin/env node

import { program  } from "commander";

program
.version('0.0.1')
.argument('<filepath1>')
.argument('<filepath2>')
.description('Compares two configuration files and shows a difference.')

program
  .option('-f, --format <type>' , 'output format')

program.parse();
