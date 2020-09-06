import { rle, rle2 } from "./rle";

const incorrectStr = "1234";

const test1 = "AAA";
const result1 = "A3";

const test2 = "AZAA";
const result2 = "AZA2";

const test3 = "ABBBCCDDCCC";
const result3 = "AB3C2D2C3";

test("RLE", () => {
  it("Should throw error if input is incorrect", () => {
    expect(() => rle(incorrectStr)).toThrowError();
  });

  it("Should throw error if input is empty", () => {
    expect(() => rle("")).toThrowError();
  });

  it(`${test1} = ${result1}`, () => {
    expect(rle(test1)).toBe(result1);
  });

  it(`${test2} = ${result2}`, () => {
    expect(rle(test2)).toBe(result2);
  });

  it(`${test3} = ${result3}`, () => {
    expect(rle(test3)).toBe(result3);
  });
});

test("RLE2", () => {
  it("Should throw error if input is incorrect", () => {
    expect(() => rle2(incorrectStr)).toThrowError();
  });

  it(`${test1} = ${result1}`, () => {
    expect(rle2(test1)).toBe(result1);
  });

  it(`${test2} = ${result2}`, () => {
    expect(rle2(test2)).toBe(result2);
  });

  it(`${test3} = ${result3}`, () => {
    expect(rle2(test3)).toBe(result3);
  });
});
