import './styles.css';
import getCardInfo from './modules/cardsInfo.js';
import renderCards from './modules/populateHTML.js';

window.addEventListener('DOMContentLoaded', () => getCardInfo());

document.querySelector('.logo').addEventListener('click', () => {
  document.querySelector('.cards').innerHTML = '';
  renderCards();
});