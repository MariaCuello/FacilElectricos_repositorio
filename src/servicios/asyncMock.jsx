const electrodomesticos = 
[
    {
      "id": 1,
      "nombre": "Televisor",
      "marca": "Samsung",
      "modelo": "Smart TV 55RU7100",
      "precio": 599.99,
      "imagen": "./assets/cocina.jpg",
      "oferta": false,
    },
    {
      "id": 2,
      "nombre": "Lavadora",
      "marca": "Whirlpool",
      "modelo": "WFW5620HW",
      "precio": 899.00,
      "imagen": "./assets/cocina.jpg",
      "oferta": false,
    },
    {
      "id": 3,
      "nombre": "Refrigerador",
      "marca": "LG",
      "modelo": "LFXC22596S",
      "precio": 1599.50,
      "imagen": "./assets/cocina.jpg",
      "oferta": false,
    },
    {
      "id": 4,
      "nombre": "Aspiradora",
      "marca": "Dyson",
      "modelo": "V11 Animal",
      "precio": 499.00,
      "imagen": "./assets/cocina.jpg",
      "oferta": true,
    },
    {
      "id": 5,
      "nombre": "Microondas",
      "marca": "Panasonic",
      "modelo": "NN-SN651B",
      "precio": 129.99,
      "imagen": "./assets/cocina.jpg",
      "oferta": false,
    },
    {
      "id": 6,
      "nombre": "Cafetera",
      "marca": "Keurig",
      "modelo": "K-Elite",
      "precio": 129.95,
      "imagen": "./assets/cocina.jpg",
      "oferta": false,
    },
    {
      "id": 7,
      "nombre": "Licuadora",
      "marca": "Ninja",
      "modelo": "Professional BL610",
      "precio": 89.99,
      "imagen": "./assets/cocina.jpg",
      "oferta": true,
    },
    {
      "id": 8,
      "nombre": "Horno eléctrico",
      "marca": "Breville",
      "modelo": "BOV900BSS",
      "precio": 349.95,
      "imagen": "./assets/cocina.jpg",
      "oferta": false,
    },
    {
      "id": 9,
      "nombre": "Ventilador",
      "marca": "Honeywell",
      "modelo": "HYF290B",
      "precio": 69.99,
      "imagen": "./assets/cocina.jpg",
      "oferta": false,
    },
    {
      "id": 10,
      "nombre": "Aspiradora robot",
      "marca": "iRobot",
      "modelo": "Roomba 675",
      "precio": 249.99,
      "imagen": "./assets/cocina.jpg",
      "oferta": true,
    },
    {
      "id": 11,
      "nombre": "Licuadora de inmersión",
      "marca": "Braun",
      "modelo": "MQ505",
      "precio": 39.95,
      "imagen": "./assets/cocina.jpg",
      "oferta": false,
    },
    {
      "id": 12,
      "nombre": "Plancha de vapor",
      "marca": "Rowenta",
      "modelo": "DW5080",
      "precio": 79.99,
      "imagen": "./assets/cocina.jpg",
      "oferta": true,
    },
    {
      "id": 13,
      "nombre": "Hervidor eléctrico",
      "marca": "Hamilton Beach",
      "modelo": "40880",
      "precio": 29.99,
      "imagen": "./assets/cocina.jpg",
      "oferta": false,
    },
    {
      "id": 14,
      "nombre": "Ventilador de torre",
      "marca": "Lasko",
      "modelo": "T42950",
      "precio": 59.99,
      "imagen": "./assets/cocina.jpg",
      "oferta": false,
    },
    {
      "id": 15,
      "nombre": "Freidora de aire",
      "marca": "Ninja",
      "modelo": "AF101",
      "precio": 99.99,
      "imagen": "./assets/cocina.jpg",
      "oferta": true,
    },
    {
      "id": 16,
      "nombre": "Cafetera espresso",
      "marca": "De'Longhi",
      "modelo": "EC155",
      "precio": 149.99,
      "imagen": "./assets/cocina.jpg",
      "oferta": true,
    },
    {
      "id": 17,
      "nombre": "Tostadora",
      "marca": "Cuisinart",
      "modelo": "CPT-160",
      "precio": 49.95,
      "imagen": "./assets/cocina.jpg",
      "oferta": true,
    },
    {
      "id": 18,
      "nombre": "Robot de cocina",
      "marca": "Instant Pot",
      "modelo": "Duo Evo Plus",
      "precio": 139.95,
      "imagen": "./assets/cocina.jpg",
      "oferta": true
    },
    {
      "id": 19,
      "nombre": "Batidora",
      "marca": "KitchenAid",
      "modelo": "KSM75WH",
      "precio": 279.00,
      "imagen": "./assets/cocina.jpg",
      "oferta": false,
    },
    {
      "id": 20,
      "nombre": "Calefactor",
      "marca": "Dyson",
      "modelo": "HP01",
      "precio": 329.99,
      "imagen": "./assets/cocina.jpg",
      "oferta": true,
    }
  ];
  
  function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(electrodomesticos);
        }, 2000);
    })
  }

  export function getDataProducto(idURL) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(electrodomesticos.find ((producto) => producto.id === parseInt(idURL)));
        }, 2000);
    })
  }

  export function getDataOferta(oferta) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(electrodomesticos.filter ((producto) => producto.oferta === oferta));
        }, 2000);
    })
  }

  export default getData;