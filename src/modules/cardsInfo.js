import { getLocalStorage, setLocalStorage } from './localStorage.js';
import getCardNames from './sessionCards.js';

const getCardInfo = async (renderCards, num) => {
  const cardInfo = [];
  await getCardNames(num);
  const sessionCards = getLocalStorage('sessionCards');
  sessionCards.forEach(async (card) => {
    await fetch(`https://api.scryfall.com/cards/named?fuzzy=${card}`).then(async (response) => {
      const dataArr = await response.json();
      cardInfo.push(dataArr);
      setLocalStorage('sessionCardsInfo', cardInfo);
    });
  });
  renderCards();
};

export default getCardInfo;