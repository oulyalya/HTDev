(function () {
  'use strict';
  const swiperProjects = new window.Swiper('.about__projects-slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerGroup: 1,
    slidesPerView: 1,
    effect: 'slide',
    autoHeight: true,

    navigation: {
      nextEl: '.swiper-button-next',
    },

    pagination: {
      el: '.about__projects-slider-pagination ul',
      renderBullet: function (index, bulletClass) {
        return `<li class="${bulletClass}"><div></div></li>`;
      },
      bulletClass: 'pagination__item',
      bulletActiveClass: 'pagination__item--current',
      clickable: true,
    },

    lazy: {
      loadPrevNext: true,
    },

    breakpoints: {
      0: {
        initialSlide: 8,
      },
      1020: {
        initialSlide: 0,
      }
    }
  });

  const swiperPrinciples = new window.Swiper('.principles__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerGroup: 1,
    slidesPerView: 1,
    effect: 'slide',
    autoHeight: true,

    navigation: {
      nextEl: '.swiper-button-next',
    },

    pagination: {
      el: '.principles__slider-pagination ul',
      renderBullet: function (index, bulletClass) {
        return `<li class="${bulletClass}"><div></div></li>`;
      },
      bulletClass: 'pagination__item',
      bulletActiveClass: 'pagination__item--current',
      clickable: true,
    },

    lazy: {
      loadPrevNext: true,
    },

    breakpoints: {
      0: {
        initialSlide: 0,
      },
      1020: {
        initialSlide: 1,
      }
    }
  });


  const swiperOffers = new window.Swiper('.offers__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerGroup: 1,
    slidesPerView: 1,
    effect: 'slide',
    autoHeight: true,

    navigation: {
      nextEl: '.swiper-button-next',
    },

    pagination: {
      el: '.offers__slider-pagination ul',
      renderBullet: function (index, bulletClass) {
        return `<li class="${bulletClass}"><div></div></li>`;
      },
      bulletClass: 'pagination__item',
      bulletActiveClass: 'pagination__item--current',
      clickable: true,
    },

    lazy: {
      loadPrevNext: true,
    },

    breakpoints: {
      0: {
        initialSlide: 8,
      },
      1020: {
        initialSlide: 10,
      }
    }
  });

  swiperOffers.init();
  swiperPrinciples.init();
  swiperProjects.init();
})();
