/**
 * Clone simple objects
 * @param {object} obj
 * @returns
 */
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
