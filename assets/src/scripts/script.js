const header = document.getElementById('header');
const eng = document.getElementById('eng');
const dt = document.getElementById('dt');
const behind = document.getElementById('behind');
const formSearch = document.getElementById('formSearch');
const mobSearch = document.getElementById('mobSearch');
const btnCollapse1 = document.getElementById('btnCollapse1');
const faAngleDown1 = document.getElementById('faAngleDown1');
const faAngleUp1 = document.getElementById('faAngleUp1');
const btnCollapse2 = document.getElementById('btnCollapse2');
const faAngleDown2 = document.getElementById('faAngleDown2');
const faAngleUp2 = document.getElementById('faAngleUp2');
const btnCollapse3 = document.getElementById('btnCollapse3');
const faAngleDown3 = document.getElementById('faAngleDown3');
const faAngleUp3 = document.getElementById('faAngleUp3');
const btnCollapse4 = document.getElementById('btnCollapse4');
const faAngleDown4 = document.getElementById('faAngleDown4');
const faAngleUp4 = document.getElementById('faAngleUp4');

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

const displayContentFromBtnCollapse1 = () => {
  faAngleDown1.classList.toggle('hide');
  faAngleUp1.classList.toggle('show');
};

const displayContentFromBtnCollapse2 = () => {
  faAngleDown2.classList.toggle('hide');
  faAngleUp2.classList.toggle('show');
};

const displayContentFromBtnCollapse3 = () => {
  faAngleDown3.classList.toggle('hide');
  faAngleUp3.classList.toggle('show');
};

const displayContentFromBtnCollapse4 = () => {
  faAngleDown4.classList.toggle('hide');
  faAngleUp4.classList.toggle('show');
};

const changeStar = (element) => {
  element.classList.toggle('favorite');
};

$(document).ready(function () {
  $('.js-example-basic-single').select2();
});
