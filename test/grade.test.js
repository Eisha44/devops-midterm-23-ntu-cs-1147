const test = require('node:test');
const assert = require('node:assert');
const { grade } = require('../src/grade');

test('85 is the lowest A', () => {
  assert.strictEqual(grade(85), 'A');
});

test('70 is the lowest B', () => {
  assert.strictEqual(grade(70), 'B');
});

test('55 is the lowest C', () => {
  assert.strictEqual(grade(55), 'C');
});

test('50 is the lowest D', () => {
  assert.strictEqual(grade(50), 'D');
});

test('marks below 50 get F', () => {
  assert.strictEqual(grade(49), 'F');
});

test('marks above 100 throw RangeError', () => {
  assert.throws(() => grade(101), RangeError);
});

test('negative marks throw RangeError', () => {
  assert.throws(() => grade(-1), RangeError);
});
