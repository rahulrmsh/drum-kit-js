"use strict";

var firstBtn = document.querySelector('#first');
var secondBtn = document.querySelector('#second');
var thirdBtn = document.querySelector('#third');
var fourthBtn = document.querySelector('#fourth');
var fifthBtn = document.querySelector('#fifth');
var sixthBtn = document.querySelector('#sixth');

firstBtn.onclick = function () {
  music.pause();
  music = new Audio('sounds/Basic_Rock_Crash_135.mp3');
  music.play();
};