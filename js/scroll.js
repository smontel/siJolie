$("#butt").click(function(){
  if($('#butt').hasClass("bdown")){
    $("body").animate({ scrollTop: window.pageYOffset + $(window).height()}, 1000);
    return false;
  }
  else if ($('#butt').hasClass("bup")) {
    console.log('ca devrait monter');
    $("body").animate({ scrollTop: 0}, 1000);
    return false;
  }
});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $('#butt').removeClass('bdown');
       $("#butt").addClass('bup');

       return false;
   }
   else{
     $('#butt').removeClass('bup');
     $("#butt").addClass('bdown');

     return false;
   }
});
