const body = document.querySelector(".body");

const loadPage = () => {
  body.innerHTML = `    <div class="header-container">
  <div class="header mw-6">
    <h1 class="logo">Shopping List</h1>
    <button class="day-night-btn">
      <span class="material-symbols-outlined"> light_mode </span>
    </button>
  </div>
</div>
<div class="mw-6">
  <div class="form-container">
    <form action="" class="shopping-form">
      <label for="new-item-input" class="label">Add New:</label>
      <div class="input-container">
        <input
          type="number"
          min="1"
          class="text-input amount-input"
          placeholder="#"
        />
        <input
          type="text"
          name="new-item-input"
          class="text-input new-item-input"
          placeholder="I need to buy..."
        />
      </div>
      <input type="submit" class="btn" value="Add" />
    </form>
  </div>
  <div class="lists-container px-1">
    <div class="pending-container my-1">
      <h2 class="subtitle">Pending Items</h2>
      <ul class="pending-ul"></ul>
    </div>
    <div class="in-cart-container my-1">
      <h2 class="subtitle">Shopping Cart</h2>
      <ul class="shopping-cart-ul"></ul>
    </div>
  </div>
  <button class="reset-btn btn">Delete All</button>
  <div class="delete-confirmation non-empty-confirm hidden">
    <h2 class="confirm-subtitle">Are you sure?</h2>
    <p class="link">All items will be permanetly deleted from your list</p>
    <div class="btn-container">
      <button class="delete-btn btn">Delete</button>
      <button class="cancel-confirm-btn btn">Cancel</button>
    </div>
  </div>
  <div class="delete-confirmation empty-confirm hidden">
    <h2 class="confirm-subtitle">Your list is empty</h2>
    <p class="link">There are no items in your list</p>
    <div class="btn-container">
      <button class="cancel-confirm-btn btn">Ok</button>
    </div>
  </div>
</div>
`;
};

export default loadPage;
