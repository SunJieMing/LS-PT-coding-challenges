$(document).ready(() => {
  $(".flex-item").on({
    click: (event) => {
      $(event.target).toggleClass("blue")
    },
    mouseenter: (event) => {
      $(event.target).css('outline', '2px solid black')
    },
    focus: (event) => {
      $(event.target).css('outline', '2px solid black')
    },
    mouseleave: (event) => {
      $(event.target).css('outline', 'none')
    },
    blur: (event) => {
      $(event.target).css('outline', 'none')
    },
    keypress: (event) => {
      $(event.target).toggleClass("blue")
    },
  });
});
