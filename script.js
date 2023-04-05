
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
  button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slides = button
       .closest("[data-carousel]")
       .querySelector("[data-slides]");

  const activeSlide = slides.querySelector("[data-active]")
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
  });
});

const filters = document.querySelectorAll('.carousel__filter');
const slides = document.querySelectorAll('.carousel__slide');

filters.forEach(filter => {
  filter.addEventListener('click', (e) => {
    const category = e.target.getAttribute('data-filter');
    slides.forEach(slide => {
      if (category === 'all') {
        slide.style.display = 'block';
      } else if (slide.getAttribute('data-filter') === category) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
    });
  });