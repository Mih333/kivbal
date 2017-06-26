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

