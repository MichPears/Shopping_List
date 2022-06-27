import {
  modeBtn,
  toggleDarkModeEdit,
  toggleModeIcon,
} from "./modules/dark_mode_toggle.js";

modeBtn.addEventListener("click", () => {
  toggleModeIcon();
  toggleDarkModeEdit();
});

toggleDarkModeEdit();
