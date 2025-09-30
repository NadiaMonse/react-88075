const products = [
  {
    "id": 1,
    "title": "Taza de Café Programador ☕",
    "img": "https://i.pinimg.com/736x/da/30/05/da300559ddd9d349dc5868109a2b9425.jpg",
    "description": "Una taza de cerámica con el lema 'I code because I love coffee'. Es perfecta para desarrolladores y amantes de la cafeína.",
    "price": 12.99,
    "stock": 55,
    "category": "Hogar"
  },
  {
    "id": 2,
    "title": "Teclado Mecánico RGB Pro",
    "img": "https://i.pinimg.com/200x150/c4/cd/0d/c4cd0d74c1aaeb790281452833bca7f3.jpg",
    "description": "Teclado mecánico de tamaño completo con interruptores táctiles y retroiluminación RGB personalizable.",
    "price": 89.99,
    "stock": 30,
    "category": "Electrónica"
  },
  {
    "id": 3,
    "title": "Ratón Ergonómico Vertical",
    "img": "https://i.pinimg.com/originals/e5/6f/2b/e56f2b4370c7a8eb5de037e00c6b85ac.jpg",
    "description": "Ratón inalámbrico con diseño vertical para reducir la tensión de la muñeca. Mejora la postura de trabajo.",
    "price": 35.50,
    "stock": 70,
    "category": "Electrónica"
  },
  {
    "id": 4,
    "title": "Sudadera 'Hello World!'",
    "img": "https://i.pinimg.com/736x/64/60/bb/6460bb3e8396f40b3de07ab977d40d09.jpg",
    "description": "Sudadera con capucha y un diseño minimalista. Ideal para días de frío frente a la terminal.",
    "price": 45.00,
    "stock": 40,
    "category": "Ropa"
  },
  {
    "id": 5,
    "title": "Libro: El Arte del Diseño UX",
    "img": "https://i.pinimg.com/564x/42/cf/bb/42cfbbea259a912afb4f05996e621359.jpg",
    "description": "Guía esencial para la creación de experiencias de usuario intuitivas y efectivas. Tapa blanda.",
    "price": 25.95,
    "stock": 22,
    "category": "Libros"
  },
  {
    "id": 6,
    "title": "Monitor Curvo 27' 144Hz",
    "img": "https://i.pinimg.com/736x/45/bd/b9/45bdb9d27726a4140e6bc4233dc4f1ac.jpg",
    "description": "Pantalla LED curva de 27 pulgadas, resolución 2K y una tasa de refresco de 144Hz. Experiencia inmersiva.",
    "price": 349.99,
    "stock": 15,
    "category": "Electrónica"
  },
  {
    "id": 7,
    "title": "Webcam HD 1080p con Micrófono",
    "img": "https://i.pinimg.com/564x/50/cc/af/50ccafd2815cf1666805573f74ab3cc8.jpg",
    "description": "Webcam con resolución Full HD 1080p y micrófono integrado. Perfecta para videollamadas.",
    "price": 29.99,
    "stock": 65,
    "category": "Electrónica"
  },
  {
    "id": 8,
    "title": "Mochila Antirrobo para Laptop 15.6''",
    "img": "https://i.pinimg.com/736x/50/03/56/50035624237f8c9b90a022d44728f752.jpg",
    "description": "Mochila resistente al agua con compartimentos ocultos y puerto de carga USB integrado.",
    "price": 55.75,
    "stock": 48,
    "category": "Accesorios"
  },
  {
    "id": 9,
    "title": "Set de Bolígrafos Gel (5 Colores)",
    "img": "https://i.pinimg.com/236x/f2/43/2d/f2432de218025fb245e75f6b11845ebb.jpg",
    "description": "Bolígrafos de tinta de gel de secado rápido, ideales para notas y bocetos. Punta fina de 0.5mm.",
    "price": 9.50,
    "stock": 90,
    "category": "Papelería"
  },
  {
    "id": 10,
    "title": "Disco Duro SSD Externo 1TB (USB-C)",
    "img": "https://i.pinimg.com/originals/88/d3/37/88d33785868b6cc31928bc5dba0626a3.jpg",
    "description": "Unidad de estado sólido portátil de 1TB. Altas velocidades de transferencia con conexión USB-C.",
    "price": 99.99,
    "stock": 25,
    "category": "Electrónica"
  },
  {
    "id": 11,
    "title": "Camiseta 'Bug' - Debugging Mode",
    "img": "https://i.pinimg.com/736x/19/dc/ee/19dcee3158ebeb029fae6b7932b2a462.jpg",
    "description": "Camiseta 100% algodón con un diseño gráfico que simula un error de código. Un clásico.",
    "price": 19.99,
    "stock": 60,
    "category": "Ropa"
  },
  {
    "id": 12,
    "title": "Alfombrilla XL (Mapa Mundi)",
    "img": "https://i.pinimg.com/736x/c7/6f/9a/c76f9aa5e706603b75d687d0a0cdb37e.jpg",
    "description": "Alfombrilla de escritorio extra grande (90x40cm) con un diseño de mapa mundi impreso en alta calidad.",
    "price": 17.00,
    "stock": 85,
    "category": "Accesorios"
  },
  {
    "id": 13,
    "title": "Silla de Oficina Ergonómica 💺",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXHzAxJLEZXoAYx_jBnqM-Tp-fMDrWMmfkog&s",
    "description": "Silla de oficina con soporte lumbar ajustable, respaldo alto y malla transpirable. Comodidad total.",
    "price": 189.99,
    "stock": 18,
    "category": "Hogar"
  },
  {
    "id": 14,
    "title": "Auriculares ANC Inalámbricos",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVzRR7OOyB64GZB4XP2KKlDoanGOVh2h_1Ag&s",
    "description": "Auriculares over-ear con cancelación activa de ruido (ANC) y hasta 30 horas de reproducción.",
    "price": 129.50,
    "stock": 35,
    "category": "Electrónica"
  },
  {
    "id": 15,
    "title": "Cuaderno Bullet Journal A5",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKSAGcy_j1emGRrDTHYngN8PASB2lheGFtg&s",
    "description": "Cuaderno de tapa dura A5 con páginas punteadas. Ideal para organización, bocetos y 'bullet journaling'.",
    "price": 7.99,
    "stock": 120,
    "category": "Papelería"
  },
  {
    "id": 16,
    "title": "Batería Externa 20000mAh",
    "img": "/images/powerbank_20k.jpg",
    "description": "Power bank de alta capacidad con doble puerto de carga USB. Pantalla LED de nivel de batería.",
    "price": 40.00,
    "stock": 50,
    "category": "Accesorios"
  },
  {
    "id": 17,
    "title": "Kit de Herramientas para PC (32 en 1)",
    "img": "/images/kit_herramientas.jpg",
    "description": "Juego completo de destornilladores de precisión y herramientas para el mantenimiento de dispositivos electrónicos.",
    "price": 22.90,
    "stock": 44,
    "category": "Herramientasjpg"
  },
  {
    "id": 18,
    "title": "Cable HDMI 2.1 (4K/8K)",
    "img": "/images/cable_hdmi.jpg",
    "description": "Cable HDMI de 2 metros con soporte para 4K a 120Hz y 8K a 60Hz. Conectores bañados en oro.",
    "price": 15.25,
    "stock": 95,
    "category": "Electrónica"
  },
  {
    "id": 19,
    "title": "Gafas Anti Luz Azul (Gaming)",
    "img": "/images/gafas_azul.jpg",
    "description": "Gafas protectoras con filtro para reducir la fatiga visual causada por la luz azul de las pantallas.",
    "price": 14.50,
    "stock": 75,
    "category": "Accesorios"
  },
  {
    "id": 20,
    "title": "Termo Inteligente (Temp. LED)",
    "img": "/images/termo_inteligente.jpg",
    "description": "Termo de acero inoxidable con sensor de temperatura y pantalla LED en la tapa. Mantiene el calor por horas.",
    "price": 28.99,
    "stock": 38,
    "category": "Hogar"
  }
];
export default products;