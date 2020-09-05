const getRandomBit = () =>
  Math.round(Math.random(1) * 255)
    .toString(16)
    .padStart(2, "0");

export const randomColor = () => {
  const a = ["#"];
  for (let i = 0; i <= 2; i++) a.push(getRandomBit());
  return a.join("");
};
