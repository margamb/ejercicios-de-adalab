'use strict';

// variables y constantes
const radioButtons = document.querySelectorAll('.radiobtn');
const container = document.querySelector('.container');

// bucle for que ejecuta un evento cuando cambia el raton
for (const button of radioButtons) {
  button.addEventListener('change', changeTheme);
}

// funcion que cambia el fondo en funcion del checked
function changeTheme(event) {
  if (event.target === radioButtons[0]) {
    //radioButtons[0] es el light
    container.classList.add('light');
    container.classList.remove('dark');
  } else if (event.target === radioButtons[1]) {
    //radioButtons[1] es el dark
    container.classList.add('dark');
    container.classList.remove('light');
  }
  // bucle for que guard en localStorage el valor checkeado del input
  for (const button of radioButtons) {
    if (button.checked) {
      localStorage.setItem('color', button.value);
    }
    console.log(button.value);
  }
}

//funcion que recoge los valores guardados del localStorage al cargar la pagina(refrescar)
function uploadTheme() {
  const colorTheme = localStorage.getItem('colorTheme');
  if (colorTheme === 'light') {
    container.classList.add('light');
    container.classList.remove('dark');
  } else {
    container.classList.add('dark');
    container.classList.remove('light');
  }
  console.log(colorTheme);
}

uploadTheme();
