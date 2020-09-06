const solution = (S, X, Y) => {
  // find distances
  const distances = X.reduce((acc, el, i) => {
    acc.push(Math.sqrt(X[i] * X[i] + Y[i] * Y[i]));
    return acc;
  }, []);

  let maxDist = 0;
  const dict = S.split("").reduce((acc, s, i) => {
    if (acc[s]) {
      maxDist = Math.max(acc[s], distances[i]);
      acc[s] = Math.min(acc[s], distances[i]);
    } else {
      acc[s] = distances[i];
    }
    return acc;
  }, {});

  // find distance less than max in pair
  return Object.values(dict).reduce(
    (acc, d) => (d < maxDist ? acc + 1 : acc),
    0
  );
};

test("Task 1", () => {
  it("Should return 3", () => {
    const S = "ABDCA";
    const X = [2, -1, -4, -3, 3];
    const Y = [2, -2, 4, 1, -3];
    expect(solution(S, X, Y)).toBe(3);
  });

  it("Should return 1", () => {
    const S = "ABB";
    const X = [1, -2, -2];
    const Y = [1, -2, 2];
    expect(solution(S, X, Y)).toBe(1);
  });

  it("Should return 0", () => {
    const S = "CCD";
    const X = [1, -1, 2];
    const Y = [1, -1, -2];
    expect(solution(S, X, Y)).toBe(0);
  });
});
