const modalCooperation = document.querySelector('.modal-cooperation__overlay');

const onBackgroundOrBtnClick = evt => {

  if (
    evt.target === modalCooperation ||
    evt.target.nodeName === 'svg' ||
    evt.target.nodeName === 'button' ||
    evt.target.nodeName === 'use'
  ) {
    modalCooperation.classList.remove('open');
    modalCooperation.removeEventListener('click', onBackgroundOrBtnClick);
    document.removeEventListener('keydown', onEscDown);
  }
};

const onEscDown = evt => {
  if (evt.code === 'Escape') {
    modalCooperation.classList.remove('open');
    modalCooperation.removeEventListener('click', onBackgroundOrBtnClick);
    document.removeEventListener('keydown', onEscDown);
  }
};

export const openModalCooperation = () => {
  modalCooperation.classList.add('open');
  modalCooperation.addEventListener('click', onBackgroundOrBtnClick);
  document.addEventListener('keydown', onEscDown);
};
