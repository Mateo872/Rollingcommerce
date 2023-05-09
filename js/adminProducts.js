import Product from "./addProduct.js";
import { dataValidate } from "./helpers.js";

let products = [
  {
    id: 1,
    title: "Nintendo Switch",
    price: 499,
    description:
      "Es una consola de videojuegos de Nintendo que se lanza en el mercado en el año 2019. Todo el catálogo de juegos de Nintendo Switch está disponible en la palma de tu mano.",
    characteristics: [
      "Incluye 2 controles.",
      "Resolución de 1920px x 1080px.",
      "Memoria RAM de 4GB.",
      "Tiene pantalla táctil.",
    ],
    category: "Consolas",
    stock: 3,
    image: "../images/nintendoSwitch.png",
  },
  {
    id: 2,
    title: "Xbox Series S",
    price: 899,
    description:
      "La Xbox más pequeña de la historia. Xbox Series S es una consola de videojuegos de sobremesa de Microsoft que se lanza en el mercado en el año 2020.",
    characteristics: [
      "Incluye control.",
      "Resolución de 2560px x 1440px.",
      "Memoria RAM de 10GB.",
      "Cuenta con: 1 cable hdmi, 1 cable de alimentación ca.",
    ],
    category: "Consolas",
    stock: 3,
    image: "../images/xbox.png",
  },
  {
    id: 3,
    title: "Playstation 5",
    price: 890,
    description:
      "El PlayStation 5, o PS5, es la última generación de consolas de videojuegos de Sony. Diseñada con un aspecto moderno y elegante, la PS5 ofrece una experiencia de juego de próxima generación.",
    characteristics: [
      "Incluye control.",
      "Resolución de 3840px x 2160px.",
      "Memoria RAM de 16GB.",
      "La duración de la batería de los controles depende del uso que se le dé al producto.",
    ],
    category: "Consolas",
    stock: 3,
    image: "../images/ps5.png",
  },
  {
    id: 4,
    title: "Silla gamer Esports Sillon",
    price: 299,
    description:
      "Silla The Game House Para Pc Gamer Ergonómica Tapizada Butaca GAMER con apoya brazos ajustables y respaldo reclinable.",
    characteristics: [
      "Reclinable hasta 180 grados.",
      "Cuero sintético.",
      "Pistón de acero.",
      "Base plástica reforzada.",
    ],
    category: "Sillas",
    stock: 3,
    image: "../images/sillaGamer.png",
  },
  {
    id: 5,
    title: "Silla de escritorio DeSillas pro gamer Legend",
    price: 599,
    description:
      "La selección de una silla adecuada es muy importante para prevenir futuras lesiones. Con esta silla DeSillas, vas a tener la comodidad y el bienestar que necesitás a lo largo de tu jornada.",
    characteristics: [
      "Confortable y duradera.",
      "Posee altura ajustable.",
      "Cómodos apoyabrazos.",
      "Tiene apoya cabeza.",
    ],
    category: "Sillas",
    stock: 3,
    image: "../images/sillaGamer2.png",
  },
  {
    id: 6,
    title: "Silla de escritorio Baires4 PS4",
    price: 299,
    description:
      "Diseñada para quienes pasan muchas horas frente a la computadora. El asiento y el respaldo se adaptan a tus diferentes posiciones a lo largo del juego. Disfrutá sin descuidar las zonas lumbar, dorsal y cervical.",
    characteristics: [
      "Con ruedas.",
      "Posee altura ajustable.",
      "Giratoria.",
      "Material del relleno: espuma.",
    ],
    category: "Sillas",
    stock: 3,
    image: "../images/sillaGamer3.png",
  },
  {
    id: 7,
    title: "Pc Armada Gamer Amd Ryzen 5 4650g",
    price: 699,
    description: "Pc Armada Gamer Amd Ryzen 5 4650g 16g Vega 7 240g Ssd.",
    characteristics: [
      "CPU: AMD RYZEN 5 4600G 6C/12T.",
      "Motherboard: A320M ASROCK A320M/AC AM4.",
      "Memoria RAM: DDR4 8GB 2666MHZ CRUCIAL BASICS UDIMM (Cant: 2).",
      "Video: AMD RX VEGA 7 ( Integrado ).",
      "Disco Solido (M.2): 256GB POWERVISION NVME BLACK (Cant: 1).",
      "Fuente: c/Gabinete.",
    ],
    category: "Computadoras",
    stock: 3,
    image: "../images/computadora.png",
  },
  {
    id: 8,
    title: "Pc Armada Gamer Amd Ryzen 5 5600g",
    price: 799,
    description: "Pc Armada Gamer Amd Ryzen 5 5600g 16gb 480gb Ssd Mother Am4.",
    characteristics: [
      "Microprocesador RYZEN 5 5600g 6 núcleos hasta 4.4GHZ.",
      "Disco 480GB sólido.",
      "Memoria RAM 16GB DDR4.",
      "MOTHERBOARD AMD AM4.",
    ],
    category: "Computadoras",
    stock: 3,
    image: "../images/computadora2.png",
  },
  {
    id: 9,
    title: "Computadora Pc Cpu Solarmax Intel Core I5",
    price: 199,
    description: "Computadora Pc Cpu Solarmax Intel Core I5 11va 32gb 480 Ssd.",
    characteristics: [
      "HD Audio integrado.",
      "Conexion Red LAN (por cable) integrada.",
      "4 puertos USB 2.0.",
      "1 Puerto PS2 para Mouse o Teclado.",
    ],
    category: "Computadoras",
    stock: 3,
    image: "../images/computadora3.png",
  },
  {
    id: 10,
    title: "Samsung Galaxy S23 Sgb 256g",
    price: 500,
    description:
      "Cada detalle, ahora es tuyo para que lo captures. Fotografiá sin parar. Siempre tendrás una galería de fotos nítidas y de alta calidad. Dentro de este sensor de alta resolución se encuentra Adaptive Pixel, que cambia los píxeles para adaptarse a la iluminación..",
    characteristics: [
      "Tamaño de la pantalla: 6.1",
      "Memoria interna: 256 GB.",
      "Cámara trasera principal: 50 Mpx.",
      "Desbloqueo: Huella dactilar y reconocimiento facial.",
    ],
    category: "Celulares",
    stock: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_683227-MLA53448432818_012023-O.webp",
  },
  {
    id: 11,
    title: "Apple iPhone 13 Pro",
    price: 800,
    description:
      "iPhone 13 Pro. El mayor avance en el sistema de cámaras Pro de Apple hasta ahora. Pantalla Super Retina XDR con ProMotion que brinda una respuesta más rápida y fluida. Chip A15 Bionic para un rendimiento fuera de serie. Diseño resistente y un gran salto en duración de batería...",
    characteristics: [
      "Tamaño de la pantalla: 6.1.",
      "Memoria interna: 512 GB.",
      "Cámara trasera principal: 12 Mpx.",
      "Cámara frontal principal: 12 Mpx.",
    ],
    category: "Celulares",
    stock: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_640945-MLA47778929198_102021-O.webp",
  },
  {
    id: 12,
    title: "Motorola Edge 30 Neo",
    price: 200,
    description:
      "Sus 2 cámaras traseras de 64 Mpx/13 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo...",
    characteristics: [
      "Tamaño de la pantalla: 6.28.",
      "Memoria interna: 128 GB.",
      "Cámara trasera principal: 64 Mpx.",
      "Desbloqueo: Huella dactilar y reconocimiento facial",
    ],
    category: "Celulares",
    stock: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_942467-MLA52542787717_112022-O.webp",
  },
  {
    id: 13,
    title: "Smart TV Samsung Series 7 K 50 pulgadas 220V - 240V",
    price: 180,
    description:
      "Samsung es reconocida a nivel mundial como una empresa líder en la industria tecnológica. Todos sus productos son diseñados con una calidad superior y pensados para contribuir a un futuro mejor. Por eso, va a hacer que disfrutes de una experiencia visual incomparable....",
    characteristics: [
      "Tamaño de la pantalla: 50.",
      "Resolución: 4K.",
      "Es smart: Sí.",
      "Cantidad de puertos HDMI: 3",
    ],
    category: "Televisores",
    stock: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_787221-MLA48007684849_102021-O.webp",
  },
  {
    id: 14,
    title: "Smart Tv Motorola Mt50g22 Led Full Hd 50 220v",
    price: 180,
    description:
      "Con el Smart TV MT50G22 vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos...",
    characteristics: [
      "Tamaño de la pantalla: 50.",
      "Resolución: 4K.",
      "Es smart: Sí.",
      "Tipo de pantalla: LED",
    ],
    category: "Televisores",
    stock: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_849715-MLA54897442270_042023-O.webp",
  },
  {
    id: 15,
    title: "Smart TV Philips 7000 Series 50PUD7406/77 LED",
    price: 24,
    description:
      "El compromiso de Philips es brindar nuevas e innovadoras tecnologías. Es por esa razón que se centra en los detalles para poder ofrecer productos que marcan la diferencia y crean una experiencia visual más increíble y auténtica...",
    characteristics: [
      "Tamaño de la pantalla: 50.",
      "Resolución: 4K.",
      "Es smart: Sí.",
      "Cantidad de puertos HDMI: 4",
    ],
    category: "Televisores",
    stock: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_745854-MLA48622828334_122021-O.webp",
  },
  {
    id: 16,
    title: "Auriculares Harman JBL Tune 760NC JBLT760NC",
    price: 50,
    description:
      "JBL, marca de renombre mundial en el mercado de audio, es desde hace más 70 años una referente por la alta calidad de sus productos. Su gama de auriculares es variada, ya que la compañía ofrece produtos in-ear, over-ear, on-ear, deportivos e inalámbricos. Cualquiera de estos es una buena opción para hacerte disfrutar de tu música preferida...",
    characteristics: [
      "Es inalámbrico: Sí.",
      "Con cancelación de ruido: Sí.",
      "Duración de la batería: 35 h.",
      "Con micrófono: Sí",
    ],
    category: "Auriculares",
    stock: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_796107-MLA48750424811_012022-O.webp",
  },
  {
    id: 17,
    title: "Auriculares Sony WH-XB910N",
    price: 80,
    description:
      "Sony, sin lugar a dudas es una de las marcas más reconocidas en el mundo por la fabricación de dispositivos de audio. Su gama de auriculares se caracteriza por brindar siempre una gran experencia de uso en sus usuarios y ofrecer una alta calidad en todos los componentes de sus reproductores. Esto hace que puedas notar un gran sonido desde su primer uso...",
    characteristics: [
      "Es inalámbrico: Sí.",
      "Con cancelación de ruido: Sí.",
      "Duración de la batería: 30 h.",
      "Con micrófono: Sí",
    ],
    category: "Auriculares",
    stock: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_720416-MLA52221299687_102022-O.webp",
  },
  {
    id: 18,
    title: "Auriculares Kotion G2000",
    price: 20,
    description:
      "Sony, sin lugar a dudas es una de las marcas más reconocidas en el mundo por la fabricación de dispositivos de audio. Su gama de auriculares se caracteriza por brindar siempre una gran experencia de uso en sus usuarios y ofrecer una alta calidad en todos los componentes de sus reproductores. Esto hace que puedas notar un gran sonido desde su primer uso...",
    characteristics: [
      "Es inalámbrico: No.",
      "Con luz LED: Sí.",
      "Con micrófono: Sí",
      "Con pilas: No",
    ],
    category: "Auriculares",
    stock: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_710834-MLA43710746221_102020-O.webp",
  },
];

const btnAdd = document.getElementById("btnAdd");

const title = document.getElementById("title");
const code = document.getElementById("code");
const image = document.getElementById("image");
const imagePreviewOne = document.getElementById("image1");
const imagePreviewTwo = document.getElementById("image2");
const imagePreviewThree = document.getElementById("image3");
const price = document.getElementById("price");
const description = document.getElementById("description");
const characteristics = document.getElementById("characteristics");
const stock = document.getElementById("stock");
const category = document.getElementById("category");
const form = document.getElementById("form");
const msjForm = document.getElementById("msjForm");
const modalProduct = new bootstrap.Modal(document.querySelector("#modalAdd"));

btnAdd.addEventListener("click", showModalProduct);
form.addEventListener("submit", loadProduct);

localStorage.setItem("listProducts", JSON.stringify(products));

products = localStorage.getItem("listProducts");

if (!products) {
  products = [];
} else {
  products = JSON.parse(products).map(
    (product) =>
      new Product(
        product.code,
        product.title,
        product.description,
        product.image,
        product.price,
        product.category,
        product.characteristics,
        product.imagePreviewOne,
        product.imagePreviewTwo,
        product.imagePreviewThree,
        product.stock
      )
  );
}

initialLoad();

function initialLoad() {
  if (products.length > 0) {
    products.map((product, index) => createCard(product, index));
  }
}

function createCard(product, index) {
  let productCardData = document.getElementById("productCard");

  productCardData.innerHTML += `<div class="card col-lg-3 col-md-5 m-2 img-fluid rounded-3 border-3 shadow">
  <div class="col-12 g-0">
  <div class="col position-relative">
      <img
          src="${product.image}"
          class="card-img-top"
          alt="producto"
      />
      <div class="position-absolute top-0 end-0">
          <div class="m-2">
              <i
                  class="bi bi-trash3-fill fs-5" onclick = "deleteProduct('${
                    product.code
                  }')"
                  style="color: #ee332c"
              ></i>
              <i
                  class="bi bi-pencil-fill fs-5 ms-2"
                  style="color: #ee332c"
              ></i>
          </div>
      </div>
  </div>
  <div class="col my-3">
      <div class="card-body">
          <h5 class="card-title fs-2">
              ${product.title}
          </h5>
          <p class="card-text">
              ${product.description}
          </p>

          <p class="card-text fw-bold">
              <small class="fs-4">$${product.price}</small>
          </p>
          <p class="card-text">
              <small># ${index + 1}</small>
          </p>
      </div>
  </div>
</div>
</div> 
  `;
}

function showModalProduct() {
  //abrir la ventana modal
  modalProduct.show();
  console.log("aqui vamos a crear una peli");
}

function loadProduct(e) {
  e.preventDefault();

  console.log("creando el producto");
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
    code.value,
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
      code.value,
      stock.value
    );

    products.push(newProduct);

    saveLocalstorage();

    cleanProductForm();

    modalProduct.hide();
    let productIndex = products.length - 1;
    createCard(newProduct, productIndex);

    Swal.fire(
      "Se agregó un nuevo producto",
      "El producto ingresado fue creado correctamente",
      "success"
    );

    // saveLS();
  } else {
    msjForm.className = "alert alert-danger mt-3";
    msjForm.innerHTML = data;
  }
}

function saveLocalstorage() {
  localStorage.setItem("listProducts", JSON.stringify(products));
}
function cleanProductForm() {
  form.reset();
}

// function deleteProduct(){

// }

window.deleteProduct = (code) => {
  Sw;
  id: 1,
    al
      .fire({
        title: "Está seguro que desea borrar el producto?",
        text: "No se puede revertir este proceso",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log(code);
          console.log("aqui borro el producto");
          let positionProduct = products.findIndex(
            (product) => product.code === code
          );
          console.log(positionProduct);
          products.splice(positionProduct, 1);
          saveLocalstorage();
          let productCardData = document.getElementById("productCard");
          // console.log(productCardData.children[positionProduct]);
          productCardData.removeChild(
            productCardData.children[positionProduct]
          );

          Swal.fire(
            "Producto eliminado",
            "El producto selecionado fue eliminado correctamente.",
            "success"
          );
        }
      });
};
