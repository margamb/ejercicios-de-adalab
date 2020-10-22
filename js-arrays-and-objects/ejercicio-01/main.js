'use strict';

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20,
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21,
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22,
      },
    ],
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23,
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24,
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25,
      },
    ],
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26,
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27,
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

// ejercicio -01- añadir una ul li
// const result1 = document.querySelector('.js-result');
// for (const promo of promos) {
//   console.log(promo.name);
//   result1.innerHTML += `<li>${promo.name}</li>`;
// }

// ejercicio - 02
// const result2 = document.querySelector('.js-result');
// for (const promo of promos) {
//   result2.innerHTML += `<li><p>Nombre: ${promo.name}</p><p>Promo: ${promo.promo}</p></li>`;
//   console.log(`Nombre: ${promo.name}`);
//   console.log(`Promo: ${promo.promo}`);
// }

// ejercicio - 03
const result3 = document.querySelector('.js-result');
function render() {
  let html = '';
  for (const promo of promos) {
    html += '<li>';
    html += `<p>Nombre: ${promo.name}</p>`;
    html += `<p>Promo: ${promo.promo}</p>`;
    html += `<p>Numero de las alumnas: ${promo.students.length}</p>`; //length
    html += '</li>';
  }
  result3.innerHTML = html;
}
// render();

//ejercicio - 04
const result4 = document.querySelector('.js-result');
function render4() {
  let html = '';
  html += '<ul>';
  for (const promo of promos) {
    html += '<li>';
    html += `<p>Nombre: ${promo.name}</p>`;
    html += '<ul>';
    for (const student of promo.students) {
      html += `<li>${student.name},  ${student.age}</li>`;
    }
    html += '</ul>';
    html += '</li>';
  }
  html += '</ul>';
  result4.innerHTML = html;
}
// render4();

//ejercicio - 5
const result5 = document.querySelector('.js-result');
function render5() {
  let html = '';
  html += '<ul>';
  for (const promo of promos) {
    html += '<li>';
    html += `<p>Nombre: ${promo.name}</p>`;
    html += '<ul>';
    for (const student of promo.students) {
      html += `<li id="${student.id}">${student.name},  ${student.age}</li>`;
    }
    html += '</ul>';
    html += '</li>';
  }
  html += '</ul>';
  result5.innerHTML = html;
}
// render5();
// console.log(result5);

//ejercicio -6

const result6 = document.querySelector('.js-result');
function render6() {
  let html = '';
  html += '<ul>';
  for (const promo of promos) {
    html += '<li>';
    html += `<p>Nombre: ${promo.name}</p>`;
    html += '<ul>';
    const evenAge = promo.students.filter((student) => student.age % 2 === 0);
    for (const student of evenAge) {
      html += `<li ${student.id}>${student.name},  ${student.age}</li>`;
    }
    // for (const student of promo.students) {
    //   if (student.age % 2 === 0) {
    //     html += `<li ${student.id}>${student.name},  ${student.age}</li>`;
    //   }
    // }
    html += '</ul>';
    html += '</li>';
  }
  html += '</ul>';
  result6.innerHTML = html;
}
// render6();

//ejercicio - 07

const result7 = document.querySelector('.js-result');
function render7() {
  let html = '';
  html += '<ul>';
  for (const promo of promos) {
    html += '<li>';
    html += `<p>Nombre: ${promo.name}</p>`;
    html += '<ul>';
    const inGoogle = promo.students.filter((student) =>
      studentsWorkingInGoogle.includes(student.id)
    );
    for (const student of inGoogle) {
      html += `<li ${student.id}>${student.name},  ${student.age}</li>`;
    }
    html += '</ul>';
    html += '</li>';
  }
  html += '</ul>';
  result7.innerHTML = html;
}
//render7();

//ejercicio - 8
const result8 = document.querySelector('.js-result');
function render8() {
  let html = '';
  html += '<ul>';
  for (const promo of promos) {
    html += '<li>';
    html += `<p>Nombre: ${promo.name}</p>`;
    html += '<ul>';
    for (const student of promo.students) {
      html += `<li id="${student.id}">${student.name},  ${student.age}</li>`;
    }
    html += '</ul>';
    html += '</li>';
  }
  html += '</ul>';
  result5.innerHTML = html;
}
// render8();
console.log(result5);

let favorite = [];
function logStudentId(ev) {
  console.log('Current target:', ev.currentTarget);
  console.log('Target:', ev.target.id);
  if (!favorite.includes(ev.target.id)) {
    favorite.push(ev.target.id);
  }
  console.log(favorite);
}
result8.addEventListener('click', logStudentId);

// DOM avanzado
const resultDom = document.querySelector('.js-result');
function renderDom() {
  let html = '';
  //html += '<ul>';
  const ul = document.createElement('li');
  for (const promo of promos) {
    //html += '<li>';
    const ul1 = document.createElement('li');
    const p = document.createElement('p');
    p.innerHTML = `Nombre: ${promo.name}`;
    ul1.appendChild(p);
    html += `<p>Nombre: ${promo.name}</p>`;
    html += '<ul>';
    const evenAge = promo.students.filter((student) => student.age % 2 === 0);
    for (const student of evenAge) {
      html += `<li ${student.id}>${student.name},  ${student.age}</li>`;
    }
    // for (const student of promo.students) {
    //   if (student.age % 2 === 0) {
    //     html += `<li ${student.id}>${student.name},  ${student.age}</li>`;
    //   }
    // }
    html += '</ul>';
    html += '</li>';
  }
  html += '</ul>';
  resultDomm.innerHTML = html;
}
// renderDom();

function $(elType) {
  return document.createElement(elType);
}
