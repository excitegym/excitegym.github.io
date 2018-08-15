//$("#up").click(function() {
//  $('.logomark').animate({bottom: '100px', left: '100px'}, "slow");
//});
//$("#down").click(function() {
//  $('.logomark').show(1000);
//});


//$('#up').click(function(){
  //$('.content').css('font-size', "1.25em")
//});

//$('#down').click(function(){
//  $('.content').css('font-size', "2em")
//});


//$('#next').click(function() {
//  $('#logo').animate({
//    opacity: 0,
//    display: "none"
//  }, 1000, function() {
//    //animation complete
//  });
//});


window.scroll({
  top: 2500,
  left: 0,
  behavior: 'smooth'
})

$('.pg1', '#inspirepg', '#page3').fadeIn(2000)

$('.inspire-banner').on('mouseover', function() {
  $(this).css('filter', 'brightness(80%)')
}).mouseleave(function() {
  $(this).css('filter', 'brightness(100%)')
});

$('.hider').fadeIn(2000)

$(window).scroll(function() {
var wScroll = $(this).scrollTop();

  $('.foreground-kid').css({
    'transform' : 'translate( 0px, '+ wScroll*0.1 +'%)'
  });

  $('.half-season-logo').css({
    'transform' : 'translate(0px, '+ ')'
  });

  $('.flying-kid').css({
    'transform' : 'translate( 0px, -'+ wScroll*0.1 +'%)'
  });

  $('.concentric-circles').css({
    'transform' : 'translate( 0px, '+ wScroll*0.2 +'%)'
  });

  $('.inspire-picture').css({
    'transform' : 'translate( 0px, -'+ wScroll*0.2 +'%)'
  });

  $('.dayplay-logo').css({
    'transform' : 'translate( '+ wScroll*0.1 +'%, -'+ wScroll*0.1 +'%)rotate('+wScroll*0.3+'deg)'
    });

    $('.pno-logo').css({
      'transform' : 'translate( -'+ wScroll*0.1 +'%, '+ wScroll*0.1 +'%)rotate(-'+wScroll*0.3+'deg)'
      });

    $('.campdays-logo').css({
      'transform' : 'translate( -'+ wScroll*0.1 +'%, -'+ wScroll*0.1 +'%)rotate(-'+wScroll*0.3+'deg)'
      });

  //$('.inspire-logo').css({
    //'transform' : 'translate( '+ wScroll*0.2 +'%, -'+ wScroll*0.3 +'%)rotate('+wScroll*0.3+'deg)'
    //'transform' : 'rotate({angle: ' + wScroll*4 + 'deg})'
  //});

  $('.inspire-logo').css({ 'opacity': ''+1-wScroll*0.002+'' });

  if(wScroll > $('.content').offset().top - ($(window).height() / 1.3)) {

    $('.content').each(function(i) {

      setTimeout(function() {
        $('.content').eq(i).addClass('showing');
      }, 150 * (i+1));
    });
  }

});






var $dayplay = $('.dayplay-logo1');
var $pno = $('.pno-logo1');
var $campdays = $('.campdays-logo1');

$dayplay.mouseover(function() {
  $dayplay.addClass('animated bounce')
}).mouseleave(function() {
  $dayplay.removeClass('animated bounce')
});

var $dayplay = $('.dayplay-logo1');


$pno.mouseover(function() {
  $pno.addClass('animated bounce')
}).mouseleave(function() {
  $pno.removeClass('animated bounce')
});

$campdays.mouseover(function() {
  $campdays.addClass('animated bounce')
}).mouseleave(function() {
  $campdays.removeClass('animated bounce')
});

//$('.pg2button').click(function () {
  //$('#enter, #page2, #inspirepg, #page3').fadeOut(1000)
//});

$(function() {
    $('.pg1button').click(function() {
      $('#enter').fadeOut(1000);

      setTimeout(function() {
      window.location = '/pages/inspire.html';
    },900);
  });
});

$(function() {
    $('.pg2button').click(function() {
      $('#inspirepg').fadeOut(1000);

      setTimeout(function() {
      window.location = '/pages/parallax.html';
    },900);
  });
});

$(function() {
    $('.pg3button').click(function() {
      $('#page2').fadeOut(1000);

      setTimeout(function() {
      window.location = '/pages/preschool.html';
    },900);
  });
});
