import Product from "./addProduct.js";

let createForm = document.getElementById("form");
let title = document.getElementById("nombre");
let image = document.getElementById("imagenProducto");
let price = document.getElementById("precio");
let category = document.getElementById("categoria");
let description = document.getElementById("descripcion");

/* listas de product */
let listProducts = [];

/* listener */
createForm.addEventListener("submit", createProduct);

function createProduct(e) {
    e.preventDefault();
    let nuevoProduct = new Product(
        undefined,
        title.value,
        description.value,
        image.value,
        price.value,
        category.value

        // characteristics.value,
        // imagePreviewOne.value,
        // imagePreviewTwo.value,
        // imagePreviewThree.value
    );
    // console.log(nuevoProduct);
    listProducts.push(nuevoProduct);

    saveLS();
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

        listProducts.push(nuevoProduct);

        saveLS();
    } else {
    }
}

function saveLS() {
    localStorage.setItem("listProducts", JSON.stringify(listProducts));
}
