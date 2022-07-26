const url = 'https://api.scryfall.com/catalog/card-names';

const getCardNames = () => {
  fetch(url).then(async (response) => {
    const dataArr = await response.json();
    const resultArr = dataArr.data;
    const filterResult = resultArr.splice(Math.floor(Math.random()*(resultArr.length - 24)), 24);
    localStorage.setItem('sessionCards', JSON.stringify(filterResult));
    return filterResult;
  });
};

export default getCardNames;
