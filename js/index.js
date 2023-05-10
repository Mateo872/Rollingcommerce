import { dataLoginValidate } from "./helpers.js";

const formLogin = document.getElementById("form-login");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("pass");
const msjForm = document.getElementById("msjFormIndex");
const modalUser = new bootstrap.Modal(document.querySelector("#login"));

let listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];

let userInSeesion = JSON.parse(sessionStorage.getItem("user"));

const email = "administrador@gmail.com";
const pass = "admin123";
const sessionEmail = userInSeesion[0];
const sessionPass = userInSeesion[1];

let newUser = [];

formLogin.addEventListener("submit", loadUser);

listProducts.map((product) => {
    createCard(product);
});

function createCard(product) {
    let productCardData = document.getElementById("cards");
    productCardData.innerHTML += `<div class="product d-flex flex-column justify-content-between p-3">
  <i class="bi bi-heart"></i>
  <div class="product_image d-flex justify-content-center">
      <img src="${product.image}" alt="${product.title}" />
  </div>
  <div class="product_feature">
      <h5 class="mb-0 text-truncate">${product.title}</h5>
      <div class="product_feature-discount d-flex">
      <p class="price mb-0">$${product.price}</p>
      </div>
      <div class="product_detail d-flex justify-content-between align-items-center">
      <a href="../pages/detailProduct.html?id=${product.code}" class="mb-0">
          Ver más
      </a>
      <i class="bi bi-cart"></i>
      </div>
  </div>
</div>
`;
}

function validarUser() {}

function loadUser(e) {
    e.preventDefault();
    if (userEmail.value === email && userPassword.value === pass) {
        msjForm.className = "alert alert-info mt-3";
        msjForm.innerHTML = "Te llevaremos a tus productos";
        setTimeout(() => {
            msjForm.className = "d-none";
            changePage();
        }, 4000);
    }
    if (userEmail.value === sessionEmail && userPassword.value === sessionPass) {
        msjForm.className = "alert alert-info mt-3";
        msjForm.innerHTML = "Te llevaremos a tus productos";
        setTimeout(() => {
            msjForm.className = "d-none";
            changePage();
        }, 4000);
    } else {
        let data = dataLoginValidate(userEmail.value, userPassword.value);
        if (data.length === 0) {
            Swal.fire(
                "Felicidades Te Registraste",
                "Ya puedes acceder a tu cuenta",
                "success"
            );
            let userMail = userEmail.value;
            let userPass = userPassword.value;
            saveSessionStorage(userMail, userPass);
            formLogin.reset();
            modalUser.hide();
        } else {
            msjForm.className = "alert alert-danger mt-3";
            msjForm.innerHTML = data;
            setTimeout(() => {
                msjForm.className = "d-none";
            }, 4000);
        }
    }
}

function saveSessionStorage(user, pass) {
    newUser.push(user, pass);
    sessionStorage.setItem("user", JSON.stringify(newUser));
}
function changePage() {
    window.location.href = window.location.origin + "/pages/admin.html";
}
