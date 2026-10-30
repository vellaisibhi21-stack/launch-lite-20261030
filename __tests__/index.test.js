const { add, greet } = require('../src/index');

describe('[feat-1] Greeter', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('greets by name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});

const { farewell } = require('../src/index');
test('farewell by name', () => { expect(farewell('Ada')).toBe('Goodbye, Ada!'); });
test('farewell default', () => { expect(farewell()).toBe('Goodbye!'); });
