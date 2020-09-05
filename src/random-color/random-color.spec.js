import { randomColor } from "./random-color";

test("hex", () => {
  it("should be string", () => {
    expect(typeof randomColor()).toBe("string");
  });

  it("should be length of 7", () => {
    let i = 0;
    while (i++ < 100) {
      const rnd = randomColor();
      expect(rnd.length).toBe(7);
    }
  });

  it("should satisfy regexp", () => {
    let i = 0;
    while (i++ < 100) {
      const rnd = randomColor();
      expect(/#[0-9a-f]{6}/.test(rnd)).toBe(true);
    }
  });
});
