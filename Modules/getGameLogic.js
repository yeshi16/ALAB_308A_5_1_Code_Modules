

import { nameInput, userInfo, dropdown, startGame, result, game, userInput, hint } from '../Modules/userInfo.js';
import { hideCards, getPhrase, checkGuess, displayHint, phraseCards, gameState } from '../Modules/imgDisplay.js';
import { valUsername, selectEmoji } from '../Modules/validation.js';

startGame.addEventListener("click", function () {
    if (valUsername()) {
      const display = document.createElement("div");
      userInfo.style.display = "none";
      let name = nameInput.value;
      let emoji = selectEmoji();
      display.innerHTML = `Hi ${name}! Let's play. Let your inner ${emoji} out.`;
      result.textContent = `Let's get started, ${emoji}`;
      game.prepend(display);
      game.style.display = "block";
      userInput.focus();
    }
  });
  
  userInput.addEventListener("keypress", function (e) {
    console.log('Keypress event fired'); // Log statement to check if event listener is fired
    if (e.key === "Enter") {
      console.log('Enter key pressed'); // Log statement to check if Enter key is detected
      guessPhrase();
    }
  });
  
  function guessPhrase() {
    const userGuess = userInput.value.toLowerCase();
    const checkPhrase = getPhrase();
    if (checkGuess(userGuess, checkPhrase)) {
      result.textContent = `Congratulations ${selectEmoji()}! You guessed the phrase.`;
      userInput.disabled = true;
      setTimeout(() => {
        gameState.cardIndex++;
        hideCards();
        result.textContent = `${selectEmoji()}, let's try the next phrase.`;
        userInput.disabled = false;
        userInput.focus();
      }, 4000);
    } else {
      gameState.guessNum--;
      if (gameState.guessNum === 0) {
        result.textContent = `Sorry, you've reached the maximum attempts. The phrase was "${checkPhrase}".`;
        hint.textContent = `The phrase is: ${checkPhrase}.`;
        userInput.disabled = true;
        setTimeout(() => {
          hint.style.display = "block";
          gameState.cardIndex++;
          hideCards();
          result.textContent = `${selectEmoji()}, let's try the next phrase.`;
          userInput.disabled = false;
          userInput.focus();
        }, 4000);
      } else {
        if (gameState.guessNum === 4) {
          displayHint(gameState.guessNum);
          result.textContent = `Keep going, ${selectEmoji()}. You have ${gameState.guessNum} guesses left.`;
        } else {
          result.textContent = `Getting closer, ${selectEmoji()}. You have ${gameState.guessNum} guesses left.`;
        }
      }
    }
    userInput.focus();
    userInput.value = "";
  }
  
  export { guessPhrase }; 