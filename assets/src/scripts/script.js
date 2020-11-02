const menubar = document.getElementById('menubar');
const close = document.getElementById('close');
const toggleMenu = document.getElementById('toggleMenu');
const eng = document.getElementById('eng');
const dt = document.getElementById('dt');
const behind = document.getElementById('behind');
const formSearch = document.getElementById('formSearch');
const mobSearch = document.getElementById('mobSearch');

const displayMenu = () => {
  menubar.classList.add('hide');
  close.classList.remove('hide');
  toggleMenu.classList.remove('hide');
  behind.classList.remove('hide');
};

const hideMenu = () => {
  close.classList.add('hide');
  toggleMenu.classList.add('hide');
  menubar.classList.remove('hide');
  behind.classList.add('hide');
};

const switchEng = () => {
  eng.classList.add('active');
  dt.classList.remove('active');
};

const switchDt = () => {
  eng.classList.remove('active');
  dt.classList.add('active');
};

const displayForm = () => {
  mobSearch.classList.add('hide');
  formSearch.classList.add('show');
};
