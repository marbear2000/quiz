$(document).ready(() => {
  $(".header-text").hide().slideDown(600);

  $('.hint1').hide();

  $('.hint').on('click', () => {
    $('.hint1').slideToggle(600);
  });

  $('.wrong-answer1').on('click', () => {
    $('.wrong-answer1').fadeOut(600);
    $('.frown').show();
  });

  $('.wrong-answer2').on('click', () => {
    $('.wrong-answer2').fadeOut(600);
    $('.frown').show();
  });

  $('.wrong-answer3').on('click', () => {
    $('.wrong-answer3').fadeOut(600);
    $('.frown').show();
  });

  $('.correct-answer').on('click', () => {
    $('.frown').hide();
    $('.smile').show();
    $('.wrong-answer1').fadeOut(600);
    $('.wrong-answer2').fadeOut(600);
    $('.wrong-answer3').fadeOut(600);
  });
});


