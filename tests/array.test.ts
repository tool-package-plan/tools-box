import { redistrictArray } from "../src/array";

describe("Array - redistrictArray", () => {
  test("正确的切割", () => {
    expect(redistrictArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10],
    ]);

    expect(redistrictArray([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    expect(redistrictArray([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
    expect(redistrictArray([1, 2, 3, 4, 5])).toEqual([[1], [2], [3], [4], [5]]);
  });

  test("第一个参数为空时，返回[]", () => {
    expect(redistrictArray([], 3)).toEqual([]);
    expect(redistrictArray([])).toEqual([]);
    expect(redistrictArray()).toEqual([]);
  });
});
