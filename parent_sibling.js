$('.choice').on('click', event => {
  $(event.currentTarget).parent().hide();
});

$('.choice').on('click', event => {
  $(this).siblings().removeClass('selected');
  $(event.currentTarget).addClass('selected');
});
