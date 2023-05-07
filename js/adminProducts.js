import Product from "./addProduct.js";
import { dataValidate } from "./helpers.js";


const btnAdd = document.getElementById('btnAdd');

const title = document.getElementById('title');
const code = document.getElementById('code');
const image = document.getElementById('image');
const imagePreviewOne = document.getElementById('image1');
const imagePreviewTwo = document.getElementById('image2');
const imagePreviewThree = document.getElementById('image3');
const price = document.getElementById('price');
const description = document.getElementById('description');
const characteristics = document.getElementById('characteristics');
const stock = document.getElementById('stock');
const category = document.getElementById('category')
const form = document.getElementById('form');
const msjForm = document.getElementById('msjForm');

const modalProduct = new bootstrap.Modal(document.querySelector('#modalAdd'));

btnAdd.addEventListener('click', showModalProduct);
form.addEventListener('submit', loadProduct);

function showModalProduct(){
  //abrir la ventana modal
  modalProduct.show();
  console.log('aqui vamos a crear una peli')
}

function createProduct() {
  let newProduct = new Product(
    "Astro A30",
    "Los mejores auriculares",
    "urlImage",
    499,
    "Auriculares",
    "La batería dura 27 h.",
    "image1",
    "image2",
    "image3"
  );
}

function loadProduct(e) {
  e.preventDefault();

  console.log('creando la producto')
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

    // listProducts.push(newProduct);
    modalProduct.hide();

      // saveLS();
  } else {
    msjForm.className = 'alert alert-danger mt-3';
    msjForm.innerHTML = data;
  }
}

// function saveLS() {
//   localStorage.setItem("listProducts", JSON.stringify(listProducts));
// }
