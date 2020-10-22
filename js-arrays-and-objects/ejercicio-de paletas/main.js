'use strict';

const palettesContainer = document.querySelector('.js-palettes-container');
let palettes = []; //?
let favoritesList = [];

function getData() {
  fetch(
    'https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json'
  )
    // .then(function (response) {
    //   return response.json();
    // })
    .then((response) => response.json())
    .then(function (data) {
      palettes = data.palettes; // agregamos las paletas a un nuevo array
      //console.log(data.palettes);
      paintPalettes();
      listenPalettes();
      setLocalStorage();
    });
}

//render -> solo pinta las paletas y la tengo q llamar dentr de fetch
function paintPalettes() {
  let html = '';

  for (let i = 0; i < palettes.length; i++) {
    let classF;
    const favoriteIndex = favoritesList.indexOf(clicked);
    const ifavorite = favoriteIndex !== -1;

    if (favorite === true) {
      classF = 'palette item favorit'; // esta clase estar en el css
    } else {
      classF = '';
    }

    html += `<li class="js-palette-item ${classF}" id = "${[i]}">`;
    html += `<h2 class="">${palettes[i].name}</h2>`;
    html += '<div class="">';
    for (const color of palettes[i].colors) {
      html += `<div class="color__item" style="background-color: #${color}">1</div>`;
    }
    html += '</div>';
    html += '</li>';
  }
  palettesContainer.innerHTML = html;
}

//crear favoritos y localStorage
const favouritesPalette = function (ev) {
  const clicked = parseInt(ev.currentTarget.id); //lo convierto en un entero
  //   const isFavorite = favoritesList.find((click) => {
  //     return click;
  //   });
  const indexFav = favoritesList.indexOf(clicked);
  const isFavorite = indexFav !== -1; // falso o true??
  if (isFavorite === false) {
    console.log('lo meto');
    favoritesList.push(clicked);
  } else {
    console.log('lo quito');
    let fa = isFavorite;
    favoritesList.splice(indexFav, 1); // indice del elemento q queremos seleccionar y borr
  }
  paintPalettes();
  listenPalettes();
};

function listenPalettes() {
  const paletteItems = document.querySelector('.js-palette-item');
  for (const paletteItem of paletteItems) {
    paletteItem.addEventListener('click', favouritesPalette);
  }
}

//crear favoritos y localStorage
function setLocalStorage() {
  localStorage.setItem('palettes', JSON.stringify(palettes));
  //localStorage.setItem("palettes", JSON.stringify(favoritesList)); // favoritos
}

function getLocalStorage() {
  const localPalette = localStorage.getItem('palettes');
  const localPaletteJ = JSON.parse(localPaletteJ);
  if (localPaletteJ === null) {
    getData();
  } else {
    palettes = localPaletteJ;
    paintPalettes();
    listenPalettes();
  }
}

getData();
//listenPalettes();
