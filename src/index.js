const validateEmail = require("./email/email");
const validateHutsonBranch = require("./hutson-branch/hutsonBranch");
const validatePhone = require("./phone/phone");
const validateState = require("./state/state");
const validateZip = require("./zip/zip");

module.exports = {
  validateEmail,
  validateHutsonBranch,
  validatePhone,
  validateState,
  validateZip
};
