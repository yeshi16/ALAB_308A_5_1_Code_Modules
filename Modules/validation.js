
import { nameInput, dropdown } from '../Modules/userInfo.js';

export function valUsername() {
  let username = nameInput.value;
  if (username === "") {
    alert("Please add your name");
    nameInput.focus();
    return false;
  }
  return true;
}

export function selectEmoji() {
  const options = dropdown.querySelectorAll("option");
  let randomIndex = Math.floor(Math.random() * options.length);
  let selected = dropdown.selectedIndex;

  if (selected === -1 || selected === 0) {
    dropdown.selectedIndex = randomIndex;
    return dropdown.options[randomIndex].value;
  } else {
    return dropdown.options[selected].value;
  }
}
