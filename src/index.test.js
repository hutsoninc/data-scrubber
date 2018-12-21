const scrubber = require("./index");
const { validatePhone } = require("./index");

describe("imports", function() {
  let val = "1234567890";

  test("entire lib", function() {
    expect(scrubber.validatePhone(val)).toEqual(val);
  });

  test("single function", function() {
    expect(validatePhone(val)).toEqual(val);
  });
});
