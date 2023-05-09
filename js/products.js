const productsContainer = document.querySelector(".products"),
  textEmpty = document.querySelector(".text_empty");

const products = JSON.parse(localStorage.getItem("listProducts"));

function addProduct(product) {
  productsContainer.innerHTML = ``;

  if (product.length === 0) {
    textEmpty.classList.remove("d-none");
  } else {
    textEmpty.classList.add("d-none");
    product.map((product) => {
      const { image, title, price, id } = product;

      productsContainer.innerHTML += `
      <div class="product d-flex flex-column justify-content-between p-3">
            <i class="bi bi-heart"></i>
            <div class="product_image d-flex justify-content-center">
                <img src="${image}" alt="${title}" />
            </div>
            <div class="product_feature">
                <h5 class="mb-0 text-truncate">${title}</h5>
                <div class="product_feature-discount d-flex">
                <p class="price mb-0">$${price}</p>
                </div>
                <div class="product_detail d-flex justify-content-between align-items-center">
                <a href="../pages/detailProduct.html?id=${id}" class="mb-0">
                    Ver más
                </a>
                <i class="bi bi-cart"></i>
                </div>
            </div>
        </div>
        `;
    });
  }
}

const btnApply = document.querySelector("[data-apply]"),
  btnDelete = document.querySelector("[data-delete]");

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let filteredProducts = [];

btnApply.addEventListener("click", () => {
  filteredProducts = getFilteredProducts();
  addProduct(filteredProducts);

  if (checkboxesChecked() > 0) {
    btnDelete.disabled = false;
  }
});

btnDelete.addEventListener("click", () => {
  const allProducts = [...products];
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
  btnDelete.disabled = true;
  searchInput.value = "";
  addProduct(allProducts);
  updateAllProductsText();
});

const filterCategories = document.querySelectorAll(".filter_categories"),
  filterPrice = document.querySelectorAll(".filter_price"),
  filterSort = document.querySelectorAll(".filter_sort"),
  filterDiscount = document.querySelectorAll(".filter_discount");

function getFilteredProducts() {
  filteredProducts = [...products];

  const selectedCategories = Array.from(filterCategories)
    .filter((input) => input.querySelector("input").checked)
    .map((input) => input.querySelector("label").textContent);

  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }

  const selectedPrices = Array.from(filterPrice)
    .filter((input) => input.querySelector("input").checked)
    .map((input) => parseInt(input.querySelector("input").className));

  if (selectedPrices.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedPrices.some((price) => product.price <= price)
    );
  }

  const selectedSort = Array.from(filterSort).find(
    (input) => input.querySelector("input").checked
  );

  if (selectedSort) {
    const sortOption = selectedSort.querySelector("label").textContent;
    if (sortOption === "Menor precio") {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Mayor precio") {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }
  }

  const selectedDiscount = Array.from(filterDiscount).find(
    (input) => input.querySelector("input").checked
  );
  if (selectedDiscount) {
    const discountOption = selectedDiscount.querySelector("label").textContent;

    if (discountOption === "Sí") {
      filteredProducts = filteredProducts.filter(
        (product) => product.discount > 0
      );
    } else if (discountOption === "No") {
      filteredProducts = filteredProducts;
    }
  }

  return filteredProducts;
}

const searchInput = document.querySelector("[data-search]"),
  form = document.querySelector("[data-form]"),
  btnSearch = document.querySelector("[data-button]");

form.addEventListener("submit", (e) => e.preventDefault());

btnSearch.addEventListener("click", () => {
  searchProduct({ key: "Enter" });
});

searchInput.addEventListener("keyup", searchProduct);

function searchProduct(e) {
  if (searchInput.value === "" && checkboxesChecked() === 0) {
    addProduct(products);
  }

  if (e.key === "Enter") {
    const value = searchInput.value;

    if (checkboxesChecked() > 0 && filteredProducts.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
    } else {
      filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
    }

    addProduct(filteredProducts);
  }
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateAllProductsText);
});

function updateAllProductsText() {
  const selectedCategories = Array.from(filterCategories)
    .filter((input) => input.querySelector("input").checked)
    .map((input) => input.querySelector("label").textContent);

  const allProductsText = document.querySelector("#allProducts");

  if (selectedCategories.length > 0) {
    allProductsText.textContent = selectedCategories.join(", ");
  } else {
    allProductsText.textContent = "Todos los productos";
  }
}

function checkboxesChecked() {
  let count = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      count++;
    }
  });
  return count;
}
