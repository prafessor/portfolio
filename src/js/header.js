const navBtn = document.querySelector(".navigation__btn");
const navList = document.querySelector(".navigation__list");

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