const navBtn = document.querySelector(".navigation__btn");
const navList = document.querySelector(".navigation__list");

const modalMenuEl = document.querySelector(".modal-menu__overlay");
const modalOpenBtn = document.querySelector(".menu-burger");
const modalCloseBtn = document.querySelector(".modal-menu__btn-x");

const onOutsideListClick = (evt) => {
  if(!navList.contains(evt.target)) {
    navList.classList.add("display-none");

    document.removeEventListener("click", onOutsideListClick);
  }
};

const onNavBtnClick = (evt) => {
  evt.stopPropagation()
  const isHidden = navList.classList.toggle("display-none");

  if(!isHidden) {
    document.addEventListener("click", onOutsideListClick);
  }
}

navBtn.addEventListener("click", onNavBtnClick);

//  operation with modal menu

modalOpenBtn.addEventListener("click", () => {
  modalMenuEl.classList.add("open");
  document.body.classList.add("no-scroll");
})

modalCloseBtn.addEventListener("click", () => {
  modalMenuEl.classList.remove("open");
  document.body.classList.remove("no-scroll");
})