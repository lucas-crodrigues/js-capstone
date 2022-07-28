import { main } from './htmlConsts.js';

const createPopUp = (img, name, mana, type, text, artist) => {
  const popUpSection = document.createElement('section');
  const popUpInfoContainer = document.createElement('div');
  const cardPopUp = document.createElement('ARTICLE');
  const buttonClose = document.createElement('div');
  const cardImagePopUp = document.createElement('img');
  const cardTitle = document.createElement('h2');
  const cardInfoPopUp = document.createElement('div');
  const cardManaCost = document.createElement('p');
  const cardTypeLine = document.createElement('p');
  const cardOracleText = document.createElement('p');
  const cardArtist = document.createElement('p');

  // Comments
  const commentsContainer = document.createElement('div');
  const commentsTitleContainer = document.createElement('div');
  const commentsTitle = document.createElement('h3');
  const commentsCounter = document.createElement('span');
  const commentContainer = document.createElement('div');
  const commentData = document.createElement('span');
  const commentUserName = document.createElement('span');
  const commentText = document.createElement('span');

  // Add comments
  const addCommentForm = document.createElement('form');
  const addCommentTitle = document.createElement('h3');
  const addCommentNameInput = document.createElement('input');
  const addCommentTextInput = document.createElement('input');
  const buttonComment = document.createElement('button');

  popUpSection.classList.add('popUp');
  popUpInfoContainer.classList.add('popUpInfoContainer');
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
  cardArtist.textContent = `Art by ${artist}`;

  // comments
  commentsContainer.classList.add('commentsContainer');
  commentsTitleContainer.classList.add('commentsTitleContainer');
  commentsCounter.classList.add('coomentsCounter');
  commentContainer.classList.add('commentContainer');
  commentData.classList.add('commentData');

  commentsTitle.textContent = 'Comments';
  commentsCounter.textContent = '(3)';
  commentData.textContent = '28/07/1963';
  commentUserName.textContent = 'Rodrigo';
  commentText.textContent = 'bla bla bla';

  // add comments
  addCommentForm.classList.add('addCommentForm');
  addCommentNameInput.id = 'nameInput';
  addCommentTextInput.id = 'textInput';

  addCommentTitle.textContent = 'Add a Comment';
  addCommentNameInput.placeholder = ' Your name';
  addCommentTextInput.placeholder = ' Your insights';
  buttonComment.textContent = 'Comment';

  document.body.classList.add('overFlowHidden');

  main.appendChild(popUpSection);
  popUpSection.append(popUpInfoContainer, buttonClose);
  popUpInfoContainer.append(cardPopUp, commentsContainer, addCommentForm);
  cardPopUp.append(cardImagePopUp, cardTitle, cardInfoPopUp, cardArtist, buttonComment);
  cardInfoPopUp.append(cardManaCost, cardTypeLine, cardOracleText);

  commentsContainer.append(commentsTitleContainer, commentContainer);
  commentsTitleContainer.append(commentsTitle, commentsCounter);
  commentContainer.append(commentData, commentUserName, commentText);
  addCommentForm.append(addCommentTitle, addCommentNameInput, addCommentTextInput, buttonComment);

  buttonClose.addEventListener('click', () => {
    document.body.classList.remove('overFlowHidden');
    popUpSection.remove();
  });
};

export default createPopUp;