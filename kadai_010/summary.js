$(function(){
  $('#change-color').on('click', function(){
    $('#traget').css('color', 'red')
  });

  $('#change-text').on('click', function(){
    $('#traget').text('Hello!').css('color', 'red');
  });

  $('#fade-out').on('click', function(){
    $('#traget').fadeOut();
  });

  $('#fade-in').on('click', function(){
    $('#traget').fadeIn();
  });
});