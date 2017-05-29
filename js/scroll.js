$(".bdown").click(function(){
  $("body").animate({ scrollTop: window.pageYOffset + $(window).height()}, 1000);
  return false;
});
