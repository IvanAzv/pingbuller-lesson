$(document).ready(function(){
  $('.slider').bxSlider();

  $('.slider_carousel').bxSlider({
    speed:400,
    infiniteLoop:true,
    auto:true,
    pager:false,
    controls: false,
  });
  
  $('.slider_2').bxSlider({
    speed:500,
    infiniteLoop:true,
    auto:true,
    pager:false,
    controls: false,
    minSlides: 5,
    maxSlides: 5,
    moveSlides: 4,
  
      });
});
    
