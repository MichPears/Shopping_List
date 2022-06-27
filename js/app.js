import {
  toggleDarkMode,
  modeBtn,
  toggleModeIcon,
} from "./modules/dark_mode_toggle.js";

let addForm = document.querySelector(".shopping-form");

modeBtn.addEventListener("click", () => {
  toggleModeIcon();
  toggleDarkMode();
});
