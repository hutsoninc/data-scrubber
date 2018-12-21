const states = require("datasets-us-states-names-abbr");
const stateNames = Object.keys(states);

/**
 * Full US state names.
 * @private
 */

let statesFull = [];

/**
 * Abbreviated US state names.
 * @private
 */

let statesAbbr = [];

for (let i = 0; i < stateNames.length; i++) {
  statesFull.push(stateNames[i]);
  statesAbbr.push(states[stateNames[i]].toUpperCase());
}

module.exports = {
  states,
  statesFull,
  statesAbbr
};
