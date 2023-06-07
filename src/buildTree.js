import _ from 'lodash';

const buildTree = (object1, object2) => {
  const cloneObj1 = _.cloneDeep(object1);
  const cloneObj2 = _.cloneDeep(object2);

  const keys = _.sortBy(_.union(_.keys(cloneObj1), _.keys(cloneObj2)));

  const tree = keys.map((key) => {
    if (!_.has(cloneObj2, key)) {
      return { name: key, status: 'deleted', value: cloneObj1[key] };
    }
    if (!_.has(cloneObj1, key)) {
      return { name: key, status: 'added', value: cloneObj2[key] };
    }
    if (_.isObject(cloneObj1[key]) && _.isObject(cloneObj2[key])) {
      return { name: key, status: 'nested', children: buildTree(cloneObj1[key], cloneObj2[key]) };
    }
    if (_.isEqual(cloneObj1[key], cloneObj2[key]) === true) {
      return { name: key, status: 'unchanged', value: cloneObj1[key] };
    }
    return {
      name: key, status: 'changed', value1: cloneObj1[key], value2: cloneObj2[key],
    };
  });
  return tree;
};

export default buildTree;
