import { toggleTheme, darkTheme } from "./modules/_dark_mode_toggle.js";

import loadPage from "./modules/generatingHTML/_light.js";
import loadPageDark from "./modules/generatingHTML/_dark.js";

import {
  addToArrayFromInput,
  itemArray,
  inputValidation,
} from "./modules/backgroundFunctions/_arrayFunctions.js";

import { addLiFromLocalStorage } from "./modules/_liEventListeners.js";
import {
  nothingInCart,
  nothingPending,
} from "./modules/backgroundFunctions/_addLi.js";

////////////////////////LOAD PAGE AND ELEMENTS//////////////////////////
if (!darkTheme) {
  loadPage();
} else {
  loadPageDark();
}

const deleteAllBtn = document.querySelector(".reset-btn");
const confirmationSigns = document.querySelectorAll(".delete-confirmation");
const nonEmptyconfirm = document.querySelector(".non-empty-confirm");
const emptyConfirm = document.querySelector(".empty-confirm");
const confirmDeleteAllBtn = document.querySelector(".delete-btn");
const modeBtn = document.querySelector(".day-night-btn");
const addItemInput = document.querySelector(".new-item-input");
const addAmountInput = document.querySelector(".amount-input");
const pendingUl = document.querySelector(".pending-ul");
const cartUl = document.querySelector(".shopping-cart-ul");

///////////////////////////DELETE ALL BUTTON/////////////////////////////
deleteAllBtn.addEventListener("click", () => {
  if (
    itemArray.find((item) => item.inCart === false) === undefined &&
    itemArray.find((item) => item.inCart === true) === undefined
  ) {
    emptyConfirm.classList.toggle("hidden");
  } else {
    nonEmptyconfirm.classList.toggle("hidden");
  }
});

confirmationSigns.forEach((confirm) => {
  confirm.lastElementChild.lastElementChild.addEventListener("click", () => {
    confirm.classList.toggle("hidden");
  });
});

confirmDeleteAllBtn.addEventListener("click", () => {
  localStorage.setItem("itemArray", JSON.stringify([]));
  localStorage.setItem("editedItem", JSON.stringify({}));
  location.reload();
});

///////////////////////////////MODE BTN/////////////////////////////////
modeBtn.addEventListener("click", () => {
  toggleTheme();
});

///////////////DISPLAY EXISTING ITEMS FROM LOCAL STORAGE///////////////
addLiFromLocalStorage(pendingUl, cartUl, darkTheme, itemArray);

if (itemArray.find((item) => item.inCart === false) === undefined)
  nothingPending(pendingUl, darkTheme);

if (itemArray.find((item) => item.inCart === true) === undefined)
  nothingInCart(cartUl, darkTheme);

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
