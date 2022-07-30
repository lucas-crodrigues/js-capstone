import { getLocalStorage, setLocalStorage } from './localStorage.js';

const getCardInfo = async () => {
  const cardInfo = [];
  const sessionCards = await getLocalStorage('sessionCards');
  await Promise.all(sessionCards.map(async (card) => {
    await fetch(`https://api.scryfall.com/cards/named?fuzzy=${card}`).then(async (response) => {
      const dataArr = await response.json();
      cardInfo.push(dataArr);
      setLocalStorage('sessionCardsInfo', cardInfo);
    });
  }));
  return cardInfo;
};

export default getCardInfo;