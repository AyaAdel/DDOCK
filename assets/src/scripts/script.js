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

const diaplaySelectItems = (element) => element.parentElement.classList.toggle('show-items');

const radioChecked = (element) => element.parentElement.classList.toggle('checked');

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

const searchEmployees = () => {
  let contactEmployees = document.getElementById('contactEmployees');
  let filter = contactEmployees.value.toUpperCase();
  let specificEmployees = document.getElementById('specificEmployees');
  let li = specificEmployees.getElementsByTagName('li');

  for (let i = 0; i < li.length; i++) {
    let textValue = li[i].textContent || li[i].innerText;

    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }

  let specificEmployeesListWrapper = document.getElementsByClassName('specific-employees-list-wrapper');

  for (let i = 0; i < specificEmployeesListWrapper.length; i++) {
    let childrenLi = specificEmployeesListWrapper[i].childNodes[1].childNodes;
    let allHidden = false;

    for (let v = 0; v < childrenLi.length; v++) {
      if (getComputedStyle(childrenLi[v]).display !== 'none') {
        allHidden = false;
        break;
      }
      allHidden = true;
    }

    if (allHidden) {
      specificEmployeesListWrapper[i].childNodes[0].style.display = 'none';
      specificEmployeesListWrapper[i].style.display = 'none';
    } else {
      specificEmployeesListWrapper[i].childNodes[0].style.display = '';
      specificEmployeesListWrapper[i].style.display = '';
    }
  }
};

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

var jobNumbers;

(function () {
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'scripts/jobNumber.json');
  xhr.send();

  xhr.onload = function () {
    jobNumbers = JSON.parse(xhr.responseText);
  };
})();

const jobNumberContainer = document.getElementById('jobNumberContainer');

var jobNumberSelect = function () {
  const jobNumber = document.getElementById('jobNumber');
  const singleDropdown = document.getElementById('singleDropdown');
  const displayRadioJob = document.getElementById('displayRadioJob');
  const closeJob = document.getElementById('closeJob');
  let filter = jobNumber.value.toUpperCase();
  const jobNumberSelected = jobNumberContainer.getElementsByClassName('job-number-selected');

  closeJob.classList.add('show');

  if (filter.length >= 4) {
    let filterJobNumbers = jobNumbers.filter((item) => item.id.includes(filter));

    singleDropdown.innerHTML = '';

    for (let job of filterJobNumbers) {
      let matchselectedJob = false;
      for (let selectedJob of jobNumberSelected) {
        if (selectedJob.childNodes[1].innerText === job.id) {
          matchselectedJob = true;
        }
      }
      if (!matchselectedJob) {
        singleDropdown.innerHTML += `<li onclick="setValue(this)">${job.text}</li>`;
        closeJob.classList.add('show');
      }

      if (singleDropdown.length !== 0 || jobNumber.value !== '') {
        displayRadioJob.classList.add('show-list');
      } else {
        displayRadioJob.classList.remove('show-list');
      }
    }
  } else {
    filterJobNumbers = [];
    singleDropdown.innerHTML = '';
    closeJob.classList.remove('show');
  }
};

const setValue = (element) => {
  jobNumberContainer.innerHTML += `<div class="job-number-selected">
  <span>
  ${element.innerText.substring(0, 6)}
  </span>
  <div onclick="removeJob(this)"><i class="fa fa-times" aria-hidden="true"></i></div>
  </div>`;
  element.classList.add('hide');
  closeJob.classList.add('show');
};

const removeJob = (element) => {
  element.parentElement.remove();
  jobNumberSelect();
};

const clearJob = () => {
  jobNumber.value = '';
  closeJob.classList.remove('show');
  singleDropdown.innerHTML = '';
};

const forChange = document.getElementById('forChange');
const btnCollapseFirst = document.getElementById('btnCollapseFirst');
const btnCollapseSecond = document.getElementById('btnCollapseSecond');
const selectBtnFirst = document.getElementById('selectBtnFirst');
const selectBtnSecond = document.getElementById('selectBtnSecond');

const displayMaskBackgroundForFirstModel = () => forChange.classList.toggle('display-first-model');
const removeMaskBackground = () => {
  forChange.classList.remove('display-first-model');
  forChange.classList.remove('display-second-model');
  btnCollapseFirst.classList.remove('show');
  btnCollapseSecond.classList.remove('show');
  selectBtnFirst.setAttribute('aria-expanded', 'false');
  selectBtnSecond.setAttribute('aria-expanded', 'false');
};

const displayMaskBackgroundForSecondModel = () => forChange.classList.toggle('display-second-model');

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