const validate = require("./phone");

describe("phone number validation", function() {
  test("should return same values", function() {
    let vals = [
      "1234567890",
      "1597537913",
      "1112223333",
      "8008675309",
      "4446821246"
    ];

    for (let i = 0; i < vals.length; i++) {
      expect(validate(vals[i])).toEqual(vals[i]);
    }
  });

  test("should return empty string", function() {
    let vals = [
      "0000000000",
      "1234567",
      "12345678",
      "123456789",
      "123456789011",
      "a159748611",
      "46431254a1"
    ];

    for (let i = 0; i < vals.length; i++) {
      expect(validate(vals[i])).toEqual("");
    }
  });

  test("should return formatted phone number", function() {
    let vals = [
      {
        in: "(123) 456-7890",
        out: "1234567890"
      },
      {
        in: "123-456-7890",
        out: "1234567890"
      },
      {
        in: "(123) 4567890",
        out: "1234567890"
      },
      {
        in: "(123)456-7890",
        out: "1234567890"
      },
      {
        in: "(123) 456 7890",
        out: "1234567890"
      },
      {
        in: "123 456 7890",
        out: "1234567890"
      },
      {
        in: "1 (123) 456-7890",
        out: "1234567890"
      },
      {
        in: 1234567890,
        out: "1234567890"
      }
    ];

    for (let i = 0; i < vals.length; i++) {
      expect(validate(vals[i].in)).toEqual(vals[i].out);
    }
  });
});
