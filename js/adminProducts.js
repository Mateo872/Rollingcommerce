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

let productStatus = true; // true = crear producto, false = editar producto
btnAdd.addEventListener('click', showModalProduct);
form.addEventListener('submit', loadProduct);

let listProducts = localStorage.getItem('listProducts');

if(!listProducts){
  listProducts = [];
}else{
  listProducts = JSON.parse(listProducts).map((product)=> new Product(
  product.code, product.title, product.description, product.image, product.price, product.category, product.characteristics, product.imagePreviewOne, product.imagePreviewTwo, product.imagePreviewThree, product.stock
  ))
}

console.log(listProducts);

initialLoad();

function initialLoad(){
  if(listProducts.length > 0){
    listProducts.map((product, index) => createCard(product, index))
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

function showModalProduct(){
  //abrir la ventana modal
  productStatus = true;
  modalProduct.show();
  console.log('aqui vamos a crear una peli')
}


function loadProduct(e) {
  e.preventDefault();
  if(productStatus){
    //aqui se crea el producto
    createProduct();
  }else{
    //edita peli
    updateProduct();

  }
  
  
}

function createProduct(){
  //validar datos
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
    console.log(newProduct);

    listProducts.push(newProduct);

    saveLocalstorage();

    cleanProductForm();

    modalProduct.hide();
    let productIndex = listProducts.length -1;
    createCard(newProduct, productIndex);

    Swal.fire('Se agregó un nuevo producto', 'El producto ingresado fue creado correctamente', 'success');

  } else {
    msjForm.className = 'alert alert-danger mt-3';
    msjForm.innerHTML = data;
  }
}

function saveLocalstorage(){
  localStorage.setItem("listProducts", JSON.stringify(listProducts));
}
function cleanProductForm(){
  form.reset()
}

// function deleteProduct(){
  
// }

window.deleteProduct = (code)=>{

  Swal.fire({
    title: 'Está seguro que desea borrar el producto?',
    text: "No se puede revertir este proceso",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#ee332c',
    cancelButtonColor: '#ee332c',
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      console.log(code)
      console.log('aqui borro el producto')
      let positionProduct = listProducts.findIndex(product => product.code === code)
      console.log(positionProduct);
      listProducts.splice(positionProduct,1);
      saveLocalstorage();
      let productCardData = document.getElementById('productCard');
      // console.log(productCardData.children[positionProduct]);
      productCardData.removeChild(productCardData.children[positionProduct]);

      Swal.fire(
        'Producto eliminado',
        'El producto selecionado fue eliminado correctamente.',
        'success'
      )
    }
  })

}

window.editProduct = (uniqueCode) =>{
  const product = listProducts.find(prod => prod.code === uniqueCode)
  console.log(product);
  modalProduct.show();
  code.value = product.code;
  title.vaue = product.title;
  description.value = product.description;
  characteristics.value = product.characteristics
  image.value = product.image;
  imagePreviewOne.value = product.imagePreviewOne;
  imagePreviewTwo.value = product.imagePreviewTwo;
  imagePreviewThree.value = product.imagePreviewThree;
  category.value = product.category;
  price.value = product.price;
  stock.value = product.stock;
  //cambiar el estado de la variable bandera
  productStatus = false;
};

function updateProduct(){
  //validar los datos
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
  if(data.length === 0){
    let positionProduct = listProducts.findIndex(prod => prod.code === code.value); //posición de donde esta el producto
    console.log(positionProduct)
    listProducts[positionProduct].title = title.value;
  listProducts[positionProduct].description = description.value;
  listProducts[positionProduct].characteristics = characteristics.value;
  listProducts[positionProduct].image = image.value;
  listProducts[positionProduct].imagePreviewOne = imagePreviewOne.value;
  listProducts[positionProduct].imagePreviewTwo = imagePreviewTwo.value;
  listProducts[positionProduct].imagePreviewThree = imagePreviewThree.value;
  listProducts[positionProduct].category = category.value;
  listProducts[positionProduct].price = price.value;
  listProducts[positionProduct].stock = stock.value;
  //actualizar el localstorage
  saveLocalstorage();
  //limpiar el formulario
  cleanProductForm();
  //cerrar modal
  modalProduct.hide();
  //mostrar un mensaje
  Swal.fire('Se editó un producto', 'El producto seleccionado fue editado correctamente', 'success');
  //actualiar la vista del admin
  let productCardData = document.getElementById('productCard');
  productCardData.children[positionProduct].children[1].innerHTML = title.value;
  productCardData.children[positionProduct].children[2].innerHTML = description.value;
  productCardData.children[positionProduct].children[3].innerHTML = characteristics.value;
  productCardData.children[positionProduct].children[4].innerHTML = image.value;
  productCardData.children[positionProduct].children[5].innerHTML = imagePreviewOne.value;
  productCardData.children[positionProduct].children[6].innerHTML = imagePreviewTwo.value;
  productCardData.children[positionProduct].children[7].innerHTML = imagePreviewThree.value;
  productCardData.children[positionProduct].children[8].innerHTML = category.value;
  productCardData.children[positionProduct].children[9].innerHTML = price.value;
  productCardData.children[positionProduct].children[10].innerHTML = stock.value;
  }else
    {
      msjForm.className = "alert alert-danger mt-3";
      msjForm.innerHTML = data;
  }
  }
 
