const products = JSON.parse(localStorage.getItem("listProducts"));

const id = location.search.split("?id=")[1];

const productsContainer = document.querySelector("[data-products-container]"),
  productsSimilar = document.querySelector("[data-products-similar]"),
  productsCharacteristics = document.querySelector(
    "[data-products-characteristics]"
  );

const productFiltered = products.filter((product) => product.code === id);

productFiltered.map((product) => {
  const {
    image,
    imagePreviewOne,
    imagePreviewTwo,
    imagePreviewThree,
    title,
    price,
    description,
    characteristics,
    stock,
    category,
  } = product;

  productsContainer.innerHTML = `
  <div class="row g-0">
<div class="col-md-6 col-lg-6 mt-3">
  <div class="mx-3">
    <img
      src="${image}"
      class="img-fluid rounded-3 border-3 shadow"
      alt="auricular"
    />
  </div>
  <div class="me-md-3 w-100">
    <div class="d-flex my-3 justify-content-between">
      <div class="col-md-4">
        <button class="btn border-0">
          <img
            src="${imagePreviewOne}"
            class="img-fluid rounded-3 border-3 shadow image_detail"
            alt="${title}"
          />
        </button>
      </div>
      <div class="col-md-4">
        <button class="btn border-0">
          <img
            src="${imagePreviewOne}"
            class="img-fluid rounded-3 border-3 shadow image_detail"
            alt="${title}"
          />
        </button>
      </div>
      <div class="col-md-4">
        <button class="btn border-0">
          <img
            src="${imagePreviewThree}"
            class="img-fluid rounded-3 border-3 shadow image_detail"
            alt="${title}"
          />
        </button>
      </div>
    </div>
  </div>
</div>
<div class="col-md-6 col-lg-6">
  <div class="card-body mx-3">
    <p class="d-flex justify-content-end me-3">
    </p>
    <h4>
     ${title}
    </h4>
    <p class="display-6">$${price}</p>
    <p class="">${category}</p>
    <p class="">Stock - ${stock}</p>
    <button class="btn btn-danger mt1 mb-3">
      Agregar al carrito
    </button>
    <p>
      ${description}
    </p>
  </div>
</div>
</div>
  `;
  const characteristicsArray = characteristics.split("\n");

  const listCharacteristics = characteristicsArray
    .map((carac) => carac.trim())
    .filter((carac) => carac !== "");

  const items = listCharacteristics
    .map((carac) => `<li>${carac}</li>`)
    .join("");

  productsCharacteristics.innerHTML = `
  <h4>Características de ${title}</h4>
  <ul>
    ${items}
  </ul>
`;
});

let productCategory = [];

productFiltered.forEach((product) => {
  productCategory = product.category;
});

let dataCategory = [];

dataCategory = products.filter(
  (product) => product.category === productCategory
);

dataCategory.map((product) => {
  const { image, title, price, id } = product;

  productsSimilar.innerHTML += `
    <div class="card card-similar-product shadow p-3 rounded d-flex flex-column justify-content-between ">
      <img src="${image}" class="img-fluid" />
      <h6 class="pt-2 mb-0 text-truncate">${title}</h6>
      <p class="fw-semibold pb-1 mb-0">$${price}</p>
      <a href="../pages/detailProduct.html?id=${id}" class="mb-0 text-danger text-decoration-none fw-semibold">
        Ver más
      </a>
      <i class="bi bi-cart"></i>
      </div>
  `;
});
