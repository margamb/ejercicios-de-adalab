'use strict';

const page = document.querySelector('.js-page');
const face = document.querySelector('.js-face');
const select = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');

const update = function () {
  changeSmile();
  changeBackground();
};

const changeSmile = function () {
  const selectValue = select.value;
  face.innerHTML = selectValue;
};

const changeBackground = function () {
  const number = parseInt(Math.floor(Math.random() * Math.floor(100)));
  console.log(number);
  if (number % 2 === 1) {
    page.classList.add('fireChileno');
  } else {
    page.classList.remove('fireChileno');
  }
};

btn.addEventListener('click', update);
