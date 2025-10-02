window.onload = function() {
  let numeros = ["A","J","Q","K","2","3","4","5","6","7","8","9"];

  let grupoPalos = [
    { simbolo: "♠", color: "black" }, 
    { simbolo: "♣", color: "black" },  
    { simbolo: "♥", color: "red" },   
    { simbolo: "♦", color: "red" }     
  ];

  let indicePalo = Math.floor(Math.random() * grupoPalos.length);
  let palo = grupoPalos[indicePalo];


  let indiceNumero = Math.floor(Math.random() * numeros.length);
  let numero = numeros[indiceNumero];


  document.getElementById("arriba").innerHTML =
    `<span style="color:${palo.color}">${palo.simbolo}</span>`;

  document.getElementById("numero").innerHTML =
    `<span style="color:${palo.color}">${numero}</span>`;

  document.getElementById("abajo").innerHTML =
    `<span style="color:${palo.color}">${palo.simbolo}</span>`;
};
