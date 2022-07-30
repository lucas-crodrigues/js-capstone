import fetchApiMock from '../__mocks__/countermock.js';

describe('Cards counter test', () => {
  test('Array [1,2,3] should return 3', () => {
    fetchApiMock().then((answer) => {
      const cardsArray = answer.results;
      const cardsCounter = cardsArray.length;
      expect(cardsCounter).toBe(3);
    });
  });
})