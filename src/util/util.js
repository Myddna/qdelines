/**
 * Clone simple objects
 * @param {object} obj
 * @returns
 */
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

export default deepClone;
