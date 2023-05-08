import Product from "./addProduct.js";

let listProducts = localStorage.getItem('listProducts');

if(!listProducts){
  listProducts = [];
}else{
  listProducts = JSON.parse(listProducts).map((product)=> new Product(
    product.title, product.description, product.image, product.price, product.category, product.characteristics, product.imagePreviewOne, product.imagePreviewTwo, product.imagePreviewThree, product.stock
  ))
}

console.log(listProducts);

initialLoad();

function initialLoad(){
  if(listProducts.length > 0){
    listProducts.map((product) => createCard(product))
  }
}

function createCard(product){
  let productCardData = document.getElementById('cards')
  console.log(productCardData);
  productCardData.innerHTML += `<div class="product d-flex flex-column justify-content-between p-3">
  <i class="bi bi-tag-fill"></i>
  <i class="bi bi-heart"></i>
  <div class="product_image d-flex justify-content-center">
    <img src="${product.image}" />
  </div>
  <div class="product_feature">
    <h5 class="mb-0">${product.title}</h5>
    <div class="product_feature-discount d-flex">
      <p class="price mb-0">$${product.price}</p>
      <p class="discount mb-0">$699</p>
    </div>
    <div
      class="product_detail d-flex justify-content-between align-items-center"
    >
      <a href="#" class="mb-0">Ver más</a>
      <i class="bi bi-cart"></i>
    </div>
  </div>
</div>
`
}