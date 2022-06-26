import { toggleDarkMode, modeBtn } from "./modules/dark_mode_toggle.js";

const addForm = document.querySelector(".shopping-form");

let defaultMode = true;
modeBtn.addEventListener("click", () => {
  toggleDarkMode();
  if (defaultMode) {
    modeBtn.innerHTML = `<span class="material-symbols-outlined"> dark_mode </span>`;
    defaultMode = false;
  } else {
    modeBtn.innerHTML = `<span class="material-symbols-outlined"> light_mode </span>`;
    defaultMode = true;
  }
});
