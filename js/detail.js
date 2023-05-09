const products = [
  {
    id: 1,
    name: "Nintendo Switch",
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
    images: [
      "../images/nintendoSwitch.png",
      "https://media.gettyimages.com/id/1087036102/nl/foto/a-nintendo-switch-console-fitted-with-a-pair-of-joy-con-controllers-taken-on-february-24-2017.jpg?s=612x612&w=gi&k=20&c=wc9Twe6meuWeI38o12-I4jg5W_eJUf3i3CSPXYlZrZg=",
      "https://http2.mlstatic.com/D_NQ_NP_670092-MLM41077640311_032020-O.jpg",
    ],
  },
  {
    id: 2,
    name: "Xbox Series S",
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
    images: [
      "../images/xbox.png",
      "https://http2.mlstatic.com/D_NQ_NP_634615-MLM46702291173_072021-O.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgj1xdWZha-KqJdF-PqrqjIwJEcWo8YKkjDwAeR_mMcdCRY46b6MhIBiRLfXSICUv0uNE&usqp=CAU",
    ],
  },
  {
    id: 3,
    name: "Playstation 5",
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
    images: [
      "../images/ps5.png",
      "https://www.losandes.com.ar/resizer/SlpZYlj_huQvuxyLnpDfodJ53ks=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/RPP43CYPH5AYJILUVFCDGVC7JI.jpg",
      "https://hardzone.es/app/uploads-hardzone.es/2020/06/PS5-Versiones.jpg?x=480&y=375&quality=40",
    ],
  },
  {
    id: 4,
    name: "Silla gamer Esports Sillon",
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
    images: [
      "../images/sillaGamer.png",
      "https://http2.mlstatic.com/D_NQ_NP_758856-MLA53706209111_022023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_628043-MLA48194045821_112021-O.webp",
    ],
  },
  {
    id: 5,
    name: "Silla de escritorio DeSillas pro gamer Legend",
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
    images: [
      "../images/sillaGamer2.png",
      "https://desillas.com/img/productos/TCQENU_1.jpg",
      "https://desillas.com/img/productos/CXWDXV_9.jpg",
    ],
  },
  {
    id: 6,
    name: "Silla de escritorio Baires4 PS4",
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
    images: [
      "../images/sillaGamer3.png",
      "https://http2.mlstatic.com/D_NQ_NP_752283-MLA43634990325_092020-O.jpg",
      "https://http2.mlstatic.com/D_NQ_NP_2X_689584-MLA48378545568_112021-V.webp",
    ],
  },
  {
    id: 7,
    name: "Pc Armada Gamer Amd Ryzen 5 4650g",
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
    images: [
      "../images/computadora.png",
      "https://http2.mlstatic.com/D_NQ_NP_705907-MLA31604163024_072019-O.jpg",
      "https://www.cdiscount.com/pdt2/4/7/8/1/700x700/mem4260663459478/rw/gaming-pc-amd-ryzen-5-3600-6x-3-60ghz-16gb-ddr4.jpg",
    ],
  },
  {
    id: 8,
    name: "Pc Armada Gamer Amd Ryzen 5 5600g",
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
    images: [
      "../images/computadora2.png",
      "https://front.dev.malditohard.com.ar/img/migration/PC-GAMER-AMD-RYZEN-5-5600G-B450M-16GB-480-SSD-600W-BLADE.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGh6XGDr9TUCa6efKtOuuBKNlUBqXF0bcAZcuaneDFolJEs0NyJx4HUsHBf6Ft8ZDfMU&usqp=CAU",
    ],
  },
  {
    id: 9,
    name: "Computadora Pc Cpu Solarmax Intel Core I5",
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
    images: [
      "../images/computadora3.png",
      "https://http2.mlstatic.com/D_NQ_NP_649489-MLA49225891236_022022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_792087-MLA49225945430_022022-O.webp",
    ],
  },
  {
    id: 10,
    name: "Samsung Galaxy S23 Sgb 256g",
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
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_683227-MLA53448432818_012023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_929707-MLA53448472625_012023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_866138-MLA53448520276_012023-O.webp",
    ],
  },
  {
    id: 11,
    name: "Apple iPhone 13 Pro",
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
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_640945-MLA47778929198_102021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_785821-MLA47778953167_102021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_723540-MLA47778929201_102021-O.webp",
    ],
  },
  {
    id: 12,
    name: "Motorola Edge 30 Neo",
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
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_942467-MLA52542787717_112022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_666049-MLA52542787715_112022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_885494-MLA52542783770_112022-O.webp",
    ],
  },
  {
    id: 13,
    name: "Smart TV Samsung Series 7 K 50 pulgadas 220V - 240V",
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
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_787221-MLA48007684849_102021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_926763-MLA48007684848_102021-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_640076-MLA48007797641_102021-O.webp",
    ],
  },
  {
    id: 14,
    name: "Smart Tv Motorola Mt50g22 Led Full Hd 50 220v",
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
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_849715-MLA54897442270_042023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_977816-MLA54686596047_032023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_873670-MLA54686318605_032023-O.webp",
    ],
  },
  {
    id: 15,
    name: "Smart TV Philips 7000 Series 50PUD7406/77 LED",
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
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_745854-MLA48622828334_122021-O.webp",
      "hhttps://http2.mlstatic.com/D_NQ_NP_736407-MLA48622828333_122021-O.webp",
      "hhttps://http2.mlstatic.com/D_NQ_NP_733298-MLA48622693993_122021-O.webp",
    ],
  },
  {
    id: 16,
    name: "Auriculares Harman JBL Tune 760NC JBLT760NC",
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
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_796107-MLA48750424811_012022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_961753-MLA48750424812_012022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_796107-MLA48750424811_012022-O.webp",
    ],
  },
  {
    id: 17,
    name: "Auriculares Sony WH-XB910N",
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
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_720416-MLA52221299687_102022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_791368-MLA52221299689_102022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_917558-MLA52221299693_102022-O.webp",
    ],
  },
  {
    id: 18,
    name: "Auriculares Kotion G2000",
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
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_710834-MLA43710746221_102020-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_908504-MLA43711110372_102020-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_799596-MLA43710746222_102020-O.webp",
    ],
  },
];

// const parameterCode = new URLSearchParams(window.location.search);
// console.log(parameterCode.get('code'));

// let listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];

// const searchProduct = listProducts.find((product)=> product.code === parameterCode.get('code'));

// let section = document.getElementById('detail');
// section.innerHTML = `
// <section class="card mt-4 mb-3 border-0 container">
//         <div class="row g-0">
//           <div class="col-md-6 col-lg-6">
//             <div class="mx-3">
//               <p>En stock ${searchProduct.stock}</p>
//             <img src="${searchProduct.image}" class="img-fluid rounded-3 border-3 shadow" alt="${searchProduct.title}">
//             </div>
//             <div class="me-md-3">
//               <div class="d-flex  my-3">
//                 <div class="col-md-4">
//                   <button class="btn border-0"><img src="${searchProduct.imagePreviewOne}" class="img-fluid rounded-3 border-3 shadow"  alt="${searchProduct.title}"></button>
//                 </div>
//                 <div class="col-md-4 mx-2">
//                   <button class="btn border-0"><img src="${searchProduct.imagePreviewTwo}" class="img-fluid rounded-3 border-3 shadow" alt="${searchProduct.title}"></button>
//                 </div>
//                 <div class="col-md-4">
//                   <button class="btn border-0"><img src="${searchProduct.imagePreviewThree}" class="img-fluid rounded-3 border-3 shadow" alt="${searchProduct.title}"></button>
//                 </div>
//             </div>
//             </div>

//           </div>
//           <div class="col-md-6 col-lg-6">
//             <div class="card-body my-lg-5 mx-3">
//               <p class="d-flex justify-content-end me-3"><i class="bi bi-heart text-danger fs-4"></i></p>
//               <h4>${searchProduct.title}</h4>
//               <p class="display-6"$${searchProduct.price}</p>
//               <p>
//               ${searchProduct.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section class="container py-3">
//         <h4>Características</h4>
//         <p>${searchProduct.characteristics}</p>
//       </section>
//       <section class="container pt-4">
//         <h5>Otros productos populares</h5>
//         <div class="container-card my-3 ps-1">
//           <div class="card  card-similar-product col-12 col-sm-6 col-md-4 col-lg-3 shadow me-3 p-3 mb-5 rounded">
//             <img src="../img/Auricular.png" class="img-fluid">
//             <h6 class="pt-2 mb-0">Astro30</h6>
//             <p class="fw-semibold pb-1 mb-0">$499</p>
//             <a href="#" class="mb-0 text-danger text-decoration-none fw-semibold">Ver más</a>
//           </div>
//           <div class="card  card-similar-product col-12 col-sm-6 col-md-4 col-lg-3 shadow me-3 p-3 mb-5 rounded">
//             <img src="../img/Auricular.png" class="img-fluid">
//             <h6 class="pt-2 mb-0">Astro30</h6>
//             <p class="fw-semibold pb-1 mb-0">$499</p>
//             <a href="#" class="mb-0 text-danger text-decoration-none fw-semibold">Ver más</a>
//           </div>
//           <div class="card  card-similar-product col-12 col-sm-6 col-md-4 col-lg-3 shadow me-3 p-3 mb-5 rounded">
//             <img src="../img/Auricular.png" class="img-fluid">
//             <h6 class="pt-2 mb-0">Astro30</h6>
//             <p class="fw-semibold pb-1 mb-0">$499</p>
//             <a href="#" class="mb-0 text-danger text-decoration-none fw-semibold">Ver más</a>
//           </div>
//           <div class="card  card-similar-product col-12 col-sm-6 col-md-4 col-lg-3 shadow me-3 p-3 mb-5 rounded">
//             <img src="../img/Auricular.png" class="img-fluid">
//             <h6 class="pt-2 mb-0">Astro30</h6>
//             <p class="fw-semibold pb-1 mb-0">$499</p>
//             <a href="#" class="mb-0 text-danger text-decoration-none fw-semibold">Ver más</a>
//           </div>
//           <div class="card  card-similar-product col-12 col-sm-6 col-md-4 col-lg-3 shadow me-3 p-3 mb-5 rounded">
//             <img src="../img/Auricular.png" class="img-fluid">
//             <h6 class="pt-2 mb-0">Astro30</h6>
//             <p class="fw-semibold pb-1 mb-0">$499</p>
//             <a href="#" class="mb-0 text-danger text-decoration-none fw-semibold">Ver más</a>
//           </div>
//         </div>

//       </section>`

const id = location.search.split("?id=")[1];

const productsContainer = document.querySelector("[data-products-container]"),
  productsCharacteristics = document.querySelector(
    "[data-products-characteristics]"
  );

const productFiltered = products.filter((product) => product.id === +id);

productFiltered.map((product) => {
  const { images, name, price, description, characteristics, stock } = product;

  productsContainer.innerHTML = `
  <div class="row g-0">
<div class="col-md-6 col-lg-6">
  <div class="mx-3">
    <p>En stock 66</p>
    <img
      src="${images[0]}"
      class="img-fluid rounded-3 border-3 shadow"
      alt="auricular"
    />
  </div>
  <div class="me-md-3 w-100">
    <div class="d-flex my-3 justify-content-between">
      <div class="col-md-4">
        <button class="btn border-0">
          <img
            src="${images[1]}"
            class="img-fluid rounded-3 border-3 shadow image_detail"
            alt="${name}"
          />
        </button>
      </div>
      <div class="col-md-4">
        <button class="btn border-0">
          <img
            src="${images[2]}"
            class="img-fluid rounded-3 border-3 shadow image_detail"
            alt="${name}"
          />
        </button>
      </div>
      <div class="col-md-4">
        <button class="btn border-0">
          <img
            src="${images[1]}"
            class="img-fluid rounded-3 border-3 shadow image_detail"
            alt="${name}"
          />
        </button>
      </div>
    </div>
  </div>
</div>
<div class="col-md-6 col-lg-6">
  <div class="card-body my-lg-5 mx-3">
    <p class="d-flex justify-content-end me-3">
      <i class="bi bi-heart text-danger fs-4"></i>
    </p>
    <h4>
     ${name}
    </h4>
    <p class="display-6">$${price}</p>
    <button class="btn btn-danger mt1 mb-3">
      Agregar al carrito
    </button>
    <p>
      ${description}
    </p>
  </div>
</div>
</div>
  `;

  productsCharacteristics.innerHTML = `
  <h4>Características de ${name}</h4>
        <ul>
          <li>${characteristics[0]}</li>
          <li>${characteristics[1]}</li>
          <li>${characteristics[2]}</li>
          <li>${characteristics[3]}</li>
        </ul>
  `;
});
