import Product from "./addProduct.js";


const btnAdd = document.getElementById('btnAdd');


const modalProduct = new bootstrap.Modal(document.querySelector('#modalAdd'));

btnAdd.addEventListener('click', showModalProduct);
// form.addEventListener('submit', loadProduct);

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

  let data = dataValidate(
    title.value,
    description.value,
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

    listProducts.push(newProduct);

    saveLS();
  } else {
    msjFormulario.className = 'alert alert-danger mt-3';
    msjFormulario.innerHTML = data;
  }
}

function saveLS() {
  localStorage.setItem("listProducts", JSON.stringify(listProducts));
}
