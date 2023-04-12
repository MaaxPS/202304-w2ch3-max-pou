import { numberToSqrt, addDecimalPoint } from ".";

describe("Given a number", () => {
  test("Then the result should return the sqrt of the number", () => {
    const number = 9;
    const expectedNumber = 3;

    const result = numberToSqrt(number);

    expect(result).toBe(expectedNumber);
  });
});

describe("Given a string representing numbers", () => {
  test("Then the result should return the string with '.' added at the end of the string", () => {
    const stringRepresentingNumbers = "352";
    const expectedStringRepresentingNumbers = "352.";

    const result = addDecimalPoint(stringRepresentingNumbers);

    expect(result).toBe(expectedStringRepresentingNumbers);
  });
});
