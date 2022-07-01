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

const nothingPending = (pendingUl, darkTheme) => {
  let noPendingLi = document.createElement("li");
  pendingUl.appendChild(noPendingLi);
  if (!darkTheme) {
    noPendingLi.innerHTML = `<p class="no-items">No pending items</p>`;
  } else {
    noPendingLi.innerHTML = `<p class="no-items no-items-dark">No pending items</p>`;
  }
};

const nothingInCart = (cartUl, darkTheme) => {
  let noInCart = document.createElement("li");
  cartUl.appendChild(noInCart);
  if (!darkTheme) {
    noInCart.innerHTML = `<p class="no-items">Nothing in shopping cart</p>`;
  } else {
    noInCart.innerHTML = `<p class="no-items no-items-dark">Nothing in shopping cart</p>`;
  }
};

export { addPending, addInCart, nothingPending, nothingInCart };
