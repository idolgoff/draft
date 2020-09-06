const rle_base = (str) => {
  if (!str.length) {
    throw new Error(`Incorrect input. Empty string givven`);
  }
  const regexp = /[a-zA-Z]/;
  const acc = [str[0], 1];
  for (let i = 1, l = str.length; i < l; i++) {
    if (!regexp.test(str[i])) {
      throw new Error(
        `Incorrect input. Only English letters are alowwed. ${str} givven`
      );
    }
    // equall previeous syymbol
    if (str[i] === acc[acc.length - 2]) {
      acc[acc.length - 1]++;
    } else {
      acc.push(str[i], 1);
    }
  }
  return acc;
};

export const rle = (str, k) => {
  const acc = rle_base(str);

  // pair = p1, p2, position
  const acc2 = {},
    pairs = [];
  for (let i = 0; i < acc.length; i += 2) {
    if (acc2[acc[i]]) {
      acc2[acc[i]].p2 = i / 2;
      acc2[acc[i]].distance = acc2[acc[i]].p2 - acc2[acc[i]].p1;
      acc2[acc[i]].weight += acc[i + 1];
      pairs.push(acc2[acc[i]]);
    } else {
      acc2[acc[i]] = { p1: i / 2, weight: acc[i + 1] };
    }
  }

  // find points between pairs
  const toRemove = [];
  const points = Object.keys(pairs).reduce((acc2, key, i) => {
    if (pairs[key].distance <= k) {
      toRemove.push(acc.slice((pairs[key].p1 + 1) * 2, pairs[key].p2 * 2));
    }
  }, []);
  return acc.filter((s) => s !== 1).join("");
};

test("Task 2", () => {
  it("Should return 5", () => {
    const str = "ABBBCCDDCCC";
    const k = 3;
    expect(rle(str, k)).toBe(5);
  });

  it("Should return 3", () => {
    const str = "AAAAAAAAAAABXXAAAAAAAAAA";
    const k = 3;
    expect(rle(str, k)).toBe(3);
  });

  it("Should return 6", () => {
    const str = "ABCDDDEFG";
    const k = 2;
    expect(rle(str, k)).toBe(6);
  });
});
