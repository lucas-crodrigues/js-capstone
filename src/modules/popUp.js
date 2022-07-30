import { main } from './htmlConsts.js';
import { postComment, getComment } from './invComments.js';

const createPopUp = async (img, name, mana, type, text, artist) => {
  const popUpSection = document.createElement('section');
  const popUpInfoContainer = document.createElement('div');
  const cardPopUp = document.createElement('ARTICLE');
  const buttonClose = document.createElement('div');
  const cardImagePopUp = document.createElement('img');
  const cardDescriptionContainer = document.createElement('div');
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
  const commentsArr = await getComment(name);

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
  cardDescriptionContainer.classList.add('cardDescriptionContainer');
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

  commentsTitle.textContent = 'Comments';

  // add comments
  addCommentForm.classList.add('addCommentForm');
  addCommentNameInput.id = 'nameInput';
  addCommentTextInput.id = 'textInput';

  addCommentTitle.textContent = 'Add a Comment';
  addCommentNameInput.placeholder = ' Your name';
  addCommentNameInput.setAttribute('required', '');
  addCommentTextInput.placeholder = ' Your insights';
  addCommentTextInput.setAttribute('required', '');
  buttonComment.textContent = 'Comment';
  buttonComment.setAttribute('type', 'submit');

  document.body.classList.add('overFlowHidden');

  main.appendChild(popUpSection);
  popUpSection.append(popUpInfoContainer, buttonClose);
  popUpInfoContainer.appendChild(cardPopUp);
  cardPopUp.append(cardImagePopUp, cardDescriptionContainer);
  cardDescriptionContainer.append(
    cardTitle, cardInfoPopUp, cardArtist, commentsContainer, addCommentForm,
  );
  cardInfoPopUp.append(cardManaCost, cardTypeLine, cardOracleText);

  commentsContainer.appendChild(commentsTitleContainer);
  commentsTitleContainer.append(commentsTitle, commentsCounter);
  addCommentForm.append(addCommentTitle, addCommentNameInput, addCommentTextInput, buttonComment);

  buttonClose.addEventListener('click', () => {
    document.body.classList.remove('overFlowHidden');
    popUpSection.remove();
  });

  // populate comments

  await getComment(name);

  if ('error' in commentsArr === false) {
    commentsCounter.textContent = commentsArr.length;
    await commentsArr.forEach((e, index) => {
      const commentContainer = document.createElement('div');
      const commentData = document.createElement('span');
      const commentUserName = document.createElement('span');
      const commentText = document.createElement('span');

      commentContainer.classList.add('commentContainer');
      commentData.classList.add('commentData');

      commentData.textContent = commentsArr[index].creation_date;
      commentUserName.textContent = commentsArr[index].username;
      commentText.textContent = commentsArr[index].comment;

      commentsContainer.appendChild(commentContainer);
      commentContainer.append(commentData, commentUserName, commentText);
    });
  } else {
    commentsCounter.textContent = '0';
  }

  addCommentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    postComment(name, addCommentNameInput.value, addCommentTextInput.value);
  });
};

export default createPopUp;