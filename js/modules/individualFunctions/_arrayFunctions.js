let itemArray = JSON.parse(localStorage.getItem("itemArray")) || [];

itemArray.sort((a, b) => b.id - a.id);

const addToArrayFromInput = (addAmountInput, addItemInput) => {
  itemArray.push({
    item: addItemInput.value,
    amount: addAmountInput.value,
    id: itemArray[0] === undefined ? 0 : itemArray[0].id + 1,
    inCart: false,
    info: "",
  });
  localStorage.setItem("itemArray", JSON.stringify(itemArray));
};

const moveToCart = (item) => {
  item.inCart = true;
  localStorage.setItem("itemArray", JSON.stringify(itemArray));
  location.reload();
};

const deleteItem = (itemArray, editedItem) => {
  itemArray = itemArray.filter((item) => item.id !== editedItem.id);
  localStorage.setItem("itemArray", JSON.stringify(itemArray));
};

const editItem = (
  itemArray,
  editedItem,
  editAmountInput,
  editItemInput,
  editInfoInput
) => {
  editedItem.amount = editAmountInput.value;
  editedItem.item = editItemInput.value;
  editedItem.info = editInfoInput.value;

  itemArray = itemArray.filter((item) => item.id !== editedItem.id);

  itemArray.push(editedItem);

  localStorage.setItem("itemArray", JSON.stringify(itemArray));
  window.location.href = "../Shopping_List/index.html";
};

const inputValidation = (addItemInput, addAmountInput) => {
  if (addItemInput.value === "" || addAmountInput.value === "") {
    return false;
  } else {
    return true;
  }
};

const inputEditValidation = (editItemInput, editAmountInput) => {
  if (editItemInput.value === "" || editAmountInput.value === "") {
    return false;
  } else {
    return true;
  }
};

export {
  moveToCart,
  addToArrayFromInput,
  itemArray,
  deleteItem,
  inputValidation,
  inputEditValidation,
  editItem,
};
