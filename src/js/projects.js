import Swiper from 'swiper';
import { Navigation, A11y, Keyboard, Mousewheel } from 'swiper/modules';

const swiper = new Swiper('.projectSwiper', {
  modules: [Navigation, A11y, Keyboard, Mousewheel],
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
