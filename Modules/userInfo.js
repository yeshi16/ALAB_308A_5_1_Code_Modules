// export default function message() {
//     const name = "Meba";
//     const age = 38;
//     return name + " is " + age + "years old";

// }

// export function test(){return "module"}

export  function getUserInfo() {
    const userInfo = document.getElementById("userInfo");
    const nameLabel = document.createElement("label");
    const nameInput = document.createElement("input");
    // const emojiSelect = document.createElement("label");
    const dropdown = document.getElementById("dropdown");
    const selectLabel = document.createElement("label");
    const game = document.getElementById("game");

    userInfo.classList.add("mb-3");
nameLabel.classList.add("form-label");
nameInput.classList.add("form-control", "bg-success-subtle", "w-50");
nameLabel.setAttribute("for", "username");
nameInput.setAttribute("id", "username");
nameInput.setAttribute("required", "true");
nameInput.placeholder = "Type your name here";
nameLabel.textContent = "Name";
selectLabel.textContent = "Which animal represents you";

userInfo.insertBefore(nameLabel, dropdown);
userInfo.insertBefore(nameInput, userInfo.children[1]);
userInfo.insertBefore(selectLabel, userInfo.children[2]);

const startGame = document.createElement("button");
startGame.classList.add("btn", "btn-success");
userInfo.appendChild(startGame).textContent = "Start Game";

// style
document.body.style.color = "#308b55";
selectLabel.style.paddingTop = "5px";
selectLabel.style.paddingBottom = "5px";
userInfo.style.padding = "15px"

const cardDisplay = document.createElement("div")
cardDisplay.textContent = `Phrase Card`
cardDisplay.classList.add("w-70", "text-center")// "border", "border-success-subtle"
cardDisplay.style.padding = "15px"
cardDisplay.style.alignItems = "center"
// game.prepend(cardDisplay)
//validate name 
function valUsername() {
    let username = nameInput.value;
    if (username == "") {
        alert("Pleas add your name");
       nameInput.focus();
      return false;
    }
    return true;
}  

// function for selecting emoji randomly if user doesnt select
function selectEmoji() {
    const options = dropdown.querySelectorAll("option");
    let randomIndex = Math.floor(Math.random() * options.length);
    let selected = dropdown.selectedIndex;

    if (selected === -1 || selected === 0) {
        // Select a random option from all available options
        dropdown.selectedIndex = randomIndex;
        return dropdown.options[randomIndex].value;
    } else {
        // Return the value of the selected emoji
        return dropdown.options[selected].value;
    }
}

// event handler to dispaly name and emoji
startGame.addEventListener("click", function () {
    if (valUsername()) {
    const display = document.createElement("div");
    userInfo.style.display = "none";
    let name = nameInput.value;
    let emoji = selectEmoji();
    display.innerHTML = `Hi ${name}! lets play. let your inner ${emoji} out`
    result.textContent = `Lets get started ${emoji}`;
    game.prepend(display)
    game.style.display = "block"
    userInput.focus();
    }
})

// event handler for submmiting user input
userInput.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        guessPhrase();
    }
})


return cardDisplay, valUsername(), selectEmoji()
  }