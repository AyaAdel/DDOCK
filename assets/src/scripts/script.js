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

const diaplayActiveSelect = (element) => element.classList.toggle('active');

const diaplaySelectItems = (element) => element.parentElement.classList.toggle('show-items');

const radioChecked = (element) => element.classList.toggle('checked');

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

  $('.img-parallax').each(function () {
    var img = $(this);
    var imgParent = $(this).parent();
    function parallaxImg() {
      var speed = img.data('speed');
      var imgY = imgParent.offset().top;
      var winY = $(this).scrollTop();
      var winH = $(this).height();
      var parentH = imgParent.innerHeight();

      // The next pixel to show on screen
      var winBottom = winY + winH;

      // If block is shown on screen
      if (winBottom > imgY && winY < imgY + parentH) {
        // Number of pixels shown after block appear
        var imgBottom = (winBottom - imgY) * speed;
        // Max number of pixels until block disappear
        var imgTop = winH + parentH;
        // Porcentage between start showing until disappearing
        var imgPercent = (imgBottom / imgTop) * 100 + (50 - speed * 50);
      }
      img.css({
        top: imgPercent + '%',
        transform: 'translate(-50%, -' + imgPercent + '%)',
      });
    }
    $(document).on({
      scroll: function () {
        parallaxImg();
      },
      ready: function () {
        parallaxImg();
      },
    });
  });
});

var defaultMessage = 'Upload Or Drop your CV/Portfolio',
  deleteMessage = 'Remove file',
  cancelMessage = 'Cancel upload',
  fileTooBig = 'Your attachment is too big! Please limit them to 30MB';

if (document.getElementById('fileUpload')) {
  var dropzone2 = new Dropzone('#fileUpload', {
    paramName: 'file',
    url: 'http://ddock.webofficeit.com/',
    addRemoveLinks: true,
    createImageThumbnails: false,
    dictDefaultMessage: defaultMessage,
    dictRemoveFile: deleteMessage,
    dictCancelUpload: cancelMessage,
    dictFileTooBig: fileTooBig,
    maxFiles: 3,
    maxFilesize: 30,
  });
}
