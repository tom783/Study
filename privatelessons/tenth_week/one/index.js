$(document).ready(function(){

  $('#visual .slider').bxSlider({
    mode: 'fade',
    pagerCustom: '#bx-pager'
  });


  $('.business .slider').bxSlider({
    slideMargin: 30,
    maxSlides: 2,
    moveSlides: 1,
    slideWidth: 585,
    captions: true
  });

// lang버튼 토글
  $('#lang').click(function(){
    $('#lang').toggleClass('on');
  });


// nav의 li별 sub_nav display 변경기능
  $('.nav_top > li').hover(function(){
    let getHoverList = $(this).attr('id');
    let getHoverTitle = $(this).children('a').text();


    // sub_nav의 변경
    $('.nav_bottomNav > ul').removeClass('on');
    $('.nav_bottomNav > ul[rel="' + getHoverList + '"]').addClass('on');

    //sub_nav의 title변경
    $('#nav_bottomTitle').text(getHoverTitle);
  });


  $('.nav_box').hover(
    function(){
      $('header').addClass('on');
      $('header .logo img').attr('src', 'http://lotos.gamgakdesign.com/images/main/logo_black.png');
      $('.header_gnb .header_btn').css({'color':'black', 'border':'1px solid #ddd'});
    },
    function(){
      $('header').removeClass('on');
      $('header .logo img').attr('src', 'http://lotos.gamgakdesign.com/images/main/logo.png');
      $('.header_gnb .header_btn').css({'color':'white', 'border':'1px solid white'});
    }

  );

  $('.mobile_nav_menu > li').click(function(){

    if($(this).hasClass('on')){
      $(this).removeClass('on');
    }
    else{
      $('.mobile_nav_menu > li').removeClass('on');
      $(this).addClass('on');
    }

  });

  $('header span.header_btn').click(function(){
    $('nav').toggleClass('on');
  });


});
