const products = [
  { id: 1, name: "Wireless Headphones", price: 2500, category: "electronics" },
  { id: 2, name: "Cotton T-Shirt", price: 500, category: "clothing" },
  { id: 3, name: "Smartphone Pro", price: 75000, category: "electronics" },
  { id: 4, name: "Denim Jeans", price: 1200, category: "clothing" },
  { id: 5, name: "Gaming Laptop", price: 120000, category: "electronics" },
  { id: 6, name: "Coffee Maker", price: 3000, category: "home" },
  { id: 7, name: "Winter Jacket", price: 2200, category: "clothing" },
  { id: 8, name: "Desk Lamp", price: 800, category: "home" },
  { id: 9, name: "Bluetooth Speaker", price: 1500, category: "electronics" },
  { id: 10, name: "Running Shoes", price: 2800, category: "clothing" },
];

const container = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceSort = document.getElementById("priceSort");
const toggleViewBtn = document.getElementById("toggleViewBtn");

let isGridView = true;

function renderProducts(productsToRender) {
  container.innerHTML = "";

  if (productsToRender.length === 0) {
    container.innerHTML =
      '<div class="no-results">No products found matching your criteria.</div>';
    return;
  }

  const htmlString = productsToRender
    .map(
      (product) => `
        <div class="product-card">
          <h3>${product.name}</h3>
          <div class="category">${product.category}</div>
          <div class="price">₹${product.price.toLocaleString("en-IN")}</div>
        </div>
      `,
    )
    .join("");

  container.innerHTML = htmlString;
}

function updateDisplay() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const sortDirection = priceSort.value;

  const processedProducts = products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm);
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortDirection === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  renderProducts(processedProducts);
}

function toggleView() {
  isGridView = !isGridView;

  if (isGridView) {
    container.classList.add("grid-view");
    container.classList.remove("list-view");
  } else {
    container.classList.add("list-view");
    container.classList.remove("grid-view");
  }
}

searchInput.addEventListener("input", updateDisplay);
categoryFilter.addEventListener("change", updateDisplay);
priceSort.addEventListener("change", updateDisplay);
toggleViewBtn.addEventListener("click", toggleView);

updateDisplay();
