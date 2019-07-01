const validate = require("is-valid-zip");
const { isEmpty } = require("../utils");

/**
 * Validates and formats a zip code.
 * @public
 * @param {string} val The value to process.
 * @returns {string}
 */

function zip(val) {
  // Convert to string
  val = String(val);

  // Remove whitespace
  val = val.replace(/\s/g, "");

  // Check if not empty and valid
  if (!isEmpty(val) && validate(val)) {
    // Remove extra 4 digits if they exist
    val = val.split("-")[0];

    return val;
  }

  return "";
}

module.exports = zip;
