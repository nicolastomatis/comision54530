const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');

  if (!menu.classList.contains('active')) {
    setTimeout(() => {
      menu.classList.add('inactive');
    }, 500);
  } else {
    menu.classList.remove('inactive');
  }
});