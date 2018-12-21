const validate = require("./hutsonBranch");
const hutsonLocations = require("hutson-location-data");

describe("hutson branch validation", function() {
  test("should return same values", function() {
    let vals = hutsonLocations.map(obj => obj.title);

    for (let i = 0; i < vals.length; i++) {
      expect(validate(vals[i])).toEqual(vals[i]);
    }
  });

  test("should return empty string", function() {
    let vals = ["KY", "x", " ", "", "21"];

    for (let i = 0; i < vals.length; i++) {
      expect(validate(vals[i])).toEqual("");
    }
  });

  test("should return formatted hutson branch", function() {
    let vals = [
      {
        in: 1,
        out: "Mayfield, KY"
      },
      {
        in: "2",
        out: "Princeton, KY"
      },
      {
        in: "hopkinsville",
        out: "Hopkinsville, KY"
      },
      {
        in: "clarksville, tn ",
        out: "Clarksville, TN"
      }
    ];

    for (let i = 0; i < vals.length; i++) {
      expect(validate(vals[i].in)).toEqual(vals[i].out);
    }
  });
});
