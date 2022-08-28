$('.example-class').addClass('active');

$('.example-class').on('click', function() {
  $('.example-class').addClass('button-active');
});

$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });

  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').addClass('button-active')

    $('.menu-button').animate({
      fontSize: '24px'
    }, 200)
  })

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css({
      color: '#EFEFEF',
      backgroundColor: '#303030'
    })

    $('.menu-button').animate({
      fontSize: '18px'
    }, 200)
  })
});
