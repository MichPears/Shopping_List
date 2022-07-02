import { addPending, addInCart } from "./backgroundFunctions/_addLi.js";
import { moveToCart } from "./backgroundFunctions/_arrayFunctions.js";

///////////////DISPLAY EXISTING ITEMS FROM LOCAL STORAGE///////////////
const addLiFromLocalStorage = (pendingUl, cartUl, darkTheme, itemArray) => {
  itemArray.forEach((item) => {
    if (item.inCart === false) {
      ///////////////////CREATE LI IN PENDING UL///////////////////////
      let pendingLi = addPending(pendingUl, darkTheme, item);

      const checkbox = pendingLi.firstElementChild;
      const link = pendingLi.lastElementChild;

      ////////////////////////MOVE TO CART//////////////////////////////
      checkbox.addEventListener("change", () => moveToCart(item, itemArray));

      ////////////////////SET ITEM TO BE EDITED/////////////////////////
      link.addEventListener("click", () =>
        localStorage.setItem("editedItem", JSON.stringify(item))
      );
    } else {
      //////////////////////CREATE LI IN CART///////////////////////////
      let cartLi = addInCart(cartUl, darkTheme, item);
      let link = cartLi.firstElementChild;

      ////////////////////SET ITEM TO BE EDITED/////////////////////////
      link.addEventListener("click", () =>
        localStorage.setItem("editedItem", JSON.stringify(item))
      );
    }
  });
};

export { addLiFromLocalStorage };
