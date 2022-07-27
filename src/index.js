import './styles.css';
import getCardInfo from './modules/cardsInfo.js';
import renderCards from './modules/populateHTML.js';
import { getLike } from './modules/invLikes.js'

window.addEventListener('DOMContentLoaded', async () => {
  getCardInfo(renderCards);
});

window.addEventListener('DOMContentLoaded', async () => {
  console.log(getLike());
});