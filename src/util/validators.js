/**
 * Custom propType validator for positive numbers (including zero).
 * When "required is false", this validator checks the value only
 * if the value is defined. Otherwise, enforces its presence.
 *
 * @param {Array} props
 * @param string propName
 * @param string componentName
 * @param bool required
 * @returns
 */
export const validatePositiveNumber = (
  props,
  propName,
  componentName,
) => {
  if (!(props[propName] !== undefined && props[propName] >= 0)) {
    return new Error(
      `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Should be equal to or greater than 0.`,
    );
  }
  return null;
};

/**
 * Custom propType validator for comparable intervals
 * @param {Array} props
 * @param string propName
 * @param string componentName
 * @param {Array} interval
 */
export const validateInterval = (props, propName, componentName, interval) => {
  if (!(props[propName] >= interval[0] && props[propName] <= interval[1])) {
    return new Error(
      `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Should be between \`${interval[0]}\` and \`${interval[1]}\``,
    );
  }
  return null;
};
