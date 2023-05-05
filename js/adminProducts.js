import Product from "./addProduct.js";

let listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];

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
    image.value,
    price.value,
    category.value,
    characteristics.value,
    imagePreviewOne.value,
    imagePreviewTwo.value,
    imagePreviewThree.value
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
      imagePreviewThree.value
    );

    listProducts.push(newProduct);

    saveLS();
  } else {
  }
}

function saveLS() {
  localStorage.setItem("listProducts", JSON.stringify(listProducts));
}
