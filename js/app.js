const filterOverlay = document.querySelector(".filter_overlay"),
  filterContainer = document.querySelector(".container_filter"),
  filterAccept = document.querySelector(".filter_accept"),
  filterBtn = document.querySelector(".bi-sliders");

filterBtn.addEventListener("click", () => {
  filterOverlay.style.visibility = "visible";

  if (window.innerWidth > 989) {
    filterContainer.style.transform = "translateY(0)";
  } else {
    filterContainer.style.transform = "translateX(0)";
  }
});

filterOverlay.addEventListener("click", overlayClose);
filterAccept.addEventListener("click", overlayClose);

function overlayClose(e) {
  if (
    e.target.className.includes("filter_overlay") ||
    e.target.innerText === "Listo"
  ) {
    filterOverlay.style.visibility = "hidden";

    if (window.innerWidth < 989) {
      filterContainer.style.transform = "translateY(110%)";
    } else {
      filterContainer.style.transform = "translateX(-100%)";
    }
  }
}

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
