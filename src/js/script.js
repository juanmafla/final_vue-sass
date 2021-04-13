$(document).ready(function() {
  $('#menu-btn').click(function() {
    $('#menu').removeClass('hidden');
  });

  $('#close-btn').click(function() {
    $('#menu').addClass('hidden');
  });

  $('.menu-item').click(function() {
    $('#menu').addClass('hidden');
  });
});
