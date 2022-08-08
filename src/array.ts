/**
 * @description 将数组切割为指定的粒度
 * @param {Array} [arr=[]]  待切割的数组
 * @param {number} [chunk=1] 数组切割的粒度
 * @return {*}
 */
export const redistrictArray = <T>(arr: T[] = [], chunk = 1): T[][] => {
  const result = [];
  for (let i = 0, j = arr.length; i < j; i += chunk) {
    result.push(arr.slice(i, i + chunk));
  }
  return result;
};
