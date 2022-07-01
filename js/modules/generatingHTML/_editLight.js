const body = document.querySelector(".body");

const loadEditPage = (editedItem) => {
  body.innerHTML = `    <div class="header-container py-2">
  <div class="header mw-6">
    <h1 class="logo">Shopping List</h1>
    <button class="day-night-btn">
      <span class="material-symbols-outlined"> light_mode </span>
    </button>
  </div>
</div>
<div class="mw-6">
  <div class="edit-container px-1">
    <h2 class="edit-subtitle my-3">${editedItem.amount} ${editedItem.item}</h2>
    <form action="" class="edit-form">
      <label for="item-edit" class="label">Edit Item:</label>
      <div class="input-container">
      <input
        type="number"
        min="1"
        class="text-input amount-input"
        value="${editedItem.amount}"
      />
      <input
        type="text"
        name="edit-item-input"
        class="text-input edit-item-input"
        value="${editedItem.item}"
      />         
      </div>
      <div class="input-save-container py-2">
        <textarea
          name="item-edit"
          cols="50"
          rows="3"
          class="edit-input"
          placeholder="Item Info"
          value="${editedItem.info}"
        ></textarea>
        <button type="submit" class="btn mx-1">Save</button>
      </div>
    </form>
    <div class="bottom-btns">
      <button class="item-delete-btn btn btn-2">Delete</button>
      <button class="item-cancel-btn btn btn-2">Cancel</button>
    </div>
  </div>
</div>`;
};

export default loadEditPage;
