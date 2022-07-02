import { toggleTheme, darkTheme } from "./modules/_dark_mode_toggle.js";

import loadEditPage from "./modules/generatingHTML/_editLight.js";
import loadEditPageDark from "./modules/generatingHTML/_editDark.js";

import {
  deleteItem,
  inputValidation,
  editItem,
} from "./modules/backgroundFunctions/_arrayFunctions.js";

let itemArray = JSON.parse(localStorage.getItem("itemArray")) || [];
let editedItem = JSON.parse(localStorage.getItem("editedItem")) || {};

////////////////////////LOAD PAGE AND ELEMENTS//////////////////////////
if (!darkTheme) {
  loadEditPage(editedItem);
} else {
  loadEditPageDark(editedItem);
}

const modeBtn = document.querySelector(".day-night-btn");
const editForm = document.querySelector(".edit-form");
const editAmountInput = document.querySelector(".amount-input");
const editItemInput = document.querySelector(".edit-item-input");
const editInfoInput = document.querySelector(".edit-input");
const deleteBtn = document.querySelector(".item-delete-btn");
const cancelBtn = document.querySelector(".item-cancel-btn");
const confirmationSign = document.querySelector(".item-confirm");
const confirmDeleteItemBtn = document.querySelector(".delete-btn");
const confirmCancelBtn = document.querySelector(".cancel-confirm-btn");

//////////////////////////////MODE BTN//////////////////////////////////
modeBtn.addEventListener("click", () => {
  toggleTheme();
});

////////////////////////////////EDIT////////////////////////////////////
editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputValidation(editItemInput, editAmountInput)) {
    editItem(
      itemArray,
      editedItem,
      editAmountInput,
      editItemInput,
      editInfoInput
    );
    window.location.href = "../Shopping_List/index.html";
  } else {
    e.preventDefault();
    editAmountInput.placeholder = "#";
    editItemInput.placeholder = "please specify item";
  }
});

/////////////////////////////DELETE//////////////////////////////////
deleteBtn.addEventListener("click", () =>
  confirmationSign.classList.toggle("hidden")
);

confirmDeleteItemBtn.addEventListener("click", () => {
  deleteItem(itemArray, editedItem);
  window.location.href = "../Shopping_List/index.html";
});

confirmCancelBtn.addEventListener("click", () =>
  confirmationSign.classList.toggle("hidden")
);

/////////////////////////////CANCEL///////////////////////////////////
cancelBtn.addEventListener("click", () => {
  window.location.href = "../Shopping_List/index.html";
});
