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

function countdown() {
  setInterval(() => {
    const dayHtml = document.querySelector("[data-days]"),
      hoursHtml = document.querySelector("[data-hours]"),
      minutesHtml = document.querySelector("[data-minutes]"),
      secondsHtml = document.querySelector("[data-seconds]");

    let now = new Date().getTime();
    let offersDay = new Date("31 jul 2023").getTime();
    let limitTime = offersDay - now;

    let days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
    let hours = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).slice(-2);
    let minutes = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
    ).slice(-2);
    let seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(
      -2
    );

    dayHtml.innerHTML = `${days}`;
    hoursHtml.innerHTML = `${hours}`;
    minutesHtml.innerHTML = `${minutes}`;
    secondsHtml.innerHTML = `${seconds}`;

    if (limitTime < 0) {
      clearInterval(countdown);
      dayHtml.innerHTML = `${0}`;
      hoursHtml.innerHTML = `${"00"}`;
      minutesHtml.innerHTML = `${"00"}`;
      secondsHtml.innerHTML = `${"00"}`;
    }
  }, 1000);
}

countdown();
