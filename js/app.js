import { toggleTheme, darkTheme } from "./modules/_dark_mode_toggle.js";

import loadPage from "./modules/generatingHTML/_light.js";
import loadPageDark from "./modules/generatingHTML/_dark.js";

import {
  addToArrayFromInput,
  itemArray,
  inputValidation,
} from "./modules/backgroundFunctions/_arrayFunctions.js";

import { addLiFromLocalStorage } from "./modules/_liEventListeners.js";

////////////////////////LOAD PAGE AND ELEMENTS//////////////////////////
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

const modeBtn = document.querySelector(".day-night-btn");
const addItemInput = document.querySelector(".new-item-input");
const addAmountInput = document.querySelector(".amount-input");
const pendingUl = document.querySelector(".pending-ul");
const cartUl = document.querySelector(".shopping-cart-ul");

///////////////////////////////MODE BTN/////////////////////////////////
modeBtn.addEventListener("click", () => {
  toggleTheme();
});

///////////////DISPLAY EXISTING ITEMS FROM LOCAL STORAGE///////////////
addLiFromLocalStorage(pendingUl, cartUl, darkTheme, itemArray);

//////////////////////ADD NEW ITEM FROM INPUT//////////////////////////
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
