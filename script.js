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

// -------------------- Add Cookie-Related Code Below --------------------

// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convert days to milliseconds
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Function to get a cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

// Function to delete a cookie
function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

// Save shopping cart to cookies
function saveCartToCookies(cart) {
  const cartString = JSON.stringify(cart); // Convert cart object to a string
  setCookie("cart", cartString, 7); // Save the cart cookie with a 7-day expiration
}

// Load shopping cart from cookies
function loadCartFromCookies() {
  const cartCookie = getCookie("cart");
  return cartCookie ? JSON.parse(cartCookie) : { tea: 0, socks: 0, wood: 0, chaga: 0 };
}

// Integrate cookie functionality with the existing cart
const cart = loadCartFromCookies(); // Load the cart from cookies or initialize a default cart
updateCartDisplay(); // Ensure the cart display is updated

// Update addToCart to save cart to cookies
function addToCart(item) {
  cart[item]++;
  updateCartDisplay();
  saveCartToCookies(cart); // Save the updated cart to cookies
}

// Update removeFromCart to save cart to cookies
function removeFromCart(item) {
  if (cart[item] > 0) {
    cart[item]--;
    updateCartDisplay();
    saveCartToCookies(cart); // Save the updated cart to cookies
  }
}
