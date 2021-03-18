// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa
// con le seguenti proprietà: nome e peso. Stampare a schermo la bici con
// peso minore utilizzando destructuring e template literal
console.log('ok');
$(document).ready(function () {

  const bikes = [];

  bikes.push({
    nome: 'bmx',
    peso: 3
  });
  bikes.push({
    nome: 'graziella',
    peso: 10
  });
  bikes.push({
    nome: 'mb',
    peso: 4
  });

  let index = 0;
  let min = bikes[0].peso;
  for (let i = 0; i < bikes.length; i++) {
    if (bikes[i].peso<min) {
      min = bikes[i].peso;
      index = i;
    }
  }
  
  console.log(`la bici che pesa di meno è ${bikes[index].nome} con peso di ${min}`);

});
