import './styles.css';
import getCardInfo from './modules/cardsInfo.js';
import renderCards from './modules/populateHTML.js';
import getCardNames from './modules/sessionCards.js';

let numCard = 0;

window.addEventListener('DOMContentLoaded', () => {
  numCard = 0
  getCardNames(numCard).then(() => {
    getCardInfo().then(() => {
      renderCards();
    })
  })
});

document.querySelector('.more').addEventListener('click', () => {
  numCard += 24;
  getCardNames(numCard).then(() => {
    getCardInfo().then(() => {
      renderCards();
    })
  })
})