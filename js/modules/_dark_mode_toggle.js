let darkTheme = JSON.parse(localStorage.getItem("darkTheme")) || false;

const toggleTheme = () => {
  darkTheme = !darkTheme;
  localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  location.reload();
};

export { toggleTheme, darkTheme };
