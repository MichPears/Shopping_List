const body = document.querySelector(".body");

const loadEditPageDark = (editedItem) => {
  body.classList.add("body-dark");
  body.innerHTML = `<div class="header-container header-container-dark py-2">
  <div class="header mw-6">
    <h1 class="logo logo-dark">Shopping List</h1>
    <button class="day-night-btn day-night-btn-dark">
      <span class="material-symbols-outlined"> dark_mode </span>
    </button>
  </div>
</div>
<div class="mw-6">
  <div class="edit-container">
    <h2 class="edit-subtitle edit-subtitle-dark my-3">${editedItem.amount} ${editedItem.item}</h2>
    <form action="" class="edit-form">
      <label for="item-edit" class="label label-dark">Edit Item:</label>
      <input
        type="number"
        min="1"
        class="text-input amount-input text-input-dark"
        placeholder="${editedItem.amount}"
      />
      <input
        type="text"
        name="edit-item-input"
        class="text-input edit-item-input text-input-dark"
        placeholder="${editedItem.item}"
      />
      <div class="input-save-container py-2">
        <textarea
          name="item-edit"
          cols="50"
          rows="3"
          class="edit-input edit-input-dark"
          placeholder="Item Info"
          value="${editedItem.info}"
        ></textarea>
        <button type="submit" class="btn mx-1 btn-dark">Save</button>
      </div>
    </form>
    <div class="bottom-btns">
      <button class="item-delete-btn btn btn-2 btn-dark">Delete</button>
      <button class="item-cancel-btn btn btn-2 btn-dark">Cancel</button>
    </div>
  </div>
</div>`;
};

export default loadEditPageDark;
