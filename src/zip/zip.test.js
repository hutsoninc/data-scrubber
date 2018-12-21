const validate = require("./zip");

describe("zip code validation", function() {
  test("should return same values", function() {
    let vals = ["12345", "45678", "94261", "42025", "90210"];

    for (let i = 0; i < vals.length; i++) {
      expect(validate(vals[i])).toEqual(vals[i]);
    }
  });

  test("should return empty string", function() {
    let vals = ["abcde", "1234", ".", "x"];

    for (let i = 0; i < vals.length; i++) {
      expect(validate(vals[i])).toEqual("");
    }
  });

  test("should return formatted zip code", function() {
    let vals = [
      {
        in: "12345-6789",
        out: "12345"
      },
      {
        in: "98765-4321",
        out: "98765"
      },
      {
        in: 12345,
        out: "12345"
      }
    ];

    for (let i = 0; i < vals.length; i++) {
      expect(validate(vals[i].in)).toEqual(vals[i].out);
    }
  });
});
