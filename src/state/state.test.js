const validate = require("./state");

describe("state validation", function() {
  test("should return same values", function() {
    let vals = ["KY", "TN", "IL", "IN"];

    for (let i = 0; i < vals.length; i++) {
      expect(validate(vals[i])).toEqual(vals[i]);
    }
  });

  test("should return empty string", function() {
    let vals = ["x", " ", "."];

    for (let i = 0; i < vals.length; i++) {
      expect(validate(vals[i])).toEqual("");
    }
  });

  test("should return formatted state", function() {
    let vals = [
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
      expect(validate(vals[i].in)).toEqual(vals[i].out);
    }
  });
});
