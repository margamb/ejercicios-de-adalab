const teachers = document.querySelector('.teachers');

const favorite = document.querySelector('.favorite');
function handleClick(event) {
  const selectTeacher = event.currentTarget;
  selectTeacher.classList.toggle('teacher--selected');
  favorite.innerHTML = 'Quitar';
  console.log('click');
}

teachers.addEventListener('click', handleClick);
