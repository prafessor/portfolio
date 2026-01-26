const navBtn = document.querySelector('.navigation__btn');
const navList = document.querySelector('.navigation__list');

const modalMenuEl = document.querySelector('.modal-menu__overlay');
const modalOpenBtn = document.querySelector('.menu-burger');
const modalCloseBtn = document.querySelector('.modal-menu__btn-x');

const onOutsideListClick = evt => {
  if (
    !navList.contains(evt.target) ||
    evt.target.classList.contains('navigation__link')
  ) {
    navList.classList.add('display-none');

    document.removeEventListener('click', onOutsideListClick);
  }
};

const onNavBtnClick = evt => {
  evt.stopPropagation();
  const isHidden = navList.classList.toggle('display-none');

  if (!isHidden) {
    document.addEventListener('click', onOutsideListClick);
  }
};

navBtn.addEventListener('click', onNavBtnClick);

//  operation with modal menu

const onCloseClick = () => {
  modalMenuEl.classList.remove('open');
  document.body.classList.remove('no-scroll');

  modalCloseBtn.removeEventListener('click', onCloseClick);
  modalMenuEl.removeEventListener('click', onModalLinkClick);
};

const onModalLinkClick = evt => {
  if (
    evt.target.classList.contains('navigation__link') ||
    evt.target.classList.contains('modal-cooperation__btn')
  ) {
    onCloseClick();
  }
};

modalOpenBtn.addEventListener('click', () => {
  modalMenuEl.classList.add('open');
  document.body.classList.add('no-scroll');

  modalMenuEl.addEventListener('click', onModalLinkClick);
  modalCloseBtn.addEventListener('click', onCloseClick);
});
