export function swiper() {
  new Swiper(".abilitySearch__swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",

      clickable: true,

    },

    awtoheight: false,
    slidesPerView: 5,
    slidesPerGroup: 10,
    slidesPerColumn: 1,
    loop: true,
    loopedSlides: 5,
  });
}
