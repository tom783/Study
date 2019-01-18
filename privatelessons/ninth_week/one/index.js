$(document).ready(function(){

  $('.visual .slider').bxSlider({
    mode: 'horizontal',
    auto: true,
    autoControls: true,
    stopAutoOnClick: true
  });

  $('.product_list .slider').bxSlider({
    auto: true,
    slideWidth: 380,
    moveSlides: 1,
    maxSlides: 3,
    slideMargin: 30
  });

  $('.nav_btn').click(function(){
    $('.nav_cont').show();
  });

  $('.close_btn').click(function(){
    $('.nav_cont').hide();
  });


});
