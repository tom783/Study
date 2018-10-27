$(function(){
  // slide
  var slide_itemIndex = 0;
  slide();

  function slide(){
    var slide_item = $('.slide_item');

    // slide_item.each(function(){
    //   $(this).addClass('slide_item_active');
    //   $(this).removeClass('slide_item_active');
    // });

  //   console.log('test1');
  //   // slide position check
  //   if(slide_itemIndex > slide_item.length-1){
  //     slide_itemIndex = 0;
  //   }
  //   else if(slide_itemIndex < 0){
  //     slide_itemIndex = slide_item.length-1;
  //   }
  //
  //   slide_item_css(slide_item);
  //   slide_itemIndex++;
  //

    var i;
    for (i = 0; i < slide_item.length; i++) {
      slide_item[i].style.display = "none";
    }
    slide_itemIndex++;
    if (slide_itemIndex > slide_item.length) {slide_itemIndex = 1}
    slide_item[slide_itemIndex-1].style.display = "block";
    setTimeout(slide, 2000);
  }
  //
  // function slide_item_css(){
  //  $(this).addClass('slide_item_active');
  //   // console.log(item[slide_itemIndex]);
  // }

})
