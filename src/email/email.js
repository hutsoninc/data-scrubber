const validate = require("is-email");
const { isEmpty } = require("../utils");

/**
 * Validates and formats an email.
 * @public
 * @param {string} val The value to process.
 * @param {object} options
 * @param {boolean} options.filterHutson Filter out hutsoninc.com emails.
 * @returns {string}
 */

function email(val, options) {
  options = Object.assign(
    {
      filterHutson: true
    },
    options
  );

  // Convert to lowercase string
  val = String(val).toLowerCase();

  // Check if not empty and valid
  if (!isEmpty(val) && validate(val)) {
    // Check if contains semicolon
    if (val.indexOf(";") >= 0) {
      return "";
    }

    // Check if contains more than one @ symbol
    if (val.split("@").length - 1 > 1) {
      return "";
    }

    // Check if hutsoninc.com email
    if (options.filterHutson && val.indexOf("hutsoninc.com") >= 0) {
      return "";
    }

    // Passed validation
    return val;
  }

  return "";
}

module.exports = email;
