const scrub = require("./state");

describe("state validation", function() {
  test("should return same values", function() {
    const vals = ["KY", "TN", "IL", "IN"];

    for (let i = 0; i < vals.length; i++) {
      expect(scrub(vals[i])).toEqual(vals[i]);
    }
  });

  test("should return empty string", function() {
    const vals = ["x", " ", "."];

    for (let i = 0; i < vals.length; i++) {
      expect(scrub(vals[i])).toEqual("");
    }
  });

  test("should return formatted state", function() {
    const vals = [
      {
        in: "Kentucky",
        out: "KY"
      },
      {
        in: "tn",
        out: "TN"
      },
      {
        in: "illinois",
        out: "IL"
      },
      {
        in: "indiana ",
        out: "IN"
      }
    ];

    for (let i = 0; i < vals.length; i++) {
      expect(scrub(vals[i].in)).toEqual(vals[i].out);
    }
  });
});
