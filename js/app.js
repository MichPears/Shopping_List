import {
  toggleDarkMode,
  modeBtn,
  toggleModeIcon,
} from "./modules/dark_mode_toggle.js";
import {
  addLiFromLocalStorage,
  addToArrayFromInput,
  pendingArray,
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

/////////////THIS GOES HERE///////////////
addLiFromLocalStorage();
// console.log(pendingArray);

const checkboxes = document.querySelectorAll(".checkbox");
const cartUl = document.querySelector(".shopping-cart-list");

const itemLink = document.querySelector(".link");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const cartLi = document.createElement("li");
    cartUl.appendChild(cartLi);
    console.log(itemLink);
    cartLi.innerHTML = `${itemLink}`;

    console.log("you clicked me");
  });
});

let addForm = document.querySelector(".shopping-form");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addToArrayFromInput();
  location.reload();
});
