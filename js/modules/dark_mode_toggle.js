const modeBtn = document.querySelector(".day-night-btn");
const label = document.querySelector(".label");
const addItemInput = document.querySelectorAll(".text-input");
const btns = document.querySelectorAll(".btn");
const bodyBg = document.querySelector(".body");
const headerBg = document.querySelector(".header-container");
const logo = document.querySelector(".logo");
const subtitles = document.querySelectorAll(".subtitle");
const links = document.querySelectorAll(".link");
const editSubtitle = document.querySelector(".edit-subtitle");
const themeIconBtn = document.querySelector(".day-night-btn");
const editInput = document.querySelector(".edit-input");

let darkTheme = JSON.parse(localStorage.getItem("darkTheme")) || false;
// localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
const testBtn = document.querySelector(".test-btn");
testBtn.addEventListener("click", () => {
  console.log(darkTheme);
});

const toggleGeneral = () => {
  label.classList.toggle("label-dark");
  btns.forEach((btn) => btn.classList.toggle("btn-dark"));
  themeIconBtn.classList.toggle("day-night-btn-dark");
  addItemInput.forEach((addInput) =>
    addInput.classList.toggle("text-input-dark")
  );
  darkTheme = !darkTheme;
  localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  console.log(darkTheme);
  // location.reload();
};

const toggleDarkMode = () => {
  toggleGeneral();
  bodyBg.classList.toggle("body-dark");
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

const toggleModeIcon = () => {
  if (!darkTheme) {
    modeBtn.innerHTML = `<span class="material-symbols-outlined"> dark_mode </span>`;
  } else {
    modeBtn.innerHTML = `<span class="material-symbols-outlined"> light_mode </span>`;
  }
};

export {
  toggleDarkMode,
  toggleDarkModeEdit,
  toggleModeIcon,
  modeBtn,
  darkTheme,
};
