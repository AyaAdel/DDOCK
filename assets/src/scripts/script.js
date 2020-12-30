const header = document.getElementById('header');
const eng = document.getElementById('eng');
const dt = document.getElementById('dt');
const behind = document.getElementById('behind');
const formSearch = document.getElementById('formSearch');
const mobSearch = document.getElementById('mobSearch');

const displayMenu = () => {
  header.classList.toggle('display-menu');
};

const hideMenu = () => {
  header.classList.remove('display-menu');
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

const displayTeamContact = (element) => element.classList.add('active');

const hideTeamContact = (element) => element.classList.remove('active');

const changeStar = (element) => {
  element.classList.toggle('favorite');
};

$(document).ready(function () {
  $('.js-example-basic-single').select2();
});
