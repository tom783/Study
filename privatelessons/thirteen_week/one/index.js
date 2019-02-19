$(document).ready(function(){

  function navDropbar(){
    $('nav .navbar > li').mouseenter(function(){
      $('.subnav').stop().slideDown();
    });

    $('.subnav').mouseenter(function(){
      $('.subnav').stop().slideDown();
    });

    $('nav .navbar > li').mouseleave(function(){
      $('.subnav').stop().slideUp();
    });

    $('.subnav').mouseleave(function(){
      $('.subnav').stop().slideUp();
    });
  }

  function subnavHover(){

    $('.subnav .inner > dl').mouseenter(function(){
      let data_parent = $(this).attr('data-parent');

      $('nav .navbar > li').removeClass('active');
      $('nav .navbar .' + data_parent).addClass('active');
    });

    $('.subnav .inner > dl').mouseleave(function(){
      $('nav .navbar > li').removeClass('active');
    });


  }

  function init(){
    navDropbar();
    subnavHover();
  }

  init();

});
