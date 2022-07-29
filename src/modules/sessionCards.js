import { setLocalStorage } from './localStorage.js';

const url = 'https://api.scryfall.com/catalog/card-names';

const getCardNames = async (num) => {
  const cardList = await fetch(url).then(async (response) => {
    const dataArr = await response.json();
    const resultArr = dataArr.data;
    const filterResult = resultArr.splice(num, 24);
    return filterResult;
  });
  setLocalStorage('sessionCards', cardList);
  return cardList;
};

export default getCardNames;