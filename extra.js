// jshint esversion:6

// ------------ using .bind to pass parameter without calling the function yet, until hover triggers it.
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

// ------------ one way to animate stroke in circular progress bar (below is css code)

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


// ------------ JavaScript Template Literals: JSON to HTML
/*
using quotes creates a normal string 'Hello' --> $(".services_cards_div").html('Hello');

using back ticks `` (left to the one key) creates a template literal.
template literals allow us to:
  - create dynamic strings & include expressions in string, eg:
`two plus two equals ${2+2}` outputs --> two plus two equal 4.
  - drop down to new lines within string, eg:
`two plus two equals ${2+2}
<p>Hi there.</p>
<p>Hello again.</p>
`
*/

// ------------ DISPLAYING ARRAY OF JSON STRINGS DYNAMICALLY IN HTML
function serviceTemplate(service) {

  // this DIDN'T work - when trying to display pArray in HTML it wrote object HTML.ParagraphElement...
  let pArray = [];

  for (var details in service.details) {
    // creating HTML object in JS, using .createElement().
    // adding HTML content to this new HTML object, using .innerHtml().
    let pElement = document.createElement('p');
    pElement.innerHtml = `${details}`;
    console.log(details);

    pArray += pElement;
  }

  // this WORKED!!
  // assigning p to empty String to fix undefined issue.
  let p = "";

  service.details.forEach((detail) => {
    p += `<p>${detail}</p>`;
    console.log(p);

  });
}

// ------------ CSS BACKGROUND IMAGE
/*
.header_div img {
  max-width: 100%;
  min-height: 50vh;
  object-fit: cover;
} */


// ------------ using on load
$(window).on('load', function() {});


// ------------ EXECUTE ON FIRST LOAD ONLY
window.onload = function() {
  if (!('hasCodeRunBefore' in localStorage)) {
    // your code here.
    localStorage.setItem("hasCodeRunBefore", true);
  }
};


// ------------ RELOADING CSS FILE
function reloadCss()
{
    var links = document.getElementsByTagName("link");
    for (var cl in links)
    {
        var link = links[cl];
        if (link.rel === "stylesheet")
            link.href += "";
    }
}

/*
.htaccess is a configuration file for our server.
The server runs this file before loading the website.
Can use it to do things like:
  - create a rewrite of url name.
*/
