const modalCooperation = document.querySelector('.modal-cooperation__overlay');

const onBackgroundOrBtnClick = evt => {
  if (
    evt.target === modalCooperation ||
    evt.target.nodeName === 'svg' ||
    evt.target.nodeName === 'button' ||
    evt.target.nodeName === 'use'
  ) {
    modalCooperation.classList.remove('open');
    document.body.classList.remove('no-scroll');

    modalCooperation.removeEventListener('click', onBackgroundOrBtnClick);
    document.removeEventListener('keydown', onEscDown);
  }
};

const onEscDown = evt => {
  if (evt.code === 'Escape') {
    modalCooperation.classList.remove('open');
    document.body.classList.remove('no-scroll');

    modalCooperation.removeEventListener('click', onBackgroundOrBtnClick);
    document.removeEventListener('keydown', onEscDown);
  }
};

export const openModalCooperation = () => {
  modalCooperation.classList.add('open');
  document.body.classList.add('no-scroll');

  modalCooperation.addEventListener('click', onBackgroundOrBtnClick);
  document.addEventListener('keydown', onEscDown);
};
