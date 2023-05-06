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

function overlayClose() {
  filterOverlay.style.visibility = "hidden";

  if (window.innerWidth < 989) {
    filterContainer.style.transform = "translateY(110%)";
  } else {
    filterContainer.style.transform = "translateX(-100%)";
  }
}
