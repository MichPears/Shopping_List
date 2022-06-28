import {
  toggleDarkMode,
  modeBtn,
  toggleModeIcon,
} from "./modules/dark_mode_toggle.js";
import {
  addPendingLiFromLocalStorage,
  addToArrayFromInput,
  itemArray,
} from "./modules/addFunctions.js";

//////////////RESET BUTTON FOR TESTING///////////////////
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

///////////////////////MODE BTN////////////////////////
modeBtn.addEventListener("click", () => {
  toggleModeIcon();
  toggleDarkMode();
});

// const pendingLis = document.querySelectorAll(".pending-li");
/////////////THIS GOES HERE///////////////
addPendingLiFromLocalStorage();
/////////////////////NEW CODE HERE MAYBE///////////////
// let pendingLi = addPendingLiFromLocalStorage();
// let checkbox = document.querySelector(".checkbox");
// let cartUl = document.querySelector(".shopping-cart-list");

// let itemLink = document.querySelector(".link");

// checkbox.addEventListener("change", () => {
//   pendingLi.remove();
// const cartLi = document.createElement("li");
// cartUl.appendChild(cartLi);
// console.log(itemLink);
// cartLi.innerHTML = `${itemLink}`;
// console.log("you clicked me");
// });

// console.log(pendingArray);

let addForm = document.querySelector(".shopping-form");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addToArrayFromInput();
  location.reload();
});
