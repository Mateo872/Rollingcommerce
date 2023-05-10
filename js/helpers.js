export function characters(text, min, max) {
  if (text.length >= min && text.length <= max) {
    return true;
  } else {
    return false;
  }
}

function validateURLImage(value) {
  let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp)$/;
  if (patron.test(value)) {
    return true;
  } else {
    return false;
  }
}

function validateCategory(text) {
  if (
    text.length > 0 &&
    (text === "Auriculares" ||
      text === "Consolas" ||
      text === "Computadoras" ||
      text === "Sillas" ||
      text === "Celulares" ||
      text === "Televisores")
  ) {
    return true;
  } else {
    return false;
  }
}

function validatePrice(value) {
  let patron = /^[1-9]\d*(\.\d{2})$/;
  if (patron.test(value)) {
    return true;
  } else {
    return false;
  }
}
function validateStock(value) {
  let patron = /^[0-9]{1,3}$/;
  if (patron.test(value)) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  let patron = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (patron.test(email)) {
    return true;
  } else {
    return false;
  }
}
function validatePasword(pass) {
  let patron = /^[A-Za-z\d]{8,}$/;
  console.log(patron.test(pass));
  if (patron.test(pass)) {
    return true;
  } else {
    return false;
  }
}

export function dataValidate(
  title,
  description,
  characteristics,
  image,
  imagePreviewOne,
  imagePreviewTwo,
  imagePreviewThree,
  category,
  price,
  stock
) {
  let data = "";
  if (!characters(title, 3, 100)) {
    data +=
      "Corregir la cantidad de caracteres, el titulo debe contener entre 3 y 100 caracteres. <br>";
  }
  if (!characters(description, 3, 600)) {
    data +=
      "Corregir la cantidad de caracteress, la descripción debe contener entre 3 y 600 caracteres.<br>";
  }
  if (!characters(characteristics, 3, 600)) {
    data +=
      "Corregir la cantidad de caracteres, Las características deben contener entre 3 y 100 caracteres.<br>";
  }
  if (!validateURLImage(image)) {
    data +=
      "Corregir la URL de la imagen principal, la extension debe ser .jpg, .gif o .png <br>";
  }
  if (!validateURLImage(imagePreviewOne)) {
    data +=
      "Corregir la URL de la imagen 1, la extension debe ser .jpg, .gif o .png <br>";
  }
  if (!validateURLImage(imagePreviewTwo)) {
    data +=
      "Corregir la URL de la imagen 2, la extension debe ser .jpg, .gif o .png <br>";
  }
  if (!validateURLImage(imagePreviewThree)) {
    data +=
      "Corregir la URL de la imagen 3, la extension debe ser .jpg, .gif o .png <br>";
  }
  if (!validateCategory(category)) {
    data += "Seleccione una categoría de la lista de opciones <br>";
  }
  if (!validatePrice(price)) {
    data += "Valor de precio invalido <br>";
  }
  if (!validateStock(stock)) {
    data += "Valor de stock invalido <br>";
  }

  if (data.length !== 0) {
    return data;
  } else {
    return "";
  }
}

export function dataLoginValidate(email, password) {
  let data = "";

  if (!validateEmail(email)) {
    data += "Corregir el Email, caracteres no permitidos <br>";
  }
  if (!validatePasword(password)) {
    data +=
      "Corregir el password,debe tener a partir de 8 caracteres, entre letras y numeros y no tener espacios ni carateres especiales.<br>";
  }

  if (data.length !== 0) {
    return data;
  } else {
    return "";
  }
}
