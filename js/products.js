const products = [
  {
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
    stock: 64,
    images: [
      "../images/nintendoSwitch.png",
      "../images/nintendoSwitch.png",
      "../images/nintendoSwitch.png",
    ],
  },
  {
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
    stock: 50,
    images: ["../images/xbox.png", "../images/xbox.png", "../images/xbox.png"],
  },
  {
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
    stock: 49,
    images: ["../images/ps5.png", "../images/ps5.png", "../images/ps5.png"],
  },
  {
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
    stock: 64,
    images: [
      "../images/sillaGamer.png",
      "../images/sillaGamer.png",
      "../images/sillaGamer.png",
    ],
  },
  {
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
    stock: 34,
    images: [
      "../images/sillaGamer2.png",
      "../images/sillaGamer2.png",
      "../images/sillaGamer2.png",
    ],
  },
  {
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
    stock: 60,
    images: [
      "../images/sillaGamer3.png",
      "../images/sillaGamer3.png",
      "../images/sillaGamer3.png",
    ],
  },
  {
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
    stock: 64,
    images: [
      "../images/computadora.png",
      "../images/computadora.png",
      "../images/computadora.png",
    ],
  },
  {
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
    stock: 10,
    images: [
      "../images/computadora2.png",
      "../images/computadora2.png",
      "../images/computadora2.png",
    ],
  },
  {
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
    stock: 56,
    images: [
      "../images/computadora3.png",
      "../images/computadora3.png",
      "../images/computadora3.png",
    ],
  },
];
