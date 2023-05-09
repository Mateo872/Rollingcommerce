import Product from "./addProduct.js";
import { dataValidate } from "./helpers.js";

const btnAdd = document.getElementById("btnAdd");

const title = document.getElementById("title");
const code = document.getElementById("code");
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

btnAdd.addEventListener("click", showModalProduct);
form.addEventListener("submit", loadProduct);

let listProducts = localStorage.getItem("listProducts");

if (!listProducts) {
    listProducts = [];
} else {
    listProducts = JSON.parse(listProducts).map(
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

console.log(listProducts);

initialLoad();

function initialLoad() {
    if (listProducts.length > 0) {
        listProducts.map((product, index) => createCard(product, index));
    }
}

function createCard(product, index) {
    let productCardData = document.getElementById("productCard");
    console.log(productCardData);
    productCardData.innerHTML += `<div class="card col-lg-3 col-md-5 m-2 img-fluid rounded-3 border-3 shadow">
  <div class="col-12 g-0">
  <div class="col position-relative">
      <img
          src="${product.image}"
          class="card-img-top"
          alt="producto"
      />
      <div class="position-absolute top-0 end-0">
          <div class="m-2">
              <i
                  class="bi bi-trash3-fill fs-5" onclick = "deleteProduct('${
                      product.code
                  }')"
                  style="color: #ee332c"
              ></i>
              <i
                  class="bi bi-pencil-fill fs-5 ms-2"
                  style="color: #ee332c"
              ></i>
          </div>
      </div>
  </div>
  <div class="col my-3">
      <div class="card-body">
          <h5 class="card-title fs-2">
              ${product.title}
          </h5>
          <p class="card-text">
              ${product.description}
          </p>

          <p class="card-text fw-bold">
              <small class="fs-4">$${product.price}</small>
          </p>
          <p class="card-text">
              <small># ${index + 1}</small>
          </p>
      </div>
  </div>
</div>
</div> 
  `;
}

function showModalProduct() {
    //abrir la ventana modal
    modalProduct.show();
    // console.log("aqui vamos a crear un Producto");
}

function loadProduct(e) {
    e.preventDefault();

    console.log("creando el producto");
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
        if (data.length === 0) {
            let newProduct = new Product(
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
        }
        console.log(newProduct);

        listProducts.push(newProduct);

        saveLocalstorage();

        cleanProductForm();

        modalProduct.hide();
        let productIndex = listProducts.length - 1;
        createCard(newProduct, productIndex);

        Swal.fire(
            "Se agregó un nuevo producto",
            "El producto ingresado fue creado correctamente",
            "success"
        );

        // saveLS();
    } else {
        msjForm.className = "alert alert-danger mt-3";
        msjForm.innerHTML = data;
    }
}

function saveLocalstorage() {
    localStorage.setItem("listProducts", JSON.stringify(listProducts));
}
function cleanProductForm() {
    form.reset();
}

// function deleteProduct(){

// }

window.deleteProduct = (code) => {
    Swal.fire({
        title: "Está seguro que desea borrar el producto?",
        text: "No se puede revertir este proceso",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            console.log(code);
            console.log("aqui borro el producto");
            let positionProduct = listProducts.findIndex(
                (product) => product.code === code
            );
            console.log(positionProduct);
            listProducts.splice(positionProduct, 1);
            saveLocalstorage();
            let productCardData = document.getElementById("productCard");
            // console.log(productCardData.children[positionProduct]);
            productCardData.removeChild(productCardData.children[positionProduct]);

            Swal.fire(
                "Producto eliminado",
                "El producto selecionado fue eliminado correctamente.",
                "success"
            );
        }
    });
};
