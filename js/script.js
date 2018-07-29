console.log("Hello! Welcome to my portfolio site.")

$(document).ready(function() {
  $(".project").on("mouseenter", function() {
    $(this).find(".project-details").fadeIn();
  });
  $(".project").on("mouseleave", function() {
    $(this).find(".project-details").fadeOut();
  });

  //  $(".project-preview").on("click", function() {
  //    $(this).siblings(".project-details").slideToggle();
});
