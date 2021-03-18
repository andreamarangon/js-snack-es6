// Creare un array di oggetti di squadre di calcio. Ogni squadra
// avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte
// settate a 0. Generare numeri random al posto degli 0 nelle
// proprietà: Punti fatti e falli subiti. Infine usando la
// destrutturazione creiamo un nuovo array i cui elementi contengono
// solo nomi e falli subiti e stampiamo tutto in console.
$(document).ready(function () {

  const squadre = [
    {
      nome: 'Juventus',
      puntiFatti: 0,
      falli: 0,
    },
    {
      nome: 'Milan',
      puntiFatti: 0,
      falli: 0,
    },
    {
      nome: 'Inter',
      puntiFatti: 0,
      falli: 0,
    }
  ];
  let newDati = [];
  for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = randomNumberInRange(0, 50);
    squadre[i].falli = randomNumberInRange(0, 50);
    const {nome, falli} = squadre[i];
    newDati.push({nome, falli});
  }
  console.log(squadre);
  console.log(newDati);

});


//funzione per generare un numero random in range
function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log('Non sono numeri');
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
