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

const jobCardSlider = new Swiper('.block-job__slider', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  loopedSlides: 150,
  freeMode: true,
  freeModeMomentumRatio: 0.6,
  freeModeMomentumVelocityRatio: 0.6,
  wrapperClass: 'block-job__slider-container',
  slideClass: 'block-job__slider-item',
  slideActiveClass: 'is-active',
});

$(document).ready(function () {
  $('.js-example-basic-single').select2();

  $('.marking-design-slider').slick({
    prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  });
});
