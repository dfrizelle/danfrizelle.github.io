/* TO DO:
    - [complete] sticky top menu bar (with logo) - done via bootstrap
    - [complete] smooth scrolling to the sections after clicking on the menu link - done via jquery
*/

$(document).ready(function () {
  /* var navHeight = document.getElementById("mainNav-header").offsetHeight;
  console.log(navHeight); */

  //change mobile burger menu to cross on click
  $('.navbar-toggle').click(function () {
    $('.fa-bars').toggleClass('fa-times');
  });

  $("#mainNav a, #section1 a").on('click', function (event) {
    if (this.hash !== "") {
      // Prevents default anchor click behavior
      event.preventDefault();
      var hash = this.hash;
      /* var navHeight = $('#mainNav-header').height();
      console.log(navHeight); */
      $('html, body').animate({
        scrollTop: $(hash).offset().top //- navHeight
      }, 800, function () {
        // Add hash (#) to URL when done scrolling
        window.location.hash = hash;
      });
    }
  });
});