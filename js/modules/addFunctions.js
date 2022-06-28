// const addItemInput = document.querySelector(".new-item-input");
// const addAmountInput = document.querySelector(".amount-input");
// const pendingUl = document.querySelector(".pending-ul");
// const cartUl = document.querySelector(".shopping-cart-ul");

import { darkTheme } from "./dark_mode_toggle.js";

let itemArray = JSON.parse(localStorage.getItem("itemArray")) || [];

const addToArrayFromInput = (addAmountInput, addItemInput) => {
  itemArray.push({
    item: addItemInput.value,
    amount: addAmountInput.value,
    id,
    inCart: false,
    info: "",
  });
  localStorage.setItem("itemArray", JSON.stringify(itemArray));
};
let id = 0;

const addLiFromLocalStorage = (pendingUl, cartUl) => {
  itemArray.forEach((item) => {
    if (!darkTheme) {
      if (item.inCart === false) {
        let pendingLi = document.createElement("li");
        pendingUl.appendChild(pendingLi);
        pendingLi.innerHTML = `<input type="checkbox" name="check" id="" class="checkbox" />
                              <a href="./item_info.html" class="link">${item.amount} ${item.item}</a>`;
        const checkbox = pendingLi.firstElementChild;
        /////////MOVE FUNC////////////////////
        checkbox.addEventListener("change", () => {
          item.inCart = true;
          localStorage.setItem("itemArray", JSON.stringify(itemArray));
          location.reload();
        });
        // return pendingLi;
      } else {
        let cartLi = document.createElement("li");
        cartUl.appendChild(cartLi);
        cartLi.innerHTML = `<a href="./item_info.html" class="link">${item.amount} ${item.item}</a>`;
      }
    } else {
      if (item.inCart === false) {
        let pendingLi = document.createElement("li");
        pendingUl.appendChild(pendingLi);
        pendingLi.innerHTML = `<input type="checkbox" name="check" id="" class="checkbox" />
                            <a href="./item_info.html" class="link link-dark">${item.amount} ${item.item}</a>`;
        const checkbox = pendingLi.firstElementChild;
        /////////MOVE FUNC////////////////////
        checkbox.addEventListener("change", () => {
          item.inCart = true;
          localStorage.setItem("itemArray", JSON.stringify(itemArray));
          location.reload();
        });
        // return pendingLi;
      } else {
        let cartLi = document.createElement("li");
        cartUl.appendChild(cartLi);
        cartLi.innerHTML = `<a href="./item_info.html" class="link link-dark">${item.amount} ${item.item}</a>`;
      }
    }
    id++;
  });
};

export { addToArrayFromInput, addLiFromLocalStorage, itemArray };
