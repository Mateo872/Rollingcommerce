const cartBtn = document.querySelector(".bi-cart-fill"),
  containerOverlay = document.querySelector(".cart_overlay"),
  navbarNavDropdown = document.querySelector("#navbarNavDropdown"),
  navbarToggler = document.querySelector(".navbar-toggler"),
  containerCart = document.querySelector(".container_cart");

cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  containerOverlay.classList.toggle("cart_display");
  closeHeader();
});

containerOverlay.addEventListener("click", (e) => {
  if (e.target.className.includes("cart_overlay")) {
    containerOverlay.classList.add("cart_display");
    closeHeader();
  }
});

navbarToggler.addEventListener("click", (e) => {
  containerOverlay.classList.add("cart_display");
});

function closeHeader() {
  if (!containerOverlay.className.includes("cart_display")) {
    navbarNavDropdown.classList.remove("show");
  }
}
