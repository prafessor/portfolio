const res = document.querySelector('.covers__container');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-active');
      } else {
        entry.target.classList.remove('is-active');
      }
    });
  },
  {
    threshold: 0,
  }
);

observer.observe(res);
