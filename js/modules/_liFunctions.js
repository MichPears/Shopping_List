import { addPending, addInCart } from "./individualFunctions/_addLi.js";
import { moveToCart } from "./individualFunctions/_arrayFunctions.js";

// let id = 0;

const addLiFromLocalStorage = (pendingUl, cartUl, darkTheme, itemArray) => {
  itemArray.forEach((item) => {
    if (item.inCart === false) {
      let pendingLi = addPending(pendingUl, darkTheme, item);

      /////////MOVE FUNC////////////////////
      const checkbox = pendingLi.firstElementChild;

      checkbox.addEventListener("change", () => {
        moveToCart(item, itemArray);
      });
      let link = pendingLi.lastElementChild;
      link.addEventListener("click", () => {
        localStorage.setItem("editedItem", JSON.stringify(item));
      });
    } else {
      let cartLi = addInCart(cartUl, darkTheme, item);

      let link = cartLi.firstElementChild;
      link.addEventListener("click", () => {
        localStorage.setItem("editedItem", JSON.stringify(item));
      });
    }
  });
};

export { addLiFromLocalStorage };
