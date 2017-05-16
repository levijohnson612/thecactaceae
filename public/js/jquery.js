$(document).ready(function(){

  $(".grid-item").mouseover(function(){
    $('.boxTitle', this).css({"color": "white", "opacity": '1'});
  });

  $('.grid-item', this).mouseout(function(){
    $('.boxTitle').css("opacity", "0.5");
  });
});


// $(document).ready(function(){
//     $('.twitter-underline-1').mouseover(function(){
//         $('.twitter-underline-1').css('border-bottom',' 1px solid #4099FF');
//         $('#twitter-1').css('color', '#4099FF');
//     });
//     $('.twitter-underline-1').mouseout(function(){
//         $('.twitter-underline-1').css('border-bottom','1px dotted #E0E0E0');
//         $('#twitter-1').css('color', '#E0E0E0');
//     });
// 	$('#twitter-1').mouseover(function(){
//         $('#twitter-1').css('color', '#4099FF');
//         $('.twitter-underline-1').css('border-bottom','1px solid #4099FF');
//     });
//     $('#twitter-1').mouseout(function(){
//         $('#twitter-1').css('color', '#E0E0E0');
//         $('.twitter-underline-1').css('border-bottom',' 1px solid #E0E0E0');
//     });
// });
