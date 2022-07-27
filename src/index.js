import './styles.css';
import getCardInfo from './modules/cardsInfo.js';
import renderCards from './modules/populateHTML.js';

window.addEventListener('DOMContentLoaded', async () => {
  getCardInfo(renderCards);
});