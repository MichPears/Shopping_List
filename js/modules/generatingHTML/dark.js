const body = document.querySelector(".body");

const loadPageDark = () => {
  body.classList.add("body-dark");
  body.innerHTML = `<div class="header-container header-container-dark py-2">
  <div class="header mw-6">
    <h1 class="logo logo-dark">Shopping List</h1>
    <button class="day-night-btn">
        <span class="material-symbols-outlined"> dark_mode </span>
    </button>
  </div>
</div>
<div class="mw-6">
  <div class="form-container">
    <form action="" class="shopping-form">
      <label for="new-item-input" class="label label-dark" value="1">Add New:</label>
      <input
        type="number"
        min="1"
        class="text-input amount-input text-input-dark"
        placeholder="#"
      />
      <input
        type="text"
        name="new-item-input"
        class="text-input new-item-input text-input-dark"
        placeholder="I need to buy..."
      />
      <input type="submit" class="btn btn-dark" value="Add" />
    </form>
  </div>
  <div class="lists-container px-1">
    <div class="pending-container my-1">
      <h2 class="py-1 subtitle subtitle-dark">Pending Items</h2>
      <ul class="pending-ul"></ul>
    </div>
    <div class="in-cart-container my-1">
      <h2 class="py-1 subtitle subtitle-dark">Shopping Cart</h2>
      <ul class="shopping-cart-ul">
        <li class="cart-li">
          <a href="./item_info.html" class="link link-dark">not bananas</a>
        </li>
      </ul>
    </div>
  </div>
</div>
<button class="reset-btn">ERASE LOCAL STORAGE AND RELOAD</button>
<button class="test-btn">TEST</button>`;
};

export { loadPageDark };
