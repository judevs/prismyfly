$(document).ready(function () {
  const $slider = $('.slider-container');

  const slickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const initSlider = () => {
    if ($(window).width() < 768) {
      if (!$slider.hasClass('slick-initialized')) {
        $slider.slick(slickSettings);
      }
    } else {
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
    }
  };

  initSlider();
  $(window).on('resize', initSlider);
});