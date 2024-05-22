
export const userInfo = document.getElementById("userInfo");
export const nameLabel = document.createElement("label");
export const nameInput = document.createElement("input");
export const emojiSelect = document.createElement("label");
export const dropdown = document.getElementById("dropdown");
export const selectLabel = document.createElement("label");
export const game = document.getElementById("game");
export const startGame = document.createElement("button");
export const cardDisplay = document.createElement("div");
export const userInput = document.createElement("input");
export const hint = document.createElement("p");
export const result = document.createElement("p");
export const cards = document.querySelectorAll(".card");

export function initializeElements() {
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

  startGame.classList.add("btn", "btn-success");
  userInfo.appendChild(startGame).textContent = "Start Game";

  // style
  document.body.style.color = "#308b55";
  selectLabel.style.paddingTop = "5px";
  selectLabel.style.paddingBottom = "5px";
  userInfo.style.padding = "15px";

  cardDisplay.textContent = `Phrase Card`;
  cardDisplay.classList.add("w-70", "text-center");
  game.prepend(cardDisplay);

  userInput.classList.add("form-control", "bg-success-subtle", "w-50");
  userInput.setAttribute("type", "text");
  userInput.placeholder = "Type your phrase";
  hint.classList.add("border-bottom", "border-success");
  result.classList.add("border-bottom", "border-success");
  hint.style.display = "none";
  userInput.style.marginTop = "15px";
  userInput.style.marginBottom = "15px";
  cardDisplay.style.padding = "15px";
  cardDisplay.style.alignItems = "center";
  game.appendChild(userInput);
  game.appendChild(hint);
  game.appendChild(result);
  game.style.display = "none";
}
