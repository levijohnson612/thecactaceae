$( document ).ready(function() {

var $grid = $('.grid').masonry({
  // options...
  itemSelector: '.grid-item',
  // percentPosition: true,
  columnWidth: 10,
  isFitWidth: true
});
//layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});

});
