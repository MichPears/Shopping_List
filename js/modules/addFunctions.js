const addItemInput = document.querySelector(".new-item-input");
const addAmountInput = document.querySelector(".amount-input");
const pendingUl = document.querySelector(".pending-ul");

let pendingArray = JSON.parse(localStorage.getItem("pendingArray")) || [];

const addToArrayFromInput = () => {
  pendingArray.push({
    Item: addItemInput.value,
    Amount: addAmountInput.value,
    id,
  });
  localStorage.setItem("pendingArray", JSON.stringify(pendingArray));
};
let id = 0;

const addLiFromLocalStorage = () => {
  pendingArray.forEach((pendingItem) => {
    const pendingLi = document.createElement("li");
    pendingUl.appendChild(pendingLi);
    pendingLi.innerHTML = `<input type="checkbox" name="check" id="" class="checkbox" />
                            <a href="./item_info.html" class="link">${pendingItem.Amount} ${pendingItem.Item}</a>`;
    id++;
  });
};

export { addToArrayFromInput, addLiFromLocalStorage, pendingArray };
