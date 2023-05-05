import Product from "./addProduct.js";

function createProduct() {
  let nuevaPeli = new Product(
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
    let newProduct = new Pelicula(
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

    listProducts.push(nuevaPeli);

    saveLS();
  } else {
  }
}

function saveLS() {
  localStorage.setItem("listProducts", JSON.stringify(listProducts));
}
