jQuery(document).ready(function () {
// =========================== to toggleClass of navbar-icon========================================
  jQuery(".navbar-toggle").on("click",function () {
    jQuery(this).toggleClass("active")
  });

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
          $(".navbar-default").addClass("active");
      }
      else {
          $(".navbar-default").removeClass("active");
      }
  });


});
