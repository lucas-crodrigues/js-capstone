import { appID } from './htmlConsts.js';

export const postComment = async (cardId, userNameInputValue, commentInputText) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: cardId,
      username: userNameInputValue,
      comment: commentInputText,
    }),
  });
};

export const getComment = async (cardId) => {
  const commentsFetch = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments?item_id=${cardId}`);
  const commentsArr = await commentsFetch.json();
  return commentsArr;
};