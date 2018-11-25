$(function(){

  $(".header_menu_icon_1").click(dropDown);
  $(document).ready(chatBubble_dispaly);


  // function
  function dropDown(){

    $(".nav_navbar").slideToggle();

  }

  function chatBubble_dispaly(){
    var i = 0;
    var chat = $(".ariticle_Self_content_body > div");

    var _Interval = setInterval(function(){
      chat.eq(i).addClass("BubbleActive");
      i++;

      if(i > chat.length -1){
        clearInterval(_Interval);
      }

    }, 2500);
  }

  
});
