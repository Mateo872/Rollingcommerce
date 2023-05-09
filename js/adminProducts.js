import Product from "./addProduct.js";
import { dataValidate } from "./helpers.js";

const btnAdd = document.getElementById("btnAdd");

const title = document.getElementById("title");
const image = document.getElementById("image");
const imagePreviewOne = document.getElementById("image1");
const imagePreviewTwo = document.getElementById("image2");
const imagePreviewThree = document.getElementById("image3");
const price = document.getElementById("price");
const description = document.getElementById("description");
const characteristics = document.getElementById("characteristics");
const stock = document.getElementById("stock");
const category = document.getElementById("category");
const form = document.getElementById("form");
const msjForm = document.getElementById("msjForm");
const modalProduct = new bootstrap.Modal(document.querySelector("#modalAdd"));

let productStatus = true;

btnAdd.addEventListener("click", showModalProduct);
form.addEventListener("submit", loadProduct);

let products = localStorage.getItem("listProducts");

if (!products) {
  products = [];
} else {
  products = JSON.parse(products).map(
    (product) =>
      new Product(
        product.code,
        product.title,
        product.description,
        product.image,
        product.price,
        product.category,
        product.characteristics,
        product.imagePreviewOne,
        product.imagePreviewTwo,
        product.imagePreviewThree,
        product.stock
      )
  );
}

initialLoad();

function initialLoad() {
  if (products.length > 0) {
    products.map((product, index) => createCard(product, index));
  }
}

function createCard(product, index) {
  let productCardData = document.getElementById("productCard");

  productCardData.innerHTML += `<div class="mt-4 cardProduct d-flex justify-content-between flex-wrap" data-code="${
    product.code
  }">
  <div class="container_card py-3">
  <div class="">
      <div class="d-flex justify-content-center">
      <img
          src="${product.image}"
          alt="${product.title}"
      />
      </div>
      <div class="position-absolute top-0 end-0">
          <div class="m-2">
              <i
                  class="bi bi-trash3-fill fs-5" onclick = "deleteProduct('${
                    product.code
                  }')"
                  style="color: #ee332c"
              ></i>
              <i
                  class="bi bi-pencil-fill fs-5 ms-2" onclick = "editProduct('${
                    product.code
                  }')"
                  style="color: #ee332c"
              ></i>
          </div>
      </div>
  </div>
  <div>
      <div class="product_feature">
          <h5 class="m-0  mb-1">
              ${product.title}
          </h5>
          <p class="m-0 fw-bold price mb-0">
             $${product.price}
          </p>
          <p class="m-0">
              <small># ${index + 1}</small>
          </p>
      </div>
  </div>
</div>
</div> 
  `;
}

function showModalProduct() {
  modalProduct.show();
}

function loadProduct(e) {
  e.preventDefault();

  if (!productStatus) {
    updateProduct();
  }

  let data = dataValidate(
    title.value,
    description.value,
    characteristics.value,
    image.value,
    imagePreviewOne.value,
    imagePreviewTwo.value,
    imagePreviewThree.value,
    category.value,
    price.value,
    stock.value
  );
  if (data.length === 0) {
    let newProduct = new Product(
      undefined,
      title.value,
      description.value,
      image.value,
      price.value,
      category.value,
      characteristics.value,
      imagePreviewOne.value,
      imagePreviewTwo.value,
      imagePreviewThree.value,
      stock.value
    );

    products.push(newProduct);

    saveLocalstorage();

    cleanProductForm();

    modalProduct.hide();
    let productIndex = products.length - 1;
    createCard(newProduct, productIndex);

    Swal.fire(
      "Se agregó un nuevo producto",
      "El producto ingresado fue creado correctamente",
      "success"
    );
  } else {
    msjForm.className = "alert alert-danger mt-3";
    msjForm.innerHTML = data;
  }
}

window.editProduct = (uniqueCode) => {
  const product = products.find((prod) => prod.code === uniqueCode);

  modalProduct.show();
  code.value = product.code;
  title.value = product.title;
  description.value = product.description;
  characteristics.value = product.characteristics;
  image.value = product.image;
  imagePreviewOne.value = product.imagePreviewOne;
  imagePreviewTwo.value = product.imagePreviewTwo;
  imagePreviewThree.value = product.imagePreviewThree;
  category.value = product.category;
  price.value = product.price;
  stock.value = product.stock;
  productStatus = false;
};

function updateProduct() {
  let positionProduct = products.findIndex((prod) => prod.code === code.value);
  products[positionProduct].title = title.value;
  products[positionProduct].description = description.value;
  products[positionProduct].characteristics = characteristics.value;
  products[positionProduct].image = image.value;
  products[positionProduct].imagePreviewOne = imagePreviewOne.value;
  products[positionProduct].imagePreviewTwo = imagePreviewTwo.value;
  products[positionProduct].imagePreviewThree = imagePreviewThree.value;
  products[positionProduct].category = category.value;
  products[positionProduct].price = price.value;
  products[positionProduct].stock = stock.value;
  saveLocalstorage();
  cleanProductForm();
  modalProduct.hide();
  Swal.fire(
    "Se editó un producto",
    "El producto seleccionado fue editado correctamente",
    "success"
  );
  const productCardData = document.getElementById("productCard");
  productCardData.innerHTML = "";

  products.forEach((product, index) => createCard(product, index));
}

function saveLocalstorage() {
  localStorage.setItem("listProducts", JSON.stringify(products));
}

function cleanProductForm() {
  form.reset();
}

window.deleteProduct = (code) => {
  swal
    .fire({
      title: "Está seguro que desea borrar el producto?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    })
    .then((result) => {
      if (result.isConfirmed) {
        let positionProduct = products.findIndex(
          (product) => product.code === code
        );
        products.splice(positionProduct, 1);
        saveLocalstorage();
        let productCardData = document.getElementById("productCard");
        productCardData.removeChild(productCardData.children[positionProduct]);

        Swal.fire(
          "Producto eliminado",
          "El producto selecionado fue eliminado correctamente.",
          "success"
        );
      }
    });
};
