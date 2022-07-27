import popUpSection from './htmlConsts';
import cardimage from '../assets/card-large-ex.jpg';

const createPopUp = () => {
  console.log('created')
  const cardPopUp = document.createElement('ARTICLE');
  const buttonClose = document.createElement('div');
  const cardImagePopUp = document.createElement('img');
  const cardTitle = document.createElement('h3');
  const cardInfoPopUp = document.createElement('div');
  const buttonComment = document.createElement('button');
  const cardManaCost = document.createElement('p');
  const cardTypeLine = document.createElement('p');
  const cardOracleText = document.createElement('p');
  const cardArtist = document.createElement('p');


  cardPopUp.classList.add('card', 'card-popUp');
  cardImagePopUp.classList.add('card-image-popUp');
  cardImagePopUp.src = cardimage;
  cardTitle.classList.add('card-title');
  cardInfoPopUp.classList.add('card-info', 'card-info-popUp');
  cardManaCost.classList.add('card-mana-cost');
  cardTypeLine.classList.add('card-type-line');
  cardOracleText.classList.add('card-oracle-text');
  cardArtist.classList.add('card-artist');
  buttonClose.classList.add('button-close');

  cardTitle.textContent = 'Card 1';
  cardManaCost.textContent = 'Card Mana Cost';
  cardTypeLine.textContent = 'Card type';
  cardOracleText.textContent = 'Card Text';
  buttonComment.textContent = 'Comment';

  popUpSection.append(cardPopUp, buttonClose);
  cardPopUp.append(cardImagePopUp, cardTitle, cardInfoPopUp, cardArtist, buttonComment);
  cardInfoPopUp.append(cardManaCost, cardTypeLine, cardOracleText);
}

export default createPopUp;
