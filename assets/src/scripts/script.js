const menubar = document.getElementById('menubar');
const close = document.getElementById('close');
const toggleMenu = document.getElementById('toggleMenu');

const displayMenu = () => {
  menubar.classList.add('hide');
  close.classList.remove('hide');
  toggleMenu.classList.remove('hide');
};

const hideMenu = () => {
  close.classList.add('hide');
  toggleMenu.classList.add('hide');
  menubar.classList.remove('hide');
};
