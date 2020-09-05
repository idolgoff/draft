import { get } from "./get";

const obj = {
  a: {
    b: {
      c: "d"
    },
    e: "f"
  }
};

test("get function", () => {
  it("a.b", () => {
    expect(get(obj, "a.b")).toEqual({ c: "d" });
  });
  it("a.b.c", () => {
    expect(get(obj, "a.b.c")).toEqual("d");
  });
  it("a.e", () => {
    expect(get(obj, "a.e")).toEqual("f");
  });
  it("a.x.e", () => {
    expect(get(obj, "a.x.e")).toEqual(undefined);
  });
});
