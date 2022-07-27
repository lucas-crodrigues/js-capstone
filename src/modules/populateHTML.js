import createPopUp from './popUp.js';
import { postLike } from './invLikes.js';

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

  cardLike.type = 'checkbox';
  cardComments.type = 'button';
  cardReservations.type = 'button';

  cardName.innerHTML = card.name;
  cardComments.innerHTML = 'Comments';
  cardReservations.innerHTML = 'Reservations';

  cardsContainter.appendChild(cardArticle);
  cardArticle.append(cardImage, cardInfo, cardComments, cardReservations);
  cardInfo.append(cardName, cardLike);

  cardImage.style.backgroundImage = `url(${card.image_uris.large})`;
  cardLike.id = `${card.id}`;

  cardComments.addEventListener('click', () => {
    const cardImg = card.image_uris.large;
    const cardName = card.name;
    const cardCost = card.mana_cost;
    const cardType = card.type_line;
    const cardText = card.oracle_text;
    const cartArtist = card.artist;
    createPopUp(cardImg, cardName, cardCost, cardType, cardText, cartArtist);
  });

  cardLike.addEventListener('change', () => {
    postLike(card.id);
    cardLike.disabled = 'disabled';
  });
};

const renderCards = () => {
  const cardInfo = JSON.parse(localStorage.getItem('sessionCardsInfo'));
  cardInfo.forEach((card) => {
    createCard(card);
  });
};

export default renderCards;