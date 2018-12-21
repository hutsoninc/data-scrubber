const hutsonLocations = require("hutson-location-data");
const { isEmpty } = require("../../utils/utils");

/**
 * Validates and formats a Hutson branch name.
 * @public
 * @param {string} val The value to process.
 * @returns {string}
 */

function hutsonBranch(val) {
  // Convert to string
  val = String(val).trim();

  // Remove leading 0
  if (val.length > 1 && val.charAt(0) === "0") {
    val = val.slice(1);
  }

  // Check if not empty and valid
  if (!isEmpty(val)) {
    let store = hutsonLocations.find(obj => {
      // Check by branch number
      if (obj.locationNumber === val) {
        return true;
      }

      // Check by city
      if (obj.city.toUpperCase() === val.toUpperCase()) {
        return true;
      }

      // Check by title
      if (obj.title.toUpperCase() === val.toUpperCase()) {
        return true;
      }

      // Doesn't match
      return false;
    });

    if (store) {
      return store.title;
    }
  }

  return "";
}

module.exports = hutsonBranch;
