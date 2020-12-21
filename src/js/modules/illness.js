export default () => {
  // $( ".illness-box__title" ).click(function() {
  // 	$(this).parent().toggleClass("active");
  // });


    if (window.matchMedia("(min-width: 1024px)").matches) {
      $(".illness-box__title").click(function () {
        $(".illness__box").removeClass("active");
        $(this).parent().addClass("active");
      });
    } else {
	
      $(".illness-box__title").click(function () {
        if ($(this).parent().hasClass("active")) {
          $(".illness__box").removeClass("active");
          $(this).parent().removeClass("active");
        } else {
          $(".illness__box").removeClass("active");
          $(this).parent().addClass("active");
        }
      });
    }
 
};
