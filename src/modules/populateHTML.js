import createPopUp from './popUp.js';
import { postLike, displayLike } from './invLikes.js';

let itemNum = 0;

export const createCard = async (card) => {
  const cardsContainter = document.querySelector('.cards');
  const counter = document.querySelector('.counter');

  const cardArticle = document.createElement('article');
  const cardImageA = document.createElement('a');
  const cardImage = document.createElement('div');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('span');
  const cardLike = document.createElement('input');
  const cardLikeNum = document.createElement('p');
  const cardComments = document.createElement('button');

  cardArticle.classList.add('card');
  cardImage.classList.add('card-image');
  cardInfo.classList.add('card-info');
  cardName.classList.add('card-title');
  cardLike.classList.add('button-like');
  cardComments.classList.add('button-comments');

  cardLike.type = 'checkbox';
  cardComments.type = 'button';

  cardImageA.href = card.image_uris.large;
  cardImageA.rel = 'noopener noreferrer';
  cardImageA.target = '_blank';

  cardName.innerHTML = card.name;
  cardLikeNum.innerHTML = await displayLike(card.name);
  cardComments.innerHTML = 'Comments';

  cardsContainter.appendChild(cardArticle);
  cardArticle.append(cardImageA, cardInfo, cardComments);
  cardInfo.append(cardName, cardLike, cardLikeNum);
  cardImageA.appendChild(cardImage);

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
    postLike(card.name);
    cardLikeNum.innerHTML = Number(cardLikeNum.innerHTML) + 1;
    cardLike.disabled = 'disabled';
  });

  // item counter

  itemNum += 1;
  counter.innerHTML = `Cards (${itemNum})`;
};

const renderCards = () => {
  const cardInfo = JSON.parse(localStorage.getItem('sessionCardsInfo'));
  cardInfo.forEach((card) => {
    createCard(card);
  });
};

export default renderCards;