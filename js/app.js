import {
  addLiFromLocalStorage,
  addToArrayFromInput,
} from "./modules/addFunctions.js";

import loadPage from "./modules/generatingHTML/light.js";
import loadPageDark from "./modules/generatingHTML/dark.js";

import { toggleTheme, darkTheme } from "./modules/dark_mode_toggle.js";

if (!darkTheme) {
  loadPage();
} else {
  loadPageDark();
}

//////////////RESET BUTTON FOR TESTING///////////////////
// const resetBtn = document.querySelector(".reset-btn");
// resetBtn.addEventListener("click", () => {
//   localStorage.clear();
//   location.reload();
// });

///////////////////////MODE BTN////////////////////////
const modeBtn = document.querySelector(".day-night-btn");
modeBtn.addEventListener("click", () => {
  toggleTheme();
});

/////////////////////NEW CODE HERE MAYBE///////////////

const addItemInput = document.querySelector(".new-item-input");
const addAmountInput = document.querySelector(".amount-input");
const pendingUl = document.querySelector(".pending-ul");
const cartUl = document.querySelector(".shopping-cart-ul");
addLiFromLocalStorage(pendingUl, cartUl, darkTheme);

let addForm = document.querySelector(".shopping-form");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addToArrayFromInput(addAmountInput, addItemInput);
  location.reload();
});
