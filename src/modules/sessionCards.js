import { setLocalStorage } from "./localStorage.js";
const url = 'https://api.scryfall.com/catalog/card-names';

const getCardNames = async () => {
  const cardList = await fetch(url).then(async (response) => {
    const dataArr = await response.json();
    const resultArr = dataArr.data;
    const filterResult = resultArr.splice(Math.floor(Math.random() * (resultArr.length - 24)), 24);
    return filterResult;
  });
  setLocalStorage('sessionCards', cardList);
};

export default getCardNames;