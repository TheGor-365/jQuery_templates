const $heading = $('.heading');
$heading.on('click', () => {
  $(event.currentTarget).next().toggle();
});
