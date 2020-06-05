$(document).ready(function() {
  $('.toggle').click(function() {
    $('.toggle').toggleClass('active')
  });
});

// var object1 = $('#object1');
// var object2 = $('#object2');
// var object3 = $('#object3');
//
// var about = $('#about');
//
// about.mousemove(function(e) {
//   const rect = e.getBoundingClientRect();
//   var valueX = window.scrollY + document.querySelector('#elementId').getBoundingClientRect().top
//   var valueY = rect.top + window.srollY;
//   console.log(valueX);
//   console.log(valueY);
//
//   object1.css({
//     'transform': 'translate3d(' + valueX + 'px,' + valueY + 'px,0)'
//   });
//
//
//
// });
