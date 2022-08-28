$('.example-class').on('mouseenter',  () => {
});

$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').show();
  });
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
  })
});
