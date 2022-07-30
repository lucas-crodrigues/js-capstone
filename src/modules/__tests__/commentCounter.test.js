import getComments from '../__mocks__/commentCounter.js';

test('Should return number of comments for single pokemon', () => {
  const countComments = () => {
    getComments().then((dataArr) => {
      expect(dataArr.length).toBe(2);
    });
  };
  countComments();
});