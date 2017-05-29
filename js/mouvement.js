var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    x2 = 0,
    y2 = 0,
    x3 = 0,
    y3= 0,
    x4 = 0,
    y4 = 0,
    friction = 1 / 20;
    friction2 = 1 / 70;
    friction3 = 1 / 50;
    friction4 = 1 / 90;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  x2 += (lFollowX - x2) * friction2;
  y2 += (lFollowY - y2) * friction2;
  x3 += (lFollowX - x2) * friction3;
  y3 += (lFollowY - y2) * friction3;
  x4 += (lFollowX - x2) * friction4;
  y4 += (lFollowY - y2) * friction4;

  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
  translate2 = 'translate(' + x2 + 'px, ' + y2 + 'px) scale(1.1)';
  translate3 = 'translate(' + x3 + 'px, ' + y3 + 'px) scale(1.1)';
  translate4 = 'translate(' + x4 + 'px, ' + y4 + 'px) scale(1.1)';

  $('.mouv1').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });
  $('.mouv2').css({
    '-webit-transform': translate2,
    '-moz-transform': translate2,
    'transform': translate2
  });
  $('.mouv3').css({
    '-webit-transform': translate3,
    '-moz-transform': translate3,
    'transform': translate3
  });
  $('.mouv4').css({
    '-webit-transform': translate4,
    '-moz-transform': translate4,
    'transform': translate4
  });



  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();
