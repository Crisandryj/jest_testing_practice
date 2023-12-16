const {
  upCase,
  sum,
  reverseString,
  calculator,
  caesarCipher,
} = require("./code-test");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("capitalize letters", () => {
  expect(upCase("hello")).toBe("Hello");
});

test("reverse string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("addition", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("subtraction", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test("multiplication", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});
test("division", () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test("cipher letters", () => {
  expect(caesarCipher("hellz!", 1)).toBe("ifmma!");
});

test("cipher capital letters", () => {
  expect(caesarCipher("Hellz!", 1)).toBe("Ifmma!");
});
