import YAML from 'js-yaml';

const parse = (data, type) => {
  switch (type) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return YAML.load(data);
    default:
      throw new Error(`Invalid format: ${type}`);
  }
};

export default parse;
