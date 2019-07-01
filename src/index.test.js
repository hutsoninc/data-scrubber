const scrubber = require("./index");
const {
  scrubEmail,
  scrubHutsonBranch,
  scrubPhone,
  scrubState,
  scrubZip
} = require("./index");

describe("imports", function() {
  test("entire lib", function() {
    expect(scrubber).toBeInstanceOf(Object);
  });

  test("individual functions", function() {
    expect(scrubEmail).toBeInstanceOf(Function);
    expect(scrubHutsonBranch).toBeInstanceOf(Function);
    expect(scrubPhone).toBeInstanceOf(Function);
    expect(scrubState).toBeInstanceOf(Function);
    expect(scrubZip).toBeInstanceOf(Function);
  });
});
