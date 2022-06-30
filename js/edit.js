import { toggleTheme, darkTheme } from "./modules/_dark_mode_toggle.js";

import loadEditPage from "./modules/generatingHTML/_editLight.js";
import loadEditPageDark from "./modules/generatingHTML/_editDark.js";

import {
  deleteItem,
  inputEditValidation,
  editItem,
} from "./modules/individualFunctions/_arrayFunctions.js";

let itemArray = JSON.parse(localStorage.getItem("itemArray")) || [];
let editedItem = JSON.parse(localStorage.getItem("editedItem")) || {};

if (!darkTheme) {
  loadEditPage(editedItem);
} else {
  loadEditPageDark(editedItem);
}

///////////////////////MODE BTN////////////////////////
const modeBtn = document.querySelector(".day-night-btn");
modeBtn.addEventListener("click", () => {
  toggleTheme();
});

let editForm = document.querySelector(".edit-form");
let editAmountInput = document.querySelector(".amount-input");
let editItemInput = document.querySelector(".edit-item-input");
let editInfoInput = document.querySelector(".edit-input");
let deleteBtn = document.querySelector(".item-delete-btn");
let cancelBtn = document.querySelector(".item-cancel-btn");

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputEditValidation(editItemInput, editAmountInput)) {
    //////////EDIT/////////////
    editItem(
      itemArray,
      editedItem,
      editAmountInput,
      editItemInput,
      editInfoInput
    );
  } else {
    e.preventDefault();
    editAmountInput.placeholder = "#";
    editItemInput.placeholder = "please specify item";
    console.log("oops");
  }
});

deleteBtn.addEventListener("click", () => {
  deleteItem(itemArray, editedItem);
  window.location.href = "../Shopping_List/index.html";
});

cancelBtn.addEventListener("click", () => {
  window.location.href = "../Shopping_List/index.html";
});
