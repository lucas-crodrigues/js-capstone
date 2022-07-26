import getCardNames from './sessionCards.js';

const getCardInfo = () => {
  let cardInfo = [];
  const sessionCards = JSON.parse(localStorage.getItem('sessionCards'));
  sessionCards.forEach((card) => {
    fetch(`https://api.scryfall.com/cards/named?fuzzy=${card}`).then(async (response) => {
      const dataArr = await response.json();
      cardInfo.push(dataArr);
    });
  })
  console.log(cardInfo);
  localStorage.setItem('sessionCardsInfo', JSON.stringify(cardInfo));
  return cardInfo;
}

export default getCardInfo;