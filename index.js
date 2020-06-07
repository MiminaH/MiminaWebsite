// jshint esversion:6

// TECHNOLOGY: SKILLS SECTION -------------------------------------
$(".skill_button1").click(function() {
  $(".skill_text_p").text(skillsText.skill1);
  $(".skill_button1").addClass("selected_card");

  $(".skill_button2").removeClass("selected_card");
  $(".skill_button3").removeClass("selected_card");
});

$(".skill_button2").click(function() {
  $(".skill_text_p").text(skillsText.skill2);
  $(".skill_button2").addClass("selected_card");

  $(".skill_button1").removeClass("selected_card");
  $(".skill_button3").removeClass("selected_card");
});

$(".skill_button3").click(function() {
  $(".skill_text_p").text(skillsText.skill3);
  $(".skill_button3").addClass("selected_card");

  $(".skill_button1").removeClass("selected_card");
  $(".skill_button2").removeClass("selected_card");
});

// TECHNOLOGY: TECHNOLOGIES SECTION -----------------------------
// how many .skill_div are inside .technology_skills_div
const childrenCount = $(".technology_skills_div .skill_div").length;

const circle = document.querySelector('.animate_Stroke');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

let animateDashoffset = function(childIndex, percent) {
  $('.skill_div:nth-child(' + childIndex + ') .animate_Stroke').css('stroke-dashoffset', percent);
};

// setDasharray in JS (not css) so value changes dynamically based on radius size.
// Dasharray needs to be equal to circle circumference.
$('.animate_Stroke').css('stroke-dasharray', circumference);

// i=1 because :nth-child() starts counting with 1.
for (i = 1; i <= childrenCount; ++i) {
  let percentage = parseInt($('.skill_div:nth-child(' + i + ') .skill_percentage').text());
  let dashoffsetPercentage = 377 - ((377*percentage)/100);
  setTimeout(animateDashoffset, i*50, i, dashoffsetPercentage);
  // animateProgressStroke(i);
}

// JSON TEXT OBJECTS --------------------------------------------
var skillsText = {
  skill1: "Skill 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  skill2: "Skill 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  skill3: "Skill 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
};
