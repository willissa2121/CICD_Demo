const { doubleFunc } = require('./app');

test('doubles the value 2', () => {
  expect(doubleFunc(2)).toBe(3);
});