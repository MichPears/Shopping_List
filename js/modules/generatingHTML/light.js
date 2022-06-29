const body = document.querySelector(".body");

const loadPage = () => {
  body.innerHTML = `<div class="header-container py-2">
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
      <label for="new-item-input" class="label" value="1">Add New:</label>
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
      <input type="submit" class="btn" value="Add" />
    </form>
  </div>
  <div class="lists-container px-1">
    <div class="pending-container my-1">
      <h2 class="py-1 subtitle">Pending Items</h2>
      <ul class="pending-ul"></ul>
    </div>
    <div class="in-cart-container my-1">
      <h2 class="py-1 subtitle">Shopping Cart</h2>
      <ul class="shopping-cart-ul">
        <li class="cart-li">
          <a href="./item_info.html" class="link">not bananas</a>
        </li>
      </ul>
    </div>
  </div>
</div>
<button class="reset-btn">ERASE LOCAL STORAGE AND RELOAD</button>
<button class="test-btn">TEST</button>`;
};

export default loadPage;
