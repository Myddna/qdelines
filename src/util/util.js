/**
 * Clone simple multilevel objects
 * More info: https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects
 * @param {object} obj
 * @returns
 */
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

export default deepClone;
