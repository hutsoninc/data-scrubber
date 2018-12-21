/**
 * Check if string is empty or contains only whitespace.
 * @private
 * @param {string} val The value to process.
 * @returns {boolean}
 */

function isEmpty(val) {
  // Remove whitespace
  val = val.replace(/\s/g, "");

  if (val.length === 0) return true;
  return false;
}

/**
 * Capitalize the first letter of a sting.
 * @private
 * @param {string} val The value to process.
 * @returns {string}
 */

function capitalizeFirstLetter(str) {
  str = str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
  capitalizeFirstLetter,
  isEmpty
};
