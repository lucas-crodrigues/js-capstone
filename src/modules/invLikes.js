const appID = 'JMmUrfz1eG6NBjtIPHdJ';

export const postLike = async (id) => {
  try {
    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    });
  } catch (error) {
    throw new Error('Can not post Like');
  }
};

export const getLike = async () => {
  try {
    const Likes = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes/`);
    const likeData = await Likes.json();
    return likeData;
  } catch (error) {
    throw new Error('unable to get a Data');
  }
};

export const displayLike = async (id) => {
  const likesArr = await getLike();
  const likeIndex = likesArr.findIndex(i => i.item_id === id);
  const likeNum = likesArr[likeIndex].likes;
  return likeNum;
};