import { Operations } from '../src/modules';

test('adds 1 + 2 to equal 3', () => {
  expect(Operations.sum(1, 2).result).toBe(3);
});
