$(document).ready(() => {
  $(".header-text").hide().slideDown(600);


  $('.container2').hide();
  $('.container3').hide()
  $('.button').hide();

  $('.hint-text1').hide();
  $('.hint').on('click', (event) => {
    $(event.target).slideUp();
    $('.hint-text1').show();
  });

  $('.answer-list').on('click', (event) => {
    event.preventDefault();
    if($(event.target).is('.correct-answer')) {
      $('.frown').hide();
      $('.smile').show();
      $('.wrong-answer1').fadeOut(600);
      $('.wrong-answer2').fadeOut(600);
      $('.wrong-answer3').fadeOut(600);
      $('.button').show();
      $('.button1').show();
      $('.button2').show();
    }
    else {
      $(event.target).fadeOut(600);
      $('.frown').show();
    }
  });

  $('.hint-text2').hide();
  $('.hint').on('click', (event) => {
    $(event.target).slideUp();
    $('.hint-text2').show();
  });

  $('.hint-text3').hide();
  $('.hint').on('click', (event) => {
    $(event.target).slideUp();
    $('.hint-text3').show();
  });

  $('.button').on('click', () => {
    $('.wrong-answer1').show();
    $('.wrong-answer2').show();
    $('.wrong-answer3').show();
    $('.smile').hide();
    $('.button1').hide();
    $('.container1').hide();
    $('.container2').show(600);
  });



  $('.button1').on('click', () => {
    $('.wrong-answer1').show();
    $('.wrong-answer2').show();
    $('.wrong-answer3').show();
    $('.button2').hide();
    $('.smile').hide();
    $('.container2').hide()
    $('.container3').show(600);
  })
});


