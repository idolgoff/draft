const base = {
  names: ["car 1", "car 2", "car 3"],
  values: [
    [1, 2, 3, 4],
    [2, 4, 1, 4],
    [2, 3, 1, 0]
  ]
};

const incr = {
  names: ["car 1", "car 2", "car 7", "car 8"],
  values: [[4], [4], [0], [1]]
};

const expectedResult = {
  names: ["car 1", "car 2", "car 3", "car 7", "car 8"],
  values: [
    [2, 3, 4, 4],
    [4, 1, 4, 4],
    [3, 1, 0, null],
    [null, null, null, 0],
    [null, null, null, 1]
  ]
};

const toDict = (obj) =>
  obj.names.reduce(
    (acc, key, i) => {
      acc[key] = obj.values[i];
      return acc;
    }, {}
  );

test("toDict", () => {
  expect(toDict({ names: ["a", "b"], values: [0, 1] })).toEqual({ a: 0, b: 1 });
});

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

const someFunction = (base, incr) => {
  const merged = mergeObj(toDict(base), toDict(incr));
  return { names: Object.keys(merged), values: Object.values(merged) };
};

test("mergeObj", () => {
  expect(someFunction(base, incr)).toEqual(expectedResult);
});
