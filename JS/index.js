// import message from "../Modules/userInfo.js";
// document.getElementById("demo").innerHTML = message();
// game.prepend(getUserInfo.test())

import * as getUserInfo from "../Modules/userInfo.js";
import * as getDisplay from "../Modules/imgDisplay.js"
// const game = document.getElementById("game");
game.prepend(getUserInfo.getUserInfo())
game.appendChild(getDisplay.getDisplay())
// game.style.display = "none"

getUserInfo.valUsername();
getUserInfo.selectEmoji();