import { toggleTheme, darkTheme } from "./modules/_dark_mode_toggle.js";

import loadPage from "./modules/generatingHTML/_light.js";
import loadPageDark from "./modules/generatingHTML/_dark.js";

import {
  addToArrayFromInput,
  itemArray,
  inputValidation,
} from "./modules/individualFunctions/_arrayFunctions.js";

import { addLiFromLocalStorage } from "./modules/_liFunctions.js";

if (!darkTheme) {
  loadPage();
} else {
  loadPageDark();
}

////////////RESET BUTTON FOR TESTING///////////////////
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

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
addLiFromLocalStorage(pendingUl, cartUl, darkTheme, itemArray);

let addForm = document.querySelector(".shopping-form");
addForm.addEventListener("submit", (e) => {
  if (inputValidation(addItemInput, addAmountInput)) {
    addToArrayFromInput(addAmountInput, addItemInput, itemArray);
    location.reload();
  } else {
    e.preventDefault();
    console.log("oops");
  }
});
