// Document Ready
$(document).ready(function() {

  var warriors = "Klay Thomson"
  console.log(warriors);

  // Prevent Form Submission
  $('#bottom-cta').click(function() {
    event.preventDefault();
  });

  // Read More actions
  // 1-Slide hidden text down
  $('.readmore').click(function() {
    $('#show-this-on-click').slideDown();
    event.preventDefault();

    // 2-show "Read Less"
    $('.readless').show();

    // 3-hide "Read More"
    $('.readmore').hide();
  });

  // Read Less actions
  // 1-Slide now visible text up to hide
  $('.readless').click(function() {
    $('#show-this-on-click').slideUp();
    event.preventDefault();

  // 2-show "Read More"
    $('.readmore').show();

  // 3-hide "Read Less"
    $('.readless').hide();
  });

  // Learn More actions
  // 1-Slide hidden text down
  $('.learnmore').click(function() {
    $('#learnmoretext').slideDown();
    event.preventDefault();

  // 2-hide "Learn More"
    $('.learnmore').hide();
  });

});
