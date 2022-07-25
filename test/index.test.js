/**
 * @jest-environment jsdom
 */

import sum from '../src/index.js';

test('Test sum', () => {
  expect(sum(1, 2)).toBe(3);
});