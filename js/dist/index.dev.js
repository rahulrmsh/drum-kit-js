"use strict";

var firstBtn = document.querySelector('#first');
var secondBtn = document.querySelector('#second');
var thirdBtn = document.querySelector('#third');
var fourthBtn = document.querySelector('#fourth');
var fifthBtn = document.querySelector('#fifth');
var sixthBtn = document.querySelector('#sixth');

function playSound(url) {
  Audio(url).play();
}

firstBtn.onclick = playSound('sounds/Basic_Rock_Crash_135.mp3');

refreshBtn.onclick = function () {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  while (randomNumber1 === randomNumber2) {
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
  }

  if (randomNumber1 > randomNumber2) {
    header.textContent = 'Left Won';
  } else {
    header.textContent = 'Right Won';
  }

  document.querySelector('#left').setAttribute('src', 'images/dice' + randomNumber1 + '.png');
  document.querySelector('#right').setAttribute('src', 'images/dice' + randomNumber2 + '.png');
};

resetBtn.onclick = function () {
  home.setAttribute('class', 'nav-link active');
  header.textContent = 'Pick A Side';
  var randomNumber1 = 1;
  document.querySelector('#left').setAttribute('src', 'images/dice' + randomNumber1 + '.png');
  var randomNumber2 = 1;
  document.querySelector('#right').setAttribute('src', 'images/dice' + randomNumber2 + '.png');
};

resetBtn.onmouseover = function () {
  resetBtn.setAttribute('class', 'nav-link active');
  home.setAttribute('class', 'nav-link');
};

home.onmouseout = function () {
  resetBtn.setAttribute('class', 'nav-link ');
  home.setAttribute('class', 'nav-link active');
};