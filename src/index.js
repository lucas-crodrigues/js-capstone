import './styles.css';
import getCardInfo from './modules/cardsInfo.js';
import renderCards from './modules/populateHTML.js';
import createPopUp from './modules/popUp.js'

window.addEventListener('DOMContentLoaded', async () => {
  getCardInfo(renderCards);
});
