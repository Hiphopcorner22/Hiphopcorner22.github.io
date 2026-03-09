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
  {
    id: "Drfone ",
    brand: "Drfone",
    desc: "Drfone unlocker tool license",
    image:
      "data:image/jpeg;base64,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",
    currency: "USD",
    denominations: [50, 100, 500, 1000, 2000],
    priceMap: {
      50: 25,
      100: 50,
      500: 200,
      1000: 350,
      2000: 500,
    },
    inStock: true,
  },
{
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

