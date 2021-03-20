$(document).ready(function () {
  //MILESTONE 1

  //Definire un array di oggetti; ogni oggetto rappresenta un gatto,
  //che è caratterizzato da: nome, età, colore e sesso.
  const cats = [
    {
      nome: 'Mafalda',
      eta: 12,
      colore: 'nero',
      sesso: 'femmina',
    },
    {
      nome: 'Cesare',
      eta: 3,
      colore: 'rosso',
      sesso: 'maschio',
    },
    {
      nome: 'Morgana',
      eta: 7,
      colore: 'grigio',
      sesso: 'femmina',
    },
    {
      nome: 'Anselmo',
      eta: 20,
      colore: 'bianco',
      sesso: 'maschio',
    },
  ];
  // Tramite la funzione .forEach(), stampare in pagina tutti i gattini,
  // ciascuno con il proprio colore e il proprio nome.
  cats.forEach((item) => {
    $('#cats').append(`<li>${item.nome} è di colore ${item.colore}</li>`)
  });

  //MILESTONE 2

  // Dividere i gatti in due contenitori distinti in base al sesso
  const maschi = cats.filter((element) => element.sesso == 'maschio');
  const femmine = cats.filter((element) => element.sesso == 'femmina');

  //aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.
  //Il colore del fiocco deve essere più tenue se il gatto è più giovane,
  //più scuro se il gatto è più vecchio.
  const opacityMaschi = [];
  maschi.forEach((item) => {
    let copyitem;
    if (item.eta < 10) {
      copyitem = {... item, opacity: 1};
    } else if (item.eta >= 10) {
      copyitem ={... item, opacity: 0.5};
    }
    $('#cats-opacity').append(`<li class="azzurro">${item.nome} è di colore ${item.colore} <i style = "opacity:${copyitem.opacity};" class="fas fa-ribbon"></i> </li>`)
    opacityMaschi.push(copyitem);

  });

  const opacityFemmine = [];
  femmine.forEach((item) => {
    let copyitem;
    if (item.eta < 10) {
      copyitem = {... item, opacity: 1};
    } else if (item.eta >= 10) {
      copyitem ={... item, opacity: 0.5};
    }
    $('#cats-opacity').append(`<li class="rosa">${item.nome} è di colore ${item.colore} <i style = "opacity:${copyitem.opacity};" class="fas fa-ribbon"></i> </li>`)
    opacityFemmine.push(copyitem);

  });

  // MILESTONE 3

  // Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio,
  const catsOrder = [...opacityFemmine, ...opacityMaschi];
  // inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.
  //con .map
  newcatsOrder = catsOrder.map((item)=>{
    const{nome, colore, opacity}=item;
    return {nome, colore, opacity};
  });
  console.log(newcatsOrder);

  //metodo alternativo con la cancellazione della proprietà tramite delete
  // for (var i = 0; i < catsOrder.length; i++) {
  //   delete catsOrder[i].eta;
  //   delete catsOrder[i].sesso;
  // }
  // console.log(catsOrder);

});
