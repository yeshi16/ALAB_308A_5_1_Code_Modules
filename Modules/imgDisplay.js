
import { cards, hint, result, userInput } from '../Modules/userInfo.js';

const gameState = {
  cardIndex: 0,
  guessNum: 6
};

export const phraseCards = [
  { card: cards[0], phrase: 'for once in my life', hint: 'four, life' },
  { card: cards[1], phrase: 'forget it', hint: 'four' },
  { card: cards[2], phrase: 'try to understand', hint: 'understand' },
  { card: cards[3], phrase: 'travel overseas', hint: 'over, sea' },
  { card: cards[4], phrase: 'breakfast', hint: 'break' },
  { card: cards[5], phrase: 'downtown', hint: 'down' },
  { card: cards[6], phrase: 'eyeshadow', hint: 'shadow' },
  { card: cards[7], phrase: 'stepfather', hint: 'steps' },
  { card: cards[8], phrase: 'once upon a time', hint: 'time' },
  { card: cards[9], phrase: 'potatoes', hint: "o's" },
  { card: cards[10], phrase: '3d movie', hint: '3' },
  { card: cards[11], phrase: 'top secret', hint: 'top' }
];

export function hideCards() {
  cards.forEach((card, index) => {
    if (index === gameState.cardIndex) {
      card.style.display = "block";
    } else {
      card.style.display = 'none';
    }
  });
  if (gameState.cardIndex >= cards.length) {
    gameState.cardIndex = 0;
  }
  gameState.guessNum = 6;
  hint.style.display = "none";
}
hideCards();

export function displayHint(guessNum) {
  if (guessNum >= 4) {
    hint.style.display = "block";
    hint.textContent = `Hint: ${phraseCards[gameState.cardIndex].hint}`;
  } else {
    hint.style.display = "none";
  }
}

export function getPhrase() {
  return phraseCards[gameState.cardIndex].phrase;
}

export function checkGuess(userGuess, checkPhrase) {
  return userGuess === checkPhrase;
}

export { gameState };