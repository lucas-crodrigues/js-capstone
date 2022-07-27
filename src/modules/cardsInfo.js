

const getCardInfo = async () => {
  let cardInfo = [];
  const sessionCards = JSON.parse(localStorage.getItem('sessionCards'));
  sessionCards.forEach(async (card) => {
    fetch(`https://api.scryfall.com/cards/named?fuzzy=${card}`).then(async (response) => {
      const dataArr = await response.json();
      cardInfo.push(dataArr);
      localStorage.setItem('sessionCardsInfo', JSON.stringify(cardInfo));
    });
  })
  console.log(cardInfo);
  return cardInfo;
}

export default getCardInfo;