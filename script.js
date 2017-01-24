$(document).ready(() => {

console.log('js linked');

//attribution for modals - http://www.w3schools.com/howto/howto_css_modals.asp
//modal 1

let modal1 = $('.modal1');
let link1 = $('.modal-link1');
let span1 = $('.close1');

let display1 = function() {
  console.log('clicked');
  modal2.css("display", "none");
  modal3.css("display", "none");
  modal1.css("display", "block");
  modal1.css("-webkit-animation", "fade-in 1s");
  modal1.css("animation", "fade-in 1s");
  $("body").removeClass('modal-closed');
  $("body").addClass('modal-open');
  // stopPulse();
  console.log(modal1);
}

let hide1 = function() {
  console.log("hide");
  modal1.css("display", "none");
  $("body").removeClass('modal-open');
  $("body").addClass('modal-closed');
}

// let windowClick1 = function(e) {
//   if (e.target == modal1) {
//     modal1.css("display", "none");
//   }
// }

//modal 2

let modal2 = $('.modal2');
let link2 = $('.modal-link2');
let span2 = $('.close2');
let infoButton = $('.info-button');

let display2 = function() {
  console.log('clicked');
  modal1.css("display", "none");
  modal3.css("display", "none");
  modal2.css("display", "block");
  modal2.css("-webkit-animation", "fade-in 1s");
  modal2.css("animation", "fade-in 1s");
  // stopPulse();
  $("body").removeClass('modal-closed');
  $("body").addClass('modal-open');
  console.log(modal2);
}

let hide2 = function() {
  console.log("hide");
  modal2.css("display", "none");
  $("body").removeClass('modal-open');
  $("body").addClass('modal-closed');
}

// modal 3

let modal3 = $('.modal3');
let link3 = $('.modal-link3');
let span3 = $('.close3');

let display3 = function() {
  console.log('clicked');
  modal1.css("display", "none");
  modal2.css("display", "none");
  modal3.css("display", "block");
  modal3.css("-webkit-animation", "fade-in 1s");
  modal3.css("animation", "fade-in 1s");
  // stopPulse();
  $("body").removeClass('modal-closed');
  $("body").addClass('modal-open');
  console.log(modal3);
}

let hide3 = function() {
  console.log("hide");
  modal3.css("display", "none");
  $("body").removeClass('modal-open');
  $("body").addClass('modal-closed');
}

// let stopPulse = function() {
//   infoButton.css("animation-iteration-count", "0");
// }

link1.click(display1);
span1.click(hide1);
link2.click(display2);
span2.click(hide2);
link3.click(display3);
span3.click(hide3);
















});
