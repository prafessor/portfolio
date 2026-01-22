import Accordion from "accordion-js";
import Swiper from 'swiper';
import { Navigation, Keyboard, A11y,  Mousewheel} from 'swiper/modules';
import 'swiper/css/scrollbar';

new Accordion(".about-accordion__container", {
  showMultiple: true,
  openOnInit: [0],
});

const swiper = new Swiper(".about-swiper", {
  modules: [Navigation, Keyboard, A11y,  Mousewheel],
  navigation: {
    nextEl: ".swiper-button-next",
  },
  loop: true,
  slidesPerView: 'auto',

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  A11y: {
    enabled: true,
  },
  mousewheel: {
    invert: false,
  },
});