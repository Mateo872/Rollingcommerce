import { dataValidate } from "./helpers";

let listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];

listProducts.map((product) => {
    createCard(product);
});

function createCard(product) {
    let productCardData = document.getElementById("cards");
    productCardData.innerHTML += `<div class="product d-flex flex-column justify-content-between p-3">
  <i class="bi bi-heart"></i>
  <div class="product_image d-flex justify-content-center">
    <img src="${product.image}" />
  </div>
  <div class="product_feature">
    <h5 class="mb-0">${product.title}</h5>
    <div class="product_feature-discount d-flex">
      <p class="price mb-0">$${product.price}</p>
    </div>
    <div
      class="product_detail d-flex justify-content-between align-items-center"
    >
      <button class="btn btn-link text-decoration-none text-danger fw-bold mb-0" onclick="detailProduct('${product.code}')">Ver más</button>
      <i class="bi bi-cart"></i>
    </div>
  </div>
</div>
`;
}

// window.detailProduct = (code) =>{
//   // console.log(code);
//   // console.log(window.location)
//   // console.log(window.location.origin + '/pages/detailProduct.html?code='+code)
//   window.location.href = window.location.origin + '/pages/detailProduct.html?code='+code
// }
