
$(document).ready(function(){

  let reportSlier;

  $('#visual .slider').bxSlider(
    {
      mode: 'fade',
      auto: true
    }
  );

  reportSlier = $('.report_right .slider').bxSlider(
    {
      mode: 'horizontal',
      slideWidth: 177,
      moveSlides: 1,
      maxSlides: 4,
      slideMargin: 20,
      auto: true,
      hideControlOnEnd: true
    }
  );

  // 초기 화면 리셋
  $(".report_right > div").hide();
  $(".report_right > #slider_1").show();



  // report tab 버튼 클릭
  $(".report_left > ul > li").click(function(){
    $(".report_left > ul > li").removeClass("on");
    $(this).addClass("on");

    $(".report_right > div").hide();

    let showSlideTarget = $(this).attr("rel");
    $("#"+showSlideTarget).show();
    reportSlier.reloadSlider();

  });

  $("#nav_btn > .nav_btn").click(function(){
    $(".nav_btn").toggle();
    $("nav").toggleClass("on");
  });


  // footer family site btn
  $(".family_site > span").click(function(){
    $(this).toggleClass("on");

    $(".family_site > ul").toggle();
  });


});






//
