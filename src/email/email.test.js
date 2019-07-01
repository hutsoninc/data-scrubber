const scrub = require("./email");

describe("email validation", function() {
  test("should return same values", function() {
    const vals = [
      "awesomeemail@gmail.com",
      "hello123@outlook.com",
      "mickey@mouse.com"
    ];

    for (let i = 0; i < vals.length; i++) {
      expect(scrub(vals[i])).toEqual(vals[i]);
    }
  });

  test("should return empty string", function() {
    const vals = ["my@email@gmail.com", "myemail@gmailcom"];

    for (let i = 0; i < vals.length; i++) {
      expect(scrub(vals[i])).toEqual("");
    }
  });

  test("should set default options", function() {
    const val = "contactus@hutsoninc.com";

    expect(scrub(val)).toEqual("");
  });

  test("should override default options", function() {
    const val = "contactus@hutsoninc.com";

    expect(scrub(val, { filterHutson: true })).toEqual("");
    expect(scrub(val, { filterHutson: false })).toEqual(
      "contactus@hutsoninc.com"
    );
  });
});
