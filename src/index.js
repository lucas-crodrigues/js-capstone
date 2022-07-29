import './styles.css';
import getCardInfo from './modules/cardsInfo.js';
import renderCards from './modules/populateHTML.js';

let numCard = 0;

window.addEventListener('DOMContentLoaded', async () => {
  numCard = 0
  getCardInfo(renderCards, numCard);
});

document.querySelector('.more').addEventListener('click', () => {
  numCard += 24;
  getCardInfo(renderCards, numCard);
})