const modeBtn = document.querySelector(".day-night-btn");
const label = document.querySelector(".label");
const addItemInput = document.querySelector(".text-input");
const btns = document.querySelectorAll(".btn");
const bodyBg = document.querySelector(".body");
const headerBg = document.querySelector(".header-container");
const logo = document.querySelector(".logo");
const subtitles = document.querySelectorAll(".subtitle");
const links = document.querySelectorAll(".link");
const editSubtitle = document.querySelector(".edit-subtitle");
const themeIconBtn = document.querySelector(".day-night-btn");
const editInput = document.querySelector(".edit-input");

const toggleGeneral = () => {
  label.classList.toggle("label-dark");
  btns.forEach((btn) => btn.classList.toggle("btn-dark"));
  themeIconBtn.classList.toggle("day-night-btn-dark");
};

const toggleDarkMode = () => {
  toggleGeneral();
  bodyBg.classList.toggle("body-dark");
  addItemInput.classList.toggle("text-input-dark");
  headerBg.classList.toggle("header-container-dark");
  logo.classList.toggle("logo-dark");
  subtitles.forEach((subtitle) => subtitle.classList.toggle("subtitle-dark"));
  links.forEach((link) => link.classList.toggle("link-dark"));
};

const toggleDarkModeEdit = () => {
  toggleGeneral();
  editInput.classList.toggle("edit-input-dark");
  editSubtitle.classList.toggle("edit-subtitle-dark");
  bodyBg.classList.toggle("body-dark");
  headerBg.classList.toggle("header-container-dark");
  logo.classList.toggle("logo-dark");
};
let defaultMode = true;

const toggleModeIcon = () => {
  if (defaultMode) {
    modeBtn.innerHTML = `<span class="material-symbols-outlined"> dark_mode </span>`;
    defaultMode = false;
  } else {
    modeBtn.innerHTML = `<span class="material-symbols-outlined"> light_mode </span>`;
    defaultMode = true;
  }
};

export { toggleDarkMode, toggleDarkModeEdit, toggleModeIcon, modeBtn };
