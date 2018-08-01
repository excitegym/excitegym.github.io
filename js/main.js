$(function() {
  $('#animateBtn').click(function() {
    animate('#cover', 'fadeOutLeft');
    setTimeout(function() {
      $('#cover').css('visibility', 'hidden');
    }, 950);

    setTimeout(function() {
    window.location = '/pages/pg2.html';
  },900);

  return false;
  });


  //custom animation
  function animate(element, animation){
    $(element).addClass('animated ' +animation);
    var wait = setTimeout(function() {
      $(element).removeClass('animated ' +animation);
    }, 1000);
  }
})



$(function() {
    $('#pg2btn').click(function() {
      animate('#offers1', 'fadeOutLeft');
      setTimeout(function() {
        $('.offers-1').css('visibility', 'hidden');
      }, 950);

      setTimeout(function() {
      window.location = '/pages/proshop.html';
    },900);

    return false;
    });

    //custom animation
    function animate(element, animation){
      $(element).addClass('animated ' +animation);
      var wait = setTimeout(function() {
        $(element).removeClass('animated ' +animation);
      }, 1000);
    }
  })
