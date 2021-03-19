console.log('ok');
$(document).ready(function () {
  //Milestone 1

  //Definire un array di oggetti; ogni oggetto rappresenta un gatto,
  //che è caratterizzato da: nome, età, colore e sesso.
  const cats = [
    {
      nome: 'Mafalda',
      eta: 12,
      colore: 'nero',
      sesso: 'femmina'
    },
    {
      nome: 'Cesare',
      eta: 3,
      colore: 'rosso',
      sesso: 'maschio'
    },
    {
      nome: 'Morgana',
      eta: 7,
      colore: 'grigio',
      sesso: 'femmina'
    },
    {
      nome: 'Anselmo',
      eta: 20,
      colore: 'bianco',
      sesso: 'maschio'
    },
  ];
  // Tramite la funzione .forEach(), stampare in pagina tutti i gattini,
  // ciascuno con il proprio colore e il proprio nome.
  cats.forEach((item) => {
    console.log(`${item.nome} è di colore ${item.colore}`);
    $('#cats').append(`<li>${item.nome} è di colore ${item.colore}</li>`)
  });

  //Milestone 2

  // Dividere i gatti in due contenitori distinti in base al sesso
  const maschi = cats.filter((element) => element.sesso == 'maschio');
  const femmine = cats.filter((element) => element.sesso == 'femmina');
  console.log(maschi);
  console.log(femmine);
  //aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.
  //Il colore del fiocco deve essere più tenue se il gatto è più giovane,
  //più scuro se il gatto è più vecchio.

  maschi.forEach((item) => {
    $('#cats').append(`<li class='azzurro'>${item.nome} è di colore ${item.colore} <i class="fas fa-ribbon"></i></li>`)
    // if (item.eta < 10) {
    //   $('li.azzurro i').addClass('young')
    // } else {
    //   $('li.azzurro i').addClass('old')
    // }
  });


  femmine.forEach((item) => {
    $('#cats').append(`<li class='rosa'>${item.nome} è di colore ${item.colore} <i class="fas fa-ribbon"></i></li>`)
    // if (item.eta < 10) {
    //   $('li.rosa i').addClass('young')
    // } else {
    //   $('li.rosa i').addClass('old')
    // }
  });

  //Il colore del fiocco deve essere più tenue se il gatto è più giovane,
  //più scuro se il gatto è più vecchio.
  cats.forEach((item) => {
    if (item.eta < 10) {
      $('li i').addClass('young');
    } else if (item.eta >= 10){
      $('li i').addClass('old');
    }
    console.log(item.eta);

  });
  // cats.forEach((item) => {
  //   let colore;
  //
  //   if(item.sesso == 'maschio') {
  //       colore = 'azzurro';
  //   }
  //
  //   else if(item.sesso == 'femmina') {
  //       colore = 'rosa';
  //   }
  //
  //   $('#cats').append(`<li class="${colore}">${item.nome} è di colore ${item.colore}<i class="fas fa-ribbon"></i></li>`)
  // });






});
