$('.example-class').css('color', '#FFFFFF');

$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });

  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').css('color', '#C3FF00')
  })

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css('color', '#EFEFEF')
  })
});


$('.example-class').css({
  color: '#FFFFFF',
  backgroundColor: '#000000',
  fontSize: '20px'
});

$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });

  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').css({
     color: '#C3FF00',
     backgroundColor: '#535353'
    })
  })

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css({
      color: '#EFEFEF',
      backgroundColor: '#303030'
    })
  })
});
