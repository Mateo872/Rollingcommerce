document.querySelector("#emailForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = document.querySelector("#emailInput");
  const emailError = document.querySelector("#emailError");

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "El correo electrónico es incorrecto.";
    emailError.classList.remove("text-success");
    emailError.classList.add("text-danger");
    emailInput.classList.add("is-invalid");
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("is-invalid");
    setTimeout(() => {
      emailInput.classList.remove("is-invalid");
      emailInput.value = "";

      emailError.textContent = "El correo se envió correctamente.";
      emailError.classList.remove("text-danger");
      emailError.classList.add("text-success");

      setTimeout(() => {
        emailInput.value = "";
        emailError.textContent = "";
      }, 2000);
    }, 2000);
  }
});
