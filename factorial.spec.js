const factorial = require("./factorial.js");

test("tests factorial(4)", () => {
    expect(factorial(4)).toBe(24);
}
);


test("tests factorial(0)", () => {
  expect(factorial(0)).toBe(1);
});


test("tests factorial(3)", () => {
  expect(factorial(3)).toBe(6);
});