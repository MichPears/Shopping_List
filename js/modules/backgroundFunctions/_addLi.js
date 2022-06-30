const addPending = (pendingUl, darkTheme, item) => {
  let pendingLi = document.createElement("li");
  pendingUl.appendChild(pendingLi);
  if (!darkTheme) {
    pendingLi.innerHTML = `<input type="checkbox" name="check" id="" class="checkbox" />
                              <a href="./edit.html" class="link">${item.amount} ${item.item}</a>`;
  } else {
    pendingLi.innerHTML = `<input type="checkbox" name="check" id="" class="checkbox" />
                              <a href="./edit.html" class="link link-dark">${item.amount} ${item.item}</a>`;
  }
  return pendingLi;
};

const addInCart = (cartUl, darkTheme, item) => {
  let cartLi = document.createElement("li");
  cartUl.appendChild(cartLi);
  if (!darkTheme) {
    cartLi.innerHTML = `<a href="./edit.html" class="link">${item.amount} ${item.item}</a>`;
  } else {
    cartLi.innerHTML = `<a href="./edit.html" class="link link-dark">${item.amount} ${item.item}</a>`;
  }
  return cartLi;
};

export { addPending, addInCart };
