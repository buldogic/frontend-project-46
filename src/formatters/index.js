import stylish from './stylish.js';
import plain from './plain.js';

const format = (data, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return JSON.stringify(data, null, ' ');
    default:
      throw new Error(`Invalid format: ${formatName}`);
  }
};
export default format;
