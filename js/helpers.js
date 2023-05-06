export function characters(text, min, max){
    if(text.length >= min && text.length <= max){
        console.log('cantidad de caracteres correcto');
        return true;
    }else{
        console.log('cantidad de caracteres incorrecto');
        return false;
    }
}


function validateURLImage(value){
    let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;
    if(patron.test(value)){
        console.log('url valida');
        return true;
    }else{
        console.log('url invalida');
        return false;
    }
}

function validateCategory(text){
    if(text.length > 0 && (text === 'auriculares' || text === 'consola' || text === 'pc' || text === 'silla' || text === 'celulares' || text === 'tv')){
        console.log('genero valido');
        return true;
    }else{
        console.log('genero invalido');
        return false;
    }
}


export function dataValidate(title, description, characteristics, image, imagePreviewOne, imagePreviewTwo, imagePreviewThree, category){
    let data='';
    if(!characters(title, 3, 100)){
        data += 'Corregir el campo del titulo debe contener entre 3 y 100 caracteres <br>';
    }
    if(!characters(description, 3, 600)){
        data += 'Corregir la cantidad de caracteres de la descripcion <br>'
    }
    if(!characters(characteristics, 3, 600)){
        data += 'Corregir la cantidad de caracteres de las características <br>'
    }
    if(!validateURLImage(image)){
        data += 'Corregir la URL de la imagen principal, la extension debe ser .jpg, .gif o .png <br>'
    }
    if(!validateURLImage(imagePreviewOne)){
        data += 'Corregir la URL de la imagen 1, la extension debe ser .jpg, .gif o .png <br>'
    }
    if(!validateURLImage(imagePreviewTwo)){
        data += 'Corregir la URL de la imagen 2, la extension debe ser .jpg, .gif o .png <br>'
    }
    if(!validateURLImage(imagePreviewThree)){
        data += 'Corregir la URL de la imagen 3, la extension debe ser .jpg, .gif o .png <br>'
    }
    if(!validateCategory(category)){
        resumen += 'Seleccione un genero de la lista de opciones <br>'
    }

    if(data.length !== 0 ){
        return data;
    }else{
        console.log('todo esta ok con el formulario')
        return '';
    }
}