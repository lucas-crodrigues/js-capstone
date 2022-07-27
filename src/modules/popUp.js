import main from './htmlConsts';

const createPopUp = (img, name, mana, type, text, artist) => {
  const popUpSection = document.createElement('section');
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

  popUpSection.classList.add('popUp');
  popUpSection.id = 'popUpSection';
  cardPopUp.classList.add('card', 'card-popUp');
  cardImagePopUp.classList.add('card-image-popUp');
  cardTitle.classList.add('card-title');
  cardInfoPopUp.classList.add('card-info', 'card-info-popUp');
  cardManaCost.classList.add('card-mana-cost');
  cardTypeLine.classList.add('card-type-line');
  cardOracleText.classList.add('card-oracle-text');
  cardArtist.classList.add('card-artist');
  buttonClose.classList.add('button-close');

  buttonClose.textContent = 'X';
  cardImagePopUp.src = img;
  cardTitle.textContent = name;
  cardManaCost.textContent = mana;
  cardTypeLine.textContent = type;
  cardOracleText.textContent = text;
  buttonComment.textContent = 'Comment';
  cardArtist.textContent = artist;

  main.appendChild(popUpSection);
  popUpSection.append(cardPopUp, buttonClose);
  cardPopUp.append(cardImagePopUp, cardTitle, cardInfoPopUp, cardArtist, buttonComment);
  cardInfoPopUp.append(cardManaCost, cardTypeLine, cardOracleText);

  buttonClose.addEventListener('click', () => {
    popUpSection.remove();
  });
}

export default createPopUp;