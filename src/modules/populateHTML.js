import getCardInfo from "./cardsInfo.js"

// const renderCards = () => {
//   const cardInfo = getCardInfo();
//   console.log(cardInfo);
//   const cardsContainter = document.querySelector('.cards');
//   cardInfo.forEach((card) => {
//     const cardArticle = document.createElement('article');
//     const cardImage = document.createElement('div');
//     const cardInfo = document.createElement('div');
//     const cardName = document.createElement('span');
//     const cardLike = document.createElement('input');
//     const cardComments = document.createElement('button');
//     const cardReservations = document.createElement('button');

//     cardArticle.classList.add('card');
//     cardImage.classList.add('card-image');
//     cardInfo.classList.add('card-info');
//     cardName.classList.add('card-title');
//     cardLike.classList.add('button-like');
//     cardComments.classList.add('button-comments');
//     cardReservations.classList.add('button-reservations');

//     cardLike.type = "checkbox";
//     cardComments.type = "button";
//     cardReservations.type = "button";

//     cardName.innerHTML = card.name;
//     cardComments.innerHTML = 'Comments';
//     cardReservations.innerHTML = 'Reservations';

//     cardsContainter.appendChild(cardArticle);
//     cardArticle.append(cardImage, cardInfo, cardComments, cardReservations);
//     cardInfo.append(cardName, cardLike);

//     cardImage.style.backgroundImage = `url(${card.image_uris.large})`;
//   })
// }

const createCard = (card) => {
  const cardsContainter = document.querySelector('.cards');

  const cardArticle = document.createElement('article');
  const cardImage = document.createElement('div');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('span');
  const cardLike = document.createElement('input');
  const cardComments = document.createElement('button');
  const cardReservations = document.createElement('button');

  cardArticle.classList.add('card');
  cardImage.classList.add('card-image');
  cardInfo.classList.add('card-info');
  cardName.classList.add('card-title');
  cardLike.classList.add('button-like');
  cardComments.classList.add('button-comments');
  cardReservations.classList.add('button-reservations');

  cardLike.type = "checkbox";
  cardComments.type = "button";
  cardReservations.type = "button";

  cardName.innerHTML = card.name;
  cardComments.innerHTML = 'Comments';
  cardReservations.innerHTML = 'Reservations';

  cardsContainter.appendChild(cardArticle);
  cardArticle.append(cardImage, cardInfo, cardComments, cardReservations);
  cardInfo.append(cardName, cardLike);

  cardImage.style.backgroundImage = `url(${card.image_uris.large})`;
}

const renderCards = () => {
  const cardInfo = getCardInfo();
  console.log(cardInfo);
  cardInfo.forEach((card) => {
    console.log(card);
    createCard(card);
  })
}

export default renderCards;