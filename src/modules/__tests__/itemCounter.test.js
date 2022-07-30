/**
 * @jest-environment jsdom
 */

import { TestEnvironment } from "jest-environment-jsdom";
import { createCard } from "../populateHTML.js";

const html = `<body>
<header>
  <div class="logo"></div>
  <ul>
    <li>
      <a href="#main" class="counter">Cards</a>
    </li>
    <li>
      <a href="https://github.com/lucas-crodrigues/js-capstone" rel="noopener noreferrer" target="_blank">Source</a>
    </li>
    <li>
      <a href="https://lucas-crodrigues.github.io/js-capstone/" rel="noopener noreferrer" target="_blank">About</a>
    </li>
  </ul>
</header>
<main id="main">
  <section class="cards">
  </section>
  <div>
    <button type="button" class="more">▼ Load More Results ▼</button>
  </div>
</main>
<footer>
  <div class="logo"></div>
  <span>Created by Lucas & Rodrigo under CC license</span>
</footer>
</body>`

const cardObject = { name: "A Display of My Dark Power",
  image_uris: { large: "https://c1.scryfall.com/file/scryfall-cards/large/front/c/5/c5287e77-890d-41bd-acc6-7a8f1866426d.jpg?1562252706" },
  mana_cost: "",
  artist: "Jim Nelson",
  oracle_text: "When you set this scheme in motion, until your next turn, whenever a player taps a land for mana, that player adds one mana of any type that land produced.",
  type_line: "Scheme"
}

document.body.innerHTML = html;

describe('Test item counter', () => {
  test('add 1 object', () => {
    createCard(cardObject);
    const counter = document.querySelector('.counter');
    expect(counter.innerHTML).toBe('Cards (1)');
  })

  test('add 1 more object', () => {
    createCard(cardObject);
    const counter = document.querySelector('.counter');
    expect(counter.innerHTML).toBe('Cards (2)');
  })
})