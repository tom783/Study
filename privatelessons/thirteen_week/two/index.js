$(document).ready(function(){

  function subNavDrop(){
    const hoverNav = $('nav > ul > li');

    hoverNav.mouseenter(function(){
      $(this).find('.subNav').stop().slideDown(100);
    });

    hoverNav.mouseleave(function(){
      $(this).find('.subNav').stop().slideUp(100);
    });
  }



  function init(){
    subNavDrop();
  }

  init();
});
