import { readFileSync } from 'fs';
import path from 'path';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
export const getFormat = (filepath) => path.extname(filepath).substring(1);
export const readPath = (filepath) => readFileSync(getAbsolutePath(filepath), 'utf-8');
