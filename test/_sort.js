const Sort = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  beforeEach(() => {
    selection = new Sort();
  });

  it("should be a function", () => {
    // passes
    expect(Sort).to.be.a("function");
  });

  it("should have a sort method", () => {
    // passes
    expect(Sort.prototype.sort).to.be.a("function");
  });

  it("should sort the array correctly", () => {
    let array = [5, 3, 4, 2, 10, 51, 100, 24, 1, 50, 70, 88];
    let correctArray = [1, 2, 3, 4, 5, 10, 24, 50, 51, 70, 88, 100];
    expect(selection.sort(array)).to.be.deep.equal(correctArray);
  });

  it("should sort the array by selection sort", () => {
    // checks the first value's initial sort

    let array = [5, 2, 4, 11, 1, 42];
    let positionArray = [4, 0];

    expect(selection.checkSelectionSort(array, 1, 5)).to.be.deep.equal(
      positionArray
    );
  });
});
