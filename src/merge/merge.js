export const toDict = (obj) =>
  obj.names.reduce((acc, key, i) => {
    acc[key] = obj.values[i];
    return acc;
  }, {});

const getValueSize = (incrObj) => Object.values(incrObj)[0].length;

const mergeObj = (base, incr) => {
  const keys = new Set([...Object.keys(base), ...Object.keys(incr)]);
  const incrSize = getValueSize(incr);
  const baseSize = getValueSize(base);

  return [...keys].reduce(
    (acc, key) =>
      Object.assign(acc, {
        [key]: [
          ...(base[key] || new Array(baseSize).fill(null)),
          ...(incr[key] || new Array(incrSize).fill(null))
        ].slice(baseSize * -1)
      }),
    {}
  );
};

export const merge = (base, incr) => {
  const merged = mergeObj(toDict(base), toDict(incr));
  return { names: Object.keys(merged), values: Object.values(merged) };
};
