const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

/* ejerc 1 */

pizzas.forEach((pizza)=> {
  if (pizza.id % 2 !== 0) {
    console.log(pizza)
  }
})

/* ejerc 2 */

pizzas.forEach ((pizza) => {
  if (pizza.precio < 600 ){
    console.log (`La ${pizza.nombre} tiene un costo menor a $600`);
  }
});

/* ejerc 3 */

for (const pizza of pizzas) {
  console.log(`La pizza ${pizza.nombre} sale $${pizza.precio} pesos`);}

/* ejerc 4 */
for (const pizza of pizzas){
  console.log( `La pizza ${pizza.nombre} tiene los sig ingredientes ${pizza.ingredientes}`)
}


/* Para visualizar los datos de salida utilizo la extension Quokka la cual muestra en el mismo editor los valores de salida */