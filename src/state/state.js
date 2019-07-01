const {
  isEmpty,
  capitalizeFirstLetter,
  states,
  statesFull,
  statesAbbr
} = require("../utils");

/**
 * Validates and formats a US state.
 * @public
 * @param {string} val The value to process.
 * @returns {string}
 */

function state(val) {
  // Convert to string
  val = String(val).toUpperCase();

  // Remove whitespace
  val = val.replace(/\s/g, "");

  // Check if not empty
  if (!isEmpty(val)) {
    if (statesAbbr.indexOf(val) >= 0) {
      return val;
    }

    val = capitalizeFirstLetter(val);

    if (statesFull.indexOf(val) >= 0) {
      return states[val];
    }
  }

  return "";
}

module.exports = state;
