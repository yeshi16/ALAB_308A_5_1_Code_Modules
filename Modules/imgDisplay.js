export function getDisplay(){
    const userInput = document.createElement("input");
    userInput.classList.add("form-control", "bg-success-subtle", "w-50");
    userInput.setAttribute("type", "text");
    userInput.placeholder = "Type your phrase";
    const hint = document.createElement("p")
    const result = document.createElement("p")
    hint.classList.add("border-bottom", "border-success")
    result.classList.add("border-bottom", "border-success")
    hint.style.display = "none";
    userInput.style.marginTop = "15px";
    userInput.style.marginBottom = "15px";

    const cards = document.querySelectorAll(".card");

    let cardIndex = 0;
// array of phrase card phrase and hint
const phraseCards = [
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

]

function hideCards() {

    cards.forEach((card, index) => {
        if (index == cardIndex) {
            card.style.display = "block"
        } else {
            card.style.display = 'none';
        }
    });
    if (cardIndex >= cards.length) {
        cardIndex = 0
    }

    guessNum = 6;
    hint.style.display = "none"
}

// function to display hint
function displayHint(guessNum) {
    if (guessNum >= 4) {
        hint.style.display = "block";
        hint.textContent = `Hint: ${phraseCards[cardIndex].hint}`;
    } else {
        hint.style.display = "none";
    }
}

// function for get phrase
function getPhrase() {
    return phraseCards[cardIndex].phrase;
}

// function for game logic
function guessPhrase() {
    const userGuess = userInput.value.toLowerCase();
    checkPhrase = getPhrase();
    if (checkGuess(userGuess, checkPhrase)) {
        result.textContent = `congragualtion ${selectEmoji()} you guessed the phrase`;
        userInput.disabled = true;
        setTimeout(() => {
            cardIndex++;
            hideCards();
            result.textContent = `${selectEmoji()} lets try the next phrase`
            userInput.disabled = false;
            userInput.focus();
        }, 4000);
    } else {
        guessNum--;
        if (guessNum == 0) {
            result.textContent = `Sorry you have reached max attemps. Your phrase was ${userGuess}`
            hint.textContent = `The phrase is: ${phraseCards[cardIndex].phrase}`;
            userInput.disabled = true;
            setTimeout(() => {
                hint.style.display = "block";
                cardIndex++;
                hideCards();
                result.textContent = `${selectEmoji()} lets try the next phrase`
                userInput.disabled = false;
                userInput.focus();
            }, 4000);

        } else {

            if (guessNum == 4) {
                displayHint(guessNum)
                result.textContent = `Keep going ${selectEmoji()}. You have ${guessNum} guess left`
            } else {
                result.textContent = `Getting closer ${selectEmoji()}. You have ${guessNum} guess left`
            }
        }
    }
    userInput.focus();
    userInput.value = "";

}

    return  userInput, hint, result, hideCards(), displayHint(guessNum), getPhrase(), guessPhrase()//"module 2"
}