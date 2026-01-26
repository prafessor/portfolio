import Swiper from 'swiper';
import { Navigation, A11y, Keyboard, Mousewheel } from 'swiper/modules';

const reviewSwaper = new Swiper('.reviewsSwiper', {
  modules: [Navigation, A11y, Keyboard, Mousewheel],

  slidesPerView: 'auto',
  spaceBetween: 16,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    enabled: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: false,
  },
});

const reviewList = document.querySelector('.reviews-swiper__wrapper');

const renderNotFound = () => {
  const wrapper = document.querySelector('.reviewsSwiper');

  reviewList.innerHTML = `<li class="swiper-slide reviews-swiper__message">Not Found</li>`;
};

const renderReviews = data => {
  const reviews = data
    .map(el => {
      const { author, avatar_url, review } = el;
      return `
      <li class="swiper-slide reviews-swiper__slide">
          <div class="reviews-swiper__container">
            <img
              class="reviews-swiper__image"
              src="${avatar_url}"
              alt="User photo"
              loading="lazy"
            />
            <p class="subtitle reviews-swiper__name">${author}</p>
            <p class="text reviews-swiper__comment">${review}</p>
          </div>
        </li>
      `;
    })
    .join('');

  reviewList.innerHTML = reviews;
};

const getReviews = async () => {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    const data = await response.json();

    if (data.length > 0) {
      renderReviews(data);
      return;
    }
    renderNotFound();
  } catch (err) {
    console.log(err.message);
    renderNotFound();
  }
};

getReviews();
