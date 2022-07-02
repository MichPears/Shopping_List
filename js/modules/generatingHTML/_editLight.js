const body = document.querySelector(".body");

const loadEditPage = (editedItem) => {
  body.innerHTML = `    <div class="header-container">
  <div class="header mw-6">
    <h1 class="logo">Shopping List</h1>
    <button class="day-night-btn">
      <span class="material-symbols-outlined"> light_mode </span>
    </button>
  </div>
</div>
<div class="mw-6">
  <div class="edit-container px-1">
    <h2 class="edit-subtitle">${editedItem.amount} ${editedItem.item}</h2>
    <form action="" class="edit-form">
      <label for="item-edit" class="label">Edit Item:</label>
      <div class="input-container">
        <input
          type="number"
          min="1"
          class="text-input amount-input"
          placeholder="#"
          value="${editedItem.amount}"
        />
        <input
          type="text"
          name="edit-item-input"
          class="text-input edit-item-input"
          placeholder="I need to buy..."
          value="${editedItem.item}"
        />
      </div>
      <div class="input-save-container">
        <textarea
          name="item-edit"
          class="edit-input"
          placeholder="Item Info"
        >${editedItem.info}</textarea>
        <button type="submit" class="btn mx-1">Save</button>
      </div>
    </form>
    <div class="bottom-btns">
      <button class="item-delete-btn btn">Delete</button>
      <button class="item-cancel-btn btn">Cancel</button>
    </div>
  </div>
  <div class="delete-confirmation item-confirm hidden">
    <h2 class="confirm-subtitle">Are you sure?</h2>
    <p class="link">${editedItem.amount} ${editedItem.item} will be permanetly deleted from your list</p>
    <div class="btn-container">
      <button class="delete-btn"><span class="delete-icon material-symbols-outlined">
      check
      </span></button>
      <button class="cancel-confirm-btn"><span class="cancel-icon material-symbols-outlined">
      close
      </span></button>
    </div>
  </div>
</div>`;
};

export default loadEditPage;
