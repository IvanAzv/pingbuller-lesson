$(document).ready(function(){
  $('.slider').bxSlider();
});
    

$(document).ready(function(){
  $('.slider_1').bxSlider({
    speed:400,
    infiniteLoop:true,
    auto:true,
    pager:false,
    controls: false,
   });
});
    

$(document).ready(function(){
  $('.slider_2').bxSlider({
    speed:100,
    infiniteLoop:true,
    auto:true,
    pager:false,
    controls: false,
    minSlides: 2,
    maxSlides:3,
  
      });
    });