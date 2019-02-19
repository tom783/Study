$(document).ready(function(){

  $('nav').hover(
    ()=>{
      const sub_navDisplay = $('.sub_nav').css("display");

      if(sub_navDisplay === "block"){
        $('header').css("background", "white");
        $('.menu > li > a').css("color", "black");
      }
      else{
        $('header').removeAttr('style');
        $('.menu > li > a').removeAttr('style');
      }
    }
  );


  const visualSlider = $('.visual .slider').bxSlider({
    mode: 'fade',
    auto: true,
    pagerCustom: '#bx-pager',
    stopAutoOnClick: true,
    onSliderLoad: ()=>{
      $('.bg_01 .bg_cont_box').addClass('active');
    },
    onSlideAfter: ()=>{
      let currentSlide = visualSlider.getCurrentSlide()+1;

      $('.bg_0' + currentSlide + ' .bg_cont_box').addClass('active');
    },
    onSlideBefore: ()=>{
      let currentSlide = visualSlider.getCurrentSlide()+1;

      $('.bg_0' + currentSlide + ' .bg_cont_box').removeClass('active');

    }

  });





});
