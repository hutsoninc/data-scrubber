const validate = require("./email");

describe("email validation", function() {
  test("should return same values", function() {
    let vals = [
      "awesomeemail@gmail.com",
      "hello123@outlook.com",
      "mickey@mouse.com"
    ];

    for (let i = 0; i < vals.length; i++) {
      expect(validate(vals[i])).toEqual(vals[i]);
    }
  });

  test("should set default options", function() {
    let val = "contactus@hutsoninc.com";

    expect(validate(val)).toEqual("");
  });

  test("should override default options", function() {
    let val = "contactus@hutsoninc.com";

    expect(validate(val, { filterHutson: true })).toEqual("");
    expect(validate(val, { filterHutson: false })).toEqual(
      "contactus@hutsoninc.com"
    );
  });
});
