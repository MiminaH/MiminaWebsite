// jshint esversion:6

// using .bind to pass parameter without calling the function yet, until hover triggers it.
$('.circular_skill_text').hover(animateProgressStroke.bind(this, 1), function() {
    // on mouseout, reset the background colour
    $('.skill_div svg circle:nth-child(2)').css('stroke-dashoffset', '');
  });

$('.circular_skill_text').hover(function() {
    $('.skill_div svg circle:nth-child(2)').css('stroke-dashoffset', '200');
  }, function() {
    // on mouseout, reset the background colour
    $('.skill_div svg circle:nth-child(2)').css('stroke-dashoffset', '');
  });

  //  CHANGE CSS USING JAVASCRIPT (one way)
  const square = document.getElementById('square1');
  square.style.opacity = '0';

  //  CHANGE CSS USING j QUERY (one way)
  $('#square1').css('opacity', '0');

// one way to animate stroke in circular progress bar (below is css code)

// .skill_div svg circle:nth-child(2) {
//   stroke: var(--main-theme);
//   stroke-dasharray: 440;
//   animation: progress 2s forwards;
// }
// stroke-dashoffset: calc(440 - (440 * 50) / 100);
// 440 is circumference of our circle (with r=70).
// 2 * π * 70 ≈ 439.822
// stroke-dasharray is the dash length.
// stroke-dashoffset is the length of spaces between dashes.
//
// @keyframes progress {
//     from {
//         stroke-dashoffset: 440;
//     }
//     to {
//         stroke-dashoffset: 44;
//     }
// }
