import getCardNames from '../modules/sessionCards.js';

const getCardInfo = async (renderCards) => {
  let cardInfo = [];
  await getCardNames();
  const sessionCards = JSON.parse(localStorage.getItem('sessionCards'));
  sessionCards.forEach(async (card) => {
    await fetch(`https://api.scryfall.com/cards/named?fuzzy=${card}`).then(async (response) => {
      const dataArr = await response.json();
      cardInfo.push(dataArr);
      localStorage.setItem('sessionCardsInfo', JSON.stringify(cardInfo));
    });
  })
  renderCards();
}

export default getCardInfo;