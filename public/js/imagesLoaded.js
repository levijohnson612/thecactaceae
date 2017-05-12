// with jQuery

$(window).on('load', function(){
    
var $container = $('#container');

// initialize Masonry after all images have loaded  
$container.imagesLoaded( function() {
     $container.masonry();
});

$('.grid').masonry({
  gutter: 3,
  columnWidth: 10,
  itemSelector: '.grid-item'
});

$('#container').imagesLoaded()
  .always( function( instance ) {
    console.log('all images loaded');
  })
  .done( function( instance ) {
    console.log('all images successfully loaded');
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  });
});

$('#container').masonry({
// other masonry options
isFitWidth: true

});