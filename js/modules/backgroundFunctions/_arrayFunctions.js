let itemArray = JSON.parse(localStorage.getItem("itemArray")) || [];

itemArray.sort((a, b) => b.id - a.id);

//////////////////////ADD NEW ITEM FROM INPUT//////////////////////////
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

/////////////////////////////MOVE TO CART//////////////////////////////
const moveToCart = (item) => {
  item.inCart = true;
  localStorage.setItem("itemArray", JSON.stringify(itemArray));
  location.reload();
};

////////////////////////////////DELETE/////////////////////////////////
const deleteItem = (itemArray, editedItem) => {
  itemArray = itemArray.filter((item) => item.id !== editedItem.id);
  localStorage.setItem("itemArray", JSON.stringify(itemArray));
};

////////////////////////////////EDIT////////////////////////////////////
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
};

//////////////////////////////VALIDATION////////////////////////////////
const inputValidation = (itemInput, amountInput) => {
  if (itemInput.value === "" || amountInput.value === "") {
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
  editItem,
};
