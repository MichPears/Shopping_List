const body = document.querySelector(".body");

const loadEditPageDark = (editedItem) => {
  body.classList.add("body-dark");
  body.innerHTML = `    <div class="header-container header-container-dark">
  <div class="header mw-6">
    <h1 class="logo logo-dark">Shopping List</h1>
    <button class="day-night-btn day-night-btn-dark">
      <span class="material-symbols-outlined"> dark_mode </span>
    </button>
  </div>
</div>
<div class="mw-6">
  <div class="edit-container px-1">
    <h2 class="edit-subtitle edit-subtitle-dark">${editedItem.amount} ${editedItem.item}</h2>
    <form action="" class="edit-form">
      <label for="item-edit" class="label label-dark">Edit Item:</label>
      <div class="input-container">
        <input
          type="number"
          min="1"
          class="text-input text-input-dark amount-input"
          placeholder="#"
          value="${editedItem.amount}"
        />
        <input
          type="text"
          name="edit-item-input"
          class="text-input edit-item-input text-input-dark"
          placeholder="I need to buy..."
          value="${editedItem.item}"
        />
      </div>
      <div class="input-save-container">
        <textarea
          name="item-edit"
          class="edit-input edit-input-dark"
          placeholder="Item Info"
        >${editedItem.info}</textarea>
        <button type="submit" class="btn btn-dark mx-1">Save</button>
      </div>
    </form>
    <div class="bottom-btns">
      <button class="item-delete-btn btn btn-dark">Delete</button>
      <button class="item-cancel-btn btn btn-dark">Cancel</button>
    </div>
  </div>
  <div class="delete-confirmation delete-confirmation-dark item-confirm hidden">
    <h2 class="confirm-subtitle confirm-subtitle-dark">Are you sure?</h2>
    <p class="link link-dark">${editedItem.amount} ${editedItem.item} will be permanetly deleted from your list</p>
    <div class="btn-container">
      <button class="delete-btn"><span class="delete-icon delete-icon-dark material-symbols-outlined">
      check
      </span></button>
      <button class="cancel-confirm-btn"><span class="cancel-icon cancel-icon-dark material-symbols-outlined">
      close
      </span></button>
    </div>
  </div>
</div>`;
};

export default loadEditPageDark;
