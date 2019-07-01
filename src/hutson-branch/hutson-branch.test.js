const scrub = require("./hutson-branch");
const hutsonLocations = require("hutson-location-data");

describe("hutson branch validation", function() {
  test("should return same values", function() {
    const vals = hutsonLocations.map(obj => obj.title);

    for (let i = 0; i < vals.length; i++) {
      expect(scrub(vals[i])).toEqual(vals[i]);
    }
  });

  test("should return empty string", function() {
    const vals = ["KY", "x", " ", "", "21"];

    for (let i = 0; i < vals.length; i++) {
      expect(scrub(vals[i])).toEqual("");
    }
  });

  test("should return formatted hutson branch", function() {
    const vals = [
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
      expect(scrub(vals[i].in)).toEqual(vals[i].out);
    }
  });
});
