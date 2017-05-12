$(document).ready(() => {
  $(".flex-item").on({
    click: (event) => {
      $(event.target).toggleClass("blue")
    },
    mouseenter: (event) => {
      $(event.target).css('border', '5px solid black')
    },
    focus: (event) => {
      $(event.target).css('border', '5px solid black')
    },
    mouseleave: (event) => {
      $(event.target).css('border', 'none')
    },
    blur: (event) => {
      $(event.target).css('border', 'none')
    },
    keypress: (event) => {
      $(event.target).toggleClass("blue")
    },
  });
});
