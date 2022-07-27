import './styles.css';
import getCardInfo from './modules/cardsInfo.js';
import getCardNames from './modules/sessionCards.js';
import renderCards from './modules/populateHTML.js';

window.addEventListener('DOMContentLoaded', async () => {
  getCardNames().then(getCardInfo());
});

document.querySelector('.logo').addEventListener('click', () => {
  document.querySelector('.cards').innerHTML = '';
  renderCards();
});