// Should be nice looking
export const rle = (str) => {
  if (!/[a-zA-Z]/.test(str)) {
    throw new Error(
      `Incorrect input. Only English letters are alowwed. ${str} givven`
    );
  }
  return str.replace(/(.)\1+/, (group) => group[0] + group.length);
};

// Should be faster
export const rle2 = (str) => {
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
  return acc.filter((s) => s !== 1).join("");
};
