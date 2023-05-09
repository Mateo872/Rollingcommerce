export function characters(text, min, max) {
    if (text.length >= min && text.length <= max) {
        // console.log('cantidad de caracteres correcto');
        return true;
    } else {
        // console.log('cantidad de caracteres incorrecto');
        return false;
    }
}

function validateURLImage(value) {
    let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp)$/;
    if (patron.test(value)) {
        // console.log('url valida');
        return true;
    } else {
        // console.log('url invalida');
        return false;
    }
}

function validateCategory(text) {
    if (
        text.length > 0 &&
        (text === "Auriculares" ||
            text === "Consola" ||
            text === "Pc" ||
            text === "Silla" ||
            text === "Celulares" ||
            text === "Tv")
    ) {
        // console.log('categoría valida');
        return true;
    } else {
        // console.log('categoria invalida');
        return false;
    }
}

function validatePrice(value) {
    let patron = /^\d*(\.\d)?\d{0,1}$/;
    if (patron.test(value)) {
        // console.log('precio valido');
        return true;
    } else {
        // console.log('el precio no paso la expresion regular');
        return false;
    }
}
function validateStock(value) {
    let patron = /^[0-9]{1,3}$/;
    if (patron.test(value)) {
        // console.log('digito de stock valido');
        return true;
    } else {
        // console.log('stock invalido');
        return false;
    }
}

function validateEmail(email) {
    let patron = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (patron.test(email)) {
        // console.log("Email correcto");
        return true;
    } else {
        // console.log("Email incorrecto");
        return false;
    }
}
function validatePasword(pass) {
    // console.log(pass);
    let patron = /^[A-Za-z\d]{8,}$/;
    console.log(patron.test(pass));
    if (patron.test(pass)) {
        // console.log("password correcto");
        return true;
    } else {
        // console.log("password incorrecto");
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
        console.log("todo esta ok con el formulario");
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
        console.log("todo esta ok con el login");
        return "";
    }
}
