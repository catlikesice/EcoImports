const cart = {
  tea: 0,
  socks: 0,
  wood: 0,
  chaga: 0,
};

function updateCartDisplay() {
  document.getElementById("qty-tea").textContent = cart.tea;
  document.getElementById("qty-socks").textContent = cart.socks;
  document.getElementById("qty-wood").textContent = cart.wood;
  document.getElementById("qty-chaga").textContent = cart.chaga;

  const total = Object.values(cart).reduce((sum, val) => sum + val, 0);
  document.getElementById("cart-count").textContent = total;
  document.getElementById("total-items").textContent = total;
}

function addToCart(item) {
  cart[item]++;
  updateCartDisplay();
}

function removeFromCart(item) {
  if (cart[item] > 0) {
    cart[item]--;
    updateCartDisplay();
  }
}

document.addEventListener("DOMContentLoaded", updateCartDisplay);
