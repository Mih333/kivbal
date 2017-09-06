$(window).load(function() {
  $(".loader-bg").delay(1000).fadeOut("slow");
});
// Carousel fadeIn
var $item = $('.carousel .item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});

wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  mobile: true,
  live: true
})
wow.init();

jQuery(document).ready(function($) {
  $('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate( {
      'scrollTop': $target.offset().top-170
    }, 900, 'swing', function () {
      window.location.hash = target;
    } );
  } );
} );

  $(document).ready(function(){
  $('.bxslider').bxSlider({
    controls: false,
    pager: false,
    mode: 'fade',
    auto: true
  });
});

var fixmeTop = $('.fixme').offset().top -60;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {
        $('.fixme').css({
            position: 'fixed',
            top: '63px',
            margin: '0 auto'
        });m
    } else {
        $('.fixme').css({
            position: 'static'
        });
    }
});

  $('a[rel]').click(function(event) {
    $(this).modal({
      fadeDuration: 300,
      closeExisting: false
    });
    return false;
  });

