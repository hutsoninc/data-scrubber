const validate = require("is-phone");
const { isEmpty } = require("../../utils/utils");

/**
 * Validates and formats a phone number.
 * @public
 * @param {string} val The value to process.
 * @returns {string}
 */

function phone(val) {
  // Convert to string
  val = String(val);

  // Remove spaces, parentheses, and hyphens
  val = val.replace(/(-|\(|\)|\s)/g, "");

  // Check if not empty and valid
  if (!isEmpty(val) && validate(val)) {
    // Check if contains only zeros
    if (val.split("0").length - 1 === val.length) {
      return "";
    }

    // Check if contains only 10-digits
    if (val.length === 10) {
      return val;
    }

    // Check if contains 11 digits and first character is 1
    if (val.length === 11 && val.charAt(0) === "1") {
      return val.slice(1);
    }
  }

  return "";
}

module.exports = phone;
