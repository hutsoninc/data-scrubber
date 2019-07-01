const scrub = require("./zip");

describe("zip code validation", function() {
  test("should return same values", function() {
    const vals = ["12345", "45678", "94261", "42025", "90210"];

    for (let i = 0; i < vals.length; i++) {
      expect(scrub(vals[i])).toEqual(vals[i]);
    }
  });

  test("should return empty string", function() {
    const vals = ["abcde", "1234", ".", "x"];

    for (let i = 0; i < vals.length; i++) {
      expect(scrub(vals[i])).toEqual("");
    }
  });

  test("should return formatted zip code", function() {
    const vals = [
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
      expect(scrub(vals[i].in)).toEqual(vals[i].out);
    }
  });
});
